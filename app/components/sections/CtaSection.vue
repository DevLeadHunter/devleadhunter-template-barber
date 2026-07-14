<template>
  <section class="barber-cta">
    <div class="barber-cta__media">
      <img
        class="barber-cta__img"
        src="/images/image-import-2.jpg"
        alt="Barber shaving a client's beard"
        width="1452"
        height="1126" />
      <div
        class="barber-cta__gradient"
        aria-hidden="true" />
    </div>
    <div class="barber-cta__content">
      <h2 class="barber-cta__title font-display">
        Experience the luxury of concierge barber services<br />at your home
      </h2>
      <a
        class="btn-barber"
        href="#contact">
        Book an Appointment
      </a>
    </div>
  </section>
</template>

<script lang="ts" setup></script>

<style scoped>
.barber-cta {
  position: relative;
  width: 100%;
  height: 569px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: #121212;
}

.barber-cta__media {
  position: absolute;
  inset: 0;
}

.barber-cta__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 42%;
}

.barber-cta__gradient {
  position: absolute;
  inset: 0;
  background: linear-gradient(187deg, #121212 0%, rgb(18 18 18 / 0%) 81%);
  pointer-events: none;
}

.barber-cta__content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 46px;
  width: min(814px, calc(100% - 40px));
  text-align: center;
}

.barber-cta__title {
  margin: 0;
  font-size: 48px;
  font-weight: 800;
  letter-spacing: 2.4px;
  line-height: 1.2;
  color: #ffffff;
  text-transform: uppercase;
}

@media (max-width: 800px) {
  .barber-cta {
    height: auto;
    min-height: 420px;
    padding: 64px 0;
  }

  .barber-cta__title {
    font-size: clamp(28px, 7vw, 40px);
  }

  .barber-cta__content {
    gap: 28px;
  }
}
</style>
