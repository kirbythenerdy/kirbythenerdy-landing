export function SectionHeading({
  eyebrow,
  title,
  intro,
  id,
}: {
  eyebrow: string
  title: string
  intro?: string
  id: string
}) {
  return (
    <div className="flex max-w-2xl flex-col gap-4">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
      <h2 id={id} className="font-serif text-4xl leading-tight tracking-tight text-balance md:text-5xl">
        {title}
      </h2>
      {intro ? (
        <p className="text-lg leading-relaxed text-muted-foreground text-pretty">{intro}</p>
      ) : null}
    </div>
  )
}
