import { useState } from "react";

export default function NotificationCenter({
  notifications,
  dismissNotification,
  clearNotifications,
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="relative flex h-14 w-14 cursor-pointer items-center justify-center rounded-full border border-zinc-200 bg-white/85 text-zinc-700 shadow-sm transition hover:-translate-y-0.5 hover:bg-white dark:border-slate-700 dark:bg-slate-900/85 dark:text-slate-200 dark:hover:bg-slate-900"
        aria-label="Open notifications"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 18H15"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M10.5 21H13.5"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M18 16.5H6L7.2 14.7C7.72 13.92 8 13 8 12.05V10.5C8 8.01 10.01 6 12.5 6C14.99 6 17 8.01 17 10.5V12.05C17 13 17.28 13.92 17.8 14.7L18 15V16.5Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
        </svg>

        {notifications.length > 0 && (
          <span className="absolute -right-1 -top-1 flex h-6 min-w-6 items-center justify-center rounded-full bg-indigo-600 px-1.5 text-xs font-bold text-white">
            {notifications.length}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 top-16 z-50 w-[340px] overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-2xl dark:border-slate-700 dark:bg-slate-900">
          <div className="flex items-center justify-between border-b border-zinc-200 px-4 py-3 dark:border-slate-700">
            <div>
              <h3 className="text-sm font-bold text-zinc-900 dark:text-white">
                Notifications
              </h3>
              <p className="text-xs text-zinc-500 dark:text-slate-400">
                Saved until you clear them
              </p>
            </div>

            {notifications.length > 0 && (
              <button
                type="button"
                onClick={clearNotifications}
                className="cursor-pointer text-xs font-semibold text-zinc-500 transition hover:text-zinc-900 dark:text-slate-400 dark:hover:text-white"
              >
                Clear all
              </button>
            )}
          </div>

          <div className="max-h-80 overflow-y-auto">
            {notifications.length === 0 ? (
              <div className="px-4 py-8 text-center text-sm text-zinc-500 dark:text-slate-400">
                No notifications yet.
              </div>
            ) : (
              notifications.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-3 border-b border-zinc-100 px-4 py-3 last:border-b-0 dark:border-slate-800"
                >
                  <span
                    className={`mt-1 h-2.5 w-2.5 rounded-full ${
                      item.type === "error" ? "bg-red-500" : "bg-emerald-500"
                    }`}
                  />

                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-zinc-800 dark:text-slate-100">
                      {item.message}
                    </p>
                    <p className="mt-1 text-xs text-zinc-500 dark:text-slate-400">
                      {item.createdAt}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => dismissNotification(item.id)}
                    className="cursor-pointer text-zinc-400 transition hover:text-zinc-700 dark:hover:text-slate-200"
                    aria-label="Dismiss notification"
                  >
                    ✕
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}
