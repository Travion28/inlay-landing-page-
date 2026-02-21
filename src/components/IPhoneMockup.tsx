export function IPhoneMockup({ children }: { children?: React.ReactNode }) {
  return (
    <div className="relative mx-auto" style={{ width: 280, height: 572 }}>
      {/* Outer shell */}
      <div className="absolute inset-0 rounded-[52px] bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d] shadow-[0_20px_60px_rgba(0,0,0,0.15),0_0_0_1px_rgba(0,0,0,0.08)]">
        {/* Side buttons */}
        <div className="absolute -left-[2px] top-[100px] w-[3px] h-[28px] bg-[#2a2a2a] rounded-l-sm" />
        <div className="absolute -left-[2px] top-[140px] w-[3px] h-[48px] bg-[#2a2a2a] rounded-l-sm" />
        <div className="absolute -left-[2px] top-[196px] w-[3px] h-[48px] bg-[#2a2a2a] rounded-l-sm" />
        <div className="absolute -right-[2px] top-[160px] w-[3px] h-[64px] bg-[#2a2a2a] rounded-r-sm" />

        {/* Inner bezel */}
        <div className="absolute inset-[3px] rounded-[49px] bg-black overflow-hidden">
          {/* Screen area */}
          <div className="absolute inset-[3px] rounded-[46px] overflow-hidden bg-[#111]">
            {/* Dynamic Island */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[100px] h-[30px] bg-black rounded-full z-10" />
            
            {/* Screen content */}
            <div className="w-full h-full flex items-center justify-center">
              {children || (
                <div className="text-center px-6">
                  <p className="text-white/40 text-xs font-medium tracking-wider uppercase mb-2">
                    inlay
                  </p>
                  <div className="w-full space-y-2.5 mt-6">
                    {/* Simulated note lines */}
                    <div className="h-[1px] bg-white/[0.06] w-full" />
                    <div className="flex gap-2 px-2">
                      <div className="h-3 bg-white/10 rounded w-16" />
                      <div className="h-3 bg-white/10 rounded w-24" />
                      <div className="h-3 bg-white/10 rounded w-12" />
                    </div>
                    <div className="h-[1px] bg-white/[0.06] w-full" />
                    <div className="flex gap-2 px-2">
                      <div className="h-3 bg-white/10 rounded w-20" />
                      <div className="h-3 bg-white/[0.15] rounded w-14 border border-white/[0.08]" />
                      <div className="h-3 bg-white/10 rounded w-18" />
                    </div>
                    <div className="h-[1px] bg-white/[0.06] w-full" />
                    <div className="flex gap-2 px-2">
                      <div className="h-3 bg-white/10 rounded w-10" />
                      <div className="h-3 bg-white/10 rounded w-28" />
                    </div>
                    <div className="h-[1px] bg-white/[0.06] w-full" />
                    <div className="flex gap-2 px-2">
                      <div className="h-3 bg-white/10 rounded w-24" />
                      <div className="h-3 bg-white/10 rounded w-8" />
                      <div className="h-3 bg-white/10 rounded w-16" />
                    </div>
                    <div className="h-[1px] bg-white/[0.06] w-full" />
                  </div>
                  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[120px] h-[4px] bg-white/20 rounded-full" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
