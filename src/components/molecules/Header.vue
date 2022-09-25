<template>
  <header
    class="flex relative z-50 justify-between mx-5 mt-10 md:mx-20 lg:mx-auto lg:max-w-4xl self-center"
  >
    <img
      src="../../assets/img/logo-invert.svg"
      alt="logo"
      class="max-w-[8rem]"
    />

    <nav class="h-6 justify-between self-center">
      <img
        class="md:hidden float-right cursor-pointer hover:opacity-70"
        src="../../assets/img/menu.svg"
        alt="menu mobile"
        @click="toggleNav()"
      />

      <div id="nav-menu">
        <ul
          class="flex flex-col rounded-lg mt-16 py-5 px-10 bg-containerColor text-titleColor text-center md:flex-row md:mt-0 md:space-x-8 lg:space-x-10 md:py-0 md:bg-transparent md:font-semibold"
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

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      menuOpen: false
    }
  },
  methods: {
    toggleNav() {
      this.menuOpen = !this.menuOpen
    }
  }
})
</script>
