<script setup>
import { RouterLink } from "vue-router";
defineEmits(["login"]);
</script>

<template>
  <header class="header container">
    <RouterLink to="/" class="brand" aria-label="Танаис — главная">
      <img src="/images/logo.svg" alt="" />
      <span>ТАНАИС</span>
    </RouterLink>
      <nav class="nav">
          <RouterLink to="/expeditions">Экспедиции</RouterLink>

          <RouterLink to="/#about">О проекте</RouterLink>

          <RouterLink to="/#steps">Как участвовать</RouterLink>
      </nav>
    <button class="login-button" @click="$emit('login')">Войти</button>
  </header>
</template>
