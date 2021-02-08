import axios from 'axios';
import { setInterceptors } from './common/interceptors';

// 인증이 필요없는 인스턴스
function createInstance() {
  return axios.create({
    baseURL: process.env.VUE_APP_API_URL,
  });
}

// 인증이 필요한 인스턴스
function createInstanceWithAuth(url) {
  const instance = axios.create({
    baseURL: `${process.env.VUE_APP_API_URL}${url}`,
  });
  // 인터셉터에 instance 셋팅
  return setInterceptors(instance);
}

// 인스턴스 생성
export const instance = createInstance();
export const posts = createInstanceWithAuth('posts'); // 기본 URL이 항상 posts
