<template>
  <section
    id="clients"
    class="bg-bannerColor rounded-xl max-w-2xl mx-auto lg:max-w-[60rem] my-36"
  >
    <div class="items-center flex flex-col">
      <div class="flex">
        <img
          src="../../assets/img/clients/director.png"
          alt="Diretor de escola"
          class="hidden lg:flex max-w-[18rem] ml-8 lg:pt-14"
        />

        <div class="flex flex-col text-left p-10 lg:pt-20">
          <img
            src="../../assets/img/clients/quotes.svg"
            class="max-w-[2rem]"
            alt="Ilustração de aspas duplas"
          />

          <p class="text-txtColor mb-8 mt-6 mx-0 max-w-xl">
            A Scaleup foi a responsável por integrar nosso sistema de ensino á
            modalidade de ensino a distância. Através da plataforma, conseguimos
            oferecer cursos de qualidade para nossos alunos, com um custo menor
            e com uma plataforma de fácil utilização.
          </p>

          <div class="flex whitespace-nowrap max-h-14 max-w-14">
            <img
              src="../../assets/img/clients/directorAvatar.png"
              alt="logo objetivo"
              class="min-w-[3.5rem] max-w-[4rem] lg:hidden"
            />
            <div class="ml-5 lg:m-0">
              <p class="text-titleColor font-semibold">Paulo Magaglio</p>
              <p class="text-txtColor">Diretor de escola</p>
            </div>
          </div>

          <div class="flex self-end gap-10 mt-6 sm:mt-0 font-semibold">
            <button class="text-txtColor opacity-40 hover:opacity-20">
              Anterior
            </button>
            <button class="text-firstColor hover:opacity-70">Próximo</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
