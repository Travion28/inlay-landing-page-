export function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-['Space_Grotesk'] text-lg font-semibold tracking-tight text-white">
          Inlay
        </span>

        <p className="text-sm text-white/40 font-['Inter'] text-center sm:text-left">
          © {new Date().getFullYear()} Inlay. All rights reserved.
        </p>

        <p className="text-sm text-white/40 font-['Inter']">
          iOS beta &mdash; limited spots
        </p>
      </div>
    </footer>
  );
}
