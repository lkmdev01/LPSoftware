<script setup lang="ts">


</script>

<template>
  <div class="bg-zinc-950" id="valores">
    <div class="my-container backline md:text-left py-10 lg:py-20">
      <h2 class="text-blue-500 text-sm">VALORES</h2>
      <h3 class="text-4xl font-bold text-white">Valores Estimados para seu Projeto</h3>
      <p class="text-gray-300 mt-2 mb-5 max-w-4xl">Os preços listados abaixo são valores estimados para ajudar você a ter uma breve noção dos custos envolvidos. Oferecemos precificações exclusivas e personalizadas, dependendo das necessidades e especificidades de cada projeto.<br> <span class="text-blue-200 font-semibold"><a href="http://">Entre em contato</a></span> para um orçamento detalhado e sob medida. </p>
      <div class="groupcard">
       
      <div class=" flex flex-wrap xl:grid justify-center xl:grid-cols-3 gap-10">
        <PricesCard
          title="Essencial"
          price="R$445"
          description="Ideal para pequenos negócios ou startups que precisam de uma presença online básica."
          :features="[
            'Design Responsivo',
            '1 Página',
            'Formulário de Contato',
            'Configuração Básica de SEO',
            'Infraestrutura Básica'
          ]"
        link="https://wa.me/5513981376072?text=Ol%C3%A1,%20vim%20pelo%20site%20lkmdev.com%20e%20me%20interessei%20pelo%20plano%20Essencial."
        />
        <PricesCard
          class="highlight shadow-blue-500 shadow-sm"
          title="Recomendado"
          price="R$998"
          description="Nosso plano mais popular, perfeito para empresas que buscam um site mais completo e funcional."
          :features="[
            'Design Responsivo',
            'Até 3 Páginas',
            'Suporte Premium (90 dias)',
            'Formulário de Contato e Blog',
            'Otimização SEO',
            'Infraestrutura Básica'
          ]"
          link="https://wa.me/5513981376072?text=Ol%C3%A1,%20vim%20pelo%20site%20lkmdev.com%20e%20me%20interessei%20pelo%20plano%20Recomendado."
        />
        <PricesCard
          title="Premium"
          price="R$4.500"
          description="Para empresas que necessitam de um site robusto com funcionalidades avançadas."
          :features="[
            'Design Responsivo e Personalizado',
            'Até 10 Páginas',
            'Suporte Completo (6 meses)',
            'Formulário de Contato, Blog, e Loja Online (básica)',
            'Otimização SEO Avançada',
            'Manutenção Mensal (6 meses)',
            'Infraestrutura + Desempenho'
          ]"
          link="https://wa.me/5513981376072?text=Ol%C3%A1,%20vim%20pelo%20site%20lkmdev.com%20e%20me%20interessei%20pelo%20plano%20Premium."
        />
      </div>
  </div>
      </div>
    </div>
</template>

<script setup lang="ts">
import PricesCard from './PricesCard.vue';
</script>

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
