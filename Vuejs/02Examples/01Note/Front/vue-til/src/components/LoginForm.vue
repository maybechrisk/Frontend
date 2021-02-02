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
    <button type="submit">로그인</button>
    {{ logMessage }}
  </form>
</template>

<script>
import { loginUser } from '@/api/index';
export default {
  data() {
    return {
      // form value;
      username: '',
      password: '',
      // log Message
      logMessage: '',
    };
  },
  methods: {
    // 동기화 처리
    async submitForm() {
      console.log('로그인');
      try {
        // 비즈니스 로직
        const userData = {
          username: this.username,
          password: this.password,
        };
        const { data } = await loginUser(userData); // data를 바로 꺼냄.
        console.log(data);
        this.logMessage = `${data.user.username} 님 환영합니다.`; // ``을 이용해서 자바스크립트 변수를 넣을 수 있음.

      } catch (e) {
        // error 핸들링 코드
        console.log(e.response.data);
        this.logMessage = e.response.data;
      } finally {
        this.initForm();
      }
    },
    initForm() {
      // 초기화 시 null로 해도 되지만, 타입을 정해주는 게 에러를 줄이는 방법임.
      this.username = '';
      this.password = '';
    },
  },
};
</script>

<style lang="css" scoped></style>
