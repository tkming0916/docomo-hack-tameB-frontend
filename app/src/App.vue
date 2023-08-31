<template>
  <div id="app">
    <PageHeader />
    <router-view></router-view>
  </div>
</template>

<script>
import PageHeader from './components/PageHeader.vue'; // Headerコンポーネントをインポート

export default {
  name: 'App',
  components: {
    PageHeader // コンポーネントを登録
  },
};
</script>