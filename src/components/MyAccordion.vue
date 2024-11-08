<template>
  <div class="p-4">
    <div v-for="(item, index) in items" :key="index" class="py-2">
      <button
        type="button"
        class="flex items-center justify-between w-full p-4 text-left font-medium text-gray-200  rounded-t-lg border border-zinc-800"
        @click="toggle(index)"
        :aria-expanded="activeIndex === index ? 'true' : 'false'"
        :aria-controls="'accordion-body-' + index"
      >
        <span>{{ item.title }}</span>
        <svg
          :class="{'rotate-180': activeIndex === index}"
          class="w-5 h-5 transition-transform duration-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div
        :id="'accordion-body-' + index"
        class="overflow-hidden transition-max-height duration-300 ease-in-out"
        :style="{
          maxHeight: activeIndex === index ? '1000px' : '0',
          opacity: activeIndex === index ? '1' : '0',
        }"
      >
        <div class="p-4 ">
          <p>{{ item.content }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface AccordionItem {
  title: string;
  content: string;
}

const items: AccordionItem[] = [
  {
    title: 'Quais tipos de projetos vocês desenvolve na InovaForce?',
    content:
      'Na InovaForce, desenvolvemos uma variedade de soluções, incluindo sites institucionais, landing pages e páginas de captura para conversão. Criamos formulários interativos, painéis administrativos intuitivos e sistemas personalizados para empresas. Também oferecemos plataformas de e-commerce seguras e robustas para vendas online.',
  },
  {
    title: 'Como a InovaForce pode ajudar minha empresa a crescer?',
    content:
      'A InovaForce pode acelerar o crescimento da sua empresa com soluções personalizadas que incluem sites, páginas de captura, sistemas administrativos e plataformas de e-commerce. Nossos serviços aumentam a eficiência operacional, melhoram sua presença digital e ajudam a expandir suas vendas online.',
  },
  {
    title: 'Como a InovaForce define o preço para projetos personalizados e exclusivos?',
    content:
      'A precificação de projetos personalizados e exclusivos na InovaForce é feita com base em diversos fatores, incluindo a complexidade do projeto, os requisitos específicos do cliente, o tempo estimado para conclusão, e os recursos necessários.',
  },
];

const activeIndex = ref<number | null>(null);

const toggle = (index: number) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};
</script>

<style scoped>
/* Add your styles here */
</style>
