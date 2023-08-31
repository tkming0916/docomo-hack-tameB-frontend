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

  </div>

  <!-- 評価入力欄 -->
    <h2>接し方</h2>
    <div>
      <label>話をよく聞く</label>
      <input type="range" v-model="listeningRating" min="0" max="5" step="1">
      <span>{{ listeningRating }}</span>
      <label>リードしてくれる</label>
    </div>

    <h2>話し方</h2>
    <div>
      <label>速い</label>
      <input type="range" v-model="speakingSpeedRating" min="0" max="5" step="1">
      <span>{{ speakingSpeedRating }}</span>
      <label>ゆっくり</label>
    </div>

    <h2>指導の仕方</h2>
    <div>
      <label>優しい</label>
      <input type="range" v-model="teachingStyleRating" min="0" max="5" step="1">
      <span>{{ teachingStyleRating }}</span>
      <label>みっちり鍛える</label>
    </div>

    <h2>雰囲気</h2>
    <div>
      <label>明るい</label>
      <input type="range" v-model="atmosphereRating" min="0" max="5" step="1">
      <span>{{ atmosphereRating }}</span>
      <label>落ち着いている</label>
    </div>

    <!-- コメント入力欄 -->
    <h2>コメント</h2>
    <div>
      <textarea v-model="comment" placeholder="感想やコメントを入力してください"></textarea>
      <button @click="submitComment">送信</button>
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
      listeningRating: 0,         // 話をよく聞く
      speakingSpeedRating: 0,     // 話し方
      teachingStyleRating: 0,     // 指導の仕方
      atmosphereRating: 0,        // 雰囲気
      comment: '',                // コメント
    }
  },
  
  methods: {
    sendMessage() {
      if (this.newMessage.trim() !== '') {
        this.messages.push({ from: 'student', text: this.newMessage });
        this.newMessage = '';
        this.replyToStudent(); // メッセージ送信後に返信を行う
      }
    },
    submitRating() {
      if (this.selectedRating !== null) {
        // レーティングを送信する処理をここに追加
        console.log('Selected rating:', this.selectedRating);
      }
    },
    submitComment() {
      if (this.comment.trim() !== '') {
        // コメントを送信する処理をここに追加
        console.log('Comment:', this.comment);
        // コメントを送信した後、コメント入力欄をリセット
        this.comment = '';
      }
    },
    // studentから返信があった場合の返答をするスクリプト
    replyToStudent() {
      const lastMessage = this.messages[this.messages.length - 1];
      if (lastMessage.from === "student") {
        this.messages.push({ from: 'teacher', text: '承知しました。' });
      }
    },
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
