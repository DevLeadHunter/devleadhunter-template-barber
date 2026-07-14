<template>
  <footer
    id="contact"
    class="barber-footer">
    <div class="barber-footer__contact">
      <div class="barber-footer__contact-media">
        <img
          class="barber-footer__contact-img"
          src="/images/image-import-5.jpg"
          alt="Barbershop interior"
          width="1464"
          height="898" />
        <div
          class="barber-footer__contact-gradient"
          aria-hidden="true" />
      </div>

      <div class="barber-container barber-footer__contact-grid">
        <div class="barber-footer__intro">
          <h2 class="barber-footer__title font-display">make an appointment</h2>
          <p class="barber-footer__text">
            Nulla egestas sapien integer mi fermentum tellus tristique consequat pulvinar sagittis
            adipiscing egestas purus et mi tempus semper id vel prci eu magna in senectus sit eget
            justo
          </p>

          <div class="barber-footer__channels">
            <a
              class="barber-footer__channel"
              href="tel:4754533465">
              <span class="barber-footer__channel-icon">
                <img
                  src="/images/image-import-12.png"
                  alt=""
                  width="36"
                  height="36" />
              </span>
              <span>
                <span class="barber-footer__channel-label font-display"> Give us a Call </span>
                <span class="barber-footer__channel-value font-display"> (475) 453 - 3465 </span>
              </span>
            </a>
            <a
              class="barber-footer__channel"
              href="mailto:hello@example.com">
              <span class="barber-footer__channel-icon">
                <img
                  src="/images/image-import-7.png"
                  alt=""
                  width="36"
                  height="36" />
              </span>
              <span>
                <span class="barber-footer__channel-label font-display"> Send us an email </span>
                <span class="barber-footer__channel-value font-display"> hello@example.com </span>
              </span>
            </a>
          </div>
        </div>

        <form
          class="barber-footer__form barber-card-shadow"
          @submit.prevent="onSubmit">
          <label class="barber-footer__field barber-footer__field--name">
            <span class="barber-footer__field-label font-display">Full name</span>
            <input
              v-model="form.fullName"
              class="barber-footer__input"
              type="text"
              name="fullName"
              autocomplete="name" />
          </label>
          <label class="barber-footer__field barber-footer__field--subject">
            <span class="barber-footer__field-label font-display">subject</span>
            <input
              v-model="form.subject"
              class="barber-footer__input"
              type="text"
              name="subject" />
          </label>
          <label class="barber-footer__field barber-footer__field--phone">
            <span class="barber-footer__field-label font-display">phone number</span>
            <input
              v-model="form.phone"
              class="barber-footer__input"
              type="tel"
              name="phone"
              autocomplete="tel" />
          </label>
          <label class="barber-footer__field barber-footer__field--email">
            <span class="barber-footer__field-label font-display">email address</span>
            <input
              v-model="form.email"
              class="barber-footer__input"
              type="email"
              name="email"
              autocomplete="email" />
          </label>
          <label class="barber-footer__field barber-footer__field--message">
            <span class="barber-footer__field-label font-display">
              Please type your message here...
            </span>
            <textarea
              v-model="form.message"
              class="barber-footer__textarea"
              name="message" />
          </label>
          <button
            class="btn-barber barber-footer__submit"
            type="submit">
            Book an Appointment
          </button>
        </form>
      </div>
    </div>

    <div class="barber-footer__map">
      <img
        src="/images/image-import-1.png"
        alt="Map location"
        width="1472"
        height="499" />
    </div>

    <div class="barber-footer__copyright">
      <div class="barber-container barber-footer__copyright-inner">
        <p class="barber-footer__copy-text">© Copyright 2022 barbershop - All right reserved</p>
        <div
          class="barber-footer__socials"
          aria-label="Social links">
          <a
            href="#"
            aria-label="Facebook">
            <svg
              viewBox="0 0 13 24"
              width="13"
              height="24"
              aria-hidden="true">
              <path
                fill="#ffffff"
                d="M8.51 3.32003l1.88 0 0-3.18c-0.91025-0.09465-1.82484-0.14138-2.74-0.14-2.72 0-4.58 1.66-4.58 4.7l0 2.62-3.07 0 0 3.56 3.07 0 0 9.12 3.68 0 0-9.12 3.06 0 0.46-3.56-3.52 0 0-2.27c0-1.05 0.28-1.73 1.76-1.73z" />
            </svg>
          </a>
          <a
            href="#"
            aria-label="Twitter">
            <svg
              viewBox="0 0 24 20"
              width="24"
              height="20"
              aria-hidden="true">
              <path
                fill="#ffffff"
                d="M20.383 1.96745c-0.76344 0.33769-1.57304 0.55947-2.402 0.658 0.87375-0.52257 1.52771-1.34499 1.84-2.314-0.82 0.488-1.719 0.83-2.656 1.015-0.62939-0.67342-1.46364-1.12004-2.37304-1.27042-0.9094-0.15038-1.84301 0.00391-2.65569 0.43887-0.81268 0.43496-1.45888 1.12623-1.83815 1.96634-0.37927 0.84011-0.47037 1.78199-0.25912 2.67921-1.66289-0.08335-3.28967-0.51548-4.77471-1.26834-1.48505-0.75286-2.79516-1.80962-3.84529-3.10166-0.37171 0.63845-0.56704 1.36423-0.566 2.103 0 1.45 0.738 2.731 1.86 3.481-0.66399-0.0209-1.31337-0.20022-1.894-0.523l0 0.052c0.0002 0.9657 0.33437 1.90162 0.94585 2.64906 0.61148 0.74744 1.46263 1.26042 2.40915 1.45194-0.61638 0.16704-1.26269 0.19166-1.89 0.072 0.26687 0.83123 0.78701 1.5582 1.48759 2.07911 0.70059 0.52091 1.54654 0.80968 2.41941 0.82589-0.86752 0.68133-1.86082 1.18498-2.92312 1.48217-1.0623 0.29719-2.17275 0.38208-3.26788 0.24983 1.9117 1.22943 4.1371 1.88212 6.41 1.88 7.693 0 11.9-6.373 11.9-11.9 0-0.18-0.005-0.362-0.013-0.54 0.81886-0.59183 1.5256-1.32498 2.087-2.165l-0.001-0.001z" />
            </svg>
          </a>
          <a
            href="#"
            aria-label="Instagram">
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              aria-hidden="true">
              <path
                fill="#ffffff"
                d="M10 7c-0.79565 0-1.55871 0.31607-2.12132 0.87868-0.56261 0.56261-0.87868 1.32567-0.87868 2.12132 0 0.79565 0.31607 1.55871 0.87868 2.12132 0.56261 0.56261 1.32567 0.87868 2.12132 0.87868 0.79565 0 1.55871-0.31607 2.12132-0.87868 0.56261-0.56261 0.87868-1.32567 0.87868-2.12132 0-0.79565-0.31607-1.55871-0.87868-2.12132-0.56261-0.56261-1.32567-0.87868-2.12132-0.87868z m0-2c1.32608 0 2.59785 0.52678 3.53553 1.46447 0.93768 0.93768 1.46447 2.20945 1.46447 3.53553 0 1.32608-0.52678 2.59785-1.46447 3.53553-0.93768 0.93768-2.20945 1.46447-3.53553 1.46447-1.32608 0-2.59785-0.52678-3.53553-1.46447-0.93768-0.93768-1.46447-2.20945-1.46447-3.53553 0-1.32608 0.52678-2.59785 1.46447-3.53553 0.93768-0.93768 2.20945-1.46447 3.53553-1.46447z m6.5-0.25c0 0.33152-0.1317 0.64946-0.36612 0.88388-0.23442 0.23442-0.55236 0.36612-0.88388 0.36612-0.33152 0-0.64946-0.1317-0.88388-0.36612-0.23442-0.23442-0.36612-0.55236-0.36612-0.88388 0-0.33152 0.1317-0.64946 0.36612-0.88388 0.23442-0.23442 0.55236-0.36612 0.88388-0.36612 0.33152 0 0.64946 0.1317 0.88388 0.36612 0.23442 0.23442 0.36612 0.55236 0.36612 0.88388z m-6.5-2.75c-2.474 0-2.878 0.007-4.029 0.058-0.784 0.037-1.31 0.142-1.798 0.332-0.40838 0.14994-0.77759 0.39026-1.08 0.703-0.31299 0.3024-0.55365 0.67158-0.704 1.08-0.19 0.49-0.295 1.015-0.331 1.798-0.052 1.104-0.058 1.49-0.058 4.029 0 2.474 0.007 2.878 0.058 4.029 0.037 0.783 0.142 1.31 0.331 1.797 0.17 0.435 0.37 0.748 0.702 1.08 0.337 0.336 0.65 0.537 1.08 0.703 0.494 0.191 1.02 0.297 1.8 0.333 1.104 0.052 1.49 0.058 4.029 0.058 2.474 0 2.878-0.007 4.029-0.058 0.782-0.037 1.309-0.142 1.797-0.331 0.40777-0.15069 0.77674-0.39052 1.08-0.702 0.337-0.337 0.538-0.65 0.704-1.08 0.19-0.493 0.296-1.02 0.332-1.8 0.052-1.104 0.058-1.49 0.058-4.029 0-2.474-0.007-2.878-0.058-4.029-0.037-0.782-0.142-1.31-0.332-1.798-0.15071-0.408-0.39093-0.77704-0.703-1.08-0.30227-0.31315-0.67149-0.55383-1.08-0.704-0.49-0.19-1.016-0.295-1.798-0.331-1.104-0.052-1.49-0.058-4.029-0.058z m0-2c2.717 0 3.056 0.01 4.122 0.06 1.065 0.05 1.79 0.217 2.428 0.465 0.66 0.254 1.216 0.598 1.772 1.153 0.50849 0.4999 0.90195 1.10459 1.153 1.772 0.247 0.637 0.415 1.363 0.465 2.428 0.047 1.066 0.06 1.405 0.06 4.122 0 2.717-0.01 3.056-0.06 4.122-0.05 1.065-0.218 1.79-0.465 2.428-0.25032 0.66778-0.64388 1.27262-1.153 1.772-0.50004 0.50832-1.10469 0.90175-1.772 1.153-0.637 0.247-1.363 0.415-2.428 0.465-1.066 0.047-1.405 0.06-4.122 0.06-2.717 0-3.056-0.01-4.122-0.06-1.065-0.05-1.79-0.218-2.428-0.465-0.66767-0.25053-1.27247-0.64406-1.772-1.153-0.50859-0.49982-0.90207-1.10453-1.153-1.772-0.248-0.637-0.415-1.363-0.465-2.428-0.047-1.066-0.06-1.405-0.06-4.122 0-2.717 0.01-3.056 0.06-4.122 0.05-1.066 0.217-1.79 0.465-2.428 0.25024-0.66782 0.6438-1.27268 1.153-1.772 0.49967-0.50877 1.10443-0.90227 1.772-1.153 0.638-0.248 1.362-0.415 2.428-0.465 1.066-0.047 1.405-0.06 4.122-0.06z" />
            </svg>
          </a>
          <a
            href="#"
            aria-label="Pinterest">
            <svg
              viewBox="0 0 12 24"
              width="12"
              height="24"
              aria-hidden="true">
              <path
                fill="#ffffff"
                d="M6.39623 13.22743c-0.526 2.754-1.167 5.394-3.068 6.773-0.586-4.162 0.861-7.287 1.534-10.605-1.147-1.93 0.138-5.812 2.555-4.855 2.975 1.176-2.576 7.172 1.15 7.922 3.891 0.781 5.479-6.75 3.066-9.199-3.485-3.538-10.146-0.083-9.326 4.982 0.199 1.238 1.478 1.613 0.511 3.322-2.231-0.494-2.897-2.254-2.811-4.6 0.138-3.84 3.449-6.527 6.771-6.9 4.201-0.471 8.144 1.543 8.689 5.494 0.613 4.461-1.896 9.293-6.389 8.945-1.218-0.095-1.728-0.699-2.682-1.279z" />
            </svg>
          </a>
          <a
            href="#"
            aria-label="LinkedIn">
            <svg
              viewBox="0 0 20 18"
              width="20"
              height="18"
              aria-hidden="true">
              <path
                fill="#ffffff"
                d="M4 2.001c-0.00027 0.53043-0.21123 1.03904-0.58649 1.41392-0.37526 0.37489-0.88407 0.58534-1.41451 0.58508-0.53043-0.00027-1.03904-0.21123-1.41392-0.58649-0.37489-0.37526-0.58534-0.88407-0.58508-1.41451 0.00027-0.53043 0.21123-1.03904 0.58649-1.41392 0.37526-0.37489 0.88407-0.58534 1.41451-0.58508 0.53043 0.00027 1.03904 0.21123 1.41392 0.58649 0.37489 0.37526 0.58534 0.88407 0.58508 1.41451z m0.06 3.48l-4 0 0 12.52 4 0 0-12.52z m6.32 0l-3.98 0 0 12.52 3.94 0 0-6.57c0-3.66 4.77-4 4.77 0l0 6.57 3.95 0 0-7.93c0-6.17-7.06-5.94-8.72-2.91l0.04-1.68z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const form = reactive({
  fullName: '',
  subject: '',
  phone: '',
  email: '',
  message: '',
})

