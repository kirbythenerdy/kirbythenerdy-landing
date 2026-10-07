import { ArrowUpRight } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { site } from '@/lib/site'

const strengths = [
  {
    title: 'Translating between worlds',
    body: 'Turning clinical workflows into product feedback, and product changes into language care teams actually use.',
  },
  {
    title: 'Documentation that holds up',
    body: 'Notary-grade attention to detail: accurate records, clear handoffs, nothing signed that isn’t understood.',
  },
  {
    title: 'Relationships over tickets',
    body: 'Onboarding, adoption, and renewal built on trust — the same patience it takes to grow a community garden.',
  },
]

export function HealthcareSection() {
  return (
    <section id="healthcare" aria-labelledby="healthcare-title" className="border-t">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <SectionHeading
          id="healthcare-title"
          eyebrow="Healthcare"
          title="Where care meets data."
          intro="Two paths toward the same goal: health systems that work for the people inside them."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <article className="flex flex-col gap-4 rounded-lg border bg-card p-8">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-accent">
              Graduate study · Applying
            </p>
            <h3 className="font-serif text-3xl">Master&apos;s in Healthcare Informatics</h3>
            <p className="leading-relaxed text-muted-foreground">
              I&apos;m applying to study how health information is captured, governed, and
              used — from EHR design and interoperability to privacy and ethics. I want to
              understand the record well enough to make it more humane.
            </p>
          </article>

          <article className="flex flex-col gap-4 rounded-lg border bg-card p-8">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-accent">
              Career · Open to roles
            </p>
            <h3 className="font-serif text-3xl">Customer Success Manager, healthcare SaaS</h3>
            <p className="leading-relaxed text-muted-foreground">
              I&apos;m seeking a CSM role with a healthcare software company — helping clinics,
              practices, and health organizations adopt tools that give clinicians time back.
            </p>
            <a
              href={site.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-flex w-fit items-center gap-2 text-sm font-medium text-primary underline-offset-4 hover:underline"
            >
              Connect on LinkedIn
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          </article>
        </div>

        <div className="mt-12 grid gap-8 border-t pt-10 md:grid-cols-3">
          {strengths.map((item) => (
            <div key={item.title} className="flex flex-col gap-2">
              <h4 className="font-serif text-xl">{item.title}</h4>
              <p className="text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
