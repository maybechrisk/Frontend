<template lang="html">
  <!-- prevent : 폼의 기본동작인 제출과 새로고침을 막을 수 있다.  -->
  <form class="" @submit.prevent="submitForm">
    <div class="">
      <label for="username">email: </label>
      <input type="text" id="username" v-model="username" />
    </div>
    <p>
      <span class="warning" v-if="isUsernameValid && username">
        이메일 주소를 넣어주세요.
      </span>
    </p>
    <div class="">
      <label for="password">pw: </label>
      <input type="password" id="password" v-model="password" />
    </div>
    <!-- v-bind:를 줄이면 :로 쓴다 -->
    <button
      :disabled="!isUsernameValid || !password"
      type="submit"
      :class="!isUsernameValid || !password ? 'disabled' : null"
    >
      로그인
    </button>
    {{ logMessage }}
  </form>
</template>

<script>
import { validateEmail } from '@/utils/validation';
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
  // 데이터 변화에 따라 이를 자동으로 연산해주는 연산식
  computed: {
    isUsernameValid() {
      return validateEmail(this.username);
    },
  },
  methods: {
    // 동기화 처리
    async submitForm() {
      try {
        // 비즈니스 로직
        const userData = {
          username: this.username,
          password: this.password,
        };

        await this.$store.dispatch('LOGIN', userData);
        // 메인으로 이동
        this.$router.push('/main'); // same with <<router-link :to="">
        // this.logMessage = `${data.user.username} 님 환영합니다.`; // ``을 이용해서 자바스크립트 변수를 넣을 수 있음.
      } catch (e) {
        // error 핸들링 코드
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
