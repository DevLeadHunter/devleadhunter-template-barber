import type { SiteContent } from './app/types/SiteContent'

/**
 * Mock SiteContent for later CMS wiring.
 * Current playground renders hardcoded Pencil content in BarberRoot.
 */
export const mockSiteContent: SiteContent = {
  businessName: 'Barbershop',
  subtitle: 'Experience the Convenience of In-Home Barber Services',
  phone: '(475) 453 - 3465',
  email: 'hello@example.com',
  city: 'Lefroy',
  area: 'Ontario',
  about:
    'Your personal barber service at your home. Nulla egestas sapien integer mi fermentum tellus tristique consequat.',
  services: [
    { title: 'Adult haircut', description: '$39 USD' },
    { title: 'Kids Haircut', description: '$19 USD' },
    { title: 'Beard Trim', description: '$29 USD' },
    { title: 'Neck Shave', description: '$39 USD' },
    { title: 'Scalp Moisturizing', description: '$10 USD' },
    { title: 'Beard Grooming', description: '$49 USD' },
  ],
}
