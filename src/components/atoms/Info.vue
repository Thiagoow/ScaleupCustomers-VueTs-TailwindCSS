<template>
  <div class="">
    <h3 class="text-txtColor mb-3">{{ title }}</h3>

    <a
      :href="link"
      class="inline-flex items-center text-titleColor hover:text-firstColor"
    >
      <img :src="icon" :alt="alt" class="max-w-[1rem] mr-2" />
      {{ text }}
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  }
})
</script>
