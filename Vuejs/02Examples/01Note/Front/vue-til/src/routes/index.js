import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter); // Vue.use : 플러그인을 실행하기 위해서 초기화하는 코드
export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      component: () => import('@/views/LoginPage.vue'),
    },
    {
      path: '/signup',
      component: () => import('@/views/SignupPage.vue'),
    },
    {
      path: '*', // 나머지 url
      component: () => import('@/views/NotfoundPage.vue'),
    },
  ],
}); // default 파일에서 하나의 변수가 변하게 됨
