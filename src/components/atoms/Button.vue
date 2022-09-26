<template>
  <a :href="link">
    <button
      class="bg-firstColor hover:opacity-70 text-titleColor font-semibold rounded-lg w-fit p-4 mx-auto md:mx-0"
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
