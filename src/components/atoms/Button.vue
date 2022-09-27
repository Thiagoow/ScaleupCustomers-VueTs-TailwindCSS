<template>
  <a :href="link" class="w-fit mx-auto md:mx-0">
    <button
      class="bg-firstColor hover:opacity-70 text-titleColor font-semibold rounded-lg p-4"
    >
      {{ text }}
    </button>
  </a>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    text: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    }
  }
})
</script>
