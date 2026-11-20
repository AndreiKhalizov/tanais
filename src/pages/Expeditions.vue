<script setup>
import ExpeditionCard from "../components/ExpeditionCard.vue";
const cards = [
  {
    image: `${import.meta.env.BASE_URL}images/638bb0d853fbccd671e0b1e0d680e124.webp`,
    tag: "ПРИМЕР ЭКСПЕДИЦИИ · 14–27 ЛЕТ",
    title: "Танаис. По следам античности",
    location: "Ростовская область",
    dates: "14–27 июня 2027 · 14–18 лет",
    price: "32 000",
  },
  {
    image: `${import.meta.env.BASE_URL}/images/20210510_152906.jpg.thumb1180.jpg`,
    tag: "ПРИМЕР ЭКСПЕДИЦИИ · 14–27 ЛЕТ",
    title: "Керамика древнего города",
    location: "Краснодарский край",
    dates: "5–18 июля 2027 · 14–18 лет",
    price: "34 000",
  },
  {
    image: `${import.meta.env.BASE_URL}/images/170415204331.jpg`,
    tag: "ПРИМЕР ЭКСПЕДИЦИИ · 14–27 ЛЕТ",
    title: "Археология степи",
    location: "Ростовская область",
    dates: "2–5 августа 2027 · 14–18 лет",
    price: "30 000",
  },
];
</script>
<template>
  <div class="container">
    <section class="page-intro">
      <div class="eyebrow">ГЛАВНАЯ / ЭКСПЕДИЦИИ</div>
      <h1>Лето, которое<br />останется с тобой</h1>
      <p>Выбирай не просто место на карте. Выбирай свою первую историю.</p>
      <small
        >Все предложения включают проживание, питание и активность под
        руководством наставников.</small
      >
    </section>
    <section class="filters">
      <div><label>Регион</label><span>Ростовская область</span></div>
      <div><label>Возраст</label><span>14–18 лет</span></div>
      <div><label>Сроки</label><span>Июнь 2027</span></div>
      <div><label>Тип темы</label><span>Археология</span></div>
    </section>
    <section class="section listing">
      <div class="eyebrow">НАЙДИ СВОЮ ЭКСПЕДИЦИЮ</div>
      <div class="cards-grid">
        <ExpeditionCard v-for="card in cards" :key="card.title" v-bind="card" />
      </div>
      <div class="parent-note">
        <h3>Первая поездка без родителей?</h3>
        <p>
          Поможем разобраться с условиями, подготовкой и документами. Для
          участников младше 18 лет требуется согласие родителей или законных
          представителей.
        </p>
      </div>
    </section>
  </div>
</template>
