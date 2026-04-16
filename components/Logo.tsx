import Link from 'next/link';

export function Logo({ className = '' }: { className?: string }) {
  return (
    <Link
      href="#top"
      aria-label="Quantix IT Ltd. — Home"
      className={`group inline-flex items-center gap-2.5 ${className}`}
    >
      <LogoMark className="h-9 w-9" />
      <span className="font-display text-xl font-bold tracking-tight text-ink-900 dark:text-white">
        Quantix
        <span className="text-brand-600 dark:text-accent"> IT</span>
      </span>
    </Link>
  );
}

export function LogoMark({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      role="img"
    >
      <defs>
        <linearGradient id="qx-arrow" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#22d3ee" />
        </linearGradient>
      </defs>
      {/* Circuit nodes */}
      <g fill="currentColor" className="text-brand-900 dark:text-white">
        <circle cx="14" cy="28" r="3.5" />
        <line
          x1="14"
          y1="28"
          x2="14"
          y2="44"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <circle cx="24" cy="18" r="3.5" />
        <line
          x1="24"
          y1="18"
          x2="24"
          y2="44"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <circle cx="34" cy="24" r="3.5" />
        <line
          x1="34"
          y1="24"
          x2="34"
          y2="44"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <circle cx="44" cy="14" r="3.5" />
        <line
          x1="44"
          y1="14"
          x2="44"
          y2="44"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </g>
      {/* Rising arrow */}
      <path
        d="M8 54 L22 42 L30 48 L42 34 L50 40 L58 22"
        stroke="url(#qx-arrow)"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M50 22 L58 22 L58 30"
        stroke="url(#qx-arrow)"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
