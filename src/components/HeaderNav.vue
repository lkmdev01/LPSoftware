<script setup lang="ts">
import { ref } from 'vue';

import { toast, type ToastOptions } from 'vue3-toastify';
import MyAccordion from './MyAccordion.vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const isModalOpen = ref(false);

const toggleModal = () => {
  isModalOpen.value = !isModalOpen.value;
};



const notify = () => {
  toast("Em breve o programa voltará a funcionar!", {
    autoClose: 3000,
    position: toast.POSITION.TOP_CENTER,
  } as ToastOptions);
}
</script>

<template>
  <header class="w-100 bg-zinc-950">
    <div class="w-full py-3 flex justify-center items-center text-sm">
      <p class="text-gray-400">
        <span class="py-1 px-4 text-gray-300 bg-zinc-925 rounded-xl">Baixe Grátis</span>
        Mapa Mental para Alavancar seu Negócio na Internet!
      </p>
      <a @click="notify" class="py-2 mx-3 px-4 border border-blue-600 rounded-md">Quero meu Mapa Mental</a>
    </div>
    <nav class="w-full border-t border-b border-zinc-700 py-8">
      <div class="my-container mx-auto flex items-center justify-between">
        <div class="flex items-center">
          <img src="/logo.png" alt="Logo" class="h-8">
        </div>
        <div class="hidden md:flex space-x-6">
          <a href="#sobre" class="text-gray-500 hover:text-blue-500">Por que nós</a>
          <a href="#servicos" class="text-gray-500 hover:text-blue-500">Serviços</a>
          <a href="#portfolio" class="text-gray-500 hover:text-blue-500">Portfolio</a>
          <a href="#valores" class="text-gray-500 hover:text-blue-500">Valores</a>
          <a href="#fundador" class="text-gray-500 hover:text-blue-500">Fundador</a>
          <a href="javascript:void(0)" @click="toggleModal" class="text-gray-500 hover:text-blue-500">FQA</a>
        </div>
        <div class="hidden md:flex">
          <button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            <a class="hover:text-white" href="https://wa.me/5513981376072?text=Ol%C3%A1!%20vim%20pelo%20site%20inovaforce.com">Vamos Conversar</a>
            <i class="fa-solid fa-square-arrow-up-right ml-2"></i>
          </button>
        </div>
        <div class="md:hidden flex items-center">
          <button @click="toggleMenu" class="text-gray-500 focus:outline-none">
            <i class="fa-solid fa-bars text-xl"></i>
          </button>
        </div>
      </div>
      <div v-if="isMenuOpen" class="md:hidden mt-4 space-y-5">
        <a href="#sobre" class="block text-gray-500 hover:text-blue-500">Por que nós</a>
        <a href="#servicos" class="block text-gray-500 hover:text-blue-500">Serviços</a>
        <a href="#portfolio" class="block text-gray-500 hover:text-blue-500">Portfolio</a>
        <a href="#valores" class="block text-gray-500 hover:text-blue-500">Valores</a>
        <a href="#fundador" class="block text-gray-500 hover:text-blue-500">Fundador</a>
        <a href="javascript:void(0)" @click="toggleModal" class="block text-gray-500 hover:text-blue-500">FQA</a>
        <a href="https://wa.me/5513981376072?text=Ol%C3%A1!%20vim%20pelo%20site%20lkmdev.com." class="block bg-blue-500 text-white mx-5 my-5 px-4 py-2 rounded hover:bg-blue-600 text-center">Vamos Conversar</a>
      </div>
    </nav>
  </header>
  <!-- Modal FAQ -->
  <div v-if="isModalOpen" class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
  <div class="bg-zinc-900 rounded-lg p-5 w-full max-w-2xl relative">
    <button 
      @click="toggleModal"
      aria-label="Fechar modal"
      class="absolute top-2 right-2 w-8 h-8 rounded-full flex items-center justify-center text-gray-300 hover:text-gray-100 text-2xl transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
    >
    <i class="fa-regular fa-circle-xmark text-zinc-500"></i>
    </button>
    <h2 class="text-2xl mb-4">FAQ</h2>
    <MyAccordion />
  </div>
</div>

</template>

<style scoped>
.my-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

@media (max-width: 1000px) {
  .hidden {
    display: none;
  }
  .block {
    display: block;
  }
}

.md\:hidden {
  display: none;
}

@media (max-width: 1000px) {
  .md\:hidden {
    display: block;
  }
}
</style>
