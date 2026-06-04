export default function SkeletonLoader() {
  return (
    <>
      {Array.from({ length: 4 }).map((_, i) => (
        <div
          key={i}
          className="rounded-2xl bg-[#111111] border border-white/10 p-5 overflow-hidden"
        >
          {/* Icon skeleton */}
          <div className="w-10 h-10 rounded-xl bg-white/5 animate-pulse mb-4" />

          {/* Title skeleton */}
          <div className="h-3 w-3/4 bg-white/5 animate-pulse rounded-full mb-2" />
          <div className="h-3 w-1/2 bg-white/5 animate-pulse rounded-full mb-4" />

          {/* Progress bar skeleton */}
          <div className="h-1.5 w-full bg-white/5 animate-pulse rounded-full" />
        </div>
      ))}
    </>
  )
}