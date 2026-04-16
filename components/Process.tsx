import { Search, PenTool, Wrench, TrendingUp } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Understand',
    text: 'We start with the business problem — not the tech. Discovery workshops map goals, pain points, data sources and success metrics.',
    deliverables: 'Workshops · KPI mapping · Opportunity brief',
  },
  {
    icon: PenTool,
    title: 'Design',
    text: 'We architect the smallest thing that moves the needle — data model, pipeline, dashboard or ML design — then scope a clear roadmap.',
    deliverables: 'Architecture · Data model · Roadmap',
  },
  {
    icon: Wrench,
    title: 'Build',
    text: 'We ship in weekly increments: pipelines, dashboards, models and automations — with code reviews, tests and documentation baked in.',
    deliverables: 'Pipelines · Dashboards · Models · Tests',
  },
  {
    icon: TrendingUp,
    title: 'Deliver & Scale',
    text: 'We launch, train your team, monitor and iterate. Success is a system that keeps paying you back long after we roll off.',
    deliverables: 'Handover · Monitoring · Ongoing support',
  },
];

export function Process() {
  return (
    <section id="process" className="section">
      <div className="container-xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-eyebrow">How we work</p>
          <h2 className="section-title">
            A simple, <span className="gradient-text">proven 4-step</span> process
          </h2>
          <p className="mt-6 text-lg text-ink-600 dark:text-ink-300">
            No 60-page Gantt charts, no three-month discovery. We get to value
            quickly, then compound it.
          </p>
        </div>

        <div className="mt-16">
          <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <li key={s.title} className="relative">
                  <div className="card card-hover h-full">
                    <div className="flex items-center justify-between">
                      <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-accent-glow text-white shadow-md">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="font-display text-4xl font-bold text-ink-200 dark:text-ink-800">
                        0{i + 1}
                      </span>
                    </div>
                    <h3 className="mt-4 font-display text-lg font-semibold text-ink-900 dark:text-white">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
                      {s.text}
                    </p>
                    <p className="mt-4 text-xs font-medium uppercase tracking-wider text-brand-600 dark:text-accent">
                      {s.deliverables}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
