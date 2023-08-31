<template>
  <div class="card" @click="goToDetails">
    <!-- カードの表示内容 -->
    <!-- <a>{{ cardData.id }}</a> -->
    <img :src="require(`@/assets/${cardData.student_img}`)">
    <p>名前：{{ cardData.student_name }}</p>
    <p>性別：{{ cardData.student_sex }}</p>
    <p>場所：{{ cardData.student_place }}</p>
    <p>指導歴：{{ cardData.student_year }}</p>
    <p>料金：{{ cardData.student_cost }}</p>
    <p>評価：{{ cardData.student_review }}</p>
    <p>コメント：{{ cardData.student_comment }}</p>

    <!-- <p>{{ cardData }}</p> -->
  </div>
</template>

<script>
export default {
  props: ['cardData'],
  methods: {
    // goToDetails() {
    //   this.$router.push({ name: 'DetailsPage', params: { id: this.cardData.id } });
    // }
  }
};
</script>

<style scoped>
.card {
  border: 1px solid #ccc;
  padding: 16px;
  margin: 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: box-shadow 0.3s;
}

.card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

img {
  width: 200px;
}
</style>