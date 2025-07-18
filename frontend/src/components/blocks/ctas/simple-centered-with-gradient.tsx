export default function SimpleCenteredWithGradient() {
    return (
      <div className="relative isolate overflow-hidden bg-gradient-to-br from-white via-orange-50/30 to-amber-50/50">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-semibold tracking-tight text-balance text-[var(--color-deep-charcoal)] sm:text-5xl">
              Ready to Start Lending?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg/8 text-pretty text-[var(--color-text-secondary)]">
              Join thousands of users earning yield and accessing liquidity on the most decentralized Bitcoin lending protocol.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-[var(--color-bitcoin-orange)] px-8 py-3 text-sm font-semibold text-white shadow-lg hover:bg-[var(--color-bitcoin-orange)]/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-bitcoin-orange)] transition-all duration-200 hover:shadow-xl"
              >
                Launch App
              </a>
              <a href="#" className="text-sm/6 font-semibold text-[var(--color-text-primary)] hover:text-[var(--color-bitcoin-orange)] transition-colors duration-200">
                Read Documentation <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <svg
          viewBox="0 0 1024 1024"
          aria-hidden="true"
          className="absolute top-1/2 left-1/2 -z-10 size-256 -translate-x-1/2 mask-[radial-gradient(closest-side,white,transparent)]"
        >
          <circle r={512} cx={512} cy={512} fill="url(#bitcoin-gradient)" fillOpacity="0.15" />
          <defs>
            <radialGradient id="bitcoin-gradient">
              <stop stopColor="#F7931A" />
              <stop offset={1} stopColor="#FF8C00" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    )
  }