import { site } from '@/lib/site'

const links = [
  { href: '#about', label: 'About' },
  { href: '#writing', label: 'Writing' },
  { href: '#healthcare', label: 'Healthcare' },
  { href: '#notary', label: 'Notary' },
  { href: '#farm', label: 'Farm' },
  { href: '#contact', label: 'Contact' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4">
        <a href="#top" className="font-serif text-xl italic tracking-tight">
          {site.name}
        </a>
        <nav aria-label="Primary">
          <ul className="flex items-center gap-4 text-sm text-muted-foreground md:gap-7">
            {links.map((link) => (
              <li key={link.href} className={link.href === '#contact' ? '' : 'hidden sm:block'}>
                <a
                  href={link.href}
                  className={
                    link.href === '#contact'
                      ? 'rounded-md bg-primary px-3 py-1.5 text-primary-foreground transition-opacity hover:opacity-90'
                      : 'transition-colors hover:text-foreground'
                  }
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
