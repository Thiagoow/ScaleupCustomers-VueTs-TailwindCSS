<template>
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
</template>

<script setup lang="ts">
//Images import:
import feedImg from '../../assets/img/app/feed.png'
import coursesImg from '../../assets/img/app/courses.png'
//Components import:
import Section from '../organisms/Section.vue'
import Advantages from '../molecules/Advantages.vue'
import Testimonial from '../organisms/Testimonial.vue'
</script>
