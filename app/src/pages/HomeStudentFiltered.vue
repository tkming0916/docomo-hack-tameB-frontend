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
                  value="男性"
                  v-model="selectedGender"
                  name="gender"
                /><label for="gender-car">男性</label>
                <input
                  type="radio"
                  id="gender-woman"
                  value="女性"
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
      <div>
        <Card_student
          v-for="card in cards"
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
    let sex = "女";
    let filtered = cardsData;
    if (sex !== null) {
      filtered = filtered.filter((value) => value.person_sex === sex);
    }

    let maxAge = 30;
    if (maxAge !== null) {
      filtered = filtered.filter((value) => value.person_age < maxAge);
    }

    let minAge = 20;
    if (minAge !== null) {
      filtered = filtered.filter((value) => value.person_age >= minAge);
    }

    return { cards: filtered };
  },
  methods: {
    navigateToCars(card) {
      // this.selectedCard = card; // カードを選択して詳細情報を表示
      this.$router.push({ name: "SelectCars", params: { id: card.id } });
      console.log("クリックされました");
      console.log(card.id);
    },
  },
};
</script>

<style>
/* ... 必要なスタイルをここに追加 ... */
</style>
