import Logo from "@/components/Logo";

function StatusIcon({ status }) {
  if (status === "success") {
    return (
      <div className="relative flex h-16 w-16 items-center justify-center">
        <div className="absolute inset-0 rounded-full bg-emerald-400/10 animate-[statusRing_520ms_ease-out]" />
        <div className="absolute inset-0 rounded-full border border-emerald-400/20 bg-emerald-500/10 text-emerald-300 animate-[statusPop_320ms_cubic-bezier(0.22,1,0.36,1)] flex items-center justify-center">
          <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7">
            <path
              d="M6 12.5L10 16.5L18 8.5"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className="relative flex h-16 w-16 items-center justify-center">
        <div className="absolute inset-0 rounded-full bg-red-400/10 animate-[statusRing_520ms_ease-out]" />
        <div className="absolute inset-0 rounded-full border border-red-400/20 bg-red-500/10 text-red-300 animate-[statusPop_320ms_cubic-bezier(0.22,1,0.36,1)] flex items-center justify-center">
          <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7">
            <path
              d="M8 8L16 16"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
            />
            <path
              d="M16 8L8 16"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex h-16 w-16 items-center justify-center">
      <div className="absolute inset-0 rounded-full border border-white/10 bg-white/[0.035]" />
      <div className="absolute inset-[5px] rounded-full border border-white/6" />
      <div className="absolute inset-[7px] animate-[loaderSpin_900ms_linear_infinite] rounded-full border-[2.5px] border-transparent border-t-indigo-400 border-r-violet-400" />
      <div className="absolute inset-[18px] rounded-full bg-white/[0.03]" />
    </div>
  );
}

export default function FullScreenLoader({
  title = "Checking authentication",
  message = "Preparing your workspace...",
  status = "loading",
}) {
  const badgeStyles = {
    loading: "text-indigo-300 border-indigo-400/20 bg-indigo-500/10",
    success: "text-emerald-300 border-emerald-400/20 bg-emerald-500/10",
    error: "text-red-300 border-red-400/20 bg-red-500/10",
  };

  const badgeText = {
    loading: "Secure session",
    success: "Authenticated",
    error: "Authentication failed",
  };

  return (
    <div className="relative flex min-h-dvh items-center justify-center overflow-hidden text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.13),transparent_38%),linear-gradient(180deg,#020617_0%,#0f172a_100%)]" />

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-[-7rem] h-[18rem] w-[18rem] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl animate-[ambientFloat_8s_ease-in-out_infinite]" />
        <div className="absolute right-[-4rem] top-1/3 h-56 w-56 rounded-full bg-violet-500/10 blur-3xl animate-[ambientFloat_10s_ease-in-out_infinite_reverse]" />
      </div>

      <div className="relative w-full max-w-sm px-4">
        <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-8 text-center shadow-[0_20px_60px_rgba(0,0,0,0.42)] backdrop-blur-xl animate-[cardReveal_480ms_cubic-bezier(0.22,1,0.36,1)]">
          <div className="mb-6 flex justify-center animate-[contentRise_520ms_80ms_both]">
            <Logo />
          </div>

          <div
            className={`mb-5 inline-flex rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] animate-[contentRise_520ms_140ms_both] ${badgeStyles[status]}`}
          >
            {badgeText[status]}
          </div>

          <h2 className="animate-[contentRise_520ms_200ms_both] text-xl font-semibold tracking-tight">
            {title}
          </h2>

          <p className="mt-2 animate-[contentRise_520ms_260ms_both] text-sm leading-6 text-slate-400">
            {message}
          </p>

          <div className="mt-7 flex justify-center animate-[contentRise_520ms_320ms_both]">
            <StatusIcon status={status} />
          </div>
        </div>
      </div>
    </div>
  );
}
