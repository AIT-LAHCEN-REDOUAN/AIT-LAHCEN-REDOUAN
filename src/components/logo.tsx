export function Logo() {
  return (
    <div className="flex items-center gap-2.5 select-none">
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect width="32" height="32" rx="8" fill="hsl(var(--primary))" />
        <text
          x="16"
          y="22"
          textAnchor="middle"
          fontFamily="ui-monospace, monospace"
          fontSize="15"
          fontWeight="800"
          fill="white"
          letterSpacing="-0.5"
        >
          AR
        </text>
      </svg>
      <div className="font-mono leading-[1.1] tracking-tight">
        <div className="text-[10px] font-semibold text-muted-foreground tracking-[0.18em] uppercase">
          AIT-LAHCEN
        </div>
        <div className="text-[15px] font-extrabold text-foreground tracking-tight">
          REDOUAN
        </div>
      </div>
    </div>
  );
}
