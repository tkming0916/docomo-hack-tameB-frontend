<template>
  <div class="card" @click="goToDetails">
    <!-- カードの表示内容 -->
    <!-- <a>{{ cardData.id }}</a> -->
    <img :src="require(`@/assets/${cardData.person_img}`)">
    <p>名前：{{ cardData.person_name }}</p>
    <p>性別：{{ cardData.person_sex }}</p>
    <p>年齢：{{ cardData.person_age }}</p>
    <p>場所：{{ cardData.person_prefecture }} {{ cardData.person_city }}</p>
    
    <p>指導歴：{{ cardData.person_experience }}</p>
    <p>料金：{{ cardData.person_cost }}</p>
    <p>コメント：{{ cardData.person_comment }}</p>
    
    <p>===========</p>
    <p>評価：{{ cardData.person_evaluation }}</p>
    <p>接し方：{{ cardData.person_eval_treat }}</p>
    <p>話し方：{{ cardData.person_eval_talk }}</p>
    <p>指導の仕方：{{ cardData.person_eval_teach }}</p>
    <p>雰囲気：{{ cardData.person_eval_atmosphere }}</p>

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
  flex: 1;
  min-width: 300px; /* Adjust the padding/margin values */
  border: 1px solid #ccc;
  padding: 16px;
  margin: 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: box-shadow 0.3s;
  box-sizing: border-box;
  background-color: #EEEEEF;
}

.card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

img {
  width: 200px;
  margin: auto;
  display: block;
  margin-bottom: 16px;
}

p {
  font-weight: bold;
  font-size: 110%;
}
</style>