<script setup lang="ts">


</script>

<template>
  <div class="bg-zinc-950" id="portfolio">
    <div class="my-container backline md:text-left py-10 lg:py-20">
      <h2 class="text-blue-500 text-sm">PORTFOLIO</h2>
      <h3 class="text-4xl font-bold text-white">Nossos últimos trabalhos</h3>
      <p class="text-gray-300 mt-2 pb-10 max-w-4xl">Explore nossos projetos de destaque, onde combinamos criatividade e tecnologia para entregar soluções digitais excepcionais. Veja como transformamos ideias em experiências online impressionantes e eficazes para nossos clientes.</p>
      <div class="cardgroup flex flex-wrap xl:grid justify-center xl:grid-cols-3 gap-10">
        <PortfolioCard imageSrc="projeto-blog.jpg" projectLink="https://yourprojectlink.com" />
        <PortfolioCard imageSrc="projeto-chat.jpg" projectLink="https://yourprojectlink.com" />
        <PortfolioCard imageSrc="projeto-landingpage.jpg" projectLink="https://yourprojectlink.com" />
        <PortfolioCard imageSrc="projeto-ecommerce.jpg" projectLink="https://yourprojectlink.com" />
        <PortfolioCard imageSrc="projeto-portfolio.jpg" projectLink="https://yourprojectlink.com" />
        <PortfolioCard imageSrc="projeto-captacao.jpg" projectLink="https://yourprojectlink.com" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import PortfolioCard from './PortfolioCard.vue';

</script>

<style scoped>

</style>
