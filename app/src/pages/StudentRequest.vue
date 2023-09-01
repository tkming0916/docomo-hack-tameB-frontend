<template>
  <div>
    <h1>予約決定画面</h1>

    <Card_student :cardData="selectedCardCorches" />
    <Card_car :cardData="selectedCardCars" />

    <input type="text" v-model="newMessage" placeholder="開始時刻" />

    <input type="text" v-model="newMessage" placeholder="終了時刻" />

    <button type="submit" @click="navigateToChat">依頼</button>
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
      const words = this.id.split("-");
      const coachId = words[0];
      console.log("coachId: ", coachId);
      return this.cards1.find((card) => card.id === Number(coachId));
    },
    selectedCardCars() {
      const words = this.id.split("-");
      const carId = words[1];
      console.log("carId: ", carId);
      return this.cards2.find((card) => card.id === Number(carId));
    },
  },
  methods: {
    navigateToChat() {
      console.log("Received coachData and cardData prop:", this.id);
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
</style>
