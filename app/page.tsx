import { AboutSection } from '@/components/about-section'
import { ContactSection } from '@/components/contact-section'
import { FarmSection } from '@/components/farm-section'
import { HealthcareSection } from '@/components/healthcare-section'
import { Hero } from '@/components/hero'
import { NotarySection } from '@/components/notary-section'
import { SiteHeader } from '@/components/site-header'
import { WritingSection } from '@/components/writing-section'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <AboutSection />
        <WritingSection />
        <HealthcareSection />
        <NotarySection />
        <FarmSection />
        <ContactSection />
      </main>
    </>
  )
}
