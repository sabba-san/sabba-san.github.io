export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M20 2L36 34H4L20 2Z"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="none"
      />
      <path
        d="M11 25L20 9L29 25H11Z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        opacity="0.4"
      />
      <line
        x1="6"
        y1="30"
        x2="34"
        y2="30"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function LogoWordmark({ className }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className || ""}`}>
      <LogoMark className="w-6 h-6" />
      <span className="font-semibold tracking-tight text-base">Ahmad Abbas</span>
    </span>
  );
}

export function LogoCompact({ className }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className || ""}`}>
      <LogoMark className="w-5 h-5" />
      <span className="font-medium tracking-tight text-sm">Abbas</span>
    </span>
  );
}
