import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store/index';

Vue.use(VueRouter); // Vue.use : 플러그인을 실행하기 위해서 초기화하는 코드

const router = new VueRouter({
  mode: 'history', // url에 #을 제거함, #을 이용해서 이 페이지가 새로운 페이지라는 것을 알지 못함.
  // #을 뺴면 새로운 페이지로 인식
  // 실제 배포할 때는 서버에서 url에 대한 우회, 필터링 기능을 넣어주어야한다.
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
      path: '/main',
      component: () => import('@/views/MainPage.vue'),
      meta: { auth: true },
    },
    {
      path: '/add',
      component: () => import('@/views/PostAddPage.vue'),
      meta: { auth: true },
    },
    {
      path: '/post/:id',
      component: () => import('@/views/PostEditPage.vue'),
      meta: { auth: true },
    },
    {
      path: '*', // 나머지 url
      component: () => import('@/views/NotfoundPage.vue'),
    },
  ],
}); // default 파일에서 하나의 변수가 변하게 됨

router.beforeEach((to, from, next) => {
  if (to.meta.auth && !store.getters.isLogin) {
    console.log('인증이 필요합니다.');
    next('/login');
    return;
  }
  next();
});

export default router;
