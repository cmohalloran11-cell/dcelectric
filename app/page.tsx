"use client";

export default function Page() {
  return (
    <main className="min-h-screen">
      {/* ── Top bar ── */}
      <header className="border-b border-graphite-900/15 bg-bone/85 backdrop-blur sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-graphite-800 grid place-items-center">
              <span className="numeral text-copper-500 text-sm">DC</span>
            </div>
            <div>
              <div className="font-display font-extrabold text-graphite-800 text-sm leading-tight tracking-tight">DC ELECTRIC</div>
              <div className="mono text-[0.65rem] text-graphite-300 leading-tight">BROOKSVILLE · FL</div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-7 text-xs mono uppercase text-graphite-500">
            <a href="#services" className="hover:text-copper-700 transition">Services</a>
            <a href="#heritage" className="hover:text-copper-700 transition">48 yrs</a>
            <a href="#emergency" className="hover:text-copper-700 transition">24/7</a>
            <a href="#contact" className="hover:text-copper-700 transition">Contact</a>
          </nav>
          <a
            href="tel:+13527991889"
            className="btn-copper bg-graphite-800 text-bone px-4 py-2 text-sm font-display font-semibold mono tracking-wider"
          >
            352·799·1889
          </a>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="blueprint text-bone relative overflow-hidden">
        <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-24 md:pt-28 md:pb-32 grid md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-7">
            <div className="anim-settle eyebrow !text-copper-300" style={{ ['--anim-delay' as any]: '0ms' }}>
              [ EST. 2003 · TRADE SINCE 1977 ]
            </div>
            <h1 className="anim-settle mt-5 font-display font-extrabold text-bone text-5xl md:text-7xl leading-[0.95] tracking-tight"
                style={{ ['--anim-delay' as any]: '120ms' }}>
              Electrical work,<br />
              <span className="text-copper-300">done by tradesmen.</span>
            </h1>
            <div className="anim-hairline mt-7 h-px bg-copper-500/70 w-40" style={{ ['--anim-delay' as any]: '700ms' }} />
            <p className="anim-settle mt-6 max-w-xl text-bone/75 text-lg leading-relaxed"
               style={{ ['--anim-delay' as any]: '260ms' }}>
              Service, repair, and installation across Brooksville and Hernando
              County. Family-owned. BBB A+. Owner has been in the trade since
              1977 — teaches it, writes about it, and still answers the phone.
            </p>
            <div className="anim-settle mt-8 flex flex-wrap gap-3"
                 style={{ ['--anim-delay' as any]: '400ms' }}>
              <a href="tel:+13527991889" className="btn-copper inline-flex items-center gap-2 bg-copper-500 text-graphite-900 px-6 py-3.5 font-display font-bold tracking-wide">
                Call (352) 799-1889
              </a>
              <a href="#emergency" className="btn-copper inline-flex items-center gap-2 emergency-badge text-amber-500 px-6 py-3.5 font-display font-semibold tracking-wide">
                <span className="w-2 h-2 rounded-full bg-amber-500 dot-pulse" />
                24/7 Emergency
              </a>
            </div>
          </div>

          <div className="md:col-span-5 anim-settle" style={{ ['--anim-delay' as any]: '500ms' }}>
            {/* Schematic-style panel card */}
            <div className="border border-copper-500/40 bg-graphite-900/50 p-1">
              <div className="border border-copper-500/20 p-8 relative">
                <svg viewBox="0 0 280 160" className="w-full">
                  <defs>
                    <linearGradient id="copperGrad" x1="0" x2="1">
                      <stop offset="0%" stopColor="#9F5D2C" />
                      <stop offset="100%" stopColor="#E89F1F" />
                    </linearGradient>
                  </defs>
                  {[10, 30, 50, 70, 90, 110].map((y) => (
                    <g key={y}>
                      <rect x="10" y={y} width="120" height="14" fill="rgba(248,248,246,0.05)" stroke="rgba(201,120,64,0.3)" />
                      <rect x="150" y={y} width="120" height="14" fill="rgba(248,248,246,0.05)" stroke="rgba(201,120,64,0.3)" />
                      <line x1="64" y1={y + 7} x2="76" y2={y + 7} stroke="#C97840" strokeWidth="3" />
                      <line x1="204" y1={y + 7} x2="216" y2={y + 7} stroke="#C97840" strokeWidth="3" />
                    </g>
                  ))}
                  <path
                    d="M 10 140 L 80 140 L 90 130 L 110 150 L 130 130 L 150 150 L 160 140 L 270 140"
                    fill="none"
                    stroke="url(#copperGrad)"
                    strokeWidth="1.5"
                    className="voltage-path"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="current-rail" />
      </section>

      {/* ── What We Do ── */}
      <section id="services" className="bg-bone">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-24">
          <div className="grid md:grid-cols-12 gap-8 items-end">
            <div className="md:col-span-7">
              <div data-reveal className="eyebrow">SERVICES</div>
              <h2 data-reveal className="mt-3 font-display font-extrabold text-4xl md:text-5xl text-graphite-800 leading-tight">
                Residential. Commercial.<br />Whatever it needs.
              </h2>
            </div>
            <div data-reveal className="md:col-span-5 text-graphite-500 text-sm leading-relaxed">
              From a tripping breaker to a full panel upgrade. Diagnosis is
              free. The fix is fair.
            </div>
          </div>
          <div data-reveal className="hairline-strong mt-8 max-w-md anim-hairline" />

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { n: '01', t: 'Service & Repair',     d: 'Diagnosis, troubleshooting, fixes.' },
              { n: '02', t: 'Wiring & Installation', d: 'New construction, renos, upgrades.' },
              { n: '03', t: 'Panel & Breaker Work',  d: 'Replacement, upgrades, repairs.' },
              { n: '04', t: 'Light Fixtures',        d: 'Indoor, outdoor, hardwire installs.' },
              { n: '05', t: 'Generators',            d: 'Installation and service.' },
              { n: '06', t: 'Emergency Service',     d: '24/7 — for the things that won’t wait.' },
            ].map((s, i) => (
              <div key={s.t} data-reveal style={{ ['--reveal-delay' as any]: `${i * 80}ms` }}
                className="svc-tile p-6">
                <div className="flex justify-end">
                  <span className="w-1.5 h-1.5 rounded-full bg-copper-500" />
                </div>
                <div className="mt-3 font-display font-bold text-lg text-graphite-800">{s.t}</div>
                <div className="mt-2 text-graphite-500 text-sm leading-relaxed">{s.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 48 Years in the Trade ── */}
      <section id="heritage" className="bg-graphite-900 text-bone relative overflow-hidden">
        <div className="absolute inset-0 opacity-30 blueprint" aria-hidden="true" />
        <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7">
            <div data-reveal className="eyebrow !text-copper-300">HERITAGE</div>
            <h2 data-reveal className="mt-4 font-display font-extrabold text-4xl md:text-6xl text-bone leading-tight tracking-tight">
              <span className="text-copper-300">Forty-eight years</span><br />
              in the trade.
            </h2>
            <p data-reveal style={{ ['--reveal-delay' as any]: '120ms' }}
               className="mt-7 text-bone/75 text-lg leading-relaxed max-w-xl">
              Clyde Hady has been an electrician since 1977. He&apos;s seen what
              works and what doesn&apos;t. He teaches it now too — a training
              instructor for Independent Electrical Contractors and an author
              for American Technical Publishers.
            </p>
            <div data-reveal style={{ ['--reveal-delay' as any]: '240ms' }}
                 className="mt-8 flex flex-wrap gap-4">
              <Pill label="Owner" value="Clyde Hady" />
              <Pill label="Since" value="1977" />
              <Pill label="LLC" value="2003" />
            </div>
          </div>

          <div className="md:col-span-5">
            <div data-reveal style={{ ['--reveal-delay' as any]: '300ms' }} className="photo-block aspect-[4/5]">
              <DCWiringScene />
            </div>
          </div>
        </div>
      </section>

      {/* ── 24/7 Emergency ── */}
      <section id="emergency" className="bg-bone">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-24">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7">
              <div data-reveal className="eyebrow">EMERGENCY</div>
              <h2 data-reveal className="mt-3 font-display font-extrabold text-4xl md:text-5xl text-graphite-800 leading-tight">
                Electrical problems don&apos;t<br />
                wait for business hours.
              </h2>
              <p data-reveal className="mt-6 text-graphite-500 leading-relaxed max-w-lg">
                A breaker that won&apos;t reset. A burning smell. Half the house
                without power after a storm. Call — we answer.
              </p>
            </div>
            <div data-reveal className="md:col-span-5">
              <div className="border-2 border-amber-500/60 p-8 bg-amber-500/5">
                <div className="flex items-center gap-3 mono uppercase text-amber-700 tracking-widest text-xs">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500 dot-pulse" />
                  24 / 7 EMERGENCY LINE
                </div>
                <a href="tel:+13527991889" className="block mt-4 numeral text-5xl text-graphite-900 hover:text-copper-700 transition">
                  (352) 799-1889
                </a>
                <div className="mt-4 mono text-xs text-graphite-500">Brooksville · Hernando County · FL</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Customer voices ── */}
      <section className="bg-bone-200">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div data-reveal className="eyebrow">CUSTOMERS</div>
          <h2 data-reveal className="mt-3 font-display font-extrabold text-3xl md:text-4xl text-graphite-800">
            From the folks who called.
          </h2>

          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {[
              { q: "Came the same day, found the short, didn't charge us.", a: 'Google review' },
              { q: "Family business, fair and honest. The whole community calls them.", a: 'BBB review' },
            ].map((r, i) => (
              <blockquote key={r.q} data-reveal style={{ ['--reveal-delay' as any]: `${i * 120}ms` }}
                className="svc-tile p-8">
                <div className="mt-4 font-display text-2xl text-graphite-800 leading-snug">“{r.q}”</div>
                <div className="mt-5 mono uppercase text-[0.65rem] text-graphite-500 tracking-widest">— {r.a}</div>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trust signals row ── */}
      <section className="bg-graphite-800 text-bone">
        <div className="max-w-6xl mx-auto px-6 py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { n: '48',   l: 'YEARS · TRADE'      },
            { n: 'A+',   l: 'BBB · SINCE 2014'   },
            { n: '24/7', l: 'EMERGENCY LINE'     },
            { n: 'Family',  l: 'OWNED · OPERATED'   },
          ].map((s, i) => (
            <div key={s.l} data-reveal style={{ ['--reveal-delay' as any]: `${i * 90}ms` }}
              className="border-l border-copper-500/50 pl-5">
              <div className="numeral text-4xl text-copper-300">{s.n}</div>
              <div className="mt-2 mono text-[0.65rem] text-bone/70 uppercase tracking-widest">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className="bg-bone">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-24 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <div data-reveal className="eyebrow">CONTACT</div>
            <h2 data-reveal className="mt-3 font-display font-extrabold text-4xl md:text-5xl text-graphite-800 leading-tight">
              Get on the schedule.
            </h2>
            <p data-reveal className="mt-5 text-graphite-500 leading-relaxed max-w-md">
              Call for the fastest response — <a href="tel:+13527991889" className="text-copper-700 underline underline-offset-4">(352) 799-1889</a>. Emergencies, 24/7.
            </p>
            <dl data-reveal className="mt-8 space-y-3 text-sm">
              <Row label="ADDRESS" value="25130 Fadette Dr · Brooksville, FL 34601" />
              <Row label="EMAIL"   value="DcElectricOffice@gmail.com" href="mailto:DcElectricOffice@gmail.com" />
              <Row label="AREA"    value="Brooksville · Hernando County" />
            </dl>
          </div>

          <form onSubmit={(e) => e.preventDefault()} data-reveal className="md:col-span-7 grid sm:grid-cols-2 gap-4 border border-graphite-800/15 p-6 md:p-8 bg-bone-100">
            <input className="field" placeholder="Name" />
            <input className="field" placeholder="Phone" />
            <select className="field sm:col-span-2">
              <option>Type of work — select</option>
              <option>Service / repair</option>
              <option>Wiring / installation</option>
              <option>Panel / breaker</option>
              <option>Generator</option>
              <option>Emergency · 24/7</option>
            </select>
            <textarea rows={4} className="field sm:col-span-2" placeholder="Brief description" />
            <button type="submit" className="btn-copper sm:col-span-2 bg-graphite-800 text-bone px-6 py-4 font-display font-bold tracking-wide mono uppercase text-sm">
              Submit Request
            </button>
          </form>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-graphite-900 text-bone/70 border-t border-copper-500/20">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row gap-3 md:gap-6 md:items-center justify-between text-xs mono uppercase">
          <div className="text-bone">DC Electric LLC · Brooksville · FL</div>
          <div className="flex flex-wrap gap-x-5 gap-y-1">
            <a href="tel:+13527991889" className="hover:text-copper-300">352·799·1889</a>
            <span>BBB A+</span>
            <span>Family owned</span>
            <span>Electrical since 1977</span>
          </div>
          <div>© {new Date().getFullYear()} · WebSuite Digital</div>
        </div>
      </footer>
    </main>
  );
}

/**
 * Heritage-section illustration: tradesman's open panel with bundled wiring.
 * Shows romex coils, conductors landing on a busbar, copper grounding strap.
 * Reads as "this guy actually works with his hands."
 */
function DCWiringScene() {
  return (
    <svg
      viewBox="0 0 400 500"
      preserveAspectRatio="xMidYMid slice"
      className="block w-full h-full"
      role="img"
      aria-label="An electrical panel with bundled wiring, viewed from inside"
    >
      <defs>
        <linearGradient id="dc-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%"  stopColor="#1A1A1F" />
          <stop offset="100%" stopColor="#0E0E12" />
        </linearGradient>
        <linearGradient id="dc-copper" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E89F1F" />
          <stop offset="100%" stopColor="#9F5D2C" />
        </linearGradient>
      </defs>

      <rect width="400" height="500" fill="url(#dc-bg)" />

      {/* faint blueprint grid */}
      <g opacity="0.12" stroke="#C97840">
        {Array.from({ length: 9 }).map((_, i) => (
          <line key={`v${i}`} x1={i * 50} y1="0" x2={i * 50} y2="500" strokeWidth="0.5" />
        ))}
        {Array.from({ length: 11 }).map((_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 50} x2="400" y2={i * 50} strokeWidth="0.5" />
        ))}
      </g>

      {/* panel body */}
      <rect x="40" y="40" width="320" height="420" rx="4" fill="#222228" stroke="#3A3A42" strokeWidth="1" />
      <rect x="52" y="52" width="296" height="396" rx="2" fill="#1A1A1F" stroke="#3A3A42" strokeWidth="0.5" />

      {/* mounting screws */}
      {[
        [56, 56], [344, 56], [56, 444], [344, 444]
      ].map(([cx, cy], i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r="3.5" fill="#3A3A42" />
          <line x1={cx - 2} y1={cy} x2={cx + 2} y2={cy} stroke="#6E6E76" strokeWidth="0.8" />
        </g>
      ))}

      {/* busbar — vertical center */}
      <rect x="195" y="80" width="10" height="340" fill="url(#dc-copper)" />
      <rect x="195" y="80" width="10" height="340" fill="rgba(255,255,255,0.08)" />

      {/* breaker rows — 6 left, 6 right */}
      {Array.from({ length: 6 }).map((_, i) => {
        const y = 100 + i * 50;
        return (
          <g key={i}>
            {/* left breaker */}
            <rect x="80" y={y} width="100" height="30" rx="3" fill="#2A2A2A" stroke="#3A3A42" />
            <rect x="155" y={y + 8} width="20" height="14" rx="2" fill={i === 2 ? "#E89F1F" : "#6E6E76"} />
            <text x="90" y={y + 18} fill="#6E6E76" fontSize="8" fontFamily="monospace">{20 + i * 5}A</text>
            {/* right breaker */}
            <rect x="220" y={y} width="100" height="30" rx="3" fill="#2A2A2A" stroke="#3A3A42" />
            <rect x="225" y={y + 8} width="20" height="14" rx="2" fill={i === 4 ? "#E89F1F" : "#6E6E76"} />
            <text x="260" y={y + 18} fill="#6E6E76" fontSize="8" fontFamily="monospace">{15 + i * 5}A</text>

            {/* connection trace from breaker to busbar */}
            <line x1="175" y1={y + 15} x2="195" y2={y + 15} stroke="#C97840" strokeWidth="1.5" />
            <line x1="205" y1={y + 15} x2="225" y2={y + 15} stroke="#C97840" strokeWidth="1.5" />
          </g>
        );
      })}

      {/* romex cable entering top */}
      <g>
        {/* white romex sheath */}
        <path d="M 95 0 Q 90 30 80 60 Q 75 75 85 85" stroke="#EDEDE8" strokeWidth="6" fill="none" strokeLinecap="round" />
        {/* exposed conductors */}
        <path d="M 88 76 Q 90 80 110 92" stroke="#C97840" strokeWidth="1.4" fill="none" />
        <path d="M 86 80 Q 88 86 110 102" stroke="#FFFFFF" strokeWidth="1.4" fill="none" opacity="0.7" />
        <path d="M 84 84 Q 86 92 110 112" stroke="#222228" strokeWidth="1.4" fill="none" />
      </g>

      <g>
        <path d="M 305 0 Q 312 28 322 60 Q 325 75 315 85" stroke="#EDEDE8" strokeWidth="6" fill="none" strokeLinecap="round" />
        <path d="M 314 76 Q 312 80 290 92" stroke="#C97840" strokeWidth="1.4" fill="none" />
        <path d="M 316 80 Q 314 86 290 102" stroke="#FFFFFF" strokeWidth="1.4" fill="none" opacity="0.7" />
        <path d="M 318 84 Q 316 92 290 112" stroke="#222228" strokeWidth="1.4" fill="none" />
      </g>

      {/* grounding strap exiting bottom */}
      <path d="M 200 420 L 200 460 Q 200 480 210 490" stroke="url(#dc-copper)" strokeWidth="5" fill="none" />

      {/* hand-written panel label sticker */}
      <g transform="translate(80, 432)">
        <rect width="240" height="14" rx="2" fill="#F8F8F6" />
        <text x="6" y="10" fill="#1A1A1F" fontSize="7" fontFamily="monospace" letterSpacing="0.05em">PANEL · MAIN · 200A · HADY</text>
      </g>

      {/* subtle reflection on busbar */}
      <line x1="198" y1="80" x2="198" y2="420" stroke="rgba(255,255,255,0.35)" strokeWidth="1" />
    </svg>
  );
}

function Pill({ label, value }: { label: string; value: string }) {
  return (
    <div className="border border-copper-500/40 bg-graphite-800/60 px-3.5 py-2">
      <div className="mono text-[0.6rem] text-copper-300 uppercase tracking-widest">{label}</div>
      <div className="font-display font-bold text-bone text-sm">{value}</div>
    </div>
  );
}

function Row({ label, value, href }: { label: string; value: string; href?: string }) {
  return (
    <div className="grid grid-cols-4 items-baseline gap-3 border-b border-graphite-800/10 pb-3">
      <dt className="mono text-[0.65rem] text-copper-700 uppercase tracking-widest">{label}</dt>
      <dd className="col-span-3 text-graphite-700">
        {href ? <a href={href} className="hover:text-copper-700 transition">{value}</a> : value}
      </dd>
    </div>
  );
}
