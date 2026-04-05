export default function SortBar({ sortBy, setSortBy, markAllCompleted }) {
  const baseClass =
    "cursor-pointer rounded-full px-4 py-2.5 text-sm font-semibold transition";

  const activeClass =
    "bg-zinc-900 text-white shadow-md dark:bg-white dark:text-zinc-900";

  const inactiveClass =
    "border border-zinc-200 bg-white/70 text-zinc-600 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900/70 dark:text-zinc-300 dark:hover:bg-zinc-800";

  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setSortBy("manual")}
          className={`${baseClass} ${sortBy === "manual" ? activeClass : inactiveClass}`}
        >
          Manual
        </button>

        <button
          onClick={() => setSortBy("newest")}
          className={`${baseClass} ${sortBy === "newest" ? activeClass : inactiveClass}`}
        >
          Newest
        </button>

        <button
          onClick={() => setSortBy("oldest")}
          className={`${baseClass} ${sortBy === "oldest" ? activeClass : inactiveClass}`}
        >
          Oldest
        </button>

        <button
          onClick={() => setSortBy("priority")}
          className={`${baseClass} ${sortBy === "priority" ? activeClass : inactiveClass}`}
        >
          Priority
        </button>

        <button
          onClick={() => setSortBy("dueDate")}
          className={`${baseClass} ${sortBy === "dueDate" ? activeClass : inactiveClass}`}
        >
          Due date
        </button>
      </div>

      <button
        onClick={markAllCompleted}
        className="cursor-pointer rounded-2xl border border-zinc-200 bg-white/80 px-4 py-2.5 text-sm font-semibold text-zinc-700 shadow-sm backdrop-blur transition hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900/80 dark:text-zinc-200 dark:hover:bg-zinc-800"
      >
        Mark all completed
      </button>
    </div>
  );
}
