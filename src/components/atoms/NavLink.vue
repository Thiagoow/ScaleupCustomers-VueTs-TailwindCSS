<template>
  <a :href="link">
    <li
      class="cursor-pointer block py-5 px-10 md:py-0 md:px-0 hover:opacity-70"
      :class="active && 'text-firstColor'"
    >
      {{ text }}
    </li>
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
    },
    active: {
      type: Boolean,
      required: false
    }
  }
})
</script>

<style scoped></style>
