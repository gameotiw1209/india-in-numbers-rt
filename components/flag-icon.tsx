type FlagIconProps = {
  code: string
  name: string
  className?: string
}

// Uses flagcdn's static PNGs for accurate, lightweight country flags.
export function FlagIcon({ code, name, className }: FlagIconProps) {
  return (
    <img
      src={`https://flagcdn.com/w80/${code}.png`}
      srcSet={`https://flagcdn.com/w160/${code}.png 2x`}
      width={40}
      height={30}
      alt={`Flag of ${name}`}
      loading="lazy"
      className={className}
    />
  )
}
