<template>
  <div id="app">
    <header class="bg-blue-500 text-white p-4">
      <h1 class="text-2xl font-semibold">生徒ホーム画面</h1>
    </header>

    <main id="main_content" class="l-mainContent l-article bg-gray-100 p-8">
      <div>
        <Card_student v-for="card in cards" :key="card.id" :cardData="card" @click="navigateToCars(card)"/>
      </div>
      
    </main>
  </div>
</template>

<script>
import Card_student from '../components/card_student.vue';
import cardsData from '../assets/student.json'; // JSONファイルのパスに合わせて調整


export default {
  components: {
    Card_student
  },
  data() {
    return {
      // showCars: false,
      cards: cardsData
    };
  },
  methods: {
    navigateToCars(card) {
      // this.selectedCard = card; // カードを選択して詳細情報を表示
      this.$router.push({ name: 'SelectCars', params: { id: card.id } });
      console.log("クリックされました");
      console.log(card.id);
    }
  }
};
</script>

<style>
/* ... 必要なスタイルをここに追加 ... */
</style>