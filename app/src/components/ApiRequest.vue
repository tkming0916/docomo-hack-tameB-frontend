<template>
  <div>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: ''
    };
  },
  mounted() {
    // APIからデータを取得
    fetch('http://localhost:8080/')  // バックエンドのURL
      .then(response => response.json())
      .then(data => {
        this.message = data.Hello;
      });
  }
};
</script>
