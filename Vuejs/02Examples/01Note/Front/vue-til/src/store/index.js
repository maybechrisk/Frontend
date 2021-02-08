import Vue from 'vue';
import Vuex from 'vuex';
import {
  getAuthFromCookie,
  getUserFromCookie,
  saveAuthToCookie,
  saveUserToCookie,
} from '@/utils/cookie';
import { loginUser } from '@/api/auth';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username: getUserFromCookie() || '',
    token: getAuthFromCookie() || '',
  },
  getters: {
    isLogin(state) {
      return state.username !== '';
    },
  },
  mutations: {
    // state를 바꿈
    setUsername(state, username) {
      state.username = username;
    },
    clearUsername(state) {
      state.username = '';
    },
    setToken(state, token) {
      state.token = token;
    },
  },
  actions: {
    // 로그인
    async LOGIN({ commit }, userData) {
      const { data } = await loginUser(userData); // data를 바로 꺼냄.

      // store에 토큰과 유저정보 저장
      commit('setToken', data.token); // 토큰 세팅
      commit('setUsername', data.user.username); // 이름 세팅

      // 쿠키에 토큰과 유저정보 저장
      saveAuthToCookie(data.token);
      saveUserToCookie(data.user.username);

      // 기본적으로 promise가 반환이 되지만, 명시적으로 data를 반환한다.
      return data;
    },
  },
});