function onSubmit(): void {
  const subject = encodeURIComponent(form.subject || 'Appointment request')
  const body = encodeURIComponent(
    [
      `Full name: ${form.fullName}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email}`,
      '',
      form.message,
    ].join('\n'),
  )
  window.location.href = `mailto:hello@example.com?subject=${subject}&body=${body}`
}
</script>

<style scoped>
.barber-footer {
  background: #f8f5ef;
}

.barber-footer__contact {
  position: relative;
  z-index: 2;
  /* Pencil: dark band 641; form 151→751 overlaps map at 624 by 127 */
  min-height: 641px;
  padding: 135px 0 0;
  margin-bottom: -127px;
  overflow: visible;
  background: #121212;
}

.barber-footer__contact-media {
  position: absolute;
  inset: 0;
  bottom: 127px;
  overflow: hidden;
}

.barber-footer__contact-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.barber-footer__contact-gradient {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, #121212 0%, rgb(18 18 18 / 0%) 100%);
  pointer-events: none;
}

.barber-footer__contact-grid {
  position: relative;
  z-index: 1;
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
  text-transform: lowercase;
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

.barber-footer__channel-icon img {
  width: 36px;
  height: 36px;
  object-fit: contain;
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
  max-height: 499px;
  overflow: hidden;
  background: #d9d9d9;
}

.barber-footer__map img {
  display: block;
  width: 100%;
  height: 499px;
  object-fit: cover;
  object-position: center;
}

.barber-footer__copyright {
  position: relative;
  z-index: 2;
  /* Pencil: copyright y=1092 overlaps map end (624+499=1123) by 31px */
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
  color: #ffffff;
  text-decoration: none;
  opacity: 0.95;
}

.barber-footer__socials a:hover {
  opacity: 0.75;
}

@media (max-width: 1100px) {
  .barber-footer__contact {
    min-height: 0;
    padding: 56px 0 40px;
    margin-bottom: 0;
  }

  .barber-footer__contact-media {
    bottom: 0;
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
    height: 280px;
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
    height: 220px;
  }
}
</style>
