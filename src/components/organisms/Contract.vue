<template>
  <section class="my-36" id="contract">
    <div class="gap-y-14 md:grid-cols-2 grid">
      <div class="flex flex-col gap-12">
        <h2 class="text-titleColor text-2xl font-bold">
          Assine e melhore agora <br />
          mesmo a sua instituição
        </h2>

        <div class="grid gap-y-8">
          <Info
            title="Telefone de suporte"
            :icon="phoneIcon"
            alt="telephone icon"
            text="+55 11 888 777"
            link="tel:+999888777"
          />

          <Info
            title="Nos envie um e-mail"
            :icon="mailIcon"
            alt="E-mail icon"
            text="email@scaleup.com"
            link="mailto:email@scaleup.com"
          />
        </div>
      </div>

      <form action="#">
        <div class="grid gap-y-10 mb-4">
          <Input type="email" label="E-mail" />
          <Input type="text" label="Assunto" />

          <div class="relative h-28">
            <textarea
              name="mensagem"
              placeholder=""
              class="contractInput focus:labelUp"
            ></textarea>
            <label class="labelDown">Mensagem</label>
          </div>
        </div>

        <button class="buttonFirstColor">
          Enviar pedido
          <i class="ri-arrow-right-up-line button__icon"></i>
        </button>
      </form>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Info from '../atoms/Info.vue'
import Input from '../atoms/Input.vue'
import phoneIcon from '../../assets/img/icons/phone.svg'
import mailIcon from '../../assets/img/icons/mail.svg'

export default defineComponent({
  components: { Info, Input },
  setup() {
    return { phoneIcon, mailIcon }
  }
})
</script>
