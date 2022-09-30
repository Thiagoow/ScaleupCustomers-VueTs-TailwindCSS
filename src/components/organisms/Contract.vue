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

      <form
        @submit="handleFormData"
        method="post"
        action="https://sheetdb.io/api/v1/cbd9dtz2dqv4i"
      >
        <div class="grid gap-y-6 mb-6">
          <Input type="text" label="Nome" name="nome" />
          <Input type="email" label="Email" name="email" />
          <Input type="tel" label="Whatsapp" name="whatsapp" />
          <Input type="text" label="Faculdade" name="faculdade" />
          <Input type="number" label="Quantidade de alunos" name="alunos" />

          <div class="relative h-28">
            <textarea
              name="mensagem"
              id="mensagem"
              placeholder=" "
              class="contractInput focus:labelUp"
            ></textarea>
            <label class="labelDown" for="mensagem">Mensagem</label>
          </div>
        </div>

        <button class="buttonFirstColor" type="submit">
          Enviar pedido
          <i class="ri-arrow-right-up-line button__icon"></i>
        </button>
      </form>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Info from '../molecules/Info.vue'
import Input from '../atoms/Input.vue'

export default defineComponent({
  components: { Info, Input },
  methods: {
    handleFormData(event: Event) {
      event.preventDefault()
      const form = document.querySelector('form')

      fetch(form!.action, {
        method: 'POST',
        body: new FormData(form!)
      })
        .then((response) => response.json())
        .then((html) => {
          if (html.created) {
            form!.reset()
            this.$notify({
              type: 'success',
              text: `${html.created} pedido(s) enviado com sucesso!`
            })
          } else {
            this.$notify({
              type: 'error',
              text: `ERRO: ${html.error}`
            })
          }
        })
    }
  }
})
</script>
