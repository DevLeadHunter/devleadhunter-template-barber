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
  icon: string
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
  /** Note Google dérivée des avis enrichis — `null` si aucune donnée réelle. */
  google: BarberReviewBlock | null
  /** TripAdvisor — masqué tant que SiteContent n’expose pas de source dédiée. */
  tripadvisor: BarberReviewBlock | null
  /** Avis mis en avant — `null` si aucun avis prospect réel. */
  testimonial: BarberTestimonial | null
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

/** Icônes sociales (footer sombre) — uniquement les réseaux avec asset. */
const SOCIAL_ICONS: Record<string, string> = {
  facebook: '/images/social-facebook.svg',
  instagram: '/images/social-instagram.svg',
}

const SERVICE_ICONS: string[] = [
  '/images/image-import-8.png',
  '/images/image-import-9.png',
  '/images/image-import-4.png',
  '/images/image-import-3.png',
  '/images/image-import-6.png',
  '/images/image-import-5.png',
]

/** Unsplash fallbacks when enrichment / gallery is thin (mirror of playground mock). */
const FALLBACK_HERO =
  'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1600&q=80'
const FALLBACK_ABOUT =
  'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=80'
const FALLBACK_MID_CTA =
  'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=1400&q=80'
const FALLBACK_CONTACT =
  'https://images.unsplash.com/photo-1521590832167-7bcbfaaae1b0?auto=format&fit=crop&w=1400&q=80'
const FALLBACK_AVATAR =
  'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80'

