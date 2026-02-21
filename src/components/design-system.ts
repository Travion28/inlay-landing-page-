/**
 * INLAY LANDING PAGE - DESIGN SYSTEM DOCUMENTATION
 * 
 * This landing page follows a premium dark tech product aesthetic inspired by Ovrion.
 * 
 * COLOR PALETTE:
 * - Primary Background: #0a0e1a (deep navy/charcoal)
 * - Card Backgrounds: white with 3-7% opacity
 * - Text: white with varying opacity (100%, 80%, 60%, 40%)
 * - Accent Blue: blue-500 with varying opacity
 * - Accent Purple: purple-500 with varying opacity
 * - Success/Filled: emerald-500 with varying opacity
 * 
 * TYPOGRAPHY:
 * - Display/Headings: Space Grotesk (400, 500, 600, 700)
 * - Body/UI: Inter (400, 500, 600)
 * 
 * SPACING SYSTEM:
 * - Base unit: 8px (Tailwind's spacing-2)
 * - Common values: 8px, 16px, 24px, 32px, 48px, 64px
 * 
 * COMPONENT STRUCTURE:
 * 1. Navigation - Fixed, translucent with blur
 * 2. Hero - Two-column layout with phone demo
 * 3. Features - 4 cards in responsive grid
 * 4. How It Works - 3 steps with large background numbers
 * 5. Final CTA - Centered download section
 * 6. Footer - Minimal branding
 * 
 * VISUAL EFFECTS:
 * - Radial gradient glows (blue/purple)
 * - Subtle diagonal texture overlay
 * - Noise texture for depth
 * - Glass morphism on cards
 * - Soft shadows with glow
 * - Hover state animations
 * 
 * RESPONSIVENESS:
 * - Desktop: 1440px+ (lg: breakpoint)
 * - Tablet: 768px-1439px (md: breakpoint)
 * - Mobile: <768px (sm: breakpoint)
 * 
 * INTERACTIONS:
 * - Smooth scroll behavior
 * - Active section highlighting in nav
 * - Hover lift on buttons and cards
 * - Motion animations on scroll (whileInView)
 * - Scale transforms on button hover
 * 
 * KEY TERMINOLOGY (NO "AI" MENTIONED):
 * - "Smart" / "Context-aware" / "Instant completion" / "Autocomplete"
 * - Avoids any mention of artificial intelligence
 */

export const DESIGN_SYSTEM = {
  colors: {
    background: '#0a0e1a',
    cardLight: 'rgba(255, 255, 255, 0.07)',
    cardDark: 'rgba(255, 255, 255, 0.03)',
    textPrimary: 'rgba(255, 255, 255, 1)',
    textSecondary: 'rgba(255, 255, 255, 0.8)',
    textMuted: 'rgba(255, 255, 255, 0.6)',
    textSubtle: 'rgba(255, 255, 255, 0.4)',
  },
  fonts: {
    display: "'Space Grotesk', sans-serif",
    body: "'Inter', sans-serif",
  },
  spacing: {
    base: 8,
    section: 96, // py-24
    sectionLarge: 128, // py-32
  },
  borderRadius: {
    card: 16, // rounded-2xl
    button: 9999, // rounded-full
    phone: 48, // rounded-[48px]
  },
} as const;
