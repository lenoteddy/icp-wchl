import { cn } from "@/lib/utils";
import React from "react";

export function FooterWithGrid() {
  return (
    <div className="bg-gray-50 dark:bg-neutral-800">
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-8">
        <div className="border-b border-neutral-200 pb-2 dark:border-neutral-700">
          <div className="mb-10 max-w-xl">
            <Logo className="justify-start" />
            <p className="mb-4 text-sm text-neutral-600 dark:text-neutral-400">
              Decentralized Bitcoin lending on Internet Computer. Trustless, transparent, and community-governed.
            </p>
            <div className="text-sm text-neutral-700 dark:text-neutral-300">
              Built on{" "}
              <a
                href="https://internetcomputer.org"
                target="_blank"
                className="font-medium text-[#F7931A] hover:underline"
              >
                Internet Computer
              </a>
              {" "}for the{" "}
              <a
                href="https://bitcoin.org"
                target="_blank"
                className="font-medium text-[#F7931A] hover:underline"
              >
                Bitcoin
              </a>
              {" "}ecosystem
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-10 border-b border-neutral-200 pb-10 pt-10 md:grid-cols-4 dark:border-neutral-700">
          <ul className="text-base font-medium text-neutral-800 dark:text-neutral-200">
            <li className="mb-4 text-sm font-bold text-black dark:text-white">
              Protocol
            </li>
            {PROTOCOL_LINKS.map((item, idx) => (
              <li key={"protocol" + idx} className="mb-4 text-sm font-normal">
                <a
                  href={item.href}
                  className="text-neutral-500 hover:text-[#F7931A] dark:text-neutral-400 dark:hover:text-[#F7931A]"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
          <ul className="text-base font-medium text-neutral-800 dark:text-neutral-200">
            <li className="mb-4 text-sm font-bold text-black dark:text-white">
              Resources
            </li>
            {RESOURCES_LINKS.map((item, idx) => (
              <li key={"resources" + idx} className="mb-4 text-sm font-normal">
                <a
                  href={item.href}
                  className="text-neutral-500 hover:text-[#F7931A] dark:text-neutral-400 dark:hover:text-[#F7931A]"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
          <ul className="text-base font-medium text-neutral-800 dark:text-neutral-200">
            <li className="mb-4 text-sm font-bold text-black dark:text-white">
              Community
            </li>
            {COMMUNITY_LINKS.map((item, idx) => (
              <li key={"community" + idx} className="mb-4 text-sm font-normal">
                <a
                  href={item.href}
                  className="text-neutral-500 hover:text-[#F7931A] dark:text-neutral-400 dark:hover:text-[#F7931A]"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
          <ul className="text-base font-medium text-neutral-800 dark:text-neutral-200">
            <li className="mb-4 text-sm font-bold text-black dark:text-white">
              Legal
            </li>
            {LEGAL_LINKS.map((item, idx) => (
              <li key={"legal" + idx} className="mb-4 text-sm font-normal">
                <a
                  href={item.href}
                  className="text-neutral-500 hover:text-[#F7931A] dark:text-neutral-400 dark:hover:text-[#F7931A]"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <p className="mb-4 pt-10 text-sm text-neutral-600 dark:text-neutral-400">
          &copy; {new Date().getFullYear()} BitLend Protocol. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}

const PROTOCOL_LINKS = [
  { title: "Overview", href: "/protocol/overview" },
  { title: "Documentation", href: "/docs" },
  { title: "Governance", href: "/governance" },
  { title: "Audits", href: "/audits" },
];

const RESOURCES_LINKS = [
  { title: "Whitepaper", href: "/whitepaper" },
  { title: "API Docs", href: "/api" },
  { title: "SDK", href: "/sdk" },
  { title: "GitHub", href: "https://github.com/bitlend-protocol" },
];

const COMMUNITY_LINKS = [
  { title: "Discord", href: "https://discord.gg/bitlend" },
  { title: "Twitter", href: "https://twitter.com/bitlendprotocol" },
  { title: "Telegram", href: "https://t.me/bitlendprotocol" },
  { title: "Forum", href: "https://forum.bitlend.io" },
];

const LEGAL_LINKS = [
  { title: "Terms of Service", href: "/terms" },
  { title: "Privacy Policy", href: "/privacy" },
  { title: "Risk Disclosure", href: "/risks" },
];

const Logo = ({ className }: { className?: string }) => {
  return (
    <a
      href="/"
      className={cn(
        "flex flex-shrink-0 items-center justify-center space-x-2 py-6 text-center text-2xl font-bold text-neutral-600 selection:bg-emerald-500 dark:text-gray-100",
        className
      )}
    >
      <div className="relative flex h-8 w-8 items-center justify-center rounded-md border border-slate-800 bg-black text-sm text-white antialiased md:h-6 md:w-6">
        <div className="absolute inset-x-0 -top-10 h-10 w-full rounded-full bg-white/[0.2] blur-xl" />
        <div className="relative z-20 text-sm text-emerald-500">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png"
            height="50"
            width="50"
            alt="Logo"
            className="block dark:hidden"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png"
            height="50"
            width="50"
            alt="Logo"
            className="hidden dark:block"
          />
        </div>
      </div>
      <div
        className={cn(
          "flex items-center gap-2 font-sans text-xl text-black dark:text-white"
        )}
      >
        BitLend Protocol
      </div>
    </a>
  );
};