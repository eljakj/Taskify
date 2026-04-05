export default function ErrorState({
  title = "Something went wrong",
  message = "We could not load your tasks.",
  onRetry,
  isRetrying = false,
}) {
  return (
    <div className="rounded-3xl border border-red-200 bg-red-50/80 p-6 shadow-sm backdrop-blur dark:border-red-500/20 dark:bg-red-500/10">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-red-100 text-xl text-red-600 dark:bg-red-500/10 dark:text-red-300">
            !
          </div>

          <h3 className="text-lg font-bold text-red-700 dark:text-red-300">
            {title}
          </h3>

          <p className="mt-2 text-sm leading-6 text-red-600/90 dark:text-red-200/90">
            {message}
          </p>
        </div>

        <button
          type="button"
          onClick={onRetry}
          disabled={isRetrying}
          className="cursor-pointer rounded-2xl bg-red-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70 dark:bg-red-600"
        >
          {isRetrying ? "Retrying..." : "Retry"}
        </button>
      </div>
    </div>
  );
}
