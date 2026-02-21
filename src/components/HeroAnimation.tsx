import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Part {
  type: "text" | "blank";
  value: string;
  completed?: string;
}

interface Paragraph {
  parts: Part[];
}

interface Example {
  paragraphs: Paragraph[];
}

// Each example has 2 paragraphs. Each paragraph ends with //.
// Type paragraph 1 → // fills p1 blanks → type paragraph 2 → // fills p2 blanks
const EXAMPLES: Example[] = [
  {
    paragraphs: [
      {
        parts: [
          { type: "text", value: "Tesla closed at " },
          { type: "blank", value: "/", completed: "$248.71" },
          { type: "text", value: " on " },
          { type: "blank", value: "/", completed: "Feb 20, 2025" },
          { type: "text", value: ", up " },
          { type: "blank", value: "/", completed: "3.2%" },
          { type: "text", value: " from the day before. Market cap is now " },
          { type: "blank", value: "/", completed: "$796B" },
          { type: "text", value: ", making it the " },
          { type: "blank", value: "//", completed: "most valuable automaker" },
          { type: "text", value: "." },
        ],
      },
      {
        parts: [
          { type: "text", value: "Analysts expect " },
          { type: "blank", value: "/", completed: "Q1 deliveries" },
          { type: "text", value: " to reach " },
          { type: "blank", value: "/", completed: "450K units" },
          { type: "text", value: ", driven by the updated " },
          { type: "blank", value: "/", completed: "Model Y" },
          { type: "text", value: " and new " },
          { type: "blank", value: "/", completed: "FSD v13" },
          { type: "text", value: " rollout in " },
          { type: "blank", value: "//", completed: "March" },
          { type: "text", value: "." },
        ],
      },
    ],
  },
  {
    paragraphs: [
      {
        parts: [
          { type: "text", value: "The " },
          { type: "blank", value: "/", completed: "Eagles" },
          { type: "text", value: " won Super Bowl " },
          { type: "blank", value: "/", completed: "LIX" },
          { type: "text", value: " on " },
          { type: "blank", value: "/", completed: "Feb 9" },
          { type: "text", value: ", beating the " },
          { type: "blank", value: "/", completed: "Chiefs" },
          { type: "text", value: " " },
          { type: "blank", value: "/", completed: "40–22" },
          { type: "text", value: " at the Superdome in " },
          { type: "blank", value: "//", completed: "New Orleans" },
          { type: "text", value: "." },
        ],
      },
      {
        parts: [
          { type: "text", value: "It was Philadelphia's " },
          { type: "blank", value: "/", completed: "2nd" },
          { type: "text", value: " championship in " },
          { type: "blank", value: "/", completed: "7 years" },
          { type: "text", value: ". Hurts threw for " },
          { type: "blank", value: "/", completed: "2 TDs" },
          { type: "text", value: ", ran for another, and finished with a " },
          { type: "blank", value: "/", completed: "126.4" },
          { type: "text", value: " passer rating in the " },
          { type: "blank", value: "//", completed: "win" },
          { type: "text", value: "." },
        ],
      },
    ],
  },
  {
    paragraphs: [
      {
        parts: [
          { type: "text", value: "SpaceX's Starship " },
          { type: "blank", value: "/", completed: "flight 7" },
          { type: "text", value: " launched " },
          { type: "blank", value: "/", completed: "Jan 16" },
          { type: "text", value: " from " },
          { type: "blank", value: "/", completed: "Boca Chica" },
          { type: "text", value: ". The booster was caught by " },
          { type: "blank", value: "/", completed: "mechazilla" },
          { type: "text", value: " at " },
          { type: "blank", value: "//", completed: "T+7:04" },
          { type: "text", value: "." },
        ],
      },
      {
        parts: [
          { type: "text", value: "Upper stage reached " },
          { type: "blank", value: "/", completed: "orbital velocity" },
          { type: "text", value: " before re-entry and splashdown in the " },
          { type: "blank", value: "/", completed: "Indian Ocean" },
          { type: "text", value: ". Next flight targets " },
          { type: "blank", value: "/", completed: "payload deployment" },
          { type: "text", value: " in " },
          { type: "blank", value: "//", completed: "Q2" },
          { type: "text", value: "." },
        ],
      },
    ],
  },
  {
    paragraphs: [
      {
        parts: [
          { type: "text", value: "Apple released the " },
          { type: "blank", value: "/", completed: "M4" },
          { type: "text", value: " MacBook Pro starting at " },
          { type: "blank", value: "/", completed: "$1,599" },
          { type: "text", value: " with " },
          { type: "blank", value: "/", completed: "24GB" },
          { type: "text", value: " unified memory and a " },
          { type: "blank", value: "/", completed: "10-core" },
          { type: "text", value: " CPU. Battery lasts up to " },
          { type: "blank", value: "//", completed: "24 hours" },
          { type: "text", value: "." },
        ],
      },
      {
        parts: [
          { type: "text", value: "It ships with a " },
          { type: "blank", value: "/", completed: "Liquid Retina XDR" },
          { type: "text", value: " display, optional " },
          { type: "blank", value: "/", completed: "nano-texture" },
          { type: "text", value: " glass, and Thunderbolt " },
          { type: "blank", value: "/", completed: "5" },
          { type: "text", value: " ports at " },
          { type: "blank", value: "//", completed: "120 Gb/s" },
          { type: "text", value: "." },
        ],
      },
    ],
  },
  {
    paragraphs: [
      {
        parts: [
          { type: "text", value: "Taylor Swift's " },
          { type: "blank", value: "/", completed: "Eras Tour" },
          { type: "text", value: " grossed over " },
          { type: "blank", value: "/", completed: "$2.2B" },
          { type: "text", value: " across " },
          { type: "blank", value: "/", completed: "149 shows" },
          { type: "text", value: " spanning " },
          { type: "blank", value: "/", completed: "5 continents" },
          { type: "text", value: ", becoming the highest-grossing tour " },
          { type: "blank", value: "//", completed: "ever" },
          { type: "text", value: "." },
        ],
      },
      {
        parts: [
          { type: "text", value: "It wrapped " },
          { type: "blank", value: "/", completed: "Dec 8, 2024" },
          { type: "text", value: " in " },
          { type: "blank", value: "/", completed: "Vancouver" },
          { type: "text", value: ". The concert film debuted on " },
          { type: "blank", value: "/", completed: "Disney+" },
          { type: "text", value: " and drew " },
          { type: "blank", value: "/", completed: "28M" },
          { type: "text", value: " streams " },
          { type: "blank", value: "//", completed: "week one" },
          { type: "text", value: "." },
        ],
      },
    ],
  },
];

