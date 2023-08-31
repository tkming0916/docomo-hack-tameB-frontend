<template>
  <h1>予約決定画面</h1>
  <div>
    <v-table>
      <tbody>
        <tr>
          <th>氏名</th>
          <td>
            {{ coach.name }}
          </td>
        </tr>
        <tr>
          <th>年齢</th>
          <td>{{ coach.age }}歳</td>
        </tr>
        <tr>
          <th>場所</th>
          <td>{{ coach.address }}</td>
        </tr>
        <tr>
          <th>指導歴</th>
          <td>{{ coach.exp }}年</td>
        </tr>
        <tr>
          <th>指導料</th>
          <td>1時間{{ coach.fee }}円</td>
        </tr>
        <tr>
          <th>評価</th>
          <td>星{{ coach.review }}</td>
        </tr>
        <tr>
          <th>一言コメント</th>
          <td>{{ coach.comment }}</td>
        </tr>
        <tr>
          <th>自己紹介</th>
          <td>{{ coach.intro }}</td>
        </tr>
      </tbody>
    </v-table>
  </div>
  <button type="submit" @click="exec">依頼</button>
</template>
<script setup>
const coach = {
  name: "田中太郎",
  age: 30,
  address: "東京都千代田区",
  exp: 5,
  fee: 2000,
  review: 4,
  comment: "がんばります！",
  intro: "田中太郎です！よろしくお願いします！",
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
</style>
