export default function Loading() {
  return (
    <div className="min-h-screen bg-slate-950 p-6">
      <div className="mx-auto max-w-6xl space-y-4">
        <div className="h-10 w-1/3 animate-pulse rounded-lg bg-slate-800" />
        <div className="h-36 animate-pulse rounded-2xl bg-slate-800" />
        <div className="grid gap-4 md:grid-cols-3">
          <div className="h-28 animate-pulse rounded-2xl bg-slate-800" />
          <div className="h-28 animate-pulse rounded-2xl bg-slate-800" />
          <div className="h-28 animate-pulse rounded-2xl bg-slate-800" />
        </div>
      </div>
    </div>
  );
}
