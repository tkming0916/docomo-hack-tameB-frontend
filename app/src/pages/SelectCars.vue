<template>
  <div id="app">
    <header class="bg-blue-500 text-white p-4">
      <h1 class="text-2xl font-semibold">カーシェア一覧</h1>
    </header>

    <div id="search">
      <button v-on:click="openModal">検索条件</button>

      <div id="overlay" v-show="showContent">
        <div id="content">
    
      <!-- 車種の選択 -->
      <div class="search">
      
      <div class="selectedCartype">
          <label class="radio-label">車種:</label>
          <input type="radio" id="car-any" value="" v-model="selectedCartype" name="selectedCartype"><label for="selectedCartype-any">指定しない</label>
          <input type="radio" id="small-car" value="軽自動車" v-model="selectedCartype" name="selectedCartype"><label for="selectedCartype-car">軽自動車</label>
          <input type="radio" id="nomal-car" value="普通車" v-model="selectedCartype" name="selectedCartype"><label for="selectedCartype-car">普通車</label>
      </div>
      
      <div class="cost">
        <label>料金:</label>
        <select v-model="selectedCost">
          <option value="">指定しない</option>
          <option value="1000">1,000円以下</option>
          <option value="2000">2,000円以下</option>
          <option value="3000">3,000円以下</option>
          <option value="2000">4,000円以下</option>
          <option value="3000">5,000円以下</option>
        </select>
      </div>

      <!-- 検索ボタン -->
      <button @click="searchTeachers">検索</button>
    </div>
  
  
          <button v-on:click="closeModal">閉じる</button>
        </div>
      </div>
    </div>
    <main id="main_content" class="l-mainContent l-article bg-gray-100 p-8">
      <div>
        <Card_car v-for="card in cards" :key="card.id" :cardData="card" />
      </div>
    </main>
  </div>
</template>

<script>
import Card_car from "../components/card_car.vue";
import cardsData from "../assets/cars.json"; // JSONファイルのパスに合わせて調整

export default {
  components: {
    Card_car,
  },
  data() {
    return {
      // showCars: false,
      cards: cardsData,
    };
  },
  methods: {
    buttonClicked() {
      window.alert("クリックしましたね");
    },
    showDetails(car) {
      this.selectedCar = car === this.selectedCar ? null : car;
    },
  },
};
</script>

<script setup>
import { createApp, ref } from "vue";

const showContent = ref(false);

const openModal = () => {
  console.log("click");
  showContent.value = true;
};

const closeModal = () => {
  showContent.value = false;
};

const app = createApp({
  setup() {
    return {
      showContent,
      openModal,
      closeModal,
    };
  },
});

app.mount("#search"); // HTML上の要素に応じて適切なIDを指定してください
</script>

<style>
#overlay {
  /* 要素を重ねた時の順番 */
  z-index: 1;

  /* 画面全体を覆う設定 */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);

  /* 画面の中央に要素を表示させる設定 */
  display: flex;
  align-items: center;
  justify-content: center;
}

#content {
  z-index: 2;
  width: 50%;
  padding: 1em;
  background: #fff;
}

/* ... 必要なスタイルをここに追加 ... */
img {
  width: 200px;
}
</style>
