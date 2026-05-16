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
              <div className="border border-copper-500/20 p-6 relative">
                <div className="flex items-center justify-between text-xs mono text-copper-300 uppercase tracking-widest">
                  <span>Panel · 200A</span>
                  <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 dot-pulse" /> Live
                  </span>
                </div>

                <svg viewBox="0 0 280 160" className="mt-5 w-full">
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

                <div className="mt-4 flex items-center gap-3">
                  <span className="mono text-[0.6rem] text-copper-300">EC13006482</span>
                  <span className="mono text-[0.6rem] text-bone/40">·</span>
                  <span className="mono text-[0.6rem] text-bone/40">200A SVC</span>
                </div>
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
              <div data-reveal className="eyebrow">[ 01 · SERVICES ]</div>
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
                <div className="flex items-baseline justify-between">
                  <span className="mono text-xs text-copper-700">[ {s.n} ]</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-copper-500" />
                </div>
                <div className="mt-4 font-display font-bold text-lg text-graphite-800">{s.t}</div>
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
            <div data-reveal className="eyebrow !text-copper-300">[ 02 · HERITAGE ]</div>
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
              <img
                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=700&q=80"
                alt="Industrial wiring detail"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 24/7 Emergency ── */}
      <section id="emergency" className="bg-bone">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-24">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7">
              <div data-reveal className="eyebrow">[ 03 · EMERGENCY ]</div>
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
          <div data-reveal className="eyebrow">[ 04 · CUSTOMERS ]</div>
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
                <div className="mono text-xs text-copper-700">[ # {String(i + 1).padStart(2, '0')} ]</div>
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
            { n: 'FAM',  l: 'OWNED · OPERATED'   },
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
            <div data-reveal className="eyebrow">[ 05 · CONTACT ]</div>
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
