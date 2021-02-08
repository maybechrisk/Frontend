import { shallowMount } from '@vue/test-utils';
import LoginForm from '../LoginForm';

describe('LoginForm.vue', () => {
  test('ID는 이메일 형식이어야 한다. ', () => {
    // 테스트 내용
    const wrapper = shallowMount(LoginForm, {
      data() {
        return {
          username: 'test@naver.com', // 임시로 데이터를 test로 넣음
        };
      },
    });
    const idInput = wrapper.find('#username');
    console.log('인풋박스의 값', idInput.element.value);
    console.log(wrapper.vm.isUsernameValid); // 값이 email이 맞는지
  });
});
