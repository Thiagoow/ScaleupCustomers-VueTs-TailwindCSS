<template>
  <section
    class="flex flex-col md:flex-row my-32 gap-10 text-center w-fit mx-auto"
  >
    <Card title="150+" text="Criadores a tua disposição" />

    <Card title="4.000+" text="Horas de conteúdo exclusivo" />

    <Card title="10x" text="Mais engajamento dos alunos" />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Card from '../atoms/Card.vue'

export default defineComponent({
  components: {
    Card
  }
})
</script>
