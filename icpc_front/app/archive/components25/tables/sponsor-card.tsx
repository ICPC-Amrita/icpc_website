"use client"

type SponsorCardProps = {
  sponsorTitle?: string
  companyName: string
  logoSrc: string
  logoAlt: string
  description: string
  href?: string
  className?: string
}

export function SponsorCard({
  sponsorTitle,
  companyName,
  logoSrc,
  logoAlt,
  description,
  href,
  className,
}: SponsorCardProps) {
  return (
    <article
      role="article"
      className={["rounded-xl border bg-card text-card-foreground shadow-sm overflow-hidden", className || ""].join(
        " ",
      )}
      aria-label={companyName}
    >
      <a href={href ?? "#"} className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-ring">
        <div className="p-6 md:p-8">
          {sponsorTitle ? (
            <p className="text-sm font-medium text-muted-foreground text-center mb-4">{sponsorTitle}</p>
          ) : null}

          <div className="flex items-center justify-center bg-background rounded-md border mb-6 p-6 min-h-[120px] md:min-h-[160px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={logoSrc || "/placeholder.svg"}
              alt={logoAlt}
              className="h-16 md:h-20 lg:h-24 w-auto object-contain"
              crossOrigin="anonymous"
            />
          </div>

          <h3 className="text-lg md:text-xl font-semibold text-center mb-3 text-foreground text-balance">
            {companyName}
          </h3>

          <p className="text-sm md:text-base leading-relaxed text-muted-foreground text-center text-pretty">
            {description}
          </p>
        </div>
      </a>
    </article>
  )
}
