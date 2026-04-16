import {
  Database,
  LineChart,
  BrainCircuit,
  Workflow,
  ArrowRight,
  Check,
} from 'lucide-react';

const services = [
  {
    icon: Database,
    title: 'Data Engineering',
    subtitle: 'Foundations that scale',
    description:
      'Modern data platforms on Azure, Databricks and Microsoft Fabric. We design lakehouse architectures, build reliable pipelines and bring every source of truth into one governed home.',
    bullets: [
      'Azure Data Factory, Synapse & Databricks',
      'Medallion lakehouse on Delta / Fabric',
      'Event-driven & batch ingestion',
      'CI/CD, monitoring & data quality',
    ],
  },
  {
    icon: LineChart,
    title: 'Business Intelligence',
    subtitle: 'Clarity, not clutter',
    description:
      'Executive dashboards, self-service models and automated reporting in Power BI. We replace Excel chaos with a single, trusted layer your whole business can act on.',
    bullets: [
      'Power BI dashboards & paginated reports',
      'Star-schema models with DAX best practice',
      'Row-level security & governed workspaces',
      'Automated refresh & subscription delivery',
    ],
  },
  {
    icon: BrainCircuit,
    title: 'Advanced Analytics & AI',
    subtitle: 'From hindsight to foresight',
    description:
      'Forecasting, customer segmentation, churn and demand models. We design production-ready ML and GenAI solutions that are explainable, monitored and tied to a measurable KPI.',
    bullets: [
      'Time-series forecasting & demand planning',
      'Segmentation, churn & propensity models',
      'LLM-powered assistants & document AI',
      'MLOps, model monitoring & drift alerts',
    ],
  },
  {
    icon: Workflow,
    title: 'Automation Solutions',
    subtitle: 'Hours back every week',
    description:
      'API integrations, workflow automation and internal tools that replace repetitive manual work. We connect the systems you already pay for — and make them talk to each other.',
    bullets: [
      'API & webhook integrations',
      'Power Automate / Python workflows',
      'Internal tools & ops dashboards',
      'RPA for legacy systems',
    ],
  },
];

export function Services() {
  return (
    <section id="services" className="section">
      <div className="container-xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-eyebrow">What we do</p>
          <h2 className="section-title">
            End-to-end services across the{' '}
            <span className="gradient-text">data value chain</span>
          </h2>
          <p className="mt-6 text-lg text-ink-600 dark:text-ink-300">
            One team for your platform, your dashboards and your AI — no
            hand-offs, no finger-pointing, no surprises.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <article
                key={s.title}
                className="group card card-hover relative overflow-hidden"
              >
                <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-brand-500/10 to-accent/10 blur-2xl transition-opacity duration-500 group-hover:opacity-80 dark:from-brand-500/15 dark:to-accent/15" />

                <div className="flex items-start gap-4">
                  <div className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-accent-glow text-white shadow-lg shadow-brand-600/25">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-accent">
                      {s.subtitle}
                    </p>
                    <h3 className="font-display text-2xl font-bold text-ink-900 dark:text-white">
                      {s.title}
                    </h3>
                  </div>
                </div>

                <p className="mt-5 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
                  {s.description}
                </p>

                <ul className="mt-5 space-y-2.5">
                  {s.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2.5 text-sm text-ink-700 dark:text-ink-200"
                    >
                      <span className="mt-0.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent-glow dark:text-accent">
                        <Check className="h-3.5 w-3.5" strokeWidth={3} />
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 transition-all hover:gap-2.5 dark:text-accent"
                >
                  Learn more <ArrowRight className="h-4 w-4" />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
