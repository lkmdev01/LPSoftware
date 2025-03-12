<script setup lang="ts">
</script>

<template>
  <div class="bg-zinc-950" id="valores">
    <div class="my-container backline md:text-left py-10 lg:py-20">
      <h2 class="text-blue-500 text-sm">PRECIFICAÇÃO PERSONALIZADA</h2>
      <h3 class="text-4xl font-bold text-white">Precificação Sob Medida para o Seu Projeto</h3>
      <p class="text-gray-300 mt-2 mb-5 max-w-4xl">
        Cada projeto é único, e nossos preços são personalizados de acordo com suas necessidades e objetivos. Entenda como funciona:
      </p>

      <!-- Passo a Passo -->
      <div class="flex flex-wrap gap-6 mb-10">
        <div class="bg-zinc-900 p-6 rounded-lg flex-1 min-w-[250px]">
          <h3 class="text-blue-500 text-xl font-semibold">1. Conhecemos o Seu Negócio</h3>
          <p class="text-gray-300 mt-2">Nossa equipe entra em contato para entender suas necessidades, objetivos e expectativas.</p>
        </div>
        <div class="bg-zinc-900 p-6 rounded-lg flex-1 min-w-[250px]">
          <h3 class="text-blue-500 text-xl font-semibold">2. Criamos uma Proposta Sob Medida</h3>
          <p class="text-gray-300 mt-2">Com base na análise, elaboramos um orçamento detalhado, incluindo escopo, prazos e funcionalidades.</p>
        </div>
        <div class="bg-zinc-900 p-6 rounded-lg flex-1 min-w-[250px]">
          <h3 class="text-blue-500 text-xl font-semibold">3. Desenvolvemos e Entregamos o Projeto</h3>
          <p class="text-gray-300 mt-2">Após a aprovação do orçamento, nossa equipe trabalha para entregar um site que combine design, funcionalidade e resultados.</p>
        </div>
      </div>

      <!-- Fatores que Influenciam o Preço -->
      <h3 class="text-2xl font-bold text-white mt-10 mb-5">O Que Influencia o Preço?</h3>
      <div class="flex flex-wrap gap-6 mb-10">
        <div class="bg-zinc-900 p-6 rounded-lg flex-1 min-w-[250px]">
          <h3 class="text-blue-500 text-xl font-semibold">Escopo do Projeto</h3>
          <p class="text-gray-300 mt-2">Quantidade de páginas, funcionalidades e complexidade do design.</p>
        </div>
        <div class="bg-zinc-900 p-6 rounded-lg flex-1 min-w-[250px]">
          <h3 class="text-blue-500 text-xl font-semibold">Integrações</h3>
          <p class="text-gray-300 mt-2">Sistemas de pagamento, blogs, lojas online, APIs, etc.</p>
        </div>
        <div class="bg-zinc-900 p-6 rounded-lg flex-1 min-w-[250px]">
          <h3 class="text-blue-500 text-xl font-semibold">Otimização SEO</h3>
          <p class="text-gray-300 mt-2">Nível de otimização para motores de busca.</p>
        </div>
        <div class="bg-zinc-900 p-6 rounded-lg flex-1 min-w-[250px]">
          <h3 class="text-blue-500 text-xl font-semibold">Suporte e Manutenção</h3>
          <p class="text-gray-300 mt-2">Período de suporte pós-entrega e planos de manutenção contínua.</p>
        </div>
        <div class="bg-zinc-900 p-6 rounded-lg flex-1 min-w-[250px]">
          <h3 class="text-blue-500 text-xl font-semibold">Prazo de Entrega</h3>
          <p class="text-gray-300 mt-2">Projetos com prazos mais curtos podem ter custos diferenciados.</p>
        </div>
      </div>  
    </div>
  </div>
</template>

<style scoped>
.highlight {
  transform: translateY(-10px);
  border: 2px solid #3b82f6; /* Azul */
}

.highlight h3 {
  color: #3b82f6; /* Azul */
}

.PricesCard:not(.highlight) {
  background-color: rgba(44, 44, 44, 0.431); /* Fundo mais claro */
}

.PricesCard {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.PricesCard:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
}
</style>