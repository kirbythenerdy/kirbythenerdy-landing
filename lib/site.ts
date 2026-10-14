export const site = {
  name: 'Kirby L. Jordan',
  email: 'Kirbyjordan2026@u.northwestern.edu',
  phoneHref: 'tel:+18153212985',
  substackName: 'Writefully So',
  substackUrl: 'https://substack.com/@kirbyljordan',
  linkedinUrl: 'https://www.linkedin.com/in/kirbythenerdy',
  linkedinHandle: 'kirbythenerdy',
}

export type Audience = 'recruiter' | 'admissions' | 'reader'

export const audiences: { id: Audience; label: string; prompt: string }[] = [
  { id: 'recruiter', label: 'HR & Recruiting', prompt: 'I’m hiring or recruiting' },
  { id: 'admissions', label: 'Admissions', prompt: 'I’m on an admissions team' },
  { id: 'reader', label: 'Just reading', prompt: 'I’m here for the writing' },
]

export const about: Record<
  Audience,
  { eyebrow: string; title: string; paragraphs: string[]; highlights: { label: string; detail: string }[]; cta: { label: string; href: string } }
> = {
  recruiter: {
    eyebrow: 'About me — for recruiters',
    title: 'I listen for the real need, then explain the way forward clearly.',
    paragraphs: [
      'I’m a customer-focused professional with experience across remote customer support, digital marketing, sales, and hospitality. At SeatGeek, I supported customers in a fast-paced digital environment, handling account questions, de-escalation, and service recovery with professionalism and empathy.',
      'As a self-employed digital marketer, I managed Google Ads and Meta campaigns for my clients. I used performance data to make recommendations and explained results in plain language matched to each client’s technical comfort. I’m now seeking a remote Customer Success role in healthcare SaaS, where I can combine that client work with my interest in health informatics.',
    ],
    highlights: [
      { label: 'Remote support & sales', detail: 'Customer Service / Sales Representative, SeatGeek' },
      { label: 'Client relationships', detail: 'Digital Marketing Entrepreneur: Google Ads & Meta campaigns' },
      { label: 'Service recovery', detail: 'Hospitality and tourism roles in fast-paced settings' },
      { label: 'Education', detail: 'B.A. in English (Writing), Northwestern University, June 2026' },
    ],
    cta: { label: 'Connect on LinkedIn', href: site.linkedinUrl },
  },
  admissions: {
    eyebrow: 'About me — for admissions',
    title: 'I study how care gets recorded, and who the record serves.',
    paragraphs: [
      'I earned my B.A. in English (Writing) with a concentration in creative nonfiction from Northwestern University’s School of Professional Studies in June 2026. I’m applying to a master’s program in healthcare informatics because my writing and my work keep returning to the same question: how do health systems document people, and does that documentation actually help them?',
      'I’m writing a memoir in vignettes, with a Substack as its postscript, alongside essays on medical research and bioethics — informed consent, patient data and privacy, equity in research participation, and food access as a determinant of health.',
    ],
    highlights: [
      { label: 'Undergraduate', detail: 'B.A. English (Writing), Northwestern, 2026' },
      { label: 'Program', detail: 'M.S. in Healthcare Informatics, applying' },
      { label: 'Research interests', detail: 'Bioethics, patient privacy, research equity' },
      { label: 'Long-form writing', detail: 'A memoir in vignettes, in progress' },
      { label: 'Public writing', detail: `${site.substackName} on Substack` },
    ],
    cta: { label: 'Read the writing', href: '#writing' },
  },
  reader: {
    eyebrow: 'About me',
    title: 'One person, many threads, one question.',
    paragraphs: [
      'I’m Kirby — a writer, a soon-to-be notary, a healthcare informatics applicant, and a neighbor with dirt under my fingernails from the community garden.',
      'Everything here circles one question: what does it mean to witness someone well? I explore it in memoir, in health data, at the signing table, and in the soil.',
    ],
    highlights: [
      { label: 'Writing', detail: 'A memoir in vignettes and its Substack postscript' },
      { label: 'Healthcare', detail: 'Informatics study and customer success' },
      { label: 'Notary', detail: 'Real estate, refinancing, and medical signings' },
      { label: 'Community', detail: 'An urban farming project' },
    ],
    cta: { label: 'Subscribe on Substack', href: site.substackUrl },
  },
}

export const threads = [
  { id: 'writing', label: 'Memoir in vignettes', note: 'In progress' },
  { id: 'writing', label: 'The Substack postscript', note: 'Launching' },
  { id: 'healthcare', label: 'Healthcare informatics, M.S.', note: 'Applying' },
  { id: 'healthcare', label: 'Customer success, healthcare SaaS', note: 'Open to roles' },
  { id: 'notary', label: 'Notary signings', note: 'Commission pending' },
  { id: 'farm', label: 'Urban farming community', note: 'Ongoing' },
  { id: 'writing', label: 'Medical research & bioethics', note: 'Writing' },
] as const
