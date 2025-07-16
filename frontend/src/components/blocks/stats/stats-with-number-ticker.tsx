"use client";
import { cn } from "@/lib/utils";
import React, { useRef } from "react";
import { motion, useInView, useSpring, useTransform } from "motion/react";
import { useEffect } from "react";

export function StatsWithNumberTicker() {
  const items = [
    {
      description: "Total capital secured in our decentralized lending protocol",
      value: 24.5,
      prefix: "$",
      suffix: "M+",
      label: "Total Value Locked"
    },
    {
      description: "Bitcoin collateral backing active loans in the protocol",
      value: 1847,
      suffix: " BTC",
      label: "BTC Collateralized"
    },
    {
      description: "Number of active lending positions across all users",
      value: 3921,
      label: "Active Loans"
    },
    {
      description: "Current average annual percentage yield for lenders",
      value: 8.4,
      suffix: "% APY",
      label: "Average Yield"
    },
  ];

  return (
    <section className="group/container relative mx-auto w-full max-w-7xl overflow-hidden rounded-3xl bg-white p-10 py-20">
      <div className="relative z-20">
        <h2 className="text-center text-xl font-bold text-[var(--color-deep-charcoal)] md:text-3xl">
          Protocol Statistics
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-[var(--color-text-secondary)] md:text-base">
          Real-time metrics from our decentralized lending protocol on Internet Computer.
        </p>
        <div className="mx-auto mt-10 grid max-w-7xl grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4">
          {items.map((item, index) => (
            <motion.div
              initial={{ y: 20, opacity: 0, filter: "blur(4px)" }}
              animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={"card" + index}
              className={cn("group/card relative overflow-hidden rounded-lg")}
            >
              <div className="flex items-center gap-2">
                <p className="text-3xl font-bold text-[var(--color-bitcoin-orange)]">
                  {item.prefix}
                  <AnimatedNumber value={item.value} />
                  {item.suffix}
                </p>
              </div>
              <h3 className="mt-2 text-lg font-semibold text-[var(--color-deep-charcoal)]">
                {item.label}
              </h3>
              <p className="mt-2 text-balance text-base text-[var(--color-text-secondary)]">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AnimatedNumber({
  value,
  initial = 0,
}: {
  value: number;
  initial?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const spring = useSpring(initial, { mass: 0.8, stiffness: 75, damping: 15 });
  const display = useTransform(spring, (current) =>
    Math.round(current * 10) / 10 // Preserve decimal places
  );

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    } else {
      spring.set(initial);
    }
  }, [isInView, spring, value, initial]);

  return <motion.span ref={ref}>{display}</motion.span>;
}