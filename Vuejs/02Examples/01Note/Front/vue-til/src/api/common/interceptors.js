import store from '@/store/index';

export function setInterceptors(instance) {
  // 인터셉터 요청
  instance.interceptors.request.use(
    function(config) {
      // 매 api마다 토큰을 실어서 보낸다.
      config.headers.Authorization = store.state.token;
      return config;
    },
    function(error) {
      return Promise.reject(error);
    },
  );

  // 인터셉터 응답
  instance.interceptors.response.use(
    function(response) {
      return response;
    },
    function(error) {
      return Promise.reject(error);
    },
  );

  return instance;
}
