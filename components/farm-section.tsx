import Image from 'next/image'
import { SectionHeading } from '@/components/section-heading'

export function FarmSection() {
  return (
    <section id="farm" aria-labelledby="farm-title" className="border-t">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-2 md:py-28">
        <div className="relative aspect-[4/5] overflow-hidden rounded-lg md:order-2">
          <Image
            src="/images/urban-farm.png"
            alt="Neighbors tending raised garden beds on an urban farm between brick buildings"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-8">
          <SectionHeading
            id="farm-title"
            eyebrow="Community"
            title="An urban farm, grown by neighbors."
            intro="Health doesn't start in a clinic. It starts with what's on the table and who's sitting around it."
          />
          <p className="leading-relaxed text-muted-foreground">
            I&apos;m working on a community urban farming project that turns unused city land
            into shared growing space — fresh food for the block, hands-on learning for kids
            and elders, and a place where people actually meet each other. It&apos;s the
            ground-level version of everything else on this page.
          </p>
          <blockquote className="border-l-2 border-accent pl-5 font-serif text-2xl italic leading-snug">
            {'“Care is a practice before it’s a profession.”'}
          </blockquote>
        </div>
      </div>
    </section>
  )
}
