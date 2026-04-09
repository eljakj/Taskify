import { useRef, useState } from "react";

const priorities = [
  { value: "low", label: "Low" },
  { value: "medium", label: "Medium" },
  { value: "high", label: "High" },
];

function SelectIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-4 w-4 text-zinc-400 dark:text-slate-500"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 10L12 15L17 10"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function getLocalDate() {
  return new Date().toLocaleDateString("en-CA");
}

export default function TodoForm({ addTodo, isAdding }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("medium");
  const [dueDate, setDueDate] = useState(getLocalDate());
  const dueDateRef = useRef(null);

  const openDatePicker = () => {
    if (dueDateRef.current?.showPicker) {
      dueDateRef.current.showPicker();
    } else {
      dueDateRef.current?.focus();
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isAdding) return;

    const trimmedTitle = title.trim();
    const trimmedDescription = description.trim();

    if (!trimmedTitle) return;

    const success = await addTodo({
      title: trimmedTitle,
      description: trimmedDescription,
      priority,
      dueDate,
    });

    if (success) {
      setTitle("");
      setDescription("");
      setPriority("medium");
      setDueDate(getLocalDate());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 space-y-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new task..."
        disabled={isAdding}
        className="w-full rounded-xl border border-zinc-200 bg-white/90 px-4 py-3 text-sm text-zinc-800 shadow-sm outline-none transition focus:border-indigo-600 sm:rounded-2xl sm:px-5 sm:py-4 sm:text-base dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:focus:border-indigo-500"
      />

      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Add description..."
        rows={4}
        disabled={isAdding}
        className="w-full resize-none rounded-xl border border-zinc-200 bg-white/90 px-4 py-3 text-sm text-zinc-800 shadow-sm outline-none transition focus:border-indigo-600 sm:rounded-2xl sm:px-5 sm:py-4 sm:text-base dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:focus:border-indigo-500"
      />

      <div className="grid gap-3 sm:gap-4 lg:grid-cols-2">
        <div className="rounded-xl border border-zinc-200 bg-white/85 p-3 shadow-sm sm:rounded-2xl sm:p-4 dark:border-slate-700 dark:bg-slate-900/90">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500 dark:text-slate-400">
            Priority
          </p>

          <div className="relative">
            <select
              value={priority}
              onChange={(event) => setPriority(event.target.value)}
              disabled={isAdding}
              className="min-h-[44px] w-full cursor-pointer appearance-none rounded-xl border border-zinc-200 bg-white px-4 py-3 pr-10 text-sm font-medium text-zinc-700 shadow-sm outline-none transition focus:border-indigo-600 sm:rounded-2xl sm:text-base dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:focus:border-indigo-500"
            >
              {priorities.map((item) => (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              ))}
            </select>

            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
              <SelectIcon />
            </span>
          </div>
        </div>

        <div className="rounded-xl border border-zinc-200 bg-white/85 p-3 shadow-sm sm:rounded-2xl sm:p-4 dark:border-slate-700 dark:bg-slate-900/90">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500 dark:text-slate-400">
            Due date
          </p>

          <div
            className="relative flex items-center overflow-hidden"
            onClick={!isAdding ? openDatePicker : undefined}
          >
            <input
              ref={dueDateRef}
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              onFocus={!isAdding ? openDatePicker : undefined}
              disabled={isAdding}
              className="h-[44px] w-full cursor-pointer rounded-xl border border-zinc-200 bg-white px-3 text-sm text-zinc-800 outline-none transition focus:border-indigo-600 sm:h-[48px] sm:rounded-2xl sm:px-4 sm:text-base dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:border-indigo-500 [color-scheme:light] dark:[color-scheme:dark]"
            />
          </div>
        </div>
      </div>

      <button
        type="submit"
        disabled={isAdding}
        className="w-full cursor-pointer rounded-xl bg-indigo-600 py-3 text-sm font-semibold text-white transition hover:opacity-90 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-70 sm:rounded-2xl sm:py-4 sm:text-base dark:bg-indigo-600"
      >
        {isAdding ? "Adding..." : "Add task"}
      </button>
    </form>
  );
}
