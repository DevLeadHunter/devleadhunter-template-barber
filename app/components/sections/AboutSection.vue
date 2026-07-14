<template>
  <section class="barber-about">
    <div class="barber-container barber-about__grid">
      <div class="barber-about__copy">
        <h2 class="barber-about__title font-display">Your personal barber service at your home</h2>
        <p class="barber-about__text">
          Nulla egestas sapien integer mi fermentum tellus tristique consequat pulvinar sagittis
          adipiscing egestas purus et mi tempus semper id vel prci eu magna in senectus sit eget
          justo
        </p>
        <div class="barber-about__stats">
          <div class="barber-about__stat">
            <p class="barber-about__stat-value font-display">99%</p>
            <p class="barber-about__stat-label font-display">Customer Satisfaction</p>
          </div>
          <div class="barber-about__stat">
            <p class="barber-about__stat-value font-display">10+</p>
            <p class="barber-about__stat-label font-display">years of experience</p>
          </div>
        </div>
      </div>
      <div class="barber-about__media">
        <img
          src="/images/image-import-1.jpg"
          alt="Barber grooming a client's beard"
          width="603"
          height="600" />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup></script>

<style scoped>
.barber-about {
  /* Pencil: info bottom 953 → about y 1103 = 150px gap */
  padding: 150px 0 144px;
}

.barber-about__grid {
  display: grid;
  grid-template-columns: minmax(0, 493px) minmax(0, 603px);
  justify-content: space-between;
  align-items: start;
  /* image at x=637, copy width area from 0 → gap ≈ 144 */
  gap: 144px;
}

.barber-about__copy {
  padding-top: 83px; /* Pencil: Text group y=83 vs Image y=0 */
}

.barber-about__title {
  margin: 0;
  max-width: 419px;
  font-size: 48px;
  font-weight: 800;
  letter-spacing: 2.4px;
  line-height: 1.1667;
  color: #121212;
}

.barber-about__text {
  margin: 31px 0 0;
  max-width: 493px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  color: #121212;
}

.barber-about__stats {
  display: grid;
  grid-template-columns: 173px 132px;
  justify-content: start;
  column-gap: 89px;
  margin-top: 21px;
  max-width: 420px;
}

.barber-about__stat-value {
  margin: 0;
  font-size: 48px;
  font-weight: 800;
  letter-spacing: 2.4px;
  line-height: 1;
  color: #121212;
}

.barber-about__stat-label {
  margin: 12px 0 0;
  max-width: 173px;
  font-size: 20px;
  font-weight: 800;
  letter-spacing: 1px;
  line-height: 1.35;
  color: #121212;
}

.barber-about__media {
  width: 100%;
  max-width: 603px;
  aspect-ratio: 603 / 600;
  overflow: hidden;
  justify-self: end;
}

.barber-about__media img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (max-width: 1100px) {
  .barber-about {
    padding: 72px 0 48px;
  }

  .barber-about__copy {
    padding-top: 0;
  }

  .barber-about__grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .barber-about__title {
    font-size: clamp(32px, 7vw, 48px);
  }

  .barber-about__stats {
    grid-template-columns: 1fr 1fr;
    column-gap: 24px;
    margin-top: 32px;
  }

  .barber-about__media {
    justify-self: stretch;
    max-width: none;
    order: -1;
  }
}

@media (min-width: 1101px) and (max-width: 1280px) {
  .barber-about__grid {
    gap: 48px;
    grid-template-columns: minmax(0, 1fr) minmax(0, 480px);
  }
}
</style>
