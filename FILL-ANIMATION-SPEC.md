# Inlay — Fill Animation Spec

This document describes exactly how the "type → fill" animation works on the landing page so the same feel can be replicated in the iOS app.

---

## Core Concept

The user types a note using **natural language with blanks**. Blanks are marked with `/` (single slash). When the user types `//` (double slash), all the blanks in the current paragraph are **instantly filled** by AI with contextually correct values. The text reflows naturally as each blank resolves.

---

## Syntax

| Token | Meaning |
|-------|---------|
| `/` | A single blank placeholder. Represents a fact the user wants AI to fill in. Rendered in a distinct color while unfilled. |
| `//` | The fill trigger. When the user finishes typing `//`, all blanks in the paragraph (including the `//` itself) are resolved sequentially by AI. |

### Example

**What the user types:**
```
Tesla closed at / on /, up / from the day before. Market cap is now /, making it the //
```

**What it becomes after fill:**
```
Tesla closed at $248.71 on Feb 20, 2025, up 3.2% from the day before. Market cap is now $796B, making it the most valuable automaker.
```

A period (`.`) is appended after the final `//` blank once filled.

---

## Animation Phases (per paragraph)

The note is written in **two paragraphs**, each with its own fill cycle. The phases are:

### Phase 1: Typing Paragraph 1 (`typing-p1`)
- Characters appear one at a time, left to right.
- Speed: **~25ms per character** with slight random jitter (+0–25ms) to feel human.
- A blinking cursor `|` follows the last typed character.
- `/` and `//` tokens are rendered in a **distinct color** (e.g., blue at 70% opacity) so the user can see them as blank markers.
- Regular text is rendered in the default text color.

### Phase 2: Fill Paragraph 1 + Type Paragraph 2 (simultaneous)
When paragraph 1 finishes typing (the last character of `//` is typed):
- **Immediately** (no delay), two things happen at once:
  1. **P1 blanks start filling** — see "Fill Animation" below.
  2. **P2 starts typing** — charIndex resets, cursor moves to paragraph 2.
- The cursor disappears from paragraph 1.
- Paragraph 2 appears below paragraph 1 with a small gap.

### Phase 3: Fill Paragraph 2 (`filled-p2`)
When paragraph 2 finishes typing:
- After a **300ms delay**, paragraph 2 blanks start filling.
- The cursor disappears.

### Phase 4: Hold + Transition (`done`)
- After all p2 blanks are filled, hold for **2 seconds**.
- Then crossfade to the next example (0.35s, easeInOut).

---

## Fill Animation (the important part)

This is the signature animation. Each blank is filled **one at a time, sequentially** — not all at once.

### Sequencing
- Blanks are filled in reading order (left to right, top to bottom within the paragraph).
- **Stagger: 200ms** between each blank starting its animation.
- While one blank is mid-animation, the next one hasn't started yet.

### Per-Blank Animation
When a blank's turn arrives:
1. The **`/` or `//` text is removed** from the DOM.
2. The **completed text fades in** in its place.
3. The fade uses:
   - **Opacity:** 0 → 1
   - **Blur:** 6px → 0px (gaussian blur that sharpens as it appears)
   - **Duration:** 400ms
   - **Easing:** cubic-bezier(0.25, 0.1, 0.25, 1) — gentle acceleration, smooth deceleration
4. The completed text is styled slightly **bolder/darker** than the surrounding text to subtly indicate it was AI-generated (e.g., `font-medium`, `opacity: 0.9`).

### Text Reflow
**Critical:** The completed text is NOT pre-rendered invisibly. The blank (`/`) takes up much less horizontal space than the completed text (e.g., `/` → `$248.71`). When the completed text replaces the blank:
- The surrounding text **pushes outward naturally** to accommodate the longer string.
- Lines may re-wrap as the paragraph gets longer.
- This reflow is **part of the feel** — it looks like the AI is inserting real content into the note in real time.

Blanks that haven't been filled yet still show their `/` or `//` markers in the distinct color. They only get replaced when their turn in the sequence arrives.

---

## Timing Summary

| Parameter | Value |
|-----------|-------|
| Typing speed | 25ms + random(0–25ms) per character |
| Delay before p1 fill starts | 0ms (immediate when typing finishes) |
| Delay before p2 fill starts | 300ms after p2 finishes typing |
| Stagger between blanks | 200ms |
| Per-blank fade duration | 400ms |
| Per-blank blur start | 6px |
| Per-blank easing | cubic-bezier(0.25, 0.1, 0.25, 1) |
| Hold after all fills complete | 2000ms |
| Crossfade between examples | 350ms, easeInOut |

---

## Visual Styling

| Element | Style |
|---------|-------|
| Unfilled blanks (`/`, `//`) | Blue, ~70% opacity (e.g., `text-blue-400/70`) |
| Filled text | Near-black, medium weight (e.g., `text-black/90 font-medium`) |
| Regular typed text | Default text color, ~80% opacity |
| Cursor | `|` character, 30% opacity black, blinks on/off |
| Container | White/translucent background, subtle border, rounded corners, backdrop blur |

---

## State Machine (for implementation reference)

```
typing-p1 ──(last char typed)──→ typing-p2 (p1 fill starts simultaneously)
typing-p2 ──(last char typed)──→ filled-p2 (p2 fill starts after 300ms delay)
filled-p2 ──(all fills done + 2s hold)──→ done
done ──(200ms)──→ typing-p1 (next example, everything resets)
```

State variables needed:
- `phase`: which phase we're in
- `charIndex`: current character position during typing
- `p1FillProgress`: index of the next blank to fill in paragraph 1 (-1 = not started)
- `p2FillProgress`: index of the next blank to fill in paragraph 2 (-1 = not started)

---

## Key Principles

1. **Sequential, not simultaneous.** Blanks fill one after another. Never all at once.
2. **Natural reflow.** Text pushes and re-wraps as blanks are replaced with longer completed strings. Don't pre-allocate space.
3. **Blur-to-sharp.** Each filled value fades in from blurry to crisp — this is the signature look.
4. **Overlap p1 fill with p2 typing.** The moment p1 finishes typing, its blanks start filling while p2 starts typing. This creates a feeling of momentum.
5. **Human-like typing.** Random jitter on typing speed. Not mechanical.
6. **Quiet confidence.** No flashy colors, no bouncing, no scale effects. Just blur → sharp, one blank at a time. The animation should feel like the AI is calmly, quickly filling in what it knows.
