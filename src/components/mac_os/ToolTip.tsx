export default function ToolTip({ text }: { text: string }) {
  return (
    <div className="relative items-center justify-center px-3 py-0.5 text-sm text-nowrap">
      <svg
        className="absolute inset-0 w-full h-full overflow-visible"
        viewBox="0 0 100 32"
        preserveAspectRatio="none"
      >
        <path
          d="
            M16 0
            H84
            Q100 0 100 16
            Q100 32 84 32
            H56
            L50 40
            L44 32
            H16
            Q0 32 0 16
            Q0 0 16 0
            Z
          "
          className="fill-primary stroke-border"
          strokeWidth="0.5"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      <span className="relative z-10">{text}</span>
    </div>
  );
}