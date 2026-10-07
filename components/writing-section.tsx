import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { site } from '@/lib/site'

const bioethicsTopics = [
  'Informed consent and the paperwork of trust',
  'Patient data, privacy, and who gets to read the record',
  'Equity in clinical research participation',
  'Food access as a determinant of health',
]

export function WritingSection() {
  return (
    <section id="writing" aria-labelledby="writing-title" className="border-t bg-card">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <SectionHeading
          id="writing-title"
          eyebrow="Writing"
          title="A memoir, its postscript, and the questions after."
          intro="The writing comes first because everything else grew out of it."
        />

        <div className="mt-14 grid gap-10 md:grid-cols-2">
          <article className="flex flex-col gap-5">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src="/images/writing-desk.png"
                alt="Open notebook, manuscript pages, a fountain pen and a pressed leaf on a desk"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <h3 className="font-serif text-3xl">The memoir, in vignettes</h3>
            <p className="leading-relaxed text-muted-foreground">
              Not one long story but a sequence of small, exact scenes — waiting rooms, kitchen
              tables, signatures, seasons. Each vignette stands alone; read together, they
              become a life. The manuscript is in progress.
            </p>
          </article>

          <div className="flex flex-col gap-10">
            <article className="flex flex-col gap-4 rounded-lg bg-primary p-8 text-primary-foreground">
              <p className="text-xs font-medium uppercase tracking-[0.25em] opacity-80">
                Substack · Launching soon
              </p>
              <h3 className="font-serif text-3xl">
                <span className="italic">P.S.</span> — the postscript
              </h3>
              <p className="leading-relaxed opacity-90">
                The memoir ends; the living doesn&apos;t. The Substack picks up where the last
                vignette leaves off — what happened next, what I got wrong, and what I&apos;m
                still learning in real time.
              </p>
              <a
                href={site.substackUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-2 rounded-md bg-primary-foreground px-4 py-2.5 text-sm font-medium text-primary transition-opacity hover:opacity-90"
              >
                Subscribe on Substack
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
            </article>

            <article className="flex flex-col gap-4">
              <h3 className="font-serif text-3xl">Medical research & bioethics</h3>
              <p className="leading-relaxed text-muted-foreground">
                Essays and research writing at the intersection of medicine, data, and dignity.
                Current threads I&apos;m pulling on:
              </p>
              <ul className="flex flex-col divide-y border-y">
                {bioethicsTopics.map((topic) => (
                  <li key={topic} className="py-3 font-serif text-lg italic">
                    {topic}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
