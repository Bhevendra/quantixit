'use client';

import { ArrowRight, Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 sm:pt-40">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute inset-x-0 top-0 h-[700px] bg-hero-glow" />
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-brand-500/15 blur-3xl dark:bg-brand-600/20" />
        <div className="absolute -right-24 top-32 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
      </div>

      <div className="container-xl">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white/70 px-3.5 py-1.5 text-xs font-semibold text-ink-700 shadow-sm backdrop-blur dark:border-ink-800 dark:bg-ink-900/50 dark:text-ink-200 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-glow" />
            </span>
            Data Engineering · BI · AI — built by experienced practitioners
          </div>

          <h1 className="font-display text-5xl font-bold tracking-tight text-ink-900 sm:text-6xl lg:text-7xl dark:text-white animate-fade-up">
            Transform Your Data
            <br />
            Into <span className="gradient-text">Decisions</span>
          </h1>

          <p
            className="mx-auto mt-6 max-w-2xl text-lg text-ink-600 dark:text-ink-300 animate-fade-up"
            style={{ animationDelay: '120ms' }}
          >
            We build scalable data systems, powerful dashboards, and AI-driven
            solutions — so your business runs on insights, not instincts.
          </p>

          <div
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row animate-fade-up"
            style={{ animationDelay: '240ms' }}
          >
            <a href="#contact" className="btn-primary">
              Book a Consultation
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#services" className="btn-secondary">
              View Services
            </a>
          </div>

          <div
            className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-ink-500 animate-fade-in dark:text-ink-400"
            style={{ animationDelay: '360ms' }}
          >
            <span className="inline-flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-accent" />
              Azure · Databricks · Fabric
            </span>
            <span className="hidden sm:inline">•</span>
            <span>Power BI · Python · SQL</span>
            <span className="hidden sm:inline">•</span>
            <span>London · Bengaluru</span>
          </div>
        </div>

        {/* Stylised dashboard preview */}
        <div
          className="relative mx-auto mt-16 max-w-5xl animate-fade-up"
          style={{ animationDelay: '500ms' }}
        >
          <div className="rounded-2xl border border-ink-200 bg-white/80 p-3 shadow-2xl shadow-brand-600/10 backdrop-blur dark:border-ink-800 dark:bg-ink-900/60 dark:shadow-accent/10">
            <HeroPreview />
          </div>
          <div className="pointer-events-none absolute -inset-x-8 -bottom-12 h-40 bg-gradient-to-b from-transparent to-white dark:to-ink-950" />
        </div>
      </div>
    </section>
  );
}

function HeroPreview() {
  return (
    <div className="rounded-xl bg-gradient-to-br from-white to-ink-50 p-6 dark:from-ink-950 dark:to-ink-900">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
        </div>
        <div className="text-xs font-medium text-ink-500 dark:text-ink-400">
          quantix — executive overview
        </div>
        <div className="w-16" />
      </div>

      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Stat label="Revenue" value="£4.82M" delta="+12.4%" positive />
        <Stat label="Active Pipelines" value="127" delta="+9 this wk" positive />
        <Stat label="Forecast Accuracy" value="94.3%" delta="+2.1 pp" positive />
      </div>

      <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="col-span-2 rounded-lg border border-ink-200 bg-white p-4 dark:border-ink-800 dark:bg-ink-950">
          <div className="mb-3 flex items-center justify-between">
            <div className="text-xs font-semibold text-ink-600 dark:text-ink-300">
              Weekly revenue vs. forecast
            </div>
            <div className="text-xs text-ink-400">Last 12 weeks</div>
          </div>
          <Sparkline />
        </div>
        <div className="rounded-lg border border-ink-200 bg-white p-4 dark:border-ink-800 dark:bg-ink-950">
          <div className="mb-3 text-xs font-semibold text-ink-600 dark:text-ink-300">
            Channel mix
          </div>
          <div className="space-y-2.5">
            <Bar label="Organic" pct={58} />
            <Bar label="Paid" pct={27} />
            <Bar label="Referral" pct={11} />
            <Bar label="Email" pct={4} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Stat({
  label,
  value,
  delta,
  positive,
}: {
  label: string;
  value: string;
  delta: string;
  positive?: boolean;
}) {
  return (
    <div className="rounded-lg border border-ink-200 bg-white p-4 dark:border-ink-800 dark:bg-ink-950">
      <div className="text-xs font-medium uppercase tracking-wider text-ink-500 dark:text-ink-400">
        {label}
      </div>
      <div className="mt-1 font-display text-2xl font-bold text-ink-900 dark:text-white">
        {value}
      </div>
      <div
        className={`mt-0.5 text-xs font-medium ${
          positive ? 'text-emerald-500' : 'text-rose-500'
        }`}
      >
        {delta}
      </div>
    </div>
  );
}

function Bar({ label, pct }: { label: string; pct: number }) {
  return (
    <div>
      <div className="mb-1 flex items-center justify-between text-xs text-ink-600 dark:text-ink-300">
        <span>{label}</span>
        <span className="font-medium">{pct}%</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-ink-100 dark:bg-ink-900">
        <div
          className="h-full rounded-full bg-gradient-to-r from-brand-500 to-accent"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

function Sparkline() {
  // Static SVG sparkline (no hydration mismatch)
  const points = [
    [0, 40],
    [30, 36],
    [60, 42],
    [90, 30],
    [120, 34],
    [150, 24],
    [180, 28],
    [210, 18],
    [240, 22],
    [270, 12],
    [300, 16],
    [330, 6],
  ];
  const actualPath = points.map((p, i) => (i === 0 ? `M${p[0]},${p[1]}` : `L${p[0]},${p[1]}`)).join(' ');
  const forecast = [
    [0, 44],
    [30, 40],
    [60, 38],
    [90, 34],
    [120, 32],
    [150, 28],
    [180, 26],
    [210, 22],
    [240, 20],
    [270, 16],
    [300, 14],
    [330, 10],
  ];
  const forecastPath = forecast.map((p, i) => (i === 0 ? `M${p[0]},${p[1]}` : `L${p[0]},${p[1]}`)).join(' ');

  return (
    <svg viewBox="0 0 340 60" className="h-28 w-full">
      <defs>
        <linearGradient id="sparkFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="qx-line" x1="0%" x2="100%" y1="0%" y2="0%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#22d3ee" />
        </linearGradient>
      </defs>
      <path
        d={`${actualPath} L330,60 L0,60 Z`}
        fill="url(#sparkFill)"
        opacity="0.7"
      />
      <path
        d={forecastPath}
        stroke="currentColor"
        className="text-ink-300 dark:text-ink-700"
        strokeDasharray="3 4"
        strokeWidth="1.6"
        fill="none"
      />
      <path
        d={actualPath}
        stroke="url(#qx-line)"
        strokeWidth="2.2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
