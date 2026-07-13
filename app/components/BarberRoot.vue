<template>
  <div class="barber-page">
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <CtaSection />
    <WhySection />
    <FooterSection />
  </div>
</template>

<script lang="ts" setup>
/**
 * Root component of the barber template — single public entry point for demo-host.
 * Pixel-perfect Pencil integration (hardcoded content). SiteContent wiring comes later.
 */
import HeroSection from './sections/HeroSection.vue'
import AboutSection from './sections/AboutSection.vue'
import ServicesSection from './sections/ServicesSection.vue'
import CtaSection from './sections/CtaSection.vue'
import WhySection from './sections/WhySection.vue'
import FooterSection from './sections/FooterSection.vue'

useHead({
  title: 'Barbershop',
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Barlow:wght@700;800;900&family=Work+Sans:wght@400;500;700&display=swap',
    },
  ],
})
</script>
