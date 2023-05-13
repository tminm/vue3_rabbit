<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutFixed from './components/layoutFixed.vue';
</script>

<template>
  <LayoutFixed/>
  <LayoutNav />
  <LayoutHeader />
  <RouterView />
  <LayoutFooter/>
</template>