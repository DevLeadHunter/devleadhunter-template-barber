<template>
  <div
    class="barber-page"
    :style="themeStyle">
    <HeroSection :page="page" />
    <AboutSection :page="page" />
    <ServicesSection :page="page" />
    <CtaSection :page="page" />
    <WhySection :page="page" />
    <FooterSection :page="page" />
  </div>
</template>

<script lang="ts" setup>
/**
 * Root component of the barber template — single public entry point for demo-host.
 * Receives flat `SiteContent` and builds the page model consumed by sections.
 */
import type { ComputedRef, PropType, StyleValue } from 'vue'
import type { SiteContent } from '~/types/SiteContent'
import { buildBarberContent, type BarberPageContent } from '~/types/barber'
import HeroSection from './sections/HeroSection.vue'
import AboutSection from './sections/AboutSection.vue'
import ServicesSection from './sections/ServicesSection.vue'
import CtaSection from './sections/CtaSection.vue'
import WhySection from './sections/WhySection.vue'
import FooterSection from './sections/FooterSection.vue'

const props = defineProps({
  content: {
    type: Object as PropType<SiteContent>,
    required: true,
  },
})

const page: ComputedRef<BarberPageContent> = computed((): BarberPageContent =>
  buildBarberContent(props.content),
)

const themeStyle: ComputedRef<StyleValue> = computed((): StyleValue => ({
  '--barber-primary': page.value.theme.primary,
  '--barber-secondary': page.value.theme.secondary,
  '--barber-accent': page.value.theme.accent,
}))

/** Logo prospect (URL logo uniquement) → favicon ; sinon logo DA barber. */
const faviconHref: ComputedRef<string> = computed((): string => {
  const logo: string = typeof props.content.logo === 'string' ? props.content.logo.trim() : ''
  // Refuse les photos « hero » passées par erreur : un logo est en général SVG/PNG petit.
  if (logo.length === 0) {
    return '/images/favicon.svg'
  }
  return logo
})

useHead((): { title: string; link: Array<Record<string, string>> } => ({
  title: page.value.businessName,
  link: [
    { rel: 'icon', href: faviconHref.value },
    { rel: 'apple-touch-icon', href: faviconHref.value },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Barlow:wght@700;800;900&family=Work+Sans:wght@400;500;700&display=swap',
    },
  ],
}))
</script>
