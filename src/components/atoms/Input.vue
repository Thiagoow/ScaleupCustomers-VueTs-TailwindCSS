<template>
  <div class="relative h-12">
    <input :type="type" placeholder="" class="contractInput focus:labelUp" />
    <label for="" class="labelDown">
      {{ label }}
    </label>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    type: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    }
  }
})
</script>
