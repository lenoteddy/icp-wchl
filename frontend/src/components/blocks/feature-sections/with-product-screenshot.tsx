import { Shield, Eye, Wallet, TrendingUp } from 'lucide-react'

const features = [
  {
    name: 'Trustless Liquidations',
    description:
      'Automated liquidation system protects lenders and maintains protocol solvency',
    icon: Shield,
  },
  {
    name: 'On-Chain Transparency',
    description: 'All transactions and protocol state visible on Internet Computer blockchain',
    icon: Eye,
  },
  {
    name: 'Multi-Wallet Support',
    description: 'Seamless integration with popular ICP wallets and Bitcoin bridges',
    icon: Wallet,
  },
  {
    name: 'Competitive Rates',
    description: 'Market-driven interest rates optimized for both borrowers and lenders',
    icon: TrendingUp,
  },
]

export default function WithProductScreenshot() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-bitcoin-orange">Lending Protocol</h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-deep-charcoal sm:text-5xl">
                Built for Decentralization
              </p>
              <p className="mt-6 text-lg/8 text-neutral-gray">
                Our protocol operates entirely on-chain with no central authority, ensuring transparency and trustless operations.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-neutral-gray lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-deep-charcoal">
                      <feature.icon aria-hidden="true" className="absolute top-1 left-1 size-5 text-bitcoin-orange" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <img
            alt="Lending protocol interface showing health factors, collateralization ratios, and transaction history"
            src="https://tailwindcss.com/plus-assets/img/component-images/project-app-screenshot.png"
            width={2432}
            height={1442}
            className="w-3xl max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-228 md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
  )
}