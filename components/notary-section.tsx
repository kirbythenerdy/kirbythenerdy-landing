import { Building2, FileHeart, Home, Landmark } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { site } from '@/lib/site'

const services = [
  {
    icon: Building2,
    title: 'Commercial real estate signings',
    body: 'Purchase and sale agreements, leases, and closing packages for commercial properties.',
  },
  {
    icon: Landmark,
    title: 'Commercial refinancing',
    body: 'Loan documents and refinance packages for business owners and investors.',
  },
  {
    icon: Home,
    title: 'Homeowner signings & refinancing',
    body: 'Purchases, refinances, HELOCs, and deeds — explained patiently at your kitchen table.',
  },
  {
    icon: FileHeart,
    title: 'Medical form notarizations',
    body: 'Advance directives, healthcare powers of attorney, HIPAA authorizations, and medical records releases.',
  },
]

export function NotarySection() {
  return (
    <section id="notary" aria-labelledby="notary-title" className="border-t bg-card">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            id="notary-title"
            eyebrow="Notary public"
            title="An impartial witness at the moments that matter."
            intro="My notary commission is in progress. Once commissioned, I'll offer mobile signings for:"
          />
          <a
            href={`mailto:${site.email}?subject=Notary%20signing%20inquiry`}
            className="inline-flex w-fit shrink-0 items-center rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Join the signing list
          </a>
        </div>

        <ul className="mt-14 grid gap-px overflow-hidden rounded-lg border bg-border sm:grid-cols-2">
          {services.map((service) => (
            <li key={service.title} className="flex gap-5 bg-background p-7">
              <service.icon className="size-6 shrink-0 text-accent" aria-hidden="true" />
              <div className="flex flex-col gap-2">
                <h3 className="font-serif text-2xl leading-snug">{service.title}</h3>
                <p className="leading-relaxed text-muted-foreground">{service.body}</p>
              </div>
            </li>
          ))}
        </ul>

        <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
          {'A notary verifies identity and witnesses signatures; a notary does not give legal advice or explain the legal effect of documents.'}
        </p>
      </div>
    </section>
  )
}
