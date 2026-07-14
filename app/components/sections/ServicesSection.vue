<template>
  <section
    id="services"
    class="barber-services">
    <div class="barber-container barber-services__inner">
      <header class="barber-services__header">
        <h2 class="barber-services__title font-display">Browse our services</h2>
        <p class="barber-services__text">
          Nulla egestas sapien integer mi fermentum tellus tristique consequat pulvinar sagittis
          adipiscing egestas purus et mi tempus semper id vel prci eu magna in senectus sit eget
          justo eget.
        </p>
      </header>

      <div class="barber-services__card barber-card-shadow">
        <article
          v-for="service in services"
          :key="service.title"
          class="barber-services__item">
          <img
            class="barber-services__icon"
            :src="service.icon"
            :alt="service.title"
            width="64"
            height="64" />
          <div class="barber-services__item-copy">
            <h3 class="barber-services__item-title font-display">
              {{ service.title }}
            </h3>
            <p class="barber-services__item-desc">{{ service.description }}</p>
            <p class="barber-services__item-price font-display">
              {{ service.price }}
            </p>
          </div>
        </article>
      </div>

      <div class="barber-services__cta">
        <a
          class="btn-barber"
          href="#contact">
          Book an Appointment
        </a>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const serviceDesc =
  'Nulla egestas sapien integer mi fermentum tellus tristique consequatolm pulvinar sagittis'

const services = [
  {
    title: 'Adult haircut',
    price: '$39 USD',
    description: serviceDesc,
    icon: '/images/image-import-8.png',
  },
  {
    title: 'Kids Haircut',
    price: '$19 USD',
    description: serviceDesc,
    icon: '/images/image-import-9.png',
  },
  {
    title: 'Beard Trim',
    price: '$29 USD',
    description: serviceDesc,
    icon: '/images/image-import-4.png',
  },
  {
    title: 'Neck Shave',
    price: '$39 USD',
    description: serviceDesc,
    icon: '/images/image-import-3.png',
  },
  {
    title: 'Scalp Moisturizing',
    price: '$10 USD',
    description: serviceDesc,
    icon: '/images/image-import-6.png',
  },
  {
    title: 'Beard Grooming',
    price: '$49 USD',
    description: serviceDesc,
    icon: '/images/image-import-5.png',
  },
] as const
</script>

<style scoped>
.barber-services {
  padding: 0 0 120px;
}

.barber-services__inner {
  max-width: 1026px;
}

.barber-services__header {
  text-align: center;
  max-width: 810px;
  margin-inline: auto;
}

.barber-services__title {
  margin: 0;
  font-size: 48px;
  font-weight: 800;
  letter-spacing: 2.4px;
  line-height: 0.875; /* 42px tall in Pencil */
  color: #121212;
}

.barber-services__text {
  margin: 34px auto 0;
  max-width: 593px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  color: #121212;
}

.barber-services__card {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  column-gap: 72px;
  row-gap: 80px;
  margin-top: 74px;
  min-height: 826px;
  padding: 93px 95px;
  background: #ffffff;
  box-sizing: border-box;
}

.barber-services__item {
  display: grid;
  grid-template-columns: 64px minmax(0, 1fr);
  gap: 43px;
  align-items: start;
}

.barber-services__icon {
  width: 64px;
  height: 64px;
  object-fit: contain;
}

.barber-services__item-title {
  margin: 0;
  font-size: 24px;
  font-weight: 800;
  letter-spacing: 1.2px;
  line-height: 1.2;
  color: #121212;
}

.barber-services__item-desc {
  margin: 15px 0 0;
  max-width: 300px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  color: #121212;
}

.barber-services__item-price {
  margin: 15px 0 0;
  font-size: 24px;
  font-weight: 800;
  letter-spacing: 1.2px;
  line-height: 1.2;
  color: #121212;
}

.barber-services__cta {
  display: flex;
  justify-content: center;
  margin-top: 41px;
}

@media (max-width: 900px) {
  .barber-services {
    padding: 48px 0 72px;
  }

  .barber-services__title {
    font-size: clamp(32px, 7vw, 48px);
    line-height: 1.1;
  }

  .barber-services__card {
    grid-template-columns: 1fr;
    padding: 40px 24px;
    row-gap: 40px;
    min-height: 0;
    margin-top: 40px;
  }

  .barber-services__item {
    gap: 20px;
  }
}
</style>
