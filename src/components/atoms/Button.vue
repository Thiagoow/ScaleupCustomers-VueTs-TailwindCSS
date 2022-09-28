<template>
  <a :href="link" class="w-fit mx-auto md:mx-0">
    <button class="buttonFirstColor">
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
