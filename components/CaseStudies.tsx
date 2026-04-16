import { Clock, TrendingUp, Zap } from 'lucide-react';

const studies = [
  {
    icon: Clock,
    metric: '6+',
    unit: 'hours/week saved',
    title: 'Automated weekly reporting for an ops team',
    text: 'Replaced a manual Excel-to-email pipeline with an automated Power BI delivery flow — freeing the analytics team to focus on insights rather than refreshing workbooks.',
    tag: 'Automation · BI',
  },
  {
    icon: TrendingUp,
    metric: '94%',
    unit: 'forecast accuracy',
    title: 'Predictive demand model for a mid-sized retailer',
    text: 'Designed a time-series forecasting pipeline that significantly improved weekly demand accuracy and reduced over-stock vs. the previous rule-based method.',
    tag: 'ML · Forecasting',
  },
  {
    icon: Zap,
    metric: '3x',
    unit: 'faster decisions',
    title: 'Lakehouse + executive dashboard rollout',
    text: 'Consolidated multiple source systems into a governed medallion lakehouse on Azure and launched an executive dashboard used in weekly leadership reviews.',
    tag: 'Data Eng · BI',
  },
];

export function CaseStudies() {
  return (
    <section id="case-studies" className="section">
      <div className="container-xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-eyebrow">Results we deliver</p>
          <h2 className="section-title">
            Outcomes that <span className="gradient-text">speak for themselves</span>
          </h2>
          <p className="mt-6 text-lg text-ink-600 dark:text-ink-300">
            A selection of engagement patterns based on the kind of work we do —
            from automation to forecasting to cloud migrations.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {studies.map((c) => {
            const Icon = c.icon;
            return (
              <article
                key={c.title}
                className="card card-hover relative overflow-hidden"
              >
                <Icon className="h-6 w-6 text-accent" />
                <div className="mt-6 font-display text-5xl font-bold text-ink-900 dark:text-white">
                  {c.metric}
                </div>
                <div className="text-sm font-medium text-brand-600 dark:text-accent">
                  {c.unit}
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-ink-900 dark:text-white">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
                  {c.text}
                </p>
                <span className="chip mt-5">{c.tag}</span>
              </article>
            );
          })}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-ink-500 dark:text-ink-400">
          Want a detailed reference or a scoped discovery call?{' '}
          <a
            href="#contact"
            className="font-semibold text-brand-600 underline-offset-4 hover:underline dark:text-accent"
          >
            Get in touch
          </a>{' '}
          and we'll walk you through the work.
        </p>
      </div>
    </section>
  );
}
