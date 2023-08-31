<template>
  <div id="app">
    <router-view></router-view>
    <h2>チャットページ</h2>
    <div>
      <div v-for="(message, index) in messages" :key="index" :class="[message.from]">
        {{ message.text }}
      </div>
    </div>
    <!-- 新規メッセージ送信 -->
    <div>
      <input type="text" v-model="newMessage" placeholder="メッセージを入力...">
      <button @click="sendMessage">送信</button>
    </div>
    
    <!-- 5段階星評価 -->
    <!-- 評価 -->
    <div>
      <p>「話し方」の評価：</p>
      <select v-model="speechRating">
        <option value="A">よく聞いてくれる</option>
        <option value="B">リードしている</option>
      </select>
      <button @click="submitRating('話し方')">評価を送信</button>
    </div>

    <!-- 評価パターン2 -->
    <h2>接し方</h2>
    <ul>
        <li><input type="radio" value="" name="_sft_c_woi[]" checked><label>指定しない</label></li>
        <li><input type="radio" value="listen" name="_sft_c_woi[]"><label>話をよく聞く</label></li>
        <li><input type="radio" value="lead" name="_sft_c_woi[]"><label>リードしてくれる</label></li>
    </ul>

    <h2>話し方</h2>
    <ul>
        <li><input type="radio" value="" name="_sft_c_wos[]" checked><label>指定しない</label></li>
        <li><input type="radio" value="fast" name="_sft_c_wos[]"><label>速い</label></li>
        <li><input type="radio" value="slowly" name="_sft_c_wos[]"><label>ゆっくり</label></li>
    </ul>

    <h2>指導の仕方</h2>
    <ul>
        <li><input type="radio" value="" name="_sft_c_woc[]" checked><label>指定しない</label></li>
        <li><input type="radio" value="kind" name="_sft_c_woc[]"><label>優しい</label></li>
        <li><input type="radio" value="train" name="_sft_c_woc[]"><label>みっちり鍛える</label></li>
    </ul>

    <h2>雰囲気</h2>
    <ul>
      <li><input type="radio" value="" name="_sft_c_woc[]" checked><label>指定しない</label></li>
      <li><input type="radio" value="bright" name="_sft_c_woc[]"><label>明るい</label></li>
      <li><input type="radio" value="calm" name="_sft_c_woc[]"><label>落ち着いている</label></li>
    </ul>

  </div>
</template>

<script>

export default {
  name: "App",
  data: function() {
    return {
      messages: [
        { from: 'teacher', text: '家庭教師からのメッセージです。' },
        { from: 'student', text: '生徒からのメッセージです。' },
      ],
      newMessage: '',
    }
  },
  methods: {
    sendMessage() {
      if (this.newMessage.trim() !== '') {
        this.messages.push({ from: 'student', text: this.newMessage });
        this.newMessage = '';
      }
    },
    submitRating() {
      if (this.selectedRating !== null) {
        // レーティングを送信する処理をここに追加
        console.log('Selected rating:', this.selectedRating);
      }
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.teacher {
  background-color: #e0f2f1;
}

.student {
  background-color: #fce4ec;
}

</style>
