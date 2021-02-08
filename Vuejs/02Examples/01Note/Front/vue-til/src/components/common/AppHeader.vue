<template>
  <header>
    <div class="">
      <router-link to="/" class-="logo">
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
export default {
  computed: {
    isUserLogin() {
      return this.$store.getters.isLogin;
    },
  },
  methods: {
    logoutUser() {
      this.$store.commit('clearUsername');
      this.$router.push('/login');
    },
  },
};
</script>

<style></style>