function getParagraphText(paragraph: Paragraph): string {
  return paragraph.parts.map((p) => p.value).join("");
}

const TIMING = {
  typing: 25,
  fillDelay: 300,
  blankStagger: 0.2,
  blankDuration: 0.4,
  doneHold: 2000,
};

// Phases: type p1 → fill p1 + type p2 simultaneously → fill p2 → done
type Phase = "typing-p1" | "typing-p2" | "filled-p2" | "done";

export function HeroAnimation() {
  const [exampleIndex, setExampleIndex] = useState(0);
  const [phase, setPhase] = useState<Phase>("typing-p1");
  const [charIndex, setCharIndex] = useState(0);
  const [p1FillProgress, setP1FillProgress] = useState(-1);
  const [p2FillProgress, setP2FillProgress] = useState(-1);

  const example = EXAMPLES[exampleIndex];
  const currentParagraph = phase === "typing-p1" ? example.paragraphs[0] : example.paragraphs[1];
  const currentText = getParagraphText(currentParagraph);

  const nextExample = useCallback(() => {
    setExampleIndex((i) => (i + 1) % EXAMPLES.length);
    setPhase("typing-p1");
    setCharIndex(0);
    setP1FillProgress(-1);
    setP2FillProgress(-1);
  }, []);

  // Typing
  useEffect(() => {
    if (phase !== "typing-p1" && phase !== "typing-p2") return;
    if (charIndex < currentText.length) {
      const timer = setTimeout(
        () => setCharIndex((c) => c + 1),
        TIMING.typing + Math.random() * 25
      );
      return () => clearTimeout(timer);
    } else {
      if (phase === "typing-p1") {
        // Start filling p1 and typing p2 at the same time
        const timer = setTimeout(() => {
          setP1FillProgress(0);
          setCharIndex(0);
          setPhase("typing-p2");
        }, 0);
        return () => clearTimeout(timer);
      } else {
        // Start filling p2
        const timer = setTimeout(() => {
          setP2FillProgress(0);
          setPhase("filled-p2");
        }, TIMING.fillDelay);
        return () => clearTimeout(timer);
      }
    }
  }, [phase, charIndex, currentText.length]);

  // Sequentially reveal p1 blanks
  useEffect(() => {
    const blankCount = example.paragraphs[0].parts.filter((p) => p.type === "blank").length;
    if (p1FillProgress < 0 || p1FillProgress >= blankCount) return;
    const timer = setTimeout(
      () => setP1FillProgress((p) => p + 1),
      TIMING.blankStagger * 1000
    );
    return () => clearTimeout(timer);
  }, [p1FillProgress, example]);

  // Sequentially reveal p2 blanks
  useEffect(() => {
    const blankCount = example.paragraphs[1].parts.filter((p) => p.type === "blank").length;
    if (p2FillProgress < 0 || p2FillProgress >= blankCount) return;
    const timer = setTimeout(
      () => setP2FillProgress((p) => p + 1),
      TIMING.blankStagger * 1000
    );
    return () => clearTimeout(timer);
  }, [p2FillProgress, example]);

  // After filling p2 → hold (wait for fill animation to finish)
  useEffect(() => {
    if (phase !== "filled-p2") return;
    const blankCount = example.paragraphs[1].parts.filter((p) => p.type === "blank").length;
    const fillDuration = blankCount * TIMING.blankStagger * 1000 + TIMING.blankDuration * 1000;
    const timer = setTimeout(() => setPhase("done"), fillDuration + TIMING.doneHold);
    return () => clearTimeout(timer);
  }, [phase, example]);

  // Done → next
  useEffect(() => {
    if (phase !== "done") return;
    const timer = setTimeout(nextExample, 200);
    return () => clearTimeout(timer);
  }, [phase, nextExample]);

  const renderTyping = (paragraph: Paragraph) => {
    let pos = 0;
    const elements: React.ReactNode[] = [];

    for (let i = 0; i < paragraph.parts.length; i++) {
      const part = paragraph.parts[i];
      const partStart = pos;
      const partEnd = pos + part.value.length;

      if (charIndex <= partStart) break;

      const visibleEnd = Math.min(charIndex, partEnd);
      const visibleText = part.value.slice(0, visibleEnd - partStart);

      if (part.type === "text") {
        elements.push(<span key={i}>{visibleText}</span>);
      } else {
        elements.push(
          <span key={i} className="text-blue-400/70">{visibleText}</span>
        );
      }

      pos = partEnd;
    }

    elements.push(
      <span key="cursor" className="cursor-blink text-black/30">|</span>
    );

    return elements;
  };

  const renderFilling = (paragraph: Paragraph, fillProgress: number, keyPrefix: string) => {
    const elements: React.ReactNode[] = [];
    let blankIndex = 0;

    for (let i = 0; i < paragraph.parts.length; i++) {
      const part = paragraph.parts[i];
      if (part.type === "text") {
        elements.push(<span key={i}>{part.value}</span>);
      } else {
        if (blankIndex < fillProgress) {
          // Already revealed — show completed text
          elements.push(
            <span key={`${keyPrefix}-${i}`} className="text-black/90 font-medium">
              {part.completed}
            </span>
          );
        } else if (blankIndex === fillProgress) {
          // Currently animating in
          elements.push(
            <motion.span
              key={`${keyPrefix}-${i}`}
              initial={{ opacity: 0, filter: "blur(6px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: TIMING.blankDuration, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-black/90 font-medium"
            >
              {part.completed}
            </motion.span>
          );
        } else {
          // Not yet revealed — still show the / or //
          elements.push(
            <span key={i} className="text-blue-400/70">{part.value}</span>
          );
        }
        blankIndex++;
      }
    }

    return elements;
  };

  const p1Filled = phase !== "typing-p1";
  const p2Visible = p1Filled;
  const p2Filled = phase === "filled-p2" || phase === "done";

  const label =
    phase === "typing-p1" || phase === "typing-p2"
      ? "type naturally — use / for blanks, // to fill"
      : "instant completion";

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="relative">
          <div className="bg-white/80 backdrop-blur-xl border border-black/[0.06] rounded-2xl px-10 py-9 shadow-[0_4px_30px_rgba(0,0,0,0.06)] font-mono text-[15px] sm:text-[16px] leading-[1.9] tracking-tight text-black/80 h-[260px] sm:h-[240px] overflow-hidden text-left">
          <AnimatePresence mode="wait">
            <motion.div
              key={exampleIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
            >
              <span className="block">
                {phase === "typing-p1"
                  ? renderTyping(example.paragraphs[0])
                  : p1Filled
                  ? renderFilling(example.paragraphs[0], p1FillProgress, "p1")
                  : null}
              </span>
              {p2Visible && (
                <span className="block mt-4">
                  {phase === "typing-p2"
                    ? renderTyping(example.paragraphs[1])
                    : p2Filled
                    ? renderFilling(example.paragraphs[1], p2FillProgress, "p2")
                    : null}
                </span>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-4 flex justify-center">
          <span className="text-[12px] tracking-widest uppercase text-black/25 font-medium">
            {label}
          </span>
        </div>
      </div>
    </div>
  );
}
