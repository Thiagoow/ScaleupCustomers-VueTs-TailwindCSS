<template>
  <header
    class="flex relative z-50 justify-between mx-5 mt-10 xs:mx-14 lg:!mx-auto lg:max-w-4xl self-center"
  >
    <Logo />

    <nav class="justify-between self-center">
      <img
        class="md:hidden float-right cursor-pointer hover:opacity-70"
        src="../../assets/img/menu.svg"
        alt="menu mobile"
        @click="menuOpen = !menuOpen"
      />

      <div :class="menuOpen ? 'flex' : 'hidden'" class="md:flex">
        <ul
          class="flex flex-col absolute md:!relative right-0 2xs:right-5 top-16 py-5 rounded-lg bg-containerColor text-titleColor text-center md:flex-row md:top-0 md:!right-0 md:space-x-8 lg:space-x-10 md:py-0 md:bg-transparent md:font-semibold"
        >
          <NavLink text="Produto" link="#product" />

          <NavLink text="Clientes" link="#clients" />

          <NavLink text="Contrate" link="#contract" />
        </ul>
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Logo from '../atoms/Logo.vue'
import NavLink from '../atoms/NavLink.vue'

export default defineComponent({
  components: {
    Logo,
    NavLink
  },
  data() {
    return {
      menuOpen: false
    }
  }
})
</script>
