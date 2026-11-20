<script setup>
defineProps(["open"]);
defineEmits(["close"]);
</script>

<template>
  <div v-if="open" class="modal-overlay">
    <div class="modal">
      <button class="modal-close" @click="$emit('close')">×</button>

      <h2>Войти</h2>

      <form>
        <input type="email" placeholder="Электронная почта" />
        <input type="password" placeholder="Пароль" />

        <button type="button" class="login-btn">Войти</button>
      </form>

      <p>
        Нет аккаунта?
        <button type="button" class="register-btn">Зарегистрироваться</button>
      </p>
    </div>
  </div>
</template>
