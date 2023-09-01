<template>
  <div id="app" class="p-8">
    <router-view></router-view>
    <div class="bg-white p-4 rounded-md shadow-md mx-4 mb-4">
      <h2 class="text-2xl font-bold mb-4">チャット</h2>
      <div class="max-w-2xl mx-auto">
        <div class="flex items-center justify-center">
          <div class="space-y-2 w-1/2">
            <div
              v-for="(message, index) in messages"
              :key="index"
              class="p-2 rounded-md shadow-sm border border-gray-300 flex justify-center"
              :class="[message.from === 'teacher' ? 'bg-teal-100' : 'bg-blue-100']"
            >
              {{ message.text }}
            </div>
          </div>
        </div>
        <!-- 新規メッセージ送信 -->
        <div class="flex justify-center mt-4">
          <input
            type="text"
            v-model="newMessage"
            class="p-2 border rounded-md w-1/3"
            placeholder="メッセージを入力..."
          />
          <button
            @click="sendMessage"
            class="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            送信
          </button>
        </div>
      </div>
    </div>
  

    <div class="bg-white p-4 rounded-md shadow-md mx-4 mb-4">
      <h2 class="text-2xl font-bold mb-4">指導者への評価</h2>
      <div class="max-w-2xl mx-auto">
        <!-- 接し方 -->  
        <div class="bg-white p-4 rounded-md space-y-4">
          <h2 class="text-xl font-bold mb-2 text-primary">接し方</h2>
          <div class="space-y-2">
            <div class="flex items-center justify-between">
              <label class="text-primary">話をよく聞く</label>
              <input type="range" v-model="listeningRating" min="0" max="4" class="w-1/2">
              <label class="text-primary">リードしてくれる</label>
            </div>
          </div>
        </div>
      
        <!-- 話し方 -->
        <div class="bg-white p-4 rounded-md mt-4 space-y-4">
            <h2 class="text-xl font-bold mb-2 text-primary">話し方</h2>
            <div class="space-y-2">
                <div class="flex items-center justify-between">
                    <label class="text-primary">速い</label>
                    <input type="range" v-model="speakingSpeedRating" min="0" max="4" class="w-1/2">
                    <label class="text-primary">ゆっくり</label>
                </div>
            </div>
        </div>

        <!-- 指導の仕方 -->
        <div class="bg-white p-4 rounded-md mt-4 space-y-4">
            <h2 class="text-xl font-bold mb-2 text-primary">指導の仕方</h2>
            <div class="space-y-2">
                <div class="flex items-center justify-between">
                    <label class="text-primary">優しい</label>
                    <input type="range" v-model="teachingStyleRating" min="0" max="4" class="w-1/2">
                    <label class="text-primary">みっちり鍛える</label>
                </div>
            </div>
        </div>

        <!-- 雰囲気 -->
        <div class="bg-white p-4 rounded-md mt-4 space-y-4">
            <h2 class="text-xl font-bold mb-2 text-primary">雰囲気</h2>
            <div class="space-y-2">
                <div class="flex items-center justify-between">
                    <label class="text-primary">明るい</label>
                    <input type="range" v-model="atmosphereRating" min="0" max="4" class="w-1/2">
                    <label class="text-primary">落ち着いている</label>
                </div>
            </div>
        </div>
      </div>

      <div class="max-w-2xl mx-auto">
        <h3 class="text-1xl font-bold mb-4 text-center mt-4">コメント</h3>
        <div class="mt-4">
          <textarea v-model="comment" class="w-full px-4 py-2 border rounded-lg" placeholder="感想やコメントを入力してください"></textarea>
          <div class="flex justify-center">
            <button @click="submitComment" class="mt-2 px-12 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">送信</button>
          </div>
        </div>
      </div>
    </div>
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
      this.$router.push({ name: "HomeStudent"});
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

</style>
