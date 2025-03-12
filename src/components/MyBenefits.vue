<template>
  <div>
    <section class="bg-zinc-950" id="beneficios">
      <div class="my-container backline py-16">
        <h2 class="text-blue-500 text-sm text-center">BENEFÍCIOS</h2>
        <h3 class="text-4xl font-bold text-white text-center">
          Por Que Escolher Nossa Solução? 
        </h3>
        <p class="text-gray-400 text-lg text-center mt-2">
          Soluções estratégicas para crescimento, inovação e resultados acima da média.
        </p>
        <div
          class="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 text-start"
        >
          <div
            v-for="(item, index) in beneficios"
            :key="index"
            class="card"
            @mousemove="handleMouseMove"
            @mouseleave="resetTransform"
          >
            <header class="text-blue-400 text-sm font-light tracking-wide uppercase mb-4">
              {{ item.categoria }}
            </header>
            <h2 class="text-2xl font-bold text-gray-100 leading-tight">
              {{ item.titulo }}
            </h2>
            <p class="mt-4 text-gray-300 text-sm leading-relaxed">
              {{ item.descricao }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const beneficios = ref([
  { categoria: "Personalização Exclusiva", titulo: "Soluções Sob Medida", descricao: "Cada projeto é único, desenvolvido para atender às necessidades específicas do seu negócio." },
  { categoria: "Design Atraente", titulo: "Interfaces que Encantam", descricao: "Impressione seus clientes com designs modernos e funcionais, que elevam sua marca." },
  { categoria: "Resultados Comprovados", titulo: "Crescimento Escalável", descricao: "Soluções que acompanham o crescimento do seu negócio, ampliando resultados de forma sustentável." },
  { categoria: "Tecnologia Avançada", titulo: "Inovação Sempre", descricao: "Metodologias modernas e ferramentas de ponta para entregar soluções inovadoras." },
  { categoria: "Software Sob Medida", titulo: "Desenvolvimento Exclusivo", descricao: "Criação de sistemas personalizados para otimizar processos e alavancar resultados." },
  { categoria: "Experiência do Usuário (UX)", titulo: "Navegação Intuitiva", descricao: "Sistemas e sites projetados para proporcionar uma experiência fluida e eficiente ao usuário." },
  { categoria: "Otimização de Performance", titulo: "Sites Rápidos e Eficientes", descricao: "Desenvolvimento focado em velocidade e estabilidade para garantir máxima eficiência." },
  { categoria: "Integrações Inteligentes", titulo: "Conecte Tudo em Um Só Lugar", descricao: "Automatize processos e integre sistemas para otimizar seu fluxo de trabalho." },
  { categoria: "Segurança Digital", titulo: "Proteção de Alto Nível", descricao: "Soluções seguras que garantem a proteção de dados e a confiabilidade do seu sistema." }
]);

const handleMouseMove = (event: MouseEvent) => {
  const card = event.currentTarget as HTMLElement;
  const { clientX, clientY } = event;
  const { left, top, width, height } = card.getBoundingClientRect();
  
  const x = ((clientX - left) / width - 0.5) * 20;
  const y = ((clientY - top) / height - 0.5) * 20;

  card.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
};

const resetTransform = (event: MouseEvent) => {
  const card = event.currentTarget as HTMLElement;
  card.style.transform = "rotateY(0deg) rotateX(0deg)";
};
</script>

<style scoped>
.card {
  background: rgba(255, 255, 255, 0.05); /* Transparência */
  backdrop-filter: blur(10px); /* Efeito vidro */
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  transition: transform 0.2s ease-out, box-shadow 0.3s ease-in-out;
}

.card:hover {
  box-shadow: 0 8px 20px rgba(0, 123, 255, 0.4);
}
</style>
