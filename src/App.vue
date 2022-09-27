<template>
  <Header />

  <main class="mx-5 xs:mx-14 lg:!mx-auto lg:max-w-5xl">
    <Section
      title="Informatize sua forma de educar"
      text="Em pleno 2022, a tecnologia é o que mais desperta o interesse entre jovens. Ensine seus alunos de forma divertida e inovadora agora mesmo com a Scaleup!"
      :imgSrc="feedImg"
      alt="Feed de vídeos curtos"
    />

    <Advantages />

    <Testimonial />

    <Section
      title="Ensine a distância com qualidade"
      text="Sabemos que o ensinar remotamente é um desafio. Por isso, a Scaleup oferece uma plataforma de ensino de qualidade para que você possa continuar fazendo o que faz de melhor, ensinar."
      :imgSrc="coursesImg"
      alt="Página de cursos online"
      reverse
    />
  </main>

  <Footer />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
//Images import:
import feedImg from './assets/img/feed.png'
import coursesImg from './assets/img/courses.png'
//Components import:
import Header from './components/molecules/Header.vue'
import Section from './components/organisms/Section.vue'
import Advantages from './components/molecules/Advantages.vue'
import Testimonial from './components/organisms/Testimonial.vue'
import Footer from './components/molecules/Footer.vue'

export default defineComponent({
  components: {
    Header,
    Section,
    Advantages,
    Footer,
    Testimonial
  },
  setup() {
    return {
      feedImg,
      coursesImg
    }
  }
})
</script>
