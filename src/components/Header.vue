<template>
  <header
    class="flex relative z-50 justify-between mx-5 mt-8 md:mx-20 lg:mx-auto lg:max-w-3xl self-center"
  >
    <img src="../assets/img/logo-invert.svg" alt="logo" class="max-w-[8rem]" />

    <nav class="h-3 justify-between self-center md:mt-4">
      <img
        class="md:hidden ml-20 cursor-pointer hover:opacity-70"
        src="../assets/img/menu.svg"
        alt="MobileMenu"
        @click="toggleNav()"
      />

      <div id="nav-menu">
        <ul
          class="flex flex-col rounded-lg mt-10 py-5 bg-containerColor text-titleColor text-center md:flex-row md:mt-0 md:space-x-8 lg:space-x-8 md:py-0 md:bg-transparent md:font-semibold"
        >
          <li class="cursor-pointer block py-4 md:py-0 hover:opacity-70">
            <a href="" target="_blank">Produto</a>
          </li>

          <li class="cursor-pointer block py-4 md:py-0 hover:opacity-70">
            <a href="">Clientes</a>
          </li>

          <li class="cursor-pointer block py-4 md:py-0 hover:opacity-70">
            <a href="" target="_blank">Contrate</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const menuOpen = ref(false)

const toggleNav = () => {
  menuOpen.value = !menuOpen.value
}
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
</style>
