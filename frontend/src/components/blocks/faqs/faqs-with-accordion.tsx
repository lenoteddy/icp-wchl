"use client";
import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

const FAQs = [
  {
    question: "How is my Bitcoin secured as collateral?",
    answer:
      "Your BTC is held in decentralized smart contracts on Internet Computer with no single point of control. The protocol uses advanced cryptographic security measures to ensure your assets remain safe.",
  },
  {
    question: "What happens if I can't repay my loan?",
    answer:
      "Your collateral will be liquidated through our decentralized liquidation system to protect lenders. This automated process ensures fair market pricing and protects the protocol's stability.",
  },
  {
    question: "How are interest rates determined?",
    answer:
      "Rates are set by market supply and demand through our automated market maker. The protocol dynamically adjusts rates based on utilization and market conditions.",
  },
  {
    question: "Which wallets are supported?",
    answer:
      "We support all major ICP wallets including Plug, Stoic, and Internet Identity. Our integration ensures seamless connectivity with your preferred wallet solution.",
  },
  {
    question: "How do liquidations work?",
    answer:
      "Liquidators monitor loan health factors and can liquidate undercollateralized positions for rewards. This decentralized system maintains protocol solvency while providing incentives for participants.",
  },
  {
    question: "Is the protocol audited?",
    answer:
      "Yes, our smart contracts have been audited by multiple security firms with reports available publicly. We maintain the highest security standards for your peace of mind.",
  },
];

export function FrequentlyAskedQuestionsAccordion() {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 px-4 py-20 md:grid-cols-2 md:px-8 md:py-40 bg-white">
      <h2 className="text-center text-4xl font-bold tracking-tight text-[var(--color-deep-charcoal)] md:text-left md:text-6xl font-[var(--font-heading)]">
        Frequently Asked Questions
      </h2>
      <div className="divide-y divide-[var(--color-border)]">
        {FAQs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            open={open}
            setOpen={setOpen}
          />
        ))}
      </div>
    </div>
  );
}

const FAQItem = ({
  question,
  answer,
  setOpen,
  open,
}: {
  question: string;
  answer: string;
  open: string | null;
  setOpen: (open: string | null) => void;
}) => {
  const isOpen = open === question;

  return (
    <div
      className="cursor-pointer py-4"
      onClick={() => {
        if (isOpen) {
          setOpen(null);
        } else {
          setOpen(question);
        }
      }}
    >
      <div className="flex items-start">
        <div className="relative mr-4 mt-1 h-6 w-6 flex-shrink-0">
          <Plus
            className={cn(
              "absolute inset-0 h-6 w-6 transform text-[var(--color-bitcoin-orange)] transition-all duration-200",
              isOpen && "rotate-90 scale-0"
            )}
          />
          <Minus
            className={cn(
              "absolute inset-0 h-6 w-6 rotate-90 scale-0 transform text-[var(--color-bitcoin-orange)] transition-all duration-200",
              isOpen && "rotate-0 scale-100"
            )}
          />
        </div>
        <div>
          <h3 className="text-lg font-medium text-[var(--color-deep-charcoal)] font-[var(--font-heading)]">
            {question}
          </h3>
          <AnimatePresence mode="wait">
            {isOpen && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                exit={{ height: 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="overflow-hidden text-[var(--color-text-secondary)] font-[var(--font-body)]"
              >
                <p className="pt-2">{answer}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};