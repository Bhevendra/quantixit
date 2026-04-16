export function TrustBar() {
  const stack = [
    'Microsoft Azure',
    'Databricks',
    'Microsoft Fabric',
    'Power BI',
    'Snowflake',
    'Python',
    'dbt',
    'SQL Server',
  ];

  return (
    <section aria-label="Technology stack" className="py-14">
      <div className="container-xl">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-ink-500 dark:text-ink-400">
          Built with the modern data stack
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {stack.map((name) => (
            <span
              key={name}
              className="font-display text-sm font-semibold tracking-wide text-ink-500 transition-colors hover:text-ink-800 dark:text-ink-400 dark:hover:text-white sm:text-base"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
