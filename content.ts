import type { SiteContent } from './app/types/SiteContent'

/**
 * Mock SiteContent for the playground — realistic French barber prospect data
 * (same shape as enrichment → `build_site_content` in the API).
 */
export const mockSiteContent: SiteContent = {
  businessName: 'Atelier Barbier Martin',
  phone: '04 78 42 19 67',
  email: 'contact@atelier-barbier-martin.fr',
  city: 'Lyon',
  area: 'Lyon 6e — Foch',
  subtitle: 'Coupe, barbe et soins pour hommes à Lyon — un salon de quartier, sur rendez-vous.',
  about:
    'Installé depuis plus de dix ans près de Foch, l’Atelier Barbier Martin propose des coupes classiques et contemporaines, un entretien de barbe soigné et un accueil sans chichi. On prend le temps : diagnostic, conseil produit, et un résultat net que vous osez montrer.',
  heroImage:
    'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1600&q=80',
  aboutImage:
    'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=80',
  logo: 'https://images.unsplash.com/photo-1621607512214-68297480165e?auto=format&fit=crop&w=128&h=128&q=80',
  gallery: [
    {
      url: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1600&q=80',
      alt: 'Salon de coiffure pour hommes',
    },
    {
      url: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=80',
      alt: 'Barbier au travail',
    },
    {
      url: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=1400&q=80',
      alt: 'Rasage à l’ancienne',
    },
    {
      url: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=1200&q=80',
      alt: 'Quartier / accès',
    },
    {
      url: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80',
      alt: 'Client satisfait',
    },
    {
      url: 'https://images.unsplash.com/photo-1521590832167-7bcbfaaae1b0?auto=format&fit=crop&w=1400&q=80',
      alt: 'Intérieur du salon',
    },
  ],
  palette: {
    primary: '#121212',
    secondary: '#f8f5ef',
    accent: '#dec7a6',
  },
  services: [
    {
      title: 'Coupe homme',
      description:
        'Shampooing, coupe aux ciseaux ou tondeuse, séchage et conseils d’entretien. — 32 €',
    },
    {
      title: 'Coupe enfant (-12 ans)',
      description: 'Coupe adaptée aux plus jeunes, en douceur et sans stress. — 22 €',
    },
    {
      title: 'Taille de barbe',
      description: 'Contour, volume et finition rasoir — barbe nette et structurée. — 18 €',
    },
    {
      title: 'Rasage traditionnel',
      description: 'Serviette chaude, mousse, rasoir droit et after-shave. — 28 €',
    },
    {
      title: 'Coupe + barbe',
      description: 'Le duo signature : coupe complète et entretien de barbe. — 45 €',
    },
    {
      title: 'Soin cuir chevelu',
      description: 'Massage, masque hydratant et finition adaptée à votre cuir chevelu. — 15 €',
    },
  ],
  reviews: [
    {
      author: 'Julien R.',
      text: 'Enfin un barbier qui écoute. Coupe nette, barbe impeccable, et on ressort avec le moral. Je ne vais plus ailleurs.',
      rating: 5,
    },
    {
      author: 'Thomas M.',
      text: 'Accueil pro, rendez-vous respectés, tarifs clairs. Le combo coupe + barbe vaut vraiment le coup.',
      rating: 5,
    },
    {
      author: 'Karim B.',
      text: 'Ambiance salon de quartier, sans blabla inutile. Résultat nickel à chaque fois.',
      rating: 5,
    },
  ],
  openingHours: [
    { day: 'Lun – Sam', hours: '09:00 – 19:00' },
    { day: 'Dimanche', hours: 'Fermé' },
  ],
  social: [
    { network: 'instagram', url: 'https://www.instagram.com/' },
    { network: 'facebook', url: 'https://www.facebook.com/' },
  ],
  zones: ['Lyon 6e', 'Lyon 3e', 'Villeurbanne', 'Caluire'],
  heroBadge: 'BARBIER',
  heroPoints: ['Sur rendez-vous', 'Produits soignés', 'Salon de quartier'],
  ctaCallLabel: 'Prendre rendez-vous',
  ctaQuoteLabel: 'Voir les prestations',
  trustItems: [
    { value: '98%', label: 'Clients satisfaits' },
    { value: '12+', label: "Années d'expérience" },
  ],
  servicesHeading: 'Nos prestations',
  reviewsHeading: 'Avis clients',
  faqHeading: 'Pourquoi nous choisir',
  aboutHeading: 'Votre barbier de quartier à Lyon',
  contactHeading: 'Prendre rendez-vous',
}
