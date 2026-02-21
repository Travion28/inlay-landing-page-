export function SkeletonCard() {
  return (
    <div className="p-8 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm animate-pulse">
      <div className="space-y-4">
        {/* Icon skeleton */}
        <div className="w-12 h-12 rounded-xl bg-white/10" />

        {/* Title skeleton */}
        <div className="h-6 bg-white/10 rounded w-3/4" />

        {/* Description skeleton */}
        <div className="space-y-2">
          <div className="h-4 bg-white/10 rounded w-full" />
          <div className="h-4 bg-white/10 rounded w-5/6" />
        </div>
      </div>
    </div>
  );
}

export function SkeletonStep() {
  return (
    <div className="relative animate-pulse">
      <div className="space-y-3 pt-8">
        {/* Number skeleton */}
        <div className="h-4 bg-white/10 rounded w-12" />

        {/* Title skeleton */}
        <div className="h-7 bg-white/10 rounded w-2/3" />

        {/* Description skeleton */}
        <div className="space-y-2">
          <div className="h-4 bg-white/10 rounded w-full" />
          <div className="h-4 bg-white/10 rounded w-4/5" />
        </div>
      </div>
    </div>
  );
}

export function SkeletonCTA() {
  return (
    <div className="text-center space-y-8 animate-pulse">
      {/* Headline skeleton */}
      <div className="space-y-3">
        <div className="h-12 bg-white/10 rounded w-3/4 mx-auto" />
        <div className="h-12 bg-white/10 rounded w-2/3 mx-auto" />
      </div>

      {/* Supporting text skeleton */}
      <div className="h-6 bg-white/10 rounded w-1/2 mx-auto" />

      {/* Button skeleton */}
      <div className="h-14 bg-white/10 rounded-full w-48 mx-auto" />

      {/* Small text skeleton */}
      <div className="h-4 bg-white/10 rounded w-32 mx-auto" />
    </div>
  );
}