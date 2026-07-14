<template>
  <section class="barber-why">
    <div class="barber-container barber-why__inner">
      <header class="barber-why__header">
        <h2 class="barber-why__title font-display">why choose us</h2>
        <p class="barber-why__text">
          Nulla egestas sapien integer mi fermentum tellus tristique consequat pulvinar sagittis
          adipiscing egestas purus et mi tempus semper id vel prci eu magna in senectus sit eget
          justo eget.
        </p>
      </header>

      <div class="barber-why__cards">
        <article
          v-for="card in cards"
          :key="card.title"
          class="barber-why__card">
          <img
            class="barber-why__card-icon"
            :src="card.icon"
            :alt="card.title"
            width="64"
            height="64" />
          <h3 class="barber-why__card-title font-display">{{ card.title }}</h3>
          <hr class="barber-accent-line" />
          <p class="barber-why__card-text">{{ card.text }}</p>
        </article>
      </div>

      <div class="barber-why__testimonials">
        <div class="barber-why__rating">
          <svg
            class="barber-why__google-icon"
            viewBox="0 0 48 48"
            aria-hidden="true">
            <path
              fill="#FFC107"
              d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" />
            <path
              fill="#FF3D00"
              d="m6.306 14.691 6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z" />
            <path
              fill="#4CAF50"
              d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z" />
            <path
              fill="#1976D2"
              d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z" />
          </svg>
          <p class="barber-why__rating-brand font-display">GOOGLE</p>
          <p class="barber-why__rating-score font-display">4.9</p>
          <div
            class="barber-why__stars"
            aria-hidden="true">
            <span
              v-for="n in 5"
              :key="`g-${n}`"
              class="barber-why__star">
              ★
            </span>
          </div>
          <p class="barber-why__rating-count">196 reviews</p>
        </div>

        <blockquote class="barber-why__quote">
          <img
            class="barber-why__avatar"
            src="/images/image-import-8.jpg"
            alt="Sam Houston"
            width="107"
            height="107" />
          <div class="barber-why__quote-body">
            <div
              class="barber-why__stars barber-why__stars--quote"
              aria-hidden="true">
              <span
                v-for="n in 5"
                :key="`q-${n}`"
                class="barber-why__star">
                ★
              </span>
            </div>
            <p class="barber-why__quote-title font-display">THE BEST BARBER Services</p>
            <p class="barber-why__quote-text">
              Et proin ut in dignissim sem non a nullam magna lectus urna et dui quam tellus
              imperdiet sit purus at fringilla scelerisque diam amet fermentum orci fringilla
              aliquet nulla lectus erat eu auctor
            </p>
            <cite class="barber-why__quote-author font-display">SAM HOUSTON</cite>
          </div>
        </blockquote>

        <div class="barber-why__rating">
          <svg
            class="barber-why__tripadvisor-icon"
            viewBox="0 0 48 48"
            aria-hidden="true">
            <circle
              cx="24"
              cy="24"
              r="22"
              fill="#00AF87" />
            <path
              fill="#ffffff"
              d="M24 12c-5.2 0-9.8 1.9-13.2 4.9l2.9 3.1c2.5-2.1 5.7-3.4 9.3-3.4s6.8 1.3 9.3 3.4l2.9-3.1C33.8 13.9 29.2 12 24 12zm-8.2 11.2a4.9 4.9 0 1 0 0 9.8 4.9 4.9 0 0 0 0-9.8zm16.4 0a4.9 4.9 0 1 0 0 9.8 4.9 4.9 0 0 0 0-9.8zM24 18.8c-3.5 0-6.5 2.3-7.4 5.5 1.5-1 3.4-1.6 5.4-1.6s3.9.6 5.4 1.6c-.9-3.2-3.9-5.5-7.4-5.5zm-5.8 7.3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zm11.6 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5z" />
          </svg>
          <p class="barber-why__rating-brand font-display">TRIPADVISOR</p>
          <p class="barber-why__rating-score font-display">5.0</p>
          <div
            class="barber-why__stars"
            aria-hidden="true">
            <span
              v-for="n in 5"
              :key="`t-${n}`"
              class="barber-why__star">
              ★
            </span>
          </div>
          <p class="barber-why__rating-count">196 reviews</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const cards = [
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
] as const
</script>

<style scoped>
.barber-why {
  background: #ffffff;
  /* Pencil: Why band 1289; content at +136; bottom pad 150 */
  padding: 136px 0 150px;
}

