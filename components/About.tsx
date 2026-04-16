import { Database, BarChart3, Brain, Zap } from 'lucide-react';

const pillars = [
  {
    icon: Database,
    title: 'Data Engineering',
    text: 'Reliable pipelines, lakehouse architectures and cloud data platforms that scale with your business.',
  },
  {
    icon: BarChart3,
    title: 'Business Intelligence',
    text: 'Decision-ready dashboards and reporting automation that replace spreadsheets with clarity.',
  },
  {
    icon: Brain,
    title: 'AI & Predictive Analytics',
    text: 'Forecasting, segmentation and ML models that move you from hindsight to foresight.',
  },
  {
    icon: Zap,
    title: 'Automation & Impact',
    text: 'We measure success in hours saved, revenue unlocked and risk reduced — not lines of code.',
  },
];

export function About() {
  return (
    <section id="about" className="section">
      <div className="container-xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-eyebrow">About Quantix IT</p>
          <h2 className="section-title">
            We turn messy data into <span className="gradient-text">clear decisions</span>
          </h2>
          <p className="mt-6 text-lg text-ink-600 dark:text-ink-300">
            Quantix IT Ltd. is a modern data and AI consultancy helping ambitious
            teams across the UK, India and Europe unlock the value hidden in their
            data. We combine deep engineering with practical analytics and AI —
            delivering platforms, insights and automation that move the needle.
          </p>
          <p className="mt-4 text-base text-ink-500 dark:text-ink-400">
            From Azure-based lakehouses and Power BI rollouts to predictive models
            and workflow automation, we design systems that reduce manual work,
            lower cost-to-serve, and help leaders see what's coming next.
          </p>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <div key={p.title} className="card card-hover">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-accent text-white shadow-md shadow-brand-600/20">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-semibold text-ink-900 dark:text-white">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
                  {p.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
