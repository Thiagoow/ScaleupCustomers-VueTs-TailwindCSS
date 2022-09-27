<template>
  <section
    class="flex flex-col lg:flex-row items-center justify-center my-20 gap-12"
    :class="reverse && 'flex-col-reverse lg:flex-row-reverse'"
  >
    <div class="text-center md:text-left grid gap-6 max-w-lg">
      <h2 class="text-titleColor text-2xl font-bold">
        {{ title }}
      </h2>

      <p class="text-txtColor">
        {{ text }}
      </p>

      <Button text="Contratar agora" link="#contract" />
    </div>

    <img :alt="alt" :src="imgSrc" class="w-1/2 sm:w-7/12 lg:w-[35%]" />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Button from '../atoms/Button.vue'

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    imgSrc: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    },
    reverse: {
      type: Boolean,
      default: false
    }
  },
  components: { Button }
})
</script>
