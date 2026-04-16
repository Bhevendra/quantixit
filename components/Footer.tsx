import { Linkedin, Mail, Phone, ArrowUp } from 'lucide-react';
import { LogoMark } from './Logo';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-ink-200 bg-white/60 dark:border-ink-800 dark:bg-ink-950/60">
      <div className="container-xl py-14">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <LogoMark className="h-8 w-8" />
              <span className="font-display text-lg font-bold tracking-tight text-ink-900 dark:text-white">
                Quantix <span className="text-brand-600 dark:text-accent">IT</span>
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-ink-600 dark:text-ink-300">
              Data engineering, business intelligence and AI solutions for modern
              businesses. We turn your data into decisions.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://www.linkedin.com/company/quantix-it/"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Quantix IT on LinkedIn"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-ink-200 text-ink-600 transition-colors hover:border-brand-500 hover:text-brand-600 dark:border-ink-700 dark:text-ink-300 dark:hover:border-accent dark:hover:text-accent"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="mailto:info@quantixit.uk"
                aria-label="Email Quantix IT"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-ink-200 text-ink-600 transition-colors hover:border-brand-500 hover:text-brand-600 dark:border-ink-700 dark:text-ink-300 dark:hover:border-accent dark:hover:text-accent"
              >
                <Mail className="h-4 w-4" />
              </a>
              <a
                href="tel:+447776802047"
                aria-label="Call Quantix IT"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-ink-200 text-ink-600 transition-colors hover:border-brand-500 hover:text-brand-600 dark:border-ink-700 dark:text-ink-300 dark:hover:border-accent dark:hover:text-accent"
              >
                <Phone className="h-4 w-4" />
              </a>
            </div>
          </div>

          <FooterCol
            title="Services"
            links={[
              { label: 'Data Engineering', href: '#services' },
              { label: 'Business Intelligence', href: '#services' },
              { label: 'Advanced Analytics', href: '#services' },
              { label: 'Automation', href: '#services' },
            ]}
          />

          <FooterCol
            title="Company"
            links={[
              { label: 'About', href: '#about' },
              { label: 'Why Us', href: '#why-us' },
              { label: 'Process', href: '#process' },
              { label: 'Case Studies', href: '#case-studies' },
              { label: 'Contact', href: '#contact' },
            ]}
          />

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-ink-900 dark:text-white">
              Get in touch
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-ink-600 dark:text-ink-300">
              <li>
                <a
                  href="mailto:info@quantixit.uk"
                  className="hover:text-brand-600 dark:hover:text-accent"
                >
                  info@quantixit.uk
                </a>
              </li>
              <li>
                <a
                  href="tel:+447776802047"
                  className="hover:text-brand-600 dark:hover:text-accent"
                >
                  +44 7776 802047
                </a>
              </li>
              <li className="pt-2">London, UK</li>
              <li>Bengaluru, India</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-ink-200 pt-6 text-xs text-ink-500 sm:flex-row sm:items-center dark:border-ink-800 dark:text-ink-400">
          <p>© {year} Quantix IT Ltd. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="#top" className="inline-flex items-center gap-1.5 hover:text-brand-600 dark:hover:text-accent">
              Back to top <ArrowUp className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-ink-900 dark:text-white">
        {title}
      </h4>
      <ul className="mt-4 space-y-2.5 text-sm">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              className="text-ink-600 hover:text-brand-600 dark:text-ink-300 dark:hover:text-accent"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
