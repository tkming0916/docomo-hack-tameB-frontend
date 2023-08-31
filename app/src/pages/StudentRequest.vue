<template>
  <div>
    <h1>予約決定画面</h1>

    <div class="card-container">
      <div class="card">
        <Card_student :cardData="selectedCardCorches" />
      </div>
      <div class="card">
        <Card_car :cardData="selectedCardCars" />
      </div>
    </div>

    <a>
      <input type="text" v-model="newMessage" placeholder="開始時刻" />
      から
      <input type="text" v-model="newMessage" placeholder="終了時刻" />
      まで
    </a>

    <p class="button">
      <button type="submit" class="mt-2 px-12 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600" @click="exec">依頼する</button>
    </p>

  </div>
</template>

<script>
import Card_car from "../components/card_car.vue";
import Card_student from "../components/card_student.vue";
import cardsData_car from "../assets/cars.json";
import cardsData_student from "../assets/corches.json";

export default {
  props: ["id"], // 遷移前のidを受け取る
  // propsの中身は「2-3」のように「数字-数字」の形になっているので，「-」で分割してそれぞれ変数に格納する

  components: {
    Card_student,
    Card_car,
  },
  data() {
    // const words = this.id.split('-');
    return {
      cards1: cardsData_student,
      cards2: cardsData_car,
      // words
    };
  },
  computed: {
    // const words = this.id.split('-'),
    selectedCardCorches() {
      return this.cards1.find((card) => card.id === 2);
    },
    selectedCardCars() {
      return this.cards2.find((card) => card.id === 2);
    },
  },
  methods: {
    exec() {
      this.$router.push({ name: "ChatPage" });
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.card {
  justify-content: space-between;
  min-width: 600px; /* Adjust the max-width as needed */
  margin: 0 auto;
}

</style>
