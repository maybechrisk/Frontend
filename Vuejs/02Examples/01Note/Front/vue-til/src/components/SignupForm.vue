<template lang="html">
  <!-- prevent : 폼의 기본동작인 제출과 새로고침을 막을 수 있다.  -->
  <form class="" @submit.prevent="submitForm">
    <div class="">
      <label for="username">id: </label>
      <input type="text" id="username" v-model="username" />
    </div>
    <div class="">
      <label for="password">pw: </label>
      <input type="password" id="password" v-model="password" />
    </div>
    <div class="">
      <label for="nickname">nickname: </label>
      <input type="text" id="nickname" v-model="nickname" />
    </div>
    <button type="submit">로그인</button>
  </form>
</template>

<script>
import { registerUser } from '@/api/index';
export default {
  data() {
    return {
      username: '',
      password: '',
      nickname: '',
    };
  },
  methods: {
    submitForm() {
      console.log('폼 제출');
      const userData = {
        username: this.username,
        password: this.password,
        nickname: this.nickname,
      }
      registerUser(userData);
    },
  },
};
</script>

<style lang="css" scoped></style>
