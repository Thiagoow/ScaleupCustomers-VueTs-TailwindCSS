<template>
  <div class="">
    <h3 class="text-txtColor mb-3">{{ title }}</h3>

    <a
      :href="link"
      class="inline-flex items-center text-titleColor hover:text-firstColor"
    >
      <Icon :icon="icon" class="text-lg mr-2" :aria-label="alt" />
      {{ text }}
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Icon } from '@iconify/vue'

export default defineComponent({
  components: {
    Icon
  },
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
