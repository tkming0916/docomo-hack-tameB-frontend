<template>
  <div id="app">
    <header class="bg-blue-500 text-white p-4">
      <h1 class="text-2xl font-semibold">指導者選択画面</h1>
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
          <!-- 職業の選択-->
          <div class="search">
            <div class="occupation">
              <div class="radio-options">
                <label class="radio-label">職業:</label>
                <input
                  type="radio"
                  id="occupation-any"
                  value=""
                  v-model="selectedOccupation"
                  name="occupation"
                /><label for="occupation-any">指定しない</label>
                <input
                  type="radio"
                  id="occupation-car"
                  value="車関連"
                  v-model="selectedOccupation"
                  name="occupation"
                /><label for="occupation-car">車関連</label>
              </div>
            </div>

            <!-- 性別の選択 -->
            <div class="gender">
              <div class="radio-gender">
                <label class="radio-label">性別:</label>
                <input
                  type="radio"
                  id="gender-any"
                  value=""
                  v-model="selectedGender"
                  name="gender"
                /><label for="gender-any">指定しない</label>
                <input
                  type="radio"
                  id="gender-man"
                  value="男"
                  v-model="selectedGender"
                  name="gender"
                /><label for="gender-car">男性</label>
                <input
                  type="radio"
                  id="gender-woman"
                  value="女"
                  v-model="selectedGender"
                  name="gender"
                /><label for="gender-car">女性</label>
              </div>
            </div>

            <!-- 年齢の選択 -->
            <div class="age">
              <div class="radio-options">
                <label class="radio-label">年齢:</label>
                <input
                  type="radio"
                  id="age-any"
                  value=""
                  v-model="selectedAge"
                  name="age"
                />
                <label for="age-any">指定しない</label>
                <input
                  type="radio"
                  id="age-20s"
                  value="20-29"
                  v-model="selectedAge"
                  name="age"
                />
                <label for="age-20s">20~29</label>
                <input
                  type="radio"
                  id="age-30s"
                  value="30-39"
                  v-model="selectedAge"
                  name="age"
                />
                <label for="age-30s">30~39</label>
                <input
                  type="radio"
                  id="age-40s"
                  value="40-49"
                  v-model="selectedAge"
                  name="age"
                />
                <label for="age-40s">40~49</label>
                <input
                  type="radio"
                  id="age-50s"
                  value="50-59"
                  v-model="selectedAge"
                  name="age"
                />
                <label for="age-50s">50~59</label>
                <input
                  type="radio"
                  id="age-60s"
                  value="60-69"
                  v-model="selectedAge"
                  name="age"
                />
                <label for="age-60s">60~69</label>
              </div>
            </div>

            <!-- 場所の選択 -->
            <div class="location">
              <label>場所:</label>
              <select
                v-model="selectedLocation"
                multiple
                class="bg-gray-100 border border-gray-300"
              >
                <option>渋谷区</option>
                <option>千代田区</option>
                <option>新宿区</option>
                <option>練馬区</option>
                <option>目黒区</option>
                <option>世田谷区</option>
                <option>足立区</option>
                <option>台東区</option>
                <option>葛飾区</option>
                <option>板橋区</option>
              </select>
            </div>
            <br />

            <!-- 曜日の選択 -->
            <div class="day">
              <label>曜日・時間:</label>
              <select
                v-model="selectedTime"
                class="bg-gray-100 border border-gray-300"
              >
                <option>月</option>
                <option>火</option>
                <option>水</option>
                <option>木</option>
                <option>金</option>
                <option>土</option>
                <option>日</option>
              </select>
            </div>

            <!-- 曜日の選択 -->
            <label for="starttime"></label>
            <input
              type="number"
              id="MondayStart"
              v-model="selectedStart"
              min="0"
              max="24"
              class="bg-gray-100 border border-gray-300"
            />:00〜
            <label for="endtime"></label>
            <input
              type="number"
              id="MondayEnd"
              v-model="selectedEnd"
              min="0"
              max="24"
              class="bg-gray-100 border border-gray-300"
            />:00
            <br />

            <!-- 運転歴の選択 -->
            <label for="experience">運転歴:</label>
            <input
              type="number"
              id="experience"
              v-model="selectedExperience"
              min="1"
              max="30"
              class="bg-gray-100 border border-gray-300"
            />年以上
            <br />
          </div>

          <button
            v-on:click="closeModal"
            class="bg-red-600 hover:bg-red-500 text-white rounded px-4 py-2"
          >
            閉じる
          </button>
        </div>
      </div>
    </div>

    <main id="main_content" class="l-mainContent l-article bg-gray-100 p-8">
      <div class="card-container">
        <Card_student
          v-for="card in filterCards"
          :key="card.id"
          :cardData="card"
          @click="navigateToCars(card)"
        />
      </div>
    </main>
  </div>
</template>

<script>
import Card_student from "../components/card_student.vue";
import cardsData from "../assets/corches.json"; // JSONファイルのパスに合わせて調整

export default {
  components: {
    Card_student,
  },
  data() {
    return {
      cards: cardsData,
      selectedGender: "",
      selectedAge: "",
      selectedOccupation: "",
    };
  },
  methods: {
    navigateToCars(card) {
      // this.selectedCard = card; // カードを選択して詳細情報を表示
      this.$router.push({ name: "SelectCars", params: { id: card.id } });
      console.log("クリックされました");
      console.log(card.id);
    },
  },
  computed: {
    filterCards() {
      let filtered = cardsData;

      console.log(cardsData);
      console.log(typeof this.selectedGender);
      console.log(this.selectedGender);
      const gender = this.selectedGender;
      if (gender !== "") {
        filtered = cardsData.filter(function (card) {
          return card.person_sex === gender;
        });
      }

      const ages = this.selectedAge;
      if (ages !== "") {
        const ageList = ages.split("-");
        const minAge = Number(ageList[0]);
        const maxAge = Number(ageList[1]);
        filtered = filtered.filter(function (card) {
          return card.person_age <= maxAge;
        });
        filtered = filtered.filter(function (card) {
          return card.person_age >= minAge;
        });
      }

      const occupation = this.selectedOccupation;
      if (occupation !== "") {
        filtered = filtered.filter(function (card) {
          return card.person_work === occupation;
        });
      }
      return filtered;
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

const applyChanges = () => {
  // 変更を適用
  console.log("applyChanges");
  console.log(this);
  this.carSize = this.selectedCar;
  showContent.value = false;
};

const app = createApp({
  setup() {
    return {
      showContent,
      openModal,
      closeModal,
      applyChanges,
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
