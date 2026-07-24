"use client"

import { AshokaChakra } from "@/components/ashoka-chakra"

/**
 * A large, semi-transparent Indian flag used as a cinematic background.
 * - Three horizontal bands (saffron / white / green) with a 24-spoke chakra.
 * - A slow CSS "sway" gives cloth-in-wind motion.
 * - An animated SVG turbulence/displacement filter adds a fine ripple
 *   (disabled on small screens & for reduced-motion users for performance).
 */
export function AnimatedFlag() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* SVG filter that produces the cloth ripple. */}
      <svg className="absolute h-0 w-0" aria-hidden="true">
        <defs>
          <filter id="india-flag-ripple">
            <feTurbulence type="fractalNoise" baseFrequency="0.006 0.012" numOctaves="2" seed="7" result="noise">
              <animate
                attributeName="baseFrequency"
                dur="18s"
                values="0.006 0.012; 0.010 0.016; 0.006 0.012"
                repeatCount="indefinite"
              />
            </feTurbulence>
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="18" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>

      {/* Flag surface. The ripple filter is only applied on md+ via a wrapper class. */}
      <div className="india-flag-sway absolute inset-[-8%] opacity-[0.16] md:opacity-[0.2] md:[filter:url(#india-flag-ripple)]">
        <div className="flex h-full w-full flex-col">
          <div className="flex-1 bg-india-saffron" />
          <div className="relative flex-1 bg-india-white">
            <div className="absolute inset-0 flex items-center justify-center">
              <AshokaChakra
                className="india-chakra-spin h-[26vh] w-[26vh] text-india-chakra"
                strokeWidth={1.25}
              />
            </div>
          </div>
          <div className="flex-1 bg-india-green" />
        </div>
      </div>

      {/* Soft flowing color mesh to add depth behind the flag. */}
      <div
        className="india-mesh-drift absolute inset-0 opacity-30 mix-blend-screen [background-image:radial-gradient(circle_at_20%_30%,var(--india-saffron),transparent_45%),radial-gradient(circle_at_80%_40%,var(--india-green),transparent_45%),radial-gradient(circle_at_50%_80%,var(--india-white),transparent_40%)]"
      />

      {/* Readability overlay: darken edges + bottom, keep center airy. */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_10%,var(--india-navy-deep)_95%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-india-navy-deep/70 via-transparent to-india-navy-deep" />
    </div>
  )
}
