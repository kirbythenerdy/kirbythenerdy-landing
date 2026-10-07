import { ArrowDownRight } from 'lucide-react'
import { Seal } from '@/components/seal'
import { threads } from '@/lib/site'

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-6xl px-5 pb-16 pt-14 md:pb-24 md:pt-20">
      <div className="grid items-center gap-12 md:grid-cols-[1.4fr_1fr]">
        <div className="flex flex-col gap-6">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
            One person, many threads
          </p>
          <h1 className="font-serif text-5xl leading-[1.05] tracking-tight text-balance md:text-7xl">
            I keep the record of how people are <em className="text-primary">cared for</em>.
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
            In memoir, in health data, in client relationships, at a signing table, and in a city
            garden bed. This page gathers every project I&apos;m tending right now — and the
            single question that ties them together: what does it mean to witness someone well?
          </p>
        </div>
        <Seal className="mx-auto w-64 md:w-80" />
      </div>

      <div className="mt-16 border-t pt-8">
        <h2 className="sr-only">Current projects</h2>
        <ul className="grid gap-px overflow-hidden rounded-lg border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {threads.map((thread) => (
            <li key={thread.label} className="bg-card">
              <a
                href={`#${thread.id}`}
                className="group flex h-full items-start justify-between gap-3 p-5 transition-colors hover:bg-secondary"
              >
                <span className="flex flex-col gap-1">
                  <span className="font-serif text-lg leading-snug">{thread.label}</span>
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">
                    {thread.note}
                  </span>
                </span>
                <ArrowDownRight
                  className="size-4 shrink-0 text-accent transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                  aria-hidden="true"
                />
              </a>
            </li>
          ))}
          <li className="flex items-center bg-primary p-5 text-primary-foreground">
            <p className="font-serif text-lg italic leading-snug">
              {'Seven threads, one practice: paying attention.'}
            </p>
          </li>
        </ul>
      </div>
    </section>
  )
}
