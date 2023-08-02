<script setup>
  import { RouterView } from 'vue-router';
  import Navbar from '@/components/Navbar.vue';
  import Stars from '@/components/stars.vue';
</script>

<template>
  <section>
    <Stars class="focus-in"></Stars>
    <Navbar></Navbar>
    <RouterView />
  </section>
</template>