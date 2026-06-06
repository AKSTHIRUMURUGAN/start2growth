export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a]" aria-label="Loading page">
      <div className="flex flex-col items-center gap-5">
        {/* Logo pulse */}
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 rounded-2xl bg-[#d4a853]/20 animate-ping" />
          <div className="relative w-12 h-12 rounded-2xl bg-[#d4a853]/10 border border-[#d4a853]/30 flex items-center justify-center">
            <span className="text-[#d4a853] font-bold text-lg">S</span>
          </div>
        </div>
        {/* Loading bar */}
        <div className="w-32 h-0.5 rounded-full overflow-hidden bg-white/5">
          <div
            className="h-full rounded-full bg-gradient-to-r from-[#d4a853] to-[#c8946e]"
            style={{ animation: "loadingBar 1.2s ease-in-out infinite" }}
          />
        </div>
        <style>{`
          @keyframes loadingBar {
            0%   { width: 0%;   margin-left: 0; }
            50%  { width: 60%;  margin-left: 20%; }
            100% { width: 0%;   margin-left: 100%; }
          }
        `}</style>
      </div>
    </div>
  );
}
