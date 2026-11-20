<script setup>
import { ref } from "vue";
import SiteHeader from "./components/SiteHeader.vue";
import SiteFooter from "./components/SiteFooter.vue";
import LoginModal from "./components/LoginModal.vue";

const isOpen = ref(false);
</script>

<template>
  <SiteHeader @login="isOpen = true" />

  <RouterView />

  <SiteFooter />

  <LoginModal :open="isOpen" @close="isOpen = false" />
</template>
