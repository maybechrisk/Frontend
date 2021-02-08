<template>
  <header>
    <div class="">
      <router-link :to="logoLink" class-="logo">
        <img src="@/assets/logo.png" width="30px" alt="로고" />
      </router-link>
    </div>
    <div class="navigation">
      <!-- <template v-if="$store.getters.isLogin"> -->
      <template v-if="isUserLogin">
        <span>{{ $store.state.username }}</span> |
        <a href="javascript:;" @click="logoutUser">Logout</a>
      </template>
      <template v-else>
        <router-link to="login">로그인</router-link> |
        <router-link to="signup">회원가입</router-link>
      </template>
    </div>
  </header>
</template>

<script>
import { deleteCookie } from '@/utils/cookie';
export default {
  computed: {
    isUserLogin() {
      return this.$store.getters.isLogin;
    },
    logoLink() {
      return this.$store.getters.isLogin ? '/main' : '/login';
    },
  },
  methods: {
    logoutUser() {
      // store의 내용 삭제
      this.$store.commit('clearUsername');
      this.$store.commit('clearToken');
      // 브라우저 저장소의 내용 삭제
      deleteCookie('my_auth');
      deleteCookie('my_user');
      // 로긴으로 이동

      this.$router.push('/login');
    },
  },
};
</script>

<style></style>
