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
            viewBox="0 0 46.84 48"
            aria-hidden="true">
            <path
              fill="#eb4335"
              d="M35.98284 18.84614c0-1.51587-0.12248-2.62206-0.38756-3.7692l-17.23669 0 0 6.84189 10.11755 0c-0.20391 1.70031-1.30542 4.26093-3.75328 5.98157l-0.03432 0.22906 5.44993 4.23989 0.37758 0.03785c3.46767-3.21618 5.46679-7.94822 5.46679-13.56106z m-17.62425 18.02676c4.95675 0 9.11799-1.63887 12.15746-4.4657l-5.79319-4.5068c-1.55025 1.08571-3.63094 1.84364-6.36427 1.84365-4.8548 0-8.97525-3.21604-10.44408-7.66126l-0.21529 0.01836-5.66691 4.40427-0.07411 0.20688c3.01894 6.02253 9.22008 10.1606 16.40039 10.1606z m-10.44408-14.79011c-0.38756-1.14714-0.61186-2.37633-0.61185-3.64634 0-1.27015 0.2243-2.49919 0.59147-3.64633l-0.01027-0.24432-5.73792-4.47502-0.18774 0.08967c-1.24425 2.4992-1.9582 5.30569-1.9582 8.276 0 2.97031 0.71395 5.77666 1.9582 8.27585l5.95631-4.62951z m10.44409-14.95408c3.44728 0 5.77266 1.49539 7.09861 2.74506l5.18118-5.08029c-3.18206-2.97031-7.32305-4.79348-12.27979-4.79348-7.18031 0-13.38146 4.13793-16.4004 10.16045l5.93593 4.62967c1.48922-4.44523 5.60967-7.6614 10.46447-7.66141z" />
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
          <p class="barber-why__rating-count font-display">196 reviews</p>
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
            <path
              fill="#121212"
              d="M21 42c11.59798 0 21-9.40202 21-21 0-11.59798-9.40202-21-21-21-11.59798 0-21 9.40202-21 21 0 11.59798 9.40202 21 21 21z m12.97069-25.09682l2.53409-2.75701-5.61956 0c-2.81328-1.92171-6.21086-3.04091-9.88527-3.04091-3.66976 0-7.05786 1.12161-9.86649 3.04091l-5.63362 0 2.53408 2.75701c-1.55327 1.41718-2.52702 3.45856-2.52702 5.72515 0 4.27743 3.46798 7.74535 7.74541 7.74535 2.03196 0 3.88321-0.78367 5.26524-2.06481l2.48246 2.70303 2.48246-2.70067c1.38203 1.28114 3.23093 2.06246 5.26289 2.06245 4.27743 0 7.75006-3.46792 7.75006-7.74535 0.00229-2.26895-0.97139-4.31028-2.52473-5.72515z m-20.71609 10.96691c-2.89545 0-5.24176-2.34631-5.24176-5.24176 0-2.89545 2.34636-5.24182 5.24176-5.24181 2.8954 0 5.24176 2.34636 5.24176 5.24181 0 2.89545-2.34636 5.24176-5.24176 5.24176z m7.74771-5.39427c0-3.4492-2.50824-6.41029-5.81899-7.67501 1.79026-0.74853 3.75418-1.16382 5.81663-1.16382 2.06245 0 4.02867 0.41529 5.81899 1.16382-3.30834 1.26707-5.81664 4.22587-5.81663 7.67501z m7.74541 5.39427c-2.89545 0-5.24182-2.34631-5.24182-5.24176 0-2.89545 2.34636-5.24182 5.24182-5.24181 2.89546 0 5.24176 2.34636 5.24175 5.24181 0 2.89545-2.34636 5.24176-5.24175 5.24176z m0-7.99176c-1.51813 0-2.74765 1.22952-2.74765 2.74765 0 1.51807 1.22952 2.74759 2.74765 2.74759 1.51807 0 2.74759-1.22951 2.74758-2.74759-0.00006-1.51578-1.22952-2.74764-2.74758-2.74765z m-12.74553 2.75c0 1.51807-1.22951 2.74759-2.74759 2.74759-1.51807 0-2.74759-1.22951-2.74758-2.74759 0-1.51813 1.22951-2.74765 2.74758-2.74764 1.51807-0.00235 2.74759 1.22951 2.74759 2.74764z" />
          </svg>
          <p class="barber-why__rating-brand font-display">tripadvisor</p>
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
          <p class="barber-why__rating-count font-display">196 reviews</p>
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
  /* Pencil: Why at 3722, content Why choose us at +136 */
  padding: 136px 0 100px;
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
  text-transform: lowercase;
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
  /* cards at y=228 under header block (~42+40+76=158) → ~70 */
  margin-top: 70px;
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
  margin: 16px 0 0;
  font-size: 24px;
  font-weight: 800;
  letter-spacing: 1.2px;
  line-height: 1;
  color: #121212;
}

.barber-why__card .barber-accent-line {
  margin-top: 11px;
}

.barber-why__card-text {
  margin: 20px 0 0;
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
  /* Testimonials at y=725, cards ~228+220 → margin ~277 */
  margin-top: 200px;
}

.barber-why__rating {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-top: 76px;
}

.barber-why__google-icon {
  width: 36px;
  height: 37px;
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
  font-size: 24px;
  font-weight: 400;
  letter-spacing: 0.8px;
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
