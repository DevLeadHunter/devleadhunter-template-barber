<template>
  <footer
    id="contact"
    class="barber-footer">
    <div class="barber-footer__contact">
      <div class="barber-footer__contact-media">
        <img
          class="barber-footer__contact-img"
          :src="page.contactImage"
          :alt="page.businessName"
          width="1464"
          height="898" />
        <div
          class="barber-footer__contact-gradient"
          aria-hidden="true" />
      </div>

      <div class="barber-container barber-footer__contact-grid">
        <div class="barber-footer__intro">
          <h2 class="barber-footer__title font-display">{{ page.contactHeading }}</h2>
          <p class="barber-footer__text">{{ page.contactIntro }}</p>

          <div class="barber-footer__channels">
            <a
              v-if="page.phone"
              class="barber-footer__channel"
              :href="`tel:${phoneHref}`">
              <span class="barber-footer__channel-icon">
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#121212"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true">
                  <path
                    d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </span>
              <span>
                <span class="barber-footer__channel-label font-display">
                  {{ page.contactCallLabel }}
                </span>
                <span class="barber-footer__channel-value font-display">
                  {{ page.phoneDisplay || page.phone }}
                </span>
              </span>
            </a>
            <a
              v-if="page.email"
              class="barber-footer__channel"
              :href="`mailto:${page.email}`">
              <span class="barber-footer__channel-icon">
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#121212"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true">
                  <rect
                    x="2"
                    y="4"
                    width="20"
                    height="16"
                    rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </span>
              <span>
                <span class="barber-footer__channel-label font-display">
                  {{ page.contactEmailLabel }}
                </span>
                <span class="barber-footer__channel-value font-display">{{ page.email }}</span>
              </span>
            </a>
          </div>
        </div>

        <form
          class="barber-footer__form barber-card-shadow"
          @submit.prevent="onSubmit">
          <label class="barber-footer__field barber-footer__field--name">
            <span class="barber-footer__field-label font-display">{{ page.formNameLabel }}</span>
            <input
              v-model="form.fullName"
              class="barber-footer__input"
              type="text"
              name="fullName"
              autocomplete="name" />
          </label>
          <label class="barber-footer__field barber-footer__field--subject">
            <span class="barber-footer__field-label font-display">{{ page.formSubjectLabel }}</span>
            <input
              v-model="form.subject"
              class="barber-footer__input"
              type="text"
              name="subject" />
          </label>
          <label class="barber-footer__field barber-footer__field--phone">
            <span class="barber-footer__field-label font-display">{{ page.formPhoneLabel }}</span>
            <input
              v-model="form.phone"
              class="barber-footer__input"
              type="tel"
              name="phone"
              autocomplete="tel" />
          </label>
          <label class="barber-footer__field barber-footer__field--email">
            <span class="barber-footer__field-label font-display">{{ page.formEmailLabel }}</span>
            <input
              v-model="form.email"
              class="barber-footer__input"
              type="email"
              name="email"
              autocomplete="email" />
          </label>
          <label class="barber-footer__field barber-footer__field--message">
            <span class="barber-footer__field-label font-display">
              {{ page.formMessageLabel }}
            </span>
            <textarea
              v-model="form.message"
              class="barber-footer__textarea"
              name="message" />
          </label>
          <button
            class="btn-barber barber-footer__submit"
            type="submit">
            {{ page.formSubmitLabel }}
          </button>
        </form>
      </div>
    </div>

    <div class="barber-footer__map">
      <img
        :src="page.mapImage"
        alt="Map location"
        width="1472"
        height="499" />
    </div>

    <div class="barber-footer__copyright">
      <div class="barber-container barber-footer__copyright-inner">
        <p class="barber-footer__copy-text">{{ page.copyright }}</p>
        <div
          v-if="page.socials.length"
          class="barber-footer__socials"
          aria-label="Réseaux sociaux">
          <a
            v-for="social in page.socials"
            :key="social.name"
            :href="social.href"
            :aria-label="social.label"
            target="_blank"
            rel="noopener noreferrer">
            <img
              class="barber-footer__social-icon"
              :src="social.icon"
              :alt="social.label"
              width="24"
              height="24" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import type { ComputedRef, PropType } from 'vue'
