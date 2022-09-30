<template>
  <div class="relative h-12">
    <input
      :type="type"
      placeholder=" "
      :id="label"
      :name="name"
      class="contractInput focus:labelUp"
      min="100"
      max="10000"
      step="50"
      required
    />
    <label :for="label" class="labelDown">
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
    },
    name: {
      type: String,
      required: true
    }
  }
})
</script>
