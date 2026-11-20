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
    <section class="hero">
      <div class="eyebrow">ПРИКЛЮЧЕНИЯ 2027</div>
      <div class="hero-heading">
        <h1>Открой историю<br />своими руками</h1>
        <div class="hero-copy">
          <p>
            Не просто лето. Настоящее раскопки, древняя находки и люди, с
            которыми ты станешь командой.
          </p>
          <RouterLink class="button button-primary" to="/expeditions"
            >Найти свою экспедицию →</RouterLink
          >
        </div>
      </div>
      <img
        class="hero-image"
        src="/images/73_e1c4093317e3aec267d46943326429ef.jpg"
        alt="Участники экспедиции в горах"
      />
      <div class="image-caption">ТВОЯ ПЕРВАЯ НАСТОЯЩАЯ ЭКСПЕДИЦИЯ</div>
    </section>

    <section class="intro split" id="about">
      <div>
        <div class="eyebrow">ОТКРЫТИЕ</div>
        <h2>Не наблюдать.<br />Исследовать.</h2>
      </div>
      <div>
        <h3>
          Прошлое не только в учебниках.<br />Оно прямо под твоими ногами.
        </h3>
        <p>
          «ТАНАИС» — молодёжный археологический лагерь для подростков 14–18 лет.
          Здесь ты попробуешь себя в настоящей экспедиции под руководством
          профессиональных археологов.
        </p>
        <a class="text-link" href="/expeditions"
          >Опыт не нужен. Любопытство — обязательно.</a
        >
      </div>
    </section>

    <section class="features-band">
      <div class="container features">
        <div>
          <img src="/images/globe-earth-inphographic.svg" alt="" />
          <h3>Настоящая наука</h3>
          <p>
            Раскопки, исследования и работа с артефактами. Не имитация, а
            настоящее исследование.
          </p>
        </div>
        <div>
          <img src="/images/dig-inphograpgic.svg" alt="" />
          <h3>Рядом с наставником</h3>
          <p>
            Археологи объяснят каждый этап: безопасность, инструменты и
            исторический контекст.
          </p>
        </div>
        <div>
          <img src="/images/team-inphographic.svg" alt="" />
          <h3>Своя команда</h3>
          <p>
            Общее дело, новые знакомства и дружба, которая часто остаётся
            надолго.
          </p>
        </div>
      </div>
    </section>

    <section class="section expeditions-preview">
      <div class="section-heading">
        <div>
          <div class="eyebrow">ВЫБЕРИ СВОЁ ПРИКЛЮЧЕНИЕ</div>
          <h2>Это лето — в истории</h2>
        </div>
        <RouterLink class="outline-link" to="/expeditions"
          >Все экспедиции →</RouterLink
        >
      </div>
      <div class="cards-grid">
        <ExpeditionCard v-for="card in cards" :key="card.title" v-bind="card" />
      </div>
    </section>

    <section class="steps-band" id="steps">
      <div class="container">
        <div class="eyebrow">ОТ ВОЗМОЖНОСТИ К ОТКРЫТИЮ</div>
        <h2>Твой путь в экспедицию</h2>
        <div class="steps-grid">
          <div>
            <b>01</b>
            <h3>Выбери маршрут</h3>
            <p>Найди экспедицию по интересам, датам и возрасту.</p>
          </div>
          <div>
            <b>02</b>
            <h3>Расскажи о себе</h3>
            <p>
              Создай профиль. Если тебе нет 18, понадобится согласие родителей.
            </p>
          </div>
          <div>
            <b>03</b>
            <h3>Подготовься</h3>
            <p>Получишь список необходимого и общую информацию.</p>
          </div>
          <div>
            <b>04</b>
            <h3>В путь!</h3>
            <p>Погружайся в историю и открывай её своей командой.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section discovery">
      <div class="eyebrow">ИССЛЕДУЙ МЕСТО</div>
      <h2>Здесь у каждого дня<br />есть своя находка</h2>
      <div class="discovery-images">
        <img src="/images/orig.jpeg" alt="Историческая крепость" /><img
          src="/images/photo_2025-12-23_08-46-36.jpg"
          alt="Вид на археологический комплекс"
        />
      </div>
      <p class="muted">
        Такого утра не расскажешь. Первые открытия в раскопе, вечерние разговоры
        у костра и новые истории каждый день.
      </p>
    </section>
  </div>
</template>