.barber-why__inner {
  max-width: 1240px;
}

.barber-why__header {
  text-align: center;
  max-width: 814px;
  margin-inline: auto;
}

.barber-why__title {
  margin: 0;
  font-size: 48px;
  font-weight: 800;
  letter-spacing: 2.4px;
  line-height: 0.875;
  color: #121212;
  text-transform: uppercase;
}

.barber-why__text {
  margin: 40px auto 0;
  max-width: 600px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  color: #121212;
}

.barber-why__cards {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 280px));
  justify-content: space-between;
  gap: 24px;
  /* cards at y=228 under header block (~158) → ~70; +4 for header 154 vs 158 */
  margin-top: 74px;
}

.barber-why__card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.barber-why__card-icon {
  width: 64px;
  height: 64px;
  object-fit: contain;
}

.barber-why__card-title {
  margin: 4px 0 0;
  font-size: 24px;
  font-weight: 800;
  letter-spacing: 1.2px;
  line-height: 1;
  color: #121212;
  text-transform: uppercase;
}

.barber-why__card .barber-accent-line {
  margin-top: 11px;
}

.barber-why__card-text {
  margin: 15px 0 0;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  color: #121212;
}

.barber-why__testimonials {
  display: grid;
  grid-template-columns: 146px minmax(0, 600px) 280px;
  align-items: start;
  justify-content: space-between;
  gap: 24px;
  /* Pencil: testimonials y=725, cards block ends ~583 → gap 142 */
  margin-top: 142px;
}

.barber-why__rating {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-top: 76px;
}

.barber-why__google-icon {
  width: 42px;
  height: 42px;
}

.barber-why__tripadvisor-icon {
  width: 42px;
  height: 42px;
}

.barber-why__rating-brand {
  margin: 35px 0 0;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 1.2px;
  line-height: 1;
  color: #121212;
}

.barber-why__rating-score {
  margin: 16px 0 0;
  font-size: 92px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 0.9;
  color: #121212;
}

.barber-why__stars {
  display: flex;
  gap: 4px;
  margin-top: 20px;
  color: #f2c94c;
  font-size: 22px;
  line-height: 1;
}

.barber-why__stars--quote {
  justify-content: center;
  gap: 5px;
  margin-top: 0;
  font-size: 24px;
}

.barber-why__rating-count {
  margin: 18px 0 0;
  font-family: 'Work Sans', ui-sans-serif, system-ui, sans-serif;
  font-size: 24px;
  font-weight: 400;
  letter-spacing: normal;
  line-height: 1;
  color: #121212;
}

.barber-why__quote {
  position: relative;
  margin: 0;
  padding: 0;
}

.barber-why__avatar {
  position: absolute;
  left: 50%;
  top: 0;
  z-index: 1;
  width: 107px;
  height: 107px;
  border-radius: 100px;
  object-fit: cover;
  transform: translateX(-50%);
}

.barber-why__quote-body {
  margin-top: 61px;
  min-height: 353px;
  padding: 75px 40px 40px;
  border: 1px solid #dec7a6;
  box-sizing: border-box;
  text-align: center;
}

.barber-why__quote-title {
  margin: 18px 0 0;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 1.2px;
  line-height: 1.2;
  color: #121212;
  text-transform: uppercase;
}

.barber-why__quote-text {
  margin: 14px 0 0;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  color: #121212;
}

.barber-why__quote-author {
  display: block;
  margin-top: 16px;
  font-style: normal;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.8px;
  color: #121212;
}

@media (max-width: 1100px) {
  .barber-why {
    padding: 72px 0 64px;
  }

  .barber-why__title {
    font-size: clamp(32px, 7vw, 48px);
    line-height: 1.1;
  }

  .barber-why__cards {
    grid-template-columns: 1fr;
    justify-content: center;
    max-width: 360px;
    margin-inline: auto;
    margin-top: 48px;
  }

  .barber-why__testimonials {
    grid-template-columns: 1fr;
    margin-top: 64px;
    justify-items: center;
  }

  .barber-why__rating {
    padding-top: 0;
  }

  .barber-why__rating-score {
    font-size: clamp(64px, 16vw, 92px);
  }

  .barber-why__quote {
    width: 100%;
    max-width: 600px;
  }

  .barber-why__quote-body {
    min-height: 0;
    padding: 72px 24px 32px;
  }
}

@media (min-width: 901px) and (max-width: 1100px) {
  .barber-why__cards {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    max-width: none;
    gap: 16px;
  }
}
</style>
