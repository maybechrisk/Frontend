import Vue from 'vue';
import LoginForm from '../LoginForm';

describe('LoginForm.vue', function() {
  // 명시된 것이 하나의 테스트 단위
  test('컴포넌트가 마운팅되면 username이 존재하고 초기 값으로 설정되어 있어야 한다.', () => {
    const instance = new Vue(LoginForm).$mount(); // 컴포넌트가 마운팅 되고
    console.log(instance);
    expect(instance.username).toBe(''); // 인스턴스가 있는지
  });
});
