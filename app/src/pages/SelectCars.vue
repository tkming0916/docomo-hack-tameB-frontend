<template>
  <div id="app">
    <header class="bg-blue-500 text-white p-4">
      <h1 class="text-2xl font-semibold">カーシェア一覧</h1>
    </header>

    <main id="main_content" class="l-mainContent l-article bg-gray-100 p-8">
      <div>
        <Card_car v-for="card in cards" :key="card.id" :cardData="card" @click="navigateToDetail(card)"/>
      </div>
      
    </main>
  </div>
</template>

<script>
import Card_car from '../components/card_car.vue';
import cardsData from '../assets/cars.json'; // JSONファイルのパスに合わせて調整


export default {
  props: ["id"], // 遷移前のidを受け取る

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
    navigateToDetail(card) {
      console.log("Received cardData prop:", this.id);
      let next_id = this.id + "-" + card.id; // 遷移後のidを計算

      console.log(next_id);
      this.$router.push({ name: 'StudentRequest', params: { id: next_id } });
      
      console.log("クリックされました");
      console.log(card.id);
    }
  }
};
</script>

<style>
/* ... 必要なスタイルをここに追加 ... */
img {
  width: 200px;
}
</style>