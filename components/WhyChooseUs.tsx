import { Layers, Target, Rocket, ShieldCheck, Globe2, Handshake } from 'lucide-react';

const reasons = [
  {
    icon: Layers,
    title: 'Full-stack data expertise',
    text: 'We combine data engineering, BI and AI under one roof — so your platform, dashboards and models all speak the same language.',
  },
  {
    icon: Target,
    title: 'Outcomes, not output',
    text: 'Every engagement is tied to a business KPI — hours saved, revenue unlocked, decisions accelerated. We measure ourselves on what moves.',
  },
  {
    icon: Rocket,
    title: 'Real-world experience',
    text: 'Our team has shipped cloud migrations, BI rollouts and automation projects that removed 6+ hours/week of manual work for real teams.',
  },
  {
    icon: ShieldCheck,
    title: 'Production-grade by default',
    text: 'Governance, security, CI/CD, monitoring and documentation baked in — not bolted on. You inherit clean, maintainable systems.',
  },
  {
    icon: Globe2,
    title: 'UK + India delivery',
    text: 'Dual-location teams in London and Bengaluru give you senior strategy, hands-on delivery and favourable economics — without compromise.',
  },
  {
    icon: Handshake,
    title: 'Partner, not a vendor',
    text: 'We work as an extension of your team. Transparent communication, shared docs, shared calendars, and a bias for shipping.',
  },
];

export function WhyChooseUs() {
  return (
    <section id="why-us" className="section relative">
      {/* soft background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500/5 blur-3xl dark:bg-brand-600/10" />
      </div>

      <div className="container-xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-eyebrow">Why choose us</p>
          <h2 className="section-title">
            The rare team that does{' '}
            <span className="gradient-text">BI, engineering & AI</span> — well
          </h2>
          <p className="mt-6 text-lg text-ink-600 dark:text-ink-300">
            Most consultancies are strong in one discipline and weak in the
            others. We believe the value is at the seams — where clean data,
            clear dashboards and smart models reinforce each other.
          </p>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r) => {
            const Icon = r.icon;
            return (
              <div key={r.title} className="card card-hover">
                <Icon className="h-6 w-6 text-accent" />
                <h3 className="mt-4 font-display text-lg font-semibold text-ink-900 dark:text-white">
                  {r.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
                  {r.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
