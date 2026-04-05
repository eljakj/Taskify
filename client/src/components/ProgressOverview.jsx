export default function ProgressOverview({
  total,
  completed,
  active,
  overdue,
}) {
  const progress = total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <div className="mb-6 rounded-[2rem] border border-zinc-200 bg-white/80 p-5 shadow-sm backdrop-blur dark:border-slate-700 dark:bg-slate-900/70">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500 dark:text-slate-400">
            Progress
          </p>

          <h2 className="mt-2 text-2xl font-black tracking-tight text-zinc-900 dark:text-white">
            {completed} of {total} tasks completed
          </h2>

          <p className="mt-2 text-sm text-zinc-500 dark:text-slate-400">
            {active} active · {overdue} overdue
          </p>
        </div>

        <div className="flex items-center gap-3 self-start rounded-2xl border border-indigo-200 bg-indigo-50 px-4 py-3 text-indigo-700 dark:border-indigo-500/20 dark:bg-indigo-500/10 dark:text-indigo-300">
          <span className="text-2xl font-black">{progress}%</span>
          <span className="text-sm font-semibold">done</span>
        </div>
      </div>

      <div className="mt-5 h-3 overflow-hidden rounded-full bg-zinc-200 dark:bg-slate-800">
        <div
          className="h-full rounded-full bg-indigo-600 transition-all duration-500 dark:bg-indigo-500"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
