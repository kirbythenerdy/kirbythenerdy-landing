const ringText =
  'MEMOIR · POSTSCRIPT · INFORMATICS · CUSTOMER SUCCESS · NOTARY · URBAN FARM · BIOETHICS · '

export function Seal({ className = '' }: { className?: string }) {
  return (
    <div className={`relative aspect-square ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 200 200"
        className="absolute inset-0 h-full w-full text-accent motion-safe:animate-[spin_60s_linear_infinite]"
      >
        <defs>
          <path id="seal-ring" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
        </defs>
        <circle cx="100" cy="100" r="96" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle
          cx="100"
          cy="100"
          r="90"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.75"
          strokeDasharray="2 3"
        />
        <text fill="currentColor" fontSize="9" fontFamily="var(--font-plex)">
          <textPath href="#seal-ring" textLength="488" lengthAdjust="spacing">
            {ringText}
          </textPath>
        </text>
        <circle cx="100" cy="100" r="64" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <span className="font-serif text-4xl italic leading-none text-primary md:text-5xl">witness</span>
        <span className="mt-2 text-[10px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
          & record
        </span>
      </div>
    </div>
  )
}
