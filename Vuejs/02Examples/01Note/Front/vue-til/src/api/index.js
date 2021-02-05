import axios from 'axios';
import { setInterceptors } from './common/interceptors';

function createInstance() {
  const instance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
    headers: {
      // Authorization: store.state.token,   // 이렇게 하면 이미 실행된 상태이므로 빈 값이 들어감.
    },
  });
  // 인터셉터에 instance 셋팅
  return setInterceptors(instance);
}

// 인스턴스 생성
const instance = createInstance();

// 회원가입
function registerUser(userData) {
  // const url = 'http://localhost:3000/signup';
  // return axios.post(url, userData)
  return instance.post('signup', userData);
}

// 로그인
function loginUser(userData) {
  return instance.post('login', userData);
}

export { registerUser, loginUser };
