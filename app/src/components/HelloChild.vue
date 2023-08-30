<template>
 <div>
  <p>{{title}}</p>
  <!-- ここでpropsに設定された値をそのまま表示する -->
  <p>{{message}}</p>

  <ApiRequest />

 </div>
</template>
 
<script>
import ApiRequest from './ApiRequest.vue';

export default {
  components: {
    ApiRequest
  }
};
</script>