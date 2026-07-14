/**
 * Types + construction du contenu de la template `barber` (coiffeur / barbershop).
 *
 * Miroir de `api/services/templates/barber.py`.
 */
import type { SiteContent } from '~/types/SiteContent'

export interface BarberTheme {
  primary: string
  secondary: string
  accent: string
}

export const barberDefaultTheme: BarberTheme = {
  primary: '#121212',
  secondary: '#f8f5ef',
  accent: '#dec7a6',
}

export interface BarberInfoItem {
  label: string
  icon: string
  lines: string[]
}

export interface BarberStatItem {
  num: string
  sym: string
  label: string
}

export interface BarberServiceItem {
  title: string
  description: string
  price: string
  icon: string
}

export interface BarberWhyCard {
  title: string
  icon: string
  text: string
}

export interface BarberReviewBlock {
  brand: string
  score: string
  count: string
  kind: 'google' | 'tripadvisor'
}

export interface BarberTestimonial {
  title: string
  text: string
  author: string
  avatar: string
  rating: number
}

export interface BarberSocialItem {
  name: string
  href: string
  label: string
}

export interface BarberPageContent {
  theme: BarberTheme
  businessName: string
  phone: string
  phoneDisplay: string
  email: string
  city: string
  area: string
  address: string
  heroTitle: string
  heroSubtitle: string
  heroImage: string
  ctaPrimary: string
  ctaSecondary: string
  infoItems: BarberInfoItem[]
  aboutHeading: string
  about: string
  aboutImage: string
  stats: BarberStatItem[]
  servicesHeading: string
  servicesIntro: string
  services: BarberServiceItem[]
  servicesCta: string
  midCtaTitle: string
  midCtaImage: string
  midCtaButton: string
  whyHeading: string
  whyIntro: string
  whyCards: BarberWhyCard[]
  reviewsHeading: string
  google: BarberReviewBlock
  tripadvisor: BarberReviewBlock
  testimonial: BarberTestimonial
  contactHeading: string
  contactIntro: string
  contactImage: string
  contactCallLabel: string
  contactEmailLabel: string
  formNameLabel: string
  formSubjectLabel: string
  formPhoneLabel: string
  formEmailLabel: string
  formMessageLabel: string
  formSubmitLabel: string
  mapImage: string
  socials: BarberSocialItem[]
  copyright: string
}

const SERVICE_ICONS: string[] = [
  '/images/image-import-8.png',
  '/images/image-import-9.png',
  '/images/image-import-4.png',
  '/images/image-import-3.png',
  '/images/image-import-6.png',
  '/images/image-import-5.png',
]

