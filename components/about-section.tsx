'use client'

import { useEffect, useState } from 'react'
import { Dialog } from '@base-ui/react/dialog'
import { ArrowUpRight } from 'lucide-react'
import { about, audiences, site, type Audience } from '@/lib/site'

const STORAGE_KEY = 'kj-audience'

function isAudience(value: string | null): value is Audience {
  return audiences.some((a) => a.id === value)
}

export function AboutSection() {
  const [audience, setAudience] = useState<Audience>('reader')
  const [promptOpen, setPromptOpen] = useState(false)

  useEffect(() => {
    const fromUrl = new URLSearchParams(window.location.search).get('for')
    if (isAudience(fromUrl)) {
      setAudience(fromUrl)
      return
    }
    const saved = window.localStorage.getItem(STORAGE_KEY)
    if (isAudience(saved)) {
      setAudience(saved)
    } else {
      setPromptOpen(true)
    }
  }, [])

  function choose(next: Audience, scroll = false) {
    setAudience(next)
    window.localStorage.setItem(STORAGE_KEY, next)
    setPromptOpen(false)
    if (scroll) {
      document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const content = about[audience]
  const isExternal = content.cta.href.startsWith('http')

  return (
    <section id="about" aria-labelledby="about-title" className="border-t">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
            {content.eyebrow}
          </p>
          <div
            role="radiogroup"
            aria-label="Show this section for"
            className="inline-flex w-fit flex-wrap gap-1 rounded-lg border bg-card p-1"
          >
            {audiences.map((a) => {
              const active = a.id === audience
              return (
                <button
                  key={a.id}
                  type="button"
                  role="radio"
                  aria-checked={active}
                  onClick={() => choose(a.id)}
                  className={
                    active
                      ? 'rounded-md bg-primary px-3 py-1.5 text-sm text-primary-foreground'
                      : 'rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground'
                  }
                >
                  {a.label}
                </button>
              )
            })}
          </div>
        </div>

        <div aria-live="polite" className="mt-10 grid gap-12 md:grid-cols-[1.3fr_1fr]">
          <div className="flex flex-col gap-6">
            <h2
              id="about-title"
              className="font-serif text-4xl leading-tight tracking-tight text-balance md:text-5xl"
            >
              {content.title}
            </h2>
            {content.paragraphs.map((p) => (
              <p key={p} className="text-lg leading-relaxed text-muted-foreground text-pretty">
                {p}
              </p>
            ))}
            <a
              href={content.cta.href}
              {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="inline-flex w-fit items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-primary-foreground transition-opacity hover:opacity-90"
            >
              {content.cta.label}
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          </div>

          <dl className="flex flex-col border-t">
            {content.highlights.map((h) => (
              <div key={h.label} className="flex flex-col gap-1 border-b py-4">
                <dt className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
                  {h.label}
                </dt>
                <dd className="font-serif text-xl leading-snug">{h.detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <Dialog.Root
        open={promptOpen}
        onOpenChange={(open) => {
          setPromptOpen(open)
          if (!open) window.localStorage.setItem(STORAGE_KEY, audience)
        }}
      >
        <Dialog.Portal>
          <Dialog.Backdrop className="fixed inset-0 z-50 bg-foreground/40 backdrop-blur-sm transition-opacity data-[ending-style]:opacity-0 data-[starting-style]:opacity-0" />
          <Dialog.Popup className="fixed left-1/2 top-1/2 z-50 flex w-[calc(100%-2.5rem)] max-w-md -translate-x-1/2 -translate-y-1/2 flex-col gap-6 rounded-lg border bg-card p-6 text-card-foreground shadow-xl transition-all data-[ending-style]:scale-95 data-[ending-style]:opacity-0 data-[starting-style]:scale-95 data-[starting-style]:opacity-0 md:p-8">
            <div className="flex flex-col gap-2">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">Welcome</p>
              <Dialog.Title className="font-serif text-3xl leading-tight text-balance">
                What brings you to {site.name.split(' ')[0]}&apos;s page?
              </Dialog.Title>
              <Dialog.Description className="leading-relaxed text-muted-foreground">
                I&apos;ll tailor the About section for you. You can switch anytime.
              </Dialog.Description>
            </div>
            <div className="flex flex-col gap-2">
              {audiences.map((a) => (
                <button
                  key={a.id}
                  type="button"
                  onClick={() => choose(a.id, true)}
                  className="flex items-center justify-between rounded-md border px-4 py-3 text-left transition-colors hover:border-primary hover:bg-secondary"
                >
                  <span className="font-medium">{a.prompt}</span>
                  <ArrowUpRight className="size-4 text-accent" aria-hidden="true" />
                </button>
              ))}
            </div>
            <Dialog.Close className="w-fit text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground">
              Skip for now
            </Dialog.Close>
          </Dialog.Popup>
        </Dialog.Portal>
      </Dialog.Root>
    </section>
  )
}
