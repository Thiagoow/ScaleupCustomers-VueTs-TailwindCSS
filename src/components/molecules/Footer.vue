<template>
  <footer
    class="p-8 bg-containerColor md:flex md:items-center md:justify-between lg:max-w-6xl lg:mx-auto lg:rounded-t-lg"
  >
    <p class="text-sm text-txtColor text-center lg:pl-2">
      © 2022 Scaleup. Desenvolvido por

      <a href="https://github.com/Thiagoow" class="firstColorLink">Thiagoow</a>.
    </p>

    <ul
      class="flex flex-wrap justify-center text-sm text-txtColor mt-6 md:mt-0 lg:pr-2"
    >
      <li>
        <a href="#product" class="mr-6 md:mr-8 firstColorLink">Produto</a>
      </li>
      <li>
        <a href="#clients" class="mr-6 md:mr-8 firstColorLink">Clientes</a>
      </li>
      <li>
        <a href="#contract" class="firstColorLink">Contrate</a>
      </li>
    </ul>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>
