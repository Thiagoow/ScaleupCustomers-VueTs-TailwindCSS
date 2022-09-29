<template>
  <section class="my-36" id="contract">
    <div class="gap-y-14 md:grid-cols-2 grid ml-[1px]">
      <div class="flex flex-col gap-12">
        <h2 class="text-titleColor text-2xl font-bold">
          Assine e melhore agora <br />
          mesmo a sua instituição
        </h2>

        <div class="grid gap-y-8">
          <Info
            title="Telefone de suporte"
            icon="majesticons:phone-line"
            alt="telephone icon"
            text="+55 11 888-777"
            link="tel:+5511888777"
          />

          <Info
            title="Nos envie um e-mail"
            icon="majesticons:mail-line"
            alt="E-mail icon"
            text="email@scaleup.com"
            link="mailto:email@scaleup.com"
          />
        </div>
      </div>

      <form action="#">
        <div class="grid gap-y-6 mb-6">
          <Input type="text" label="Nome" />
          <Input type="email" label="E-mail" />
          <Input type="tel" label="Whatsapp" />
          <Input type="text" label="Faculdade" />
          <Input type="number" label="Quantidade de alunos" />

          <div class="relative h-28">
            <textarea
              name="pedido"
              id="mensagem"
              placeholder=" "
              class="contractInput focus:labelUp"
            ></textarea>
            <label class="labelDown" for="mensagem">Mensagem</label>
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

export default defineComponent({
  components: { Info, Input }
})
</script>
