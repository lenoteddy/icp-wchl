import { Bitcoin, TrendingUp, Target } from 'lucide-react'

const features = [
  {
    name: 'For Borrowers',
    title: 'Collateralize BTC',
    description:
      'Deposit Bitcoin as collateral to borrow stablecoins at competitive rates. Maintain your BTC exposure while accessing liquidity.',
    href: '#',
    icon: Bitcoin,
  },
  {
    name: 'For Lenders',
    title: 'Earn Yield',
    description:
      'Provide stablecoins to lending pools and earn competitive yields from borrower interest payments.',
    href: '#',
    icon: TrendingUp,
  },
  {
    name: 'For Liquidators',
    title: 'Arbitrage Rewards',
    description:
      'Monitor loan health factors and earn rewards by liquidating undercollateralized positions.',
    href: '#',
    icon: Target,
  },
]

export default function SimpleThreeColumnWithLargeIcons() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-[var(--color-deep-charcoal)] sm:text-5xl">
            Bitcoin-Backed Lending for Everyone
          </h2>
          <p className="mt-6 text-lg/8 text-[var(--color-text-secondary)]">
            Join the future of decentralized finance with our secure, transparent Bitcoin lending protocol that serves borrowers, lenders, and liquidators.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="text-base/7 font-semibold text-[var(--color-deep-charcoal)]">
                  <div className="mb-6 flex size-10 items-center justify-center rounded-lg bg-[var(--color-bitcoin-orange)]">
                    <feature.icon aria-hidden="true" className="size-6 text-white" />
                  </div>
                  {feature.title}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base/7 text-[var(--color-text-secondary)]">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    <a href={feature.href} className="text-sm/6 font-semibold text-[var(--color-bitcoin-orange)] hover:text-[var(--color-bitcoin-orange)]/80">
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}