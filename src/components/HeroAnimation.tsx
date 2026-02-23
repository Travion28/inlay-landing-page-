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
  title: string;
  paragraphs: Paragraph[];
}

const EXAMPLES: Example[] = [
  {
    title: "Tesla Earnings Call Notes",
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
    title: "Super Bowl LIX Recap",
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
          { type: "blank", value: "/", completed: "40\u201322" },
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
          { type: "text", value: " and ran for another in the " },
          { type: "blank", value: "//", completed: "win" },
          { type: "text", value: "." },
        ],
      },
    ],
  },
  {
    title: "Starship Flight 7",
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
];

function getParagraphText(paragraph: Paragraph): string {
  return paragraph.parts.map((p) => p.value).join("");
}

const TIMING = {
  typing: 55,
  typingJitter: 45,
  fillDelay: 400,
  blankStagger: 0.25,
  blankDuration: 0.5,
  doneHold: 3000,
};

type Phase = "typing-p1" | "typing-p2" | "filled-p2" | "done";

export function HeroAnimation() {
  const [exampleIndex, setExampleIndex] = useState(0);
  const [phase, setPhase] = useState<Phase>("typing-p1");
  const [charIndex, setCharIndex] = useState(0);
  const [p1FillProgress, setP1FillProgress] = useState(-1);
  const [p2FillProgress, setP2FillProgress] = useState(-1);

  const example = EXAMPLES[exampleIndex];
  const currentParagraph =
    phase === "typing-p1" ? example.paragraphs[0] : example.paragraphs[1];
  const currentText = getParagraphText(currentParagraph);

  const nextExample = useCallback(() => {
    const next = (exampleIndex + 1) % EXAMPLES.length;
    setExampleIndex(next);
    setPhase("typing-p1");
    setCharIndex(0);
    setP1FillProgress(-1);
    setP2FillProgress(-1);
  }, [exampleIndex]);

  // Main typing
  useEffect(() => {
    if (phase !== "typing-p1" && phase !== "typing-p2") return;

    if (charIndex < currentText.length) {
      const timer = setTimeout(
        () => setCharIndex((c) => c + 1),
        TIMING.typing + Math.random() * TIMING.typingJitter
      );
      return () => clearTimeout(timer);
    } else {
      if (phase === "typing-p1") {
        const timer = setTimeout(() => {
          setP1FillProgress(0);
          setCharIndex(0);
          setPhase("typing-p2");
        }, 0);
        return () => clearTimeout(timer);
      } else {
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
    const blankCount = example.paragraphs[0].parts.filter(
      (p) => p.type === "blank"
    ).length;
    if (p1FillProgress < 0 || p1FillProgress >= blankCount) return;
    const timer = setTimeout(
      () => setP1FillProgress((p) => p + 1),
      TIMING.blankStagger * 1000
    );
    return () => clearTimeout(timer);
  }, [p1FillProgress, example]);

  // Sequentially reveal p2 blanks
  useEffect(() => {
    const blankCount = example.paragraphs[1].parts.filter(
      (p) => p.type === "blank"
    ).length;
    if (p2FillProgress < 0 || p2FillProgress >= blankCount) return;
    const timer = setTimeout(
      () => setP2FillProgress((p) => p + 1),
      TIMING.blankStagger * 1000
    );
    return () => clearTimeout(timer);
  }, [p2FillProgress, example]);

  // After filling p2 → hold
  useEffect(() => {
    if (phase !== "filled-p2") return;
    const blankCount = example.paragraphs[1].parts.filter(
      (p) => p.type === "blank"
    ).length;
    const fillDuration =
      blankCount * TIMING.blankStagger * 1000 + TIMING.blankDuration * 1000;
    const timer = setTimeout(
      () => setPhase("done"),
      fillDuration + TIMING.doneHold
    );
    return () => clearTimeout(timer);
  }, [phase, example]);

  // Done → next
  useEffect(() => {
    if (phase !== "done") return;
    const timer = setTimeout(nextExample, 400);
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
        elements.push(
          <span key={i} className="text-white/90">
            {visibleText}
          </span>
        );
      } else {
        elements.push(
          <span key={i} className="text-white/40">
            {visibleText}
          </span>
        );
      }
      pos = partEnd;
    }

    elements.push(
      <span key="cursor" className="cursor-blink text-white/50">
        |
      </span>
    );

    return elements;
  };

  const renderFilling = (
    paragraph: Paragraph,
    fillProgress: number,
    keyPrefix: string
  ) => {
    const elements: React.ReactNode[] = [];
    let blankIndex = 0;

    for (let i = 0; i < paragraph.parts.length; i++) {
      const part = paragraph.parts[i];
      if (part.type === "text") {
        elements.push(
          <span key={i} className="text-white/90">
            {part.value}
          </span>
        );
      } else {
        if (blankIndex < fillProgress) {
          elements.push(
            <span
              key={`${keyPrefix}-${i}`}
              className="text-white font-medium"
            >
              {part.completed}
            </span>
          );
        } else if (blankIndex === fillProgress) {
          elements.push(
            <motion.span
              key={`${keyPrefix}-${i}`}
              initial={{ opacity: 0, filter: "blur(6px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{
                duration: TIMING.blankDuration,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="text-white font-medium"
            >
              {part.completed}
            </motion.span>
          );
        } else {
          elements.push(
            <span key={i} className="text-white/40">
              {part.value}
            </span>
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

  return (
    <div className="w-full">
      <div className="relative">
          <div className="bg-transparent text-[13px] sm:text-[14px] leading-[1.8] tracking-normal overflow-hidden text-left">
          <AnimatePresence mode="wait">
            <motion.div
              key={exampleIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <span className="block text-[11px] sm:text-[12px] font-medium tracking-wider uppercase text-white/25 mb-4">
                {example.title}
              </span>
              <span className="block">
                {phase === "typing-p1"
                  ? renderTyping(example.paragraphs[0])
                  : p1Filled
                  ? renderFilling(
                      example.paragraphs[0],
                      p1FillProgress,
                      "p1"
                    )
                  : null}
              </span>
              {p2Visible && (
                <span className="block mt-4">
                  {phase === "typing-p2"
                    ? renderTyping(example.paragraphs[1])
                    : p2Filled
                    ? renderFilling(
                        example.paragraphs[1],
                        p2FillProgress,
                        "p2"
                      )
                    : null}
                </span>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
