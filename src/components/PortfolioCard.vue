<template>
  <div
    class="relative overflow-hidden w-72 h-48 rounded-lg shadow-lg"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <img :src="imageSrc" alt="Project Image" class="w-full h-full object-cover" />
    <div
      :class="{ 'opacity-100': isHovered, 'opacity-0': !isHovered }"
      class="absolute inset-0 bg-black bg-opacity-80 flex justify-center items-center transition-opacity duration-300"
    >
      <a :href="projectLink" class="text-white text-lg font-bold p-3 bg-white bg-opacity-20 rounded hover:bg-opacity-40 transition">
        See Project &rarr;
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
  imageSrc: string;
  projectLink: string;
}>();

const isHovered = ref(false);

// Use the props object to access the properties
const { imageSrc, projectLink } = props;
</script>

<style scoped>
.opacity-100 {
  opacity: 1;
}

.opacity-0 {
  opacity: 0;
}
</style>
