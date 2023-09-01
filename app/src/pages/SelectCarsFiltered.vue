<template>
  <div id="app">
    <header class="bg-blue-500 text-white p-4">
      <h1 class="text-2xl font-semibold">カーシェア一覧</h1>
    </header>

    <div id="search">
      <button
        v-on:click="openModal"
        class="bg-red-600 hover:bg-red-500 text-white rounded px-4 py-2"
      >
        検索条件を絞り込む
      </button>

      <div id="overlay" v-show="showContent">
        <div id="content">
          <!-- 車種の選択 -->
          <div class="search">
            <div class="selectedCartype">
              <label class="radio-label">車種:</label>
              <input
                type="radio"
                id="car-any"
                value=""
                v-model="selectedCartype"
                name="selectedCartype"
              /><label for="selectedCartype-any">指定しない</label>
              <input
                type="radio"
                id="small-car"
                value="軽自動車"
                v-model="selectedCartype"
                name="selectedCartype"
              /><label for="selectedCartype-car">軽自動車</label>
              <input
                type="radio"
                id="nomal-car"
                value="普通車"
                v-model="selectedCartype"
                name="selectedCartype"
              /><label for="selectedCartype-car">普通車</label>
            </div>

            <div class="cost">
              <label>料金:</label>
              <select
                v-model="selectedCost"
                class="bg-gray-100 border border-gray-300"
              >
                <option value="">指定しない</option>
                <option value="1000">1,000円以下</option>
                <option value="2000">2,000円以下</option>
                <option value="3000">3,000円以下</option>
                <option value="2000">4,000円以下</option>
                <option value="3000">5,000円以下</option>
              </select>
            </div>

            <!-- 検索ボタン -->
            <button
              @click="searchTeachers"
              class="bg-red-600 hover:bg-red-500 text-white rounded px-4 py-2"
            >
              検索
            </button>
          </div>

          <button
            v-on:click="closeModal"
            class="bg-gray-300 hover:bg-gray-100 text-white rounded px-4 py-2"
          >
            閉じる
          </button>
        </div>
      </div>
    </div>
    <main id="main_content" class="l-mainContent l-article bg-gray-100 p-8">
      <div class="card-container">
        <Card_car
          v-for="card in cards"
          :key="card.id"
          :cardData="card"
          @click="navigateToDetail(card)"
        />
      </div>
    </main>
  </div>
</template>

<script>
import Card_car from "../components/card_car.vue";
import cardsData from "../assets/cars.json"; // JSONファイルのパスに合わせて調整

export default {
  props: ["id"], // 遷移前のidを受け取る

  components: {
    Card_car,
  },
  data() {
    let maxPrice = null;
    let filtered = cardsData;
    if (maxPrice !== null) {
      filtered = filtered.filter((value) => value.car_cost <= maxPrice);
    }

    let minPrice = null;
    if (minPrice !== null) {
      filtered = filtered.filter((value) => value.car_cost >= minPrice);
    }

    let carSize = "軽自動車";
    if (carSize !== null) {
      filtered = filtered.filter((value) => value.car_size === carSize);
    }
    return { cards: filtered };
  },
  methods: {
    navigateToDetail(card) {
      console.log("Received cardData prop:", this.id);
      let next_id = this.id + "-" + card.id; // 遷移後のidを計算

      console.log(next_id);
      this.$router.push({ name: "StudentRequest", params: { id: next_id } });

      console.log("クリックされました");
      console.log(card.id);
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
.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 800px; /* Adjust the max-width as needed */
  margin: 0 auto;
  padding: 16px;
}
</style>
