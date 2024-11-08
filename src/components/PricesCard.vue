<template>
  <div
    class="bg-zinc-925 text-white rounded-lg shadow-lg p-6 m-4 w-80 border border-zinc-800 PricesCard text-left"
  >
    <h2 class="text-2xl font-bold mb-4">{{ title }}</h2>
    <p class="text-md">A partir de</p>
    <p class="text-4xl font-extrabold mb-4">{{ price }}</p>
    <p class="mb-6">{{ description }}</p>
    <ul class="mb-6">
      <li
        v-for="(feature, index) in features"
        :key="index"
        class="flex items-center mb-2"
      >
        <span class="bg-blue-500 rounded-full w-2 h-2 mr-2"></span>{{ feature }}
      </li>
    </ul>
    <button
      class="border-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
    >
     <a 
      class="hover:text-white"
      :href="link"
      >
      Começar agora &rarr;</a>
    </button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
  price: string;
  description: string;
  features: string[];
  link: string;
}>();

// Use the props object to access the properties
const { title, price, description, features, link } = props;
</script>

<style scoped>
.highlight h2 {
  color: #3b82f6; /* Azul */
}

.PricesCard:not(.highlight) {
  background-color: rgba(19, 18, 18, 0.669); /* Fundo mais claro */
}

.PricesCard {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.PricesCard:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
}
</style>