import { reactive } from 'vue'
import type { BarberPageContent } from '~/types/barber'

const props = defineProps({
  page: {
    type: Object as PropType<BarberPageContent>,
    required: true,
  },
})

const phoneHref: ComputedRef<string> = computed((): string => props.page.phone.replace(/\D/g, ''))

const form = reactive({
  fullName: '',
  subject: '',
  phone: '',
  email: '',
  message: '',
})

function onSubmit(): void {
  const to: string = props.page.email.trim()
  if (!to) {
    return
  }
  const subject = encodeURIComponent(
    form.subject.trim() || `Rendez-vous — ${props.page.businessName}`,
  )
  const body = encodeURIComponent(
    [
      `Nom : ${form.fullName}`,
      `Téléphone : ${form.phone}`,
      `Email : ${form.email}`,
      '',
      form.message,
    ].join('\n'),
  )
  window.location.href = `mailto:${to}?subject=${subject}&body=${body}`
}
</script>

<style scoped>
.barber-footer {
  background: #f8f5ef;
  overflow: visible;
  isolation: isolate;
}

.barber-footer__contact {
  position: relative;
  z-index: 3;
  /* Pencil dark band exactly 641; form overflows onto map */
  height: 641px;
  min-height: 641px;
  padding: 135px 0 0;
  margin-bottom: 0;
  overflow: visible;
  background: #121212;
}

.barber-footer__contact-media {
  position: absolute;
  inset: 0;
  overflow: hidden;
}

.barber-footer__contact-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* Pencil image sits at top of band (y=0), slight right bias */
  object-position: 58% 8%;
}

.barber-footer__contact-gradient {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, #121212 0%, rgb(18 18 18 / 0%) 100%);
  pointer-events: none;
}

.barber-footer__contact-grid {
  position: relative;
  z-index: 4;
  display: grid;
  grid-template-columns: minmax(0, 493px) minmax(0, 600px);
  justify-content: space-between;
  gap: 40px;
  align-items: start;
  padding-bottom: 0;
}

.barber-footer__title {
  margin: 0;
  max-width: 493px;
  font-size: 48px;
  font-weight: 800;
  letter-spacing: 2.4px;
  line-height: 1.25;
  color: #ffffff;
  text-transform: uppercase;
}

.barber-footer__text {
  margin: 25px 0 0;
  max-width: 493px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  color: #ffffff;
}

.barber-footer__channels {
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 50px;
}

.barber-footer__channel {
  display: flex;
  align-items: center;
  gap: 40px;
  text-decoration: none;
  color: #ffffff;
}

.barber-footer__channel-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 67px;
  height: 67px;
  background: #ffffff;
  flex-shrink: 0;
}

.barber-footer__channel-icon svg {
  width: 36px;
  height: 36px;
}

.barber-footer__channel-label,
.barber-footer__channel-value {
  display: block;
}

.barber-footer__channel-label {
  font-size: 16px;
  font-weight: 800;
  letter-spacing: 0.8px;
  line-height: 1.2;
}

.barber-footer__channel-value {
  margin-top: 8px;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0.8px;
  line-height: 1.2;
}

.barber-footer__form {
  position: relative;
  z-index: 5;
  justify-self: end;
  width: 600px;
  max-width: 100%;
  height: 600px;
  margin-top: 16px; /* Pencil: form y=151 vs text y=135 */
  padding: 0;
  background: #ffffff;
  box-sizing: border-box;
}

.barber-footer__field {
  position: absolute;
  display: block;
  margin: 0;
}

.barber-footer__field--name {
  left: 41px;
  top: 37px;
  width: 519px;
  height: 45px;
}

.barber-footer__field--subject {
  left: 41px;
  top: 114px;
  width: 519px;
  height: 45px;
}

.barber-footer__field--phone {
  left: 41px;
  top: 191px;
  width: 250px;
  height: 45px;
}

.barber-footer__field--email {
  left: 310px;
  top: 191px;
  width: 250px;
  height: 45px;
}

.barber-footer__field--message {
  left: 41px;
  top: 272px;
  width: 520px;
  height: 177px;
}

