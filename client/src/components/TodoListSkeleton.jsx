export default function TodoListSkeleton() {
  return (
    <div className="space-y-3">
      {Array.from({ length: 4 }).map((_, index) => (
        <div
          key={index}
          className="animate-pulse rounded-3xl border border-zinc-200 bg-white/70 p-4 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/70"
        >
          <div className="flex items-start gap-3">
            <div className="mt-1 h-5 w-5 rounded-full bg-zinc-200 dark:bg-slate-700" />

            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <div className="h-5 w-40 rounded-full bg-zinc-200 dark:bg-slate-700" />
                <div className="h-6 w-20 rounded-full bg-zinc-200 dark:bg-slate-700" />
                <div className="h-6 w-24 rounded-full bg-zinc-200 dark:bg-slate-700" />
              </div>

              <div className="mt-3 space-y-2">
                <div className="h-4 w-full rounded-full bg-zinc-200 dark:bg-slate-700" />
                <div className="h-4 w-11/12 rounded-full bg-zinc-200 dark:bg-slate-700" />
                <div className="h-4 w-8/12 rounded-full bg-zinc-200 dark:bg-slate-700" />
              </div>

              <div className="mt-3 h-6 w-32 rounded-full bg-zinc-200 dark:bg-slate-700" />
            </div>

            <div className="hidden gap-2 sm:flex">
              <div className="h-9 w-16 rounded-xl bg-zinc-200 dark:bg-slate-700" />
              <div className="h-9 w-16 rounded-xl bg-zinc-200 dark:bg-slate-700" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