const defaults = {
  heroTitle: 'The ultimate convenience for busy people',
  heroSubtitle: 'Experience the Convenience of In-Home Barber Services',
  heroImage: '/images/image-import-3.jpg',
  ctaPrimary: 'Book an Appointment',
  ctaSecondary: 'Browse services',
  aboutHeading: 'Your personal barber service at your home',
  about:
    'Nulla egestas sapien integer mi fermentum tellus tristique consequat pulvinar sagittis adipiscing egestas purus et mi tempus semper id vel prci eu magna in senectus sit eget justo',
  aboutImage: '/images/image-import-1.jpg',
  address: '3696 Lynden Road, Lefroy Ontario canada',
  stats: [
    { num: '99', sym: '%', label: 'Customer Satisfaction' },
    { num: '10', sym: '+', label: 'Years of experience' },
  ] as BarberStatItem[],
  servicesHeading: 'Browse our services',
  servicesIntro:
    'Nulla egestas sapien integer mi fermentum tellus tristique consequat pulvinar sagittis adipiscing egestas purus et mi tempus semper id vel prci eu magna in senectus sit eget justo eget.',
  services: [
    {
      title: 'Adult haircut',
      description:
        'Nulla egestas sapien integer mi fermentum tellus tristique consequatolm pulvinar sagittis',
      price: '$39 USD',
      icon: SERVICE_ICONS[0],
    },
    {
      title: 'Kids Haircut',
      description:
        'Nulla egestas sapien integer mi fermentum tellus tristique consequatolm pulvinar sagittis',
      price: '$19 USD',
      icon: SERVICE_ICONS[1],
    },
    {
      title: 'Beard Trim',
      description:
        'Nulla egestas sapien integer mi fermentum tellus tristique consequatolm pulvinar sagittis',
      price: '$29 USD',
      icon: SERVICE_ICONS[2],
    },
    {
      title: 'Neck Shave',
      description:
        'Nulla egestas sapien integer mi fermentum tellus tristique consequatolm pulvinar sagittis',
      price: '$39 USD',
      icon: SERVICE_ICONS[3],
    },
    {
      title: 'Scalp Moisturizing',
      description:
        'Nulla egestas sapien integer mi fermentum tellus tristique consequatolm pulvinar sagittis',
      price: '$10 USD',
      icon: SERVICE_ICONS[4],
    },
    {
      title: 'Beard Grooming',
      description:
        'Nulla egestas sapien integer mi fermentum tellus tristique consequatolm pulvinar sagittis',
      price: '$49 USD',
      icon: SERVICE_ICONS[5],
    },
  ] as BarberServiceItem[],
  midCtaTitle: 'Experience the luxury of concierge barber services at your home',
  midCtaImage: '/images/image-import-2.jpg',
  midCtaButton: 'Book an Appointment',
  whyHeading: 'why choose us',
  whyIntro:
    'Nulla egestas sapien integer mi fermentum tellus tristique consequat pulvinar sagittis adipiscing egestas purus et mi tempus semper id vel prci eu magna in senectus sit eget justo eget.',
  whyCards: [
    {
      title: 'Licensed',
      icon: '/images/image-import-14.png',
      text: 'Our team of licensed and insured barbers follow strict cleanliness and sanitation guidelines for a safe and comfortable experience.',
    },
    {
      title: 'Masters',
      icon: '/images/image-import.png',
      text: 'Our barbers are passionate about their craft and aim to provide high-quality haircuts for every client.',
    },
    {
      title: 'Trusted',
      icon: '/images/image-import-2.png',
      text: 'We have a strong online reputation with a 5-star rating from over 100 thousand satisfied clients.',
    },
  ] as BarberWhyCard[],
  reviewsHeading: 'Reviews',
  google: { brand: 'GOOGLE', score: '4.9', count: '196 reviews', kind: 'google' as const },
  tripadvisor: {
    brand: 'tripadvisor',
    score: '5.0',
    count: '196 reviews',
    kind: 'tripadvisor' as const,
  },
  testimonial: {
    title: 'THE BEST BARBER Services',
    text: 'Et proin ut in dignissim sem non a nullam magna lectus urna et dui quam tellus imperdiet sit purus at fringilla scelerisque diam amet fermentum orci fringilla aliquet nulla lectus erat eu auctor',
    author: 'SAM HOUSTON',
    avatar: '/images/image-import-8.jpg',
    rating: 5,
  } as BarberTestimonial,
  contactHeading: 'make an appointment',
  contactIntro:
    'Nulla egestas sapien integer mi fermentum tellus tristique consequat pulvinar sagittis adipiscing egestas purus et mi tempus semper id vel prci eu magna in senectus sit eget justo',
  contactCallLabel: 'Give us a Call',
  contactEmailLabel: 'Send us an email',
  formNameLabel: 'Full name',
  formSubjectLabel: 'subject',
  formPhoneLabel: 'phone number',
  formEmailLabel: 'email address',
  formMessageLabel: 'Please type your message here...',
  formSubmitLabel: 'Book an Appointment',
  mapImage: '/images/image-import-1.png',
  contactImage: '/images/image-import-5.jpg',
  hoursLines: ['Mon – Sat: 9AM – 8PM', 'Sun: 9AM – 6PM'],
}

function resolveText(value: string | undefined, fallback: string): string {
  return typeof value === 'string' && value.trim().length > 0 ? value : fallback
}

function formatPhoneDisplay(phone: string): string {
  const digits: string = phone.replace(/\D/g, '')
  if (digits.length === 10) {
    return digits.replace(/(\d{2})(?=\d)/g, '$1 ').trim()
  }
  return phone
}

function formatHoursLines(hours: Array<{ day?: string; hours?: string }> | undefined): string[] {
  if (!Array.isArray(hours) || hours.length === 0) {
    return [...defaults.hoursLines]
  }
  return hours
    .map((item) => {
      const day: string = item?.day?.trim() || ''
      const slot: string = item?.hours?.trim() || ''
      if (day && slot) {
        return `${day}: ${slot}`
      }
      return slot || day
    })
    .filter((line) => line.length > 0)
    .slice(0, 3)
}

