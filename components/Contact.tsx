'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Send, CheckCircle2, Loader2 } from 'lucide-react';

const SERVICES = [
  'Data Engineering',
  'Business Intelligence (Power BI)',
  'Advanced Analytics & AI',
  'Automation Solutions',
  'Not sure — need advice',
];

type Status = 'idle' | 'loading' | 'success' | 'error';

export function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setError(null);

    const formData = new FormData(e.currentTarget);
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

    if (!accessKey || accessKey === 'your-web3forms-access-key-here') {
      setStatus('error');
      setError(
        'Form is not configured yet. Set NEXT_PUBLIC_WEB3FORMS_KEY in your environment variables.'
      );
      return;
    }

    formData.append('access_key', accessKey);
    formData.append('subject', 'New lead from quantixit.in');
    formData.append('from_name', 'Quantix IT Website');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus('error');
        setError(data.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setStatus('error');
      setError('Network error. Please try again or email us directly.');
    }
  };

  return (
    <section id="contact" className="section relative">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-20 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="container-xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-eyebrow">Get in touch</p>
          <h2 className="section-title">
            Start your <span className="gradient-text">data journey</span> today
          </h2>
          <p className="mt-6 text-lg text-ink-600 dark:text-ink-300">
            Tell us about your project or challenge. We typically respond within
            one business day with a clear next step — usually a free
            30-minute discovery call.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl gap-10 lg:grid-cols-[1fr_1.3fr]">
          {/* Left: contact details */}
          <div>
            <div className="card">
              <h3 className="font-display text-xl font-semibold text-ink-900 dark:text-white">
                Prefer to reach out directly?
              </h3>
              <p className="mt-2 text-sm text-ink-600 dark:text-ink-300">
                We read every message. For urgent queries, email or call us.
              </p>

              <ul className="mt-6 space-y-4">
                <ContactItem
                  icon={Mail}
                  label="Email"
                  value="hr-uk@quantixit.in"
                  href="mailto:hr-uk@quantixit.in"
                />
                <ContactItem
                  icon={Phone}
                  label="Phone"
                  value="+44 7776 802047"
                  href="tel:+447776802047"
                />
                <ContactItem
                  icon={Linkedin}
                  label="LinkedIn"
                  value="/company/quantix-it"
                  href="https://www.linkedin.com/company/quantix-it/"
                  external
                />
              </ul>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <LocationCard city="London" country="United Kingdom" />
                <LocationCard city="Bengaluru" country="India" />
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-dashed border-ink-200 p-5 text-sm text-ink-600 dark:border-ink-800 dark:text-ink-300">
              <p className="font-semibold text-ink-900 dark:text-white">
                What happens next?
              </p>
              <ol className="mt-3 space-y-2 text-ink-600 dark:text-ink-300">
                <li>1. We review your brief within 1 business day.</li>
                <li>2. Quick 30-min discovery call — no sales pressure.</li>
                <li>3. You get a clear scope, timeline and price.</li>
              </ol>
            </div>
          </div>

          {/* Right: form */}
          <div className="card">
            {status === 'success' ? (
              <div className="flex h-full flex-col items-center justify-center py-12 text-center">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-500">
                  <CheckCircle2 className="h-7 w-7" />
                </div>
                <h3 className="mt-5 font-display text-2xl font-bold text-ink-900 dark:text-white">
                  Thanks — message received
                </h3>
                <p className="mt-2 max-w-md text-sm text-ink-600 dark:text-ink-300">
                  We'll get back to you within one business day at the email you
                  provided. If it's urgent, feel free to call{' '}
                  <a
                    href="tel:+447776802047"
                    className="font-semibold text-brand-600 dark:text-accent"
                  >
                    +44 7776 802047
                  </a>
                  .
                </p>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="btn-secondary mt-6"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Honeypot */}
                <input
                  type="checkbox"
                  name="botcheck"
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field
                    label="Full name"
                    name="name"
                    placeholder="Jane Smith"
                    required
                  />
                  <Field
                    label="Work email"
                    name="email"
                    type="email"
                    placeholder="jane@acme.com"
                    required
                  />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field
                    label="Company"
                    name="company"
                    placeholder="Acme Ltd."
                  />
                  <div>
                    <label
                      htmlFor="service"
                      className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-ink-500 dark:text-ink-400"
                    >
                      Service interested in
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      className="w-full rounded-lg border border-ink-200 bg-white px-3.5 py-2.5 text-sm text-ink-900 outline-none transition-colors focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 dark:border-ink-700 dark:bg-ink-950 dark:text-white dark:focus:border-accent dark:focus:ring-accent/20"
                    >
                      <option value="">Select a service…</option>
                      {SERVICES.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-ink-500 dark:text-ink-400"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us about your project, goals, timeline and any tools you're using today…"
                    className="w-full rounded-lg border border-ink-200 bg-white px-3.5 py-3 text-sm text-ink-900 outline-none transition-colors placeholder:text-ink-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 dark:border-ink-700 dark:bg-ink-950 dark:text-white dark:placeholder:text-ink-500 dark:focus:border-accent dark:focus:ring-accent/20"
                  />
                </div>

                <label className="flex items-start gap-2.5 text-xs text-ink-500 dark:text-ink-400">
                  <input
                    type="checkbox"
                    required
                    className="mt-0.5 h-4 w-4 rounded border-ink-300 text-brand-600 focus:ring-brand-500/30 dark:border-ink-700 dark:bg-ink-900"
                  />
                  <span>
                    I agree to Quantix IT contacting me about my enquiry. We
                    never share your details.
                  </span>
                </label>

                {error && (
                  <div className="rounded-lg border border-rose-300/50 bg-rose-500/10 p-3 text-sm text-rose-700 dark:border-rose-500/30 dark:text-rose-300">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      Start Your Project
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = 'text',
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-ink-500 dark:text-ink-400"
      >
        {label}
        {required && <span className="ml-0.5 text-brand-500">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-lg border border-ink-200 bg-white px-3.5 py-2.5 text-sm text-ink-900 outline-none transition-colors placeholder:text-ink-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 dark:border-ink-700 dark:bg-ink-950 dark:text-white dark:placeholder:text-ink-500 dark:focus:border-accent dark:focus:ring-accent/20"
      />
    </div>
  );
}

function ContactItem({
  icon: Icon,
  label,
  value,
  href,
  external,
}: {
  icon: any;
  label: string;
  value: string;
  href: string;
  external?: boolean;
}) {
  return (
    <li>
      <a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noreferrer noopener' : undefined}
        className="group flex items-center gap-3.5 rounded-lg p-2 -m-2 transition-colors hover:bg-ink-100 dark:hover:bg-ink-900"
      >
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-brand-600 to-accent-glow text-white shadow-sm">
          <Icon className="h-4 w-4" />
        </span>
        <span className="flex flex-col">
          <span className="text-xs font-medium uppercase tracking-wider text-ink-500 dark:text-ink-400">
            {label}
          </span>
          <span className="text-sm font-medium text-ink-800 group-hover:text-brand-600 dark:text-ink-100 dark:group-hover:text-accent">
            {value}
          </span>
        </span>
      </a>
    </li>
  );
}

function LocationCard({ city, country }: { city: string; country: string }) {
  return (
    <div className="rounded-lg border border-ink-200 bg-white/60 p-3.5 dark:border-ink-800 dark:bg-ink-950/60">
      <MapPin className="h-4 w-4 text-accent" />
      <div className="mt-2 font-display text-sm font-bold text-ink-900 dark:text-white">
        {city}
      </div>
      <div className="text-xs text-ink-500 dark:text-ink-400">{country}</div>
    </div>
  );
}
