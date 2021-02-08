import axios from 'axios';
import { setInterceptors } from './common/interceptors';

function createInstance() {
  const instance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
  });
  // 인터셉터에 instance 셋팅
  return setInterceptors(instance);
}

// 인스턴스 생성
const instance = createInstance();

// 회원가입 API
function registerUser(userData) {
  // const url = 'http://localhost:3000/signup';
  // return axios.post(url, userData)
  return instance.post('signup', userData);
}

// 로그인 API
function loginUser(userData) {
  return instance.post('login', userData);
}

// 노트 조회 API
function fetchPosts() {
  return instance.get('posts');
}

// 노트 새 글 생성 API
function createPost(postData) {
  return instance.post('posts', postData);
}

export { registerUser, loginUser, fetchPosts, createPost };