function extractPrice(description: string): { text: string; price: string } {
  const match: RegExpMatchArray | null = description.match(
    /^(.*)\s*[—–-]\s*(\$?\d+[.,]?\d*\s*(?:€|USD|eur)?)\s*$/iu,
  )
  if (match) {
    return { text: (match[1] ?? '').trim(), price: (match[2] ?? '').trim() }
  }
  return { text: description, price: '' }
}

function parseStatValue(raw: string): { num: string; sym: string } {
  const trimmed: string = raw.trim()
  const pct: RegExpMatchArray | null = trimmed.match(/^(\d+[.,]?\d*)\s*%$/)
  if (pct) {
    return { num: pct[1] ?? trimmed, sym: '%' }
  }
  const plus: RegExpMatchArray | null = trimmed.match(/^(\d+[.,]?\d*)\s*\+$/)
  if (plus) {
    return { num: plus[1] ?? trimmed, sym: '+' }
  }
  return { num: trimmed, sym: '' }
}

/**
 * Construit le contenu de page prêt pour le rendu.
 * @param content Données variables du prospect (`SiteContent`)
 */
export function buildBarberContent(content: SiteContent): BarberPageContent {
  const palette = content.palette ?? {}
  const gallery = Array.isArray(content.gallery)
    ? content.gallery
        .map((item) => ({
          url: typeof item?.url === 'string' ? item.url : '',
          alt: typeof item?.alt === 'string' ? item.alt : '',
        }))
        .filter((item) => item.url.length > 0)
    : []

  const businessName: string = resolveText(content.businessName, 'Barbershop')
  const phone: string = content.phone ?? ''
  const email: string = content.email ?? ''
  const city: string = content.city ?? ''
  const area: string = content.area ?? city
  const phoneDisplay: string = phone ? formatPhoneDisplay(phone) : ''
  const hoursLines: string[] = formatHoursLines(content.openingHours)
  const address: string = [area, city].filter(Boolean).join(', ') || defaults.address

  const trustFromContent: BarberStatItem[] = Array.isArray(content.trustItems)
    ? content.trustItems
        .map((item, index) => {
          const rawValue: string = typeof item?.value === 'string' ? item.value : ''
          const parsed = parseStatValue(rawValue)
          return {
            num: parsed.num || defaults.stats[index]?.num || '',
            sym: parsed.sym || defaults.stats[index]?.sym || '',
            label:
              (typeof item?.label === 'string' && item.label.trim()) ||
              defaults.stats[index]?.label ||
              '',
          }
        })
        .filter((item) => item.num.length > 0)
    : []

  const servicesFromContent: BarberServiceItem[] = Array.isArray(content.services)
    ? content.services
        .map((service, index) => {
          const rawDesc: string =
            typeof service?.description === 'string' ? service.description : ''
          const { text, price } = extractPrice(rawDesc)
          const fallback = defaults.services[index]
          return {
            title: typeof service?.title === 'string' ? service.title.trim() : '',
            description: text || fallback?.description || '',
            price: price || fallback?.price || '',
            icon:
              (typeof service?.icon === 'string' && service.icon.length > 0 ? service.icon : '') ||
              fallback?.icon ||
              SERVICE_ICONS[index % SERVICE_ICONS.length],
          }
        })
        .filter((item) => item.title.length > 0)
    : []

  const reviews = Array.isArray(content.reviews) ? content.reviews : []
  const featured = reviews[0]
  const reviewCount: number = reviews.length > 0 ? reviews.length : 196
  const avgRating: number =
    reviews.length > 0
      ? reviews.reduce((sum, r) => sum + (typeof r.rating === 'number' ? r.rating : 5), 0) /
        reviews.length
      : 4.9

  const socialFromContent: BarberSocialItem[] = Array.isArray(content.social)
    ? content.social
        .map((item) => {
          const network: string =
            typeof item?.network === 'string' ? item.network.trim().toLowerCase() : ''
          const url: string = typeof item?.url === 'string' ? item.url.trim() : ''
          if (!network || !url) {
            return null
          }
          return {
            name: network,
            href: url,
            label: network.charAt(0).toUpperCase() + network.slice(1),
          }
        })
        .filter((item): item is BarberSocialItem => item !== null)
    : []

  const heroImage: string = resolveText(content.heroImage, gallery[0]?.url || defaults.heroImage)
  const aboutImage: string = resolveText(
    content.aboutImage,
    gallery[1]?.url || gallery[0]?.url || defaults.aboutImage,
  )
  const midCtaImage: string = gallery[2]?.url || defaults.midCtaImage
  const mapImage: string = gallery[3]?.url || defaults.mapImage
  const contactImage: string = gallery[5]?.url || gallery[0]?.url || defaults.contactImage

  return {
    theme: {
      primary:
        typeof palette.primary === 'string' && palette.primary.length > 0
          ? palette.primary
          : barberDefaultTheme.primary,
      secondary:
        typeof palette.secondary === 'string' && palette.secondary.length > 0
          ? palette.secondary
          : barberDefaultTheme.secondary,
      accent:
        typeof palette.accent === 'string' && palette.accent.length > 0
          ? palette.accent
          : barberDefaultTheme.accent,
    },
    businessName,
    phone,
    phoneDisplay,
    email,
    city,
    area,
    address,
    heroTitle: defaults.heroTitle,
    heroSubtitle: resolveText(content.subtitle, defaults.heroSubtitle),
    heroImage,
    ctaPrimary: resolveText(content.ctaCallLabel, defaults.ctaPrimary),
    ctaSecondary: resolveText(content.ctaQuoteLabel, defaults.ctaSecondary),
    infoItems: [
      {
        label: 'Address',
        icon: '/images/image-import-15.png',
        lines: [address],
      },
      {
        label: 'phone',
        icon: '/images/image-import-12.png',
        lines: [phoneDisplay || phone || '+62(123)-456-7890'],
      },
      {
        label: 'hours',
        icon: '/images/image-import-10.png',
        lines: hoursLines,
      },
    ],
    aboutHeading: resolveText(content.aboutHeading, defaults.aboutHeading),
    about: resolveText(content.about, defaults.about),
    aboutImage,
    stats: trustFromContent.length >= 2 ? trustFromContent.slice(0, 2) : [...defaults.stats],
    servicesHeading: resolveText(content.servicesHeading, defaults.servicesHeading),
    servicesIntro: defaults.servicesIntro,
    services: servicesFromContent.length ? servicesFromContent : [...defaults.services],
    servicesCta: resolveText(content.ctaCallLabel, defaults.ctaPrimary),
    midCtaTitle: defaults.midCtaTitle,
    midCtaImage,
    midCtaButton: resolveText(content.ctaCallLabel, defaults.midCtaButton),
    whyHeading: resolveText(content.faqHeading, defaults.whyHeading),
    whyIntro: defaults.whyIntro,
    whyCards: [...defaults.whyCards],
    reviewsHeading: resolveText(content.reviewsHeading, defaults.reviewsHeading),
    google: {
      ...defaults.google,
      score: avgRating.toFixed(1),
      count: `${reviewCount} reviews`,
    },
    tripadvisor: {
      ...defaults.tripadvisor,
      score: Math.min(5, avgRating + 0.1).toFixed(1),
      count: `${Math.max(reviewCount - 20, 1)} reviews`,
    },
    testimonial: {
      title: defaults.testimonial.title,
      text:
        typeof featured?.text === 'string' && featured.text.trim().length > 0
          ? featured.text
          : defaults.testimonial.text,
      author:
        typeof featured?.author === 'string' && featured.author.trim().length > 0
          ? featured.author.toUpperCase()
          : defaults.testimonial.author,
      avatar: gallery[4]?.url || defaults.testimonial.avatar,
      rating: typeof featured?.rating === 'number' ? featured.rating : 5,
    },
    contactHeading: resolveText(content.contactHeading, defaults.contactHeading),
    contactIntro: defaults.contactIntro,
    contactImage,
    contactCallLabel: defaults.contactCallLabel,
    contactEmailLabel: defaults.contactEmailLabel,
    formNameLabel: defaults.formNameLabel,
    formSubjectLabel: defaults.formSubjectLabel,
    formPhoneLabel: defaults.formPhoneLabel,
    formEmailLabel: defaults.formEmailLabel,
    formMessageLabel: defaults.formMessageLabel,
    formSubmitLabel: resolveText(content.ctaCallLabel, defaults.formSubmitLabel),
    mapImage,
    socials: socialFromContent.length
      ? socialFromContent
      : [
          { name: 'facebook', href: '#', label: 'Facebook' },
          { name: 'twitter', href: '#', label: 'Twitter' },
          { name: 'instagram', href: '#', label: 'Instagram' },
          { name: 'pinterest', href: '#', label: 'Pinterest' },
          { name: 'linkedin', href: '#', label: 'LinkedIn' },
        ],
    copyright: `© Copyright ${new Date().getFullYear()} ${businessName} - All right reserved`,
  }
}