.barber-footer__field-label {
  position: absolute;
  top: 0;
  left: 0;
  font-family: 'Barlow', ui-sans-serif, system-ui, sans-serif;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.8px;
  line-height: 1.2;
  color: #121212;
  text-transform: uppercase;
}

.barber-footer__input,
.barber-footer__textarea {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  width: 100%;
  height: 45px;
  margin: 0;
  border: none;
  border-bottom: 2px solid #121212;
  border-radius: 0;
  background: transparent;
  padding: 22px 0 0;
  font-family: 'Work Sans', ui-sans-serif, system-ui, sans-serif;
  font-size: 16px;
  color: #121212;
  outline: none;
  box-sizing: border-box;
}

.barber-footer__textarea {
  height: 177px;
  padding-top: 28px;
  resize: none;
}

.barber-footer__submit {
  position: absolute;
  left: 41px;
  top: 490px;
  width: 300px;
  max-width: calc(100% - 82px);
  margin: 0;
}

.barber-footer__map {
  position: relative;
  z-index: 1;
  width: 100%;
  /* Stick flush under the 641px appointment band; form overlays via z-index */
  margin-top: 0;
  overflow: hidden;
  background: #d9d9d9;
}

.barber-footer__map img {
  display: block;
  width: 100%;
  height: 640px;
  object-fit: cover;
  object-position: center;
}

.barber-footer__copyright {
  position: relative;
  z-index: 2;
  /* Keep copyright flush over bottom of taller map */
  margin-top: -31px;
  background: #121212;
  min-height: 80px;
}

.barber-footer__copyright-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  min-height: 80px;
}

.barber-footer__copy-text {
  margin: 0;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.4;
  color: #ffffff;
}

.barber-footer__socials {
  display: flex;
  align-items: center;
  gap: 30px;
}

.barber-footer__socials a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  overflow: visible;
  color: #ffffff;
  text-decoration: none;
  opacity: 0.95;
}

.barber-footer__socials a svg {
  display: block;
  overflow: visible;
  flex-shrink: 0;
}

.barber-footer__socials a:hover {
  opacity: 0.75;
}

.barber-footer__social-icon {
  display: block;
  width: 24px;
  height: 24px;
  object-fit: contain;
}

@media (max-width: 1100px) {
  .barber-footer__contact {
    height: auto;
    min-height: 0;
    padding: 56px 0 40px;
    margin-bottom: 0;
  }

  .barber-footer__contact-media {
    inset: 0;
  }

  .barber-footer__contact-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .barber-footer__title {
    font-size: clamp(32px, 6vw, 44px);
  }

  .barber-footer__channel {
    gap: 20px;
  }

  .barber-footer__form {
    position: relative;
    width: 100%;
    height: auto;
    min-height: 0;
    max-width: none;
    margin-top: 0;
    padding: 28px 24px 32px;
    display: flex;
    flex-direction: column;
    gap: 28px;
  }

  .barber-footer__field {
    position: relative;
    left: auto !important;
    top: auto !important;
    width: 100% !important;
    height: auto !important;
  }

  .barber-footer__field-label {
    position: static;
    display: block;
    margin-bottom: 10px;
  }

  .barber-footer__input,
  .barber-footer__textarea {
    position: static;
    width: 100%;
    height: 45px;
    padding: 0 0 8px;
  }

  .barber-footer__textarea {
    height: 140px;
    min-height: 140px;
  }

  .barber-footer__submit {
    position: static;
    left: auto;
    top: auto;
    width: 100%;
    max-width: none;
  }

  .barber-footer__copyright-inner {
    flex-direction: column;
    justify-content: center;
    padding-block: 20px;
    text-align: center;
  }

  .barber-footer__socials {
    gap: 22px;
    flex-wrap: wrap;
    justify-content: center;
  }

  .barber-footer__map img {
    height: 360px;
  }
}

@media (max-width: 600px) {
  .barber-footer__contact {
    padding: 40px 0 28px;
  }

  .barber-footer__channels {
    gap: 24px;
    margin-top: 32px;
  }

  .barber-footer__channel-icon {
    width: 56px;
    height: 56px;
  }

  .barber-footer__map img {
    height: 280px;
  }
}
</style>
