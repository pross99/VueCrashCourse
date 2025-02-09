<script setup>
import Hero from '@/components/Hero.vue'
import HomeCards from '@/components/HomeCards.vue'
import JobListings from '@/components/JobListings.vue'


</script>

<template>
     <Hero  title="Hey Peter" subtitle="Your first Vue project! vue hoo!"/> <!-- Props passed -->
  <HomeCards />
  <JobListings :limit ="3" :showButton="true" /> 
</template>