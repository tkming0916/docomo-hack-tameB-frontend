<template>
  <div id="app">
    <header class="bg-blue-500 text-white p-4">
      <h1 class="text-2xl font-semibold">カーシェア一覧</h1>
    </header>

    <main id="main_content" class="l-mainContent l-article bg-gray-100 p-8">
      <div>
        <Card_car v-for="card in cards" :key="card.id" :cardData="card" />
      </div>
      
    </main>
  </div>
</template>

<script>
import Card_car from './card_car.vue';
import cardsData from '../assets/cars.json'; // JSONファイルのパスに合わせて調整

export default {
  components: {
    Card_car
  },
  data() {
    return {
      // showCars: false,
      cards: cardsData
    };
  },
  methods: {
    buttonClicked(){
      window.alert('クリックしましたね')
    },
    showDetails(car) {
      this.selectedCar = car === this.selectedCar ? null : car;
    }
  }
};
</script>

<style>
/* ... 必要なスタイルをここに追加 ... */
</style>
