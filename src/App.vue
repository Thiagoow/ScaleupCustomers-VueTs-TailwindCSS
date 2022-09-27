<template>
  <Header />

  <main class="mx-5 xs:mx-14 lg:!mx-auto lg:max-w-5xl">
    <Section
      title="Informatize sua forma de educar"
      text="Em pleno 2022, a tecnologia é o que mais desperta o interesse em nosso alunos. Ensine seus alunos de forma divertida e inovadora agora mesmo com a Scaleup!"
      :imgSrc="feedImg"
      alt="Feed de vídeos curtos"
    />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from './components/molecules/Header.vue'
import Section from './components/organisms/Section.vue'
//Images import:
import feedImg from './assets/img/feed.png'

export default defineComponent({
  components: {
    Header,
    Section
  },
  setup() {
    return {
      feedImg
    }
  }
})
</script>
