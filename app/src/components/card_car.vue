<template>
  <div class="card" @click="goToDetails">
    <!-- カードの表示内容 -->
    <!-- <a>{{ cardData.id }}</a> -->
    <img :src="require(`@/assets/${cardData.car_img}`)">
    <p>車種：{{ cardData.car_name }}</p>
    <p>利用料：{{ cardData.car_cost }}</p>
    <p>大きさ：{{ cardData.car_size }}</p>
    <p>場所：{{ cardData.car_place }}</p>

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

p{
  font-weight: bold;
  font-size: 110%;
}
</style>
