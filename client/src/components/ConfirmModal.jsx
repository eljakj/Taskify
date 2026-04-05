import { useEffect } from "react";

export default function ConfirmModal({
  isOpen,
  title,
  message,
  confirmText = "Confirm",
  cancelText = "Cancel",
  onConfirm,
  onCancel,
  isDanger = false,
  isLoading = false,
}) {
  useEffect(() => {
    if (!isOpen || isLoading) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onCancel();
      }

      if (event.key === "Enter") {
        onConfirm();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, isLoading, onCancel, onConfirm]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/55 px-4 backdrop-blur-sm"
      onClick={!isLoading ? onCancel : undefined}
    >
      <div
        className="w-full max-w-md animate-[modalIn_180ms_ease-out] rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-2xl dark:border-slate-800 dark:bg-slate-900"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="mb-4 flex items-start gap-3">
          <div
            className={`mt-0.5 flex h-11 w-11 items-center justify-center rounded-2xl text-lg font-bold ${
              isDanger
                ? "bg-red-100 text-red-600 dark:bg-red-500/10 dark:text-red-300"
                : "bg-indigo-100 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-300"
            }`}
          >
            {isDanger ? "!" : "?"}
          </div>

          <div>
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white">
              {title}
            </h2>

            <p className="mt-2 text-sm leading-6 text-zinc-500 dark:text-slate-400">
              {message}
            </p>
          </div>
        </div>

        <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
          <button
            type="button"
            onClick={onCancel}
            disabled={isLoading}
            className="cursor-pointer rounded-2xl border border-zinc-200 px-4 py-2.5 text-sm font-semibold text-zinc-700 transition hover:bg-zinc-100 disabled:cursor-not-allowed disabled:opacity-60 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            {cancelText}
          </button>

          <button
            type="button"
            onClick={onConfirm}
            disabled={isLoading}
            className={`cursor-pointer rounded-2xl px-4 py-2.5 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-70 ${
              isDanger
                ? "bg-red-500 shadow-red-500/20 dark:bg-red-600"
                : "bg-indigo-600 shadow-indigo-600/20"
            }`}
          >
            {isLoading ? `${confirmText}...` : confirmText}
          </button>
        </div>
      </div>
    </div>
  );
}
