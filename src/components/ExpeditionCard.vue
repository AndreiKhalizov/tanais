<script setup>
import { RouterLink } from "vue-router";
defineProps({
  image: String,
  tag: String,
  title: String,
  location: String,
  dates: String,
  price: String,
});
</script>
<template>
  <article class="expedition-card">
    <RouterLink to="/expedition/tanais" class="card-image"
      ><img :src="image" :alt="title"
    /></RouterLink>
    <div class="eyebrow">{{ tag }}</div>
    <h3>
      <RouterLink to="/expedition/tanais">{{ title }}</RouterLink>
    </h3>
    <p>{{ location }}</p>
    <div class="card-meta">
      <span>{{ dates }}</span
      ><span class="price">{{ price }} ₽</span>
    </div>
    <RouterLink class="card-link" to="/expedition/tanais"
      >Подробнее →</RouterLink
    >
  </article>
</template>
