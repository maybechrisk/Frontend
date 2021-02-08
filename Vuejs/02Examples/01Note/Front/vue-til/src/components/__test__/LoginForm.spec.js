import { shallowMount } from '@vue/test-utils';
import LoginForm from '../LoginForm';

describe('LoginForm.vue', () => {
  test('ID는 이메일 형식이 아니면 경고 메시지가 출력된다.', () => {
    // 테스트 내용
    const wrapper = shallowMount(LoginForm, {
      data() {
        return {
          username: 'test', // 임시로 데이터를 test로 넣음
        };
      },
    });
    const idInput = wrapper.find('#username');
    console.log('인풋박스의 값', idInput.element.value);
    console.log(wrapper.vm.isUsernameValid); // 값이 email이 맞는지

    // find로 temple 태그의 html요소를 쫓아감. css 선택자를 쫓아갈 수 있음.
    const warningText = wrapper.find('.warning');
    console.log(warningText); // 없으면 WarningWrapper가 뜬다.
    expect(warningText.exists()).toBeTruthy();
  });
});
