'use client';

import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';
import { ThemeToggle } from './ThemeToggle';

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#why-us', label: 'Why Us' },
  { href: '#process', label: 'Process' },
  { href: '#case-studies', label: 'Case Studies' },
  { href: '#contact', label: 'Contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      id="top"
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-ink-200/60 bg-white/80 backdrop-blur-xl dark:border-ink-800/60 dark:bg-ink-950/80'
          : 'bg-transparent'
      }`}
    >
      <div className="container-xl flex h-16 items-center justify-between">
        <Logo />

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-ink-600 transition-colors hover:text-brand-600 dark:text-ink-300 dark:hover:text-accent"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <a href="#contact" className="btn-primary">
            Book a Consultation
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-ink-200 bg-white/60 text-ink-800 dark:border-ink-700 dark:bg-ink-900/60 dark:text-ink-100"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden">
          <div className="container-xl pb-5 pt-2">
            <div className="rounded-2xl border border-ink-200 bg-white/95 p-4 shadow-xl backdrop-blur dark:border-ink-800 dark:bg-ink-950/95">
              <nav className="flex flex-col" aria-label="Mobile">
                {NAV_LINKS.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-2.5 text-sm font-medium text-ink-700 hover:bg-ink-100 dark:text-ink-200 dark:hover:bg-ink-900"
                  >
                    {l.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="btn-primary mt-3"
                >
                  Book a Consultation
                </a>
              </nav>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
