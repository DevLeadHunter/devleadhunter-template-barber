<template>
  <section class="barber-hero">
    <div class="barber-hero__media">
      <img
        class="barber-hero__img"
        src="/images/image-import-3.jpg"
        alt="Barber cutting client's hair in salon"
        width="1482"
        height="1185" />
      <div
        class="barber-hero__gradient"
        aria-hidden="true" />
    </div>

    <div class="barber-hero__content">
      <h1 class="barber-hero__title font-display">
        The ultimate convenience<br />
        for busy people
      </h1>
      <p class="barber-hero__subtitle">Experience the Convenience of In-Home Barber Services</p>
      <div class="barber-hero__actions">
        <a
          class="btn-barber"
          href="#contact">
          Book an Appointment
        </a>
        <a
          class="btn-barber btn-barber--outline"
          href="#services">
          browse services
        </a>
      </div>
    </div>

    <div class="barber-hero__infobox-wrap">
      <div class="barber-hero__infobox barber-info-shadow">
        <div
          v-for="item in infoItems"
          :key="item.label"
          class="barber-hero__info-item">
          <img
            class="barber-hero__info-icon"
            :src="item.icon"
            :alt="item.label"
            width="48"
            height="48" />
          <p class="barber-hero__info-label font-display">
            {{ item.label }}
          </p>
          <hr class="barber-accent-line" />
          <p class="barber-hero__info-value font-display">
            <template
              v-for="(line, i) in item.lines"
              :key="i">
              {{ line }}<br v-if="i < item.lines.length - 1" />
            </template>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const infoItems = [
  {
    label: 'Address',
    icon: '/images/image-import-15.png',
    lines: ['3696 Lynden Road, Lefroy Ontario canada'],
  },
  {
    label: 'phone',
    icon: '/images/image-import-12.png',
    lines: ['+62(123)-456-7890', '+62(123)-456-7890'],
  },
  {
    label: 'hours',
    icon: '/images/image-import-10.png',
    lines: ['Mon - Sat: 9AM - 8PM', 'Sun: 9AM - 6PM'],
  },
] as const
</script>

<style scoped>
.barber-hero {
  position: relative;
  width: 100%;
  padding-bottom: 140px;
}

.barber-hero__media {
  position: relative;
  width: 100%;
  height: 864px;
  overflow: hidden;
  background: #121212;
}

.barber-hero__img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 20%;
}

.barber-hero__gradient {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 781px;
  background: linear-gradient(164deg, #121212 0%, rgb(18 18 18 / 0%) 49.5%);
  pointer-events: none;
}

.barber-hero__content {
  position: absolute;
  left: 50%;
  top: 316px;
  z-index: 2;
  width: min(1026px, calc(100% - 40px));
  transform: translateX(-50%);
  text-align: center;
  color: #ffffff;
}

.barber-hero__title {
  margin: 0;
  font-size: clamp(40px, 5vw, 72px);
  font-weight: 900;
  line-height: 1.24;
  letter-spacing: 0;
}

.barber-hero__subtitle {
  margin: 15px 0 0;
  font-family: 'Work Sans', ui-sans-serif, system-ui, sans-serif;
  font-size: clamp(18px, 2vw, 24px);
  font-weight: 500;
  line-height: 1.4;
}

.barber-hero__actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
  margin-top: 44px;
}

.barber-hero__infobox-wrap {
  position: absolute;
  left: 50%;
  bottom: 0;
  z-index: 3;
  width: min(1240px, calc(100% - 40px));
  transform: translateX(-50%);
}

.barber-hero__infobox {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
  min-height: 233px;
  padding: 40px 67px;
  background: #ffffff;
  box-sizing: border-box;
}

.barber-hero__info-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.barber-hero__info-icon {
  width: 48px;
  height: 48px;
  object-fit: contain;
}

.barber-hero__info-label {
  margin: 6px 0 0;
  font-size: 24px;
  font-weight: 800;
  letter-spacing: 1.2px;
  line-height: 1.5;
  color: #121212;
  text-transform: none;
}

.barber-hero__info-item .barber-accent-line {
  margin-top: 12px;
}

.barber-hero__info-value {
  margin: 16px 0 0;
  max-width: 253px;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 0.9px;
  line-height: 1.4;
  color: #121212;
}

@media (max-width: 900px) {
  .barber-hero {
    padding-bottom: 24px;
  }

  .barber-hero__media {
    height: min(78vh, 640px);
  }

  .barber-hero__content {
    top: 28%;
  }

  .barber-hero__infobox-wrap {
    position: relative;
    left: auto;
    bottom: auto;
    transform: none;
    width: calc(100% - 24px);
    margin: -48px auto 0;
  }

  .barber-hero__infobox {
    grid-template-columns: 1fr;
    padding: 32px 24px;
    gap: 32px;
  }

  .barber-hero__actions {
    gap: 12px;
  }
}
</style>
