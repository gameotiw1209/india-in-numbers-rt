interface AshokaChakraProps {
  className?: string
  strokeWidth?: number
}

export function AshokaChakra({ className, strokeWidth = 1.5 }: AshokaChakraProps) {
  const spokes = Array.from({ length: 24 }, (_, i) => i * 15)

  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      aria-hidden="true"
    >
      {/* Outer rim */}
      <circle cx="50" cy="50" r="46" />
      {/* Inner rim */}
      <circle cx="50" cy="50" r="42" />
      {/* Hub */}
      <circle cx="50" cy="50" r="5" />
      {/* 24 spokes */}
      {spokes.map((deg) => (
        <line
          key={deg}
          x1="50"
          y1="50"
          x2="50"
          y2="8"
          transform={`rotate(${deg} 50 50)`}
        />
      ))}
      {/* Small dots near the rim for detail */}
      {spokes.map((deg) => (
        <circle
          key={`dot-${deg}`}
          cx="50"
          cy="14"
          r="1.1"
          fill="currentColor"
          stroke="none"
          transform={`rotate(${deg + 7.5} 50 50)`}
        />
      ))}
    </svg>
  )
}
