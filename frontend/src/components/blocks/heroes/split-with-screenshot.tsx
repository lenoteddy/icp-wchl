"use client"

import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { Wallet, Shield, Users } from 'lucide-react'

export default function SplitWithScreenshot() {
  return (
    <div className="relative isolate overflow-hidden bg-white">
      <svg
        aria-hidden="true"
        className="absolute inset-0 -z-10 size-full mask-[radial-gradient(100%_100%_at_top_right,white,transparent)] stroke-gray-200"
      >
        <defs>
          <pattern
            x="50%"
            y={-1}
            id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
            width={200}
            height={200}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <rect fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)" width="100%" height="100%" strokeWidth={0} />
      </svg>
      <div className="mx-auto max-w-7xl px-6 pt-10 pb-24 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:shrink-0 lg:pt-8">
          <img
            alt="Bitcoin Lending Protocol"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png"
            className="h-11"
          />
          <div className="mt-24 sm:mt-32 lg:mt-16">
            <a href="#" className="inline-flex space-x-6">
              <span className="rounded-full bg-[#F7931A]/10 px-3 py-1 text-sm/6 font-semibold text-[#F7931A] ring-1 ring-[#F7931A]/10 ring-inset">
                What's new
              </span>
              <span className="inline-flex items-center space-x-2 text-sm/6 font-medium text-[#6B7280]">
                <span>Liquidation pools live</span>
                <ChevronRightIcon aria-hidden="true" className="size-5 text-gray-400" />
              </span>
            </a>
          </div>
          <h1 className="mt-10 text-5xl font-semibold tracking-tight text-pretty text-[#1A1A1A] sm:text-7xl">
            Decentralized Bitcoin Lending on Internet Computer
          </h1>
          <p className="mt-8 text-lg font-medium text-pretty text-[#6B7280] sm:text-xl/8">
            Collateralize your BTC to borrow stablecoins, earn yield through lending pools, and participate in decentralized liquidations. Trustless, transparent, and built on ICP.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <a
              href="/onboarding"
              className="rounded-md bg-[#F7931A] px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-[#E8891A] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F7931A]"
            >
              Connect Wallet
            </a>
            <a href="#" className="text-sm/6 font-semibold text-[#1A1A1A]">
              Start Lending <span aria-hidden="true">→</span>
            </a>
          </div>
          <div className="mt-8">
            <p className="text-sm font-medium text-[#6B7280] mb-4">Supported Wallets</p>
            <div className="flex items-center gap-x-4">
              <div className="flex items-center gap-x-2">
                <div className="w-8 h-8 rounded-full bg-[#F7931A]/10 flex items-center justify-center">
                  <Wallet className="w-4 h-4 text-[#F7931A]" />
                </div>
                <span className="text-sm text-[#6B7280]">Plug</span>
              </div>
              <div className="flex items-center gap-x-2">
                <div className="w-8 h-8 rounded-full bg-[#F7931A]/10 flex items-center justify-center">
                  <Shield className="w-4 h-4 text-[#F7931A]" />
                </div>
                <span className="text-sm text-[#6B7280]">Stoic</span>
              </div>
              <div className="flex items-center gap-x-2">
                <div className="w-8 h-8 rounded-full bg-[#F7931A]/10 flex items-center justify-center">
                  <Users className="w-4 h-4 text-[#F7931A]" />
                </div>
                <span className="text-sm text-[#6B7280]">Internet Identity</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:mt-0 lg:mr-0 lg:ml-10 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-gray-900/10 ring-inset lg:-m-4 lg:rounded-2xl lg:p-4">
              <div className="w-304 rounded-md shadow-2xl ring-1 ring-gray-900/10 bg-white p-6">
                <div className="space-y-6">
                  <div className="border-b border-gray-200 pb-4">
                    <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">BTC Collateral</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-[#6B7280]">Available Balance</span>
                      <span className="text-sm font-medium text-[#1A1A1A]">2.45 BTC</span>
                    </div>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="text-sm text-[#6B7280]">Collateral Value</span>
                      <span className="text-sm font-medium text-[#1A1A1A]">$98,000</span>
                    </div>
                  </div>
                  <div className="border-b border-gray-200 pb-4">
                    <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">Borrowing Interface</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-[#6B7280]">Available to Borrow</span>
                      <span className="text-sm font-medium text-[#1A1A1A]">$65,000 USDC</span>
                    </div>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="text-sm text-[#6B7280]">Current Rate</span>
                      <span className="text-sm font-medium text-[#1A1A1A]">8.5% APR</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">Health Ratio</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-[#6B7280]">Current Ratio</span>
                      <span className="text-sm font-medium text-green-600">1.85</span>
                    </div>
                    <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                    <div className="mt-1 text-xs text-[#6B7280]">Liquidation at 1.25</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}