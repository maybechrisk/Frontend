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
    <button type="submit">회원가입</button>
    {{ logMessage }}
  </form>
</template>

<script>
import { registerUser } from '@/api/index';
export default {
  data() {
    return {
      // form value;
      username: '',
      password: '',
      nickname: '',
      // log Message
      logMessage: '',
    };
  },
  methods: {
    // 동기화 처리
    async submitForm() {
      console.log('폼 제출');
      const userData = {
        username: this.username,
        password: this.password,
        nickname: this.nickname,
      };
//      const response = await registerUser(userData);
        const { data } = await registerUser(userData); // data를 바로 꺼냄.
        console.log(data.username);
        this.logMessage = `${data.username} 님이 회원가입 되었습니다.` // ``을 이용해서 자바스크립트 변수를 넣을 수 있음.
      this.initForm();
    },
    initForm(){ // 초기화 시 null로 해도 되지만, 타입을 정해주는 게 에러를 줄이는 방법임.
      this.username = '';
      this.password = '';
      this.nickname = '';
    },
  },
};
</script>

<style lang="css" scoped></style>
