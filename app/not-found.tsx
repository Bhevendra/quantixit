import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Logo } from '@/components/Logo';

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid" />
      <div className="mb-10">
        <Logo />
      </div>
      <p className="font-display text-6xl font-bold tracking-tight text-ink-900 sm:text-7xl dark:text-white">
        404
      </p>
      <h1 className="mt-3 font-display text-2xl font-bold text-ink-900 dark:text-white">
        Page not found
      </h1>
      <p className="mt-3 max-w-md text-sm text-ink-600 dark:text-ink-300">
        The page you're looking for doesn't exist or has moved. Let's get you
        back on track.
      </p>
      <Link href="/" className="btn-primary mt-8">
        <ArrowLeft className="h-4 w-4" />
        Back to home
      </Link>
    </main>
  );
}
