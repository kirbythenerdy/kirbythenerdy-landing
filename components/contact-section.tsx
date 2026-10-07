import { ArrowUpRight, Mail, Phone } from 'lucide-react'
import { site } from '@/lib/site'

const reasons = [
  'Admissions & academic conversations',
  'Healthcare SaaS hiring',
  'Notary signing requests',
  'Substack, essays & bioethics collaborations',
  'Volunteering at the farm',
]

export function ContactSection() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-[1.3fr_1fr] md:py-28">
        <div className="flex flex-col gap-6">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">Contact</p>
          <h2 id="contact-title" className="font-serif text-4xl leading-tight text-balance md:text-6xl">
            Whatever brought you here, <em>let&apos;s talk.</em>
          </h2>
          <div className="flex flex-wrap gap-3">
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 rounded-md bg-primary-foreground px-5 py-3 text-sm font-medium text-primary transition-opacity hover:opacity-90"
            >
              <Mail className="size-4" aria-hidden="true" />
              <span className="break-all">{site.email}</span>
            </a>
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/30 px-5 py-3 text-sm font-medium transition-colors hover:bg-primary-foreground/10"
            >
              <Phone className="size-4" aria-hidden="true" />
              {site.phone}
            </a>
            <a
              href={site.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/30 px-5 py-3 text-sm font-medium transition-colors hover:bg-primary-foreground/10"
            >
              LinkedIn
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-sm opacity-80">Good reasons to reach out</p>
          <ul className="flex flex-col divide-y divide-primary-foreground/20 border-y border-primary-foreground/20">
            {reasons.map((reason) => (
              <li key={reason} className="py-3 font-serif text-lg">
                {reason}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <footer className="border-t border-primary-foreground/20">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-2 px-5 py-6 text-sm opacity-80 sm:flex-row">
          <p>
            {'© '}
            {new Date().getFullYear()} {site.name}
          </p>
          <a href={site.linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
            linkedin.com/in/{site.linkedinHandle}
          </a>
        </div>
      </footer>
    </section>
  )
}