const defaults = {
  heroTitle: 'La coupe et la barbe\npour les hommes pressés',
  heroSubtitle: 'Coupe, barbe et soins pour hommes — un salon de quartier, sur rendez-vous.',
  heroImage: FALLBACK_HERO,
  ctaPrimary: 'Prendre rendez-vous',
  ctaSecondary: 'Voir les prestations',
  aboutHeading: 'Votre barbier de quartier',
  about:
    'Salon de coiffure pour hommes : coupes classiques et contemporaines, entretien de barbe et rasage soigné. Accueil sans chichi, diagnostic clair et un résultat net à chaque passage.',
  aboutImage: FALLBACK_ABOUT,
  address: 'France',
  stats: [
    { num: '98', sym: '%', label: 'Clients satisfaits' },
    { num: '10', sym: '+', label: "Années d'expérience" },
  ] as BarberStatItem[],
  servicesHeading: 'Nos prestations',
  servicesIntro:
    'Des prestations claires, des tarifs affichés, et le temps qu’il faut pour un résultat net — coupe, barbe ou les deux.',
  services: [
    {
      title: 'Coupe homme',
      description: 'Shampooing, coupe aux ciseaux ou tondeuse, séchage et conseils d’entretien.',
      price: '32 €',
      icon: SERVICE_ICONS[0],
    },
    {
      title: 'Coupe enfant (-12 ans)',
      description: 'Coupe adaptée aux plus jeunes, en douceur et sans stress.',
      price: '22 €',
      icon: SERVICE_ICONS[1],
    },
    {
      title: 'Taille de barbe',
      description: 'Contour, volume et finition rasoir — barbe nette et structurée.',
      price: '18 €',
      icon: SERVICE_ICONS[2],
    },
    {
      title: 'Rasage traditionnel',
      description: 'Serviette chaude, mousse, rasoir droit et after-shave.',
      price: '28 €',
      icon: SERVICE_ICONS[3],
    },
    {
      title: 'Coupe + barbe',
      description: 'Le duo signature : coupe complète et entretien de barbe.',
      price: '45 €',
      icon: SERVICE_ICONS[4],
    },
    {
      title: 'Soin cuir chevelu',
      description: 'Massage, masque hydratant et finition adaptée à votre cuir chevelu.',
      price: '15 €',
      icon: SERVICE_ICONS[5],
    },
  ] as BarberServiceItem[],
  midCtaTitle: 'Le luxe d’un vrai salon, sans perdre votre temps',
  midCtaImage: FALLBACK_MID_CTA,
  midCtaButton: 'Prendre rendez-vous',
  whyHeading: 'Pourquoi nous choisir',
  whyIntro:
    'Un salon de quartier pensé pour les hommes qui veulent une coupe nette, une barbe soignée, et un rendez-vous respecté.',
  whyCards: [
    {
      title: 'Qualifiés',
      icon: '/images/image-import-14.png',
      text: 'Barbiers expérimentés, hygiène stricte et produits soignés pour une expérience confortable à chaque visite.',
    },
    {
      title: 'Passionnés',
      icon: '/images/image-import.png',
      text: 'Coupes classiques ou contemporaines : on prend le temps du diagnostic et d’un résultat que vous osez montrer.',
    },
    {
      title: 'Recommandés',
      icon: '/images/image-import-2.png',
      text: 'Une réputation solide sur Google, bâtie sur des avis clients et un bouche-à-oreille de quartier.',
    },
  ] as BarberWhyCard[],
  reviewsHeading: 'Avis clients',
  google: { brand: 'GOOGLE', score: '4.9', count: '196 avis', kind: 'google' as const },
  tripadvisor: {
    brand: 'tripadvisor',
    score: '5.0',
    count: '176 avis',
    kind: 'tripadvisor' as const,
  },
  testimonial: {
    title: 'LE MEILLEUR SERVICE BARBIER',
    text: 'Enfin un barbier qui écoute. Coupe nette, barbe impeccable, et on ressort avec le moral. Je ne vais plus ailleurs.',
    author: 'JULIEN R.',
    avatar: FALLBACK_AVATAR,
    rating: 5,
  } as BarberTestimonial,
  contactHeading: 'Prendre rendez-vous',
  contactIntro:
    'Appelez-nous ou laissez un message : on vous confirme le créneau rapidement. Coupe, barbe ou les deux — à vous de choisir.',
  contactCallLabel: 'Nous appeler',
  contactEmailLabel: 'Nous écrire',
  formNameLabel: 'Nom complet',
  formSubjectLabel: 'Sujet',
  formPhoneLabel: 'Téléphone',
  formEmailLabel: 'Adresse e-mail',
  formMessageLabel: 'Écrivez votre message ici…',
  formSubmitLabel: 'Prendre rendez-vous',
  mapImage: '/images/image-import-1.png',
  contactImage: FALLBACK_CONTACT,
  hoursLines: ['Lun – Sam : 09:00 – 19:00', 'Dimanche : Fermé'],
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
 * URL de profil réelle (pas un bare domain type facebook.com/).
 * @param url Lien candidat
 * @returns true si le chemin de profil est non vide
 */
function isRealSocialUrl(url: string): boolean {
  if (!/^https?:\/\//i.test(url)) {
    return false
  }
  try {
    const parsed = new URL(url)
    const path: string = parsed.pathname.replace(/\/+$/, '')
    return path.length > 1
  } catch {
    return false
  }
}

/**
 * Construit le contenu de page prêt pour le rendu.
 * @param content Données variables du prospect (`SiteContent`)
 * @returns Contenu typé Barber
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
  const featured = reviews.find((item) => {
    const text: string = typeof item?.text === 'string' ? item.text.trim() : ''
    const author: string = typeof item?.author === 'string' ? item.author.trim() : ''
    return text.length > 0 && author.length > 0
  })

  const googleBlock: BarberReviewBlock | null =
    reviews.length > 0
      ? {
          brand: 'GOOGLE',
          score: (
            reviews.reduce((sum, r) => sum + (typeof r.rating === 'number' ? r.rating : 5), 0) /
            reviews.length
          ).toFixed(1),
          count: `${reviews.length} avis`,
          kind: 'google',
        }
      : null

  // Pas de compteur / note TripAdvisor dans SiteContent → ne jamais inventer.
  const tripadvisorBlock: BarberReviewBlock | null = null

  const testimonialBlock: BarberTestimonial | null = featured
    ? {
        title: defaults.testimonial.title,
        text: (featured.text ?? '').trim(),
        author: (featured.author ?? '').trim().toUpperCase(),
        // Pas de photo d’auteur dans SiteContent : avatar décoratif Unsplash (éditable CMS via galerie).
        avatar: gallery[4]?.url || defaults.testimonial.avatar,
        rating: typeof featured.rating === 'number' ? featured.rating : 5,
      }
    : null

  const socialFromContent: BarberSocialItem[] = Array.isArray(content.social)
    ? content.social
        .map((item) => {
          const network: string =
            typeof item?.network === 'string' ? item.network.trim().toLowerCase() : ''
          const url: string = typeof item?.url === 'string' ? item.url.trim() : ''
          const icon: string = SOCIAL_ICONS[network] ?? ''
          if (!network || !icon || !isRealSocialUrl(url)) {
            return null
          }
          return {
            name: network,
            href: url,
            label: network.charAt(0).toUpperCase() + network.slice(1),
            icon,
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

  const infoItems: BarberInfoItem[] = [
    {
      label: 'Adresse',
      icon: '/images/image-import-15.png',
      lines: [address],
    },
  ]
  if (phoneDisplay || phone) {
    infoItems.push({
      label: 'Téléphone',
      icon: '/images/image-import-12.png',
      lines: [phoneDisplay || phone],
    })
  }
  infoItems.push({
    label: 'Horaires',
    icon: '/images/image-import-10.png',
    lines: hoursLines,
  })

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
    infoItems,
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
    google: googleBlock,
    tripadvisor: tripadvisorBlock,
    testimonial: testimonialBlock,
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
    socials: socialFromContent,
    copyright: `© ${new Date().getFullYear()} ${businessName} — Tous droits réservés`,
  }
}
