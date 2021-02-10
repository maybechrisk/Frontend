 <template>
  <form @submit.prevent="onClickButton">
    <h1>{{result}}</h1>
    <br/>
    <input type="text" v-model.number="value" ref="answer"><button>입력</button>
    <br/>
    시도 : {{tries.length}}
    <br/>
    <ul>
      <li v-for="t in tries">
        <div class="">{{t.try}}</div>
        <div class="">{{t.result}}</div>
      </li>
    </ul>
    <br/>
  </form>
</template>

<script type="text/javascript">

// getNumber를 method에 넣어도 되지, 화면과 상관없는 로직이기 때문에 (다른 곳에서도 쓸 수 있음)
// 따라서 일반 함수로 정의한다.
const getNumbers = () => {
  const candidate = [1,2,3,4,5,6,7,8,9];
  const array = [];
  for (let i=0; i<4; i+=1){
    const one = candidate.splice(Math.floor(Math.random()*(9-i)), 1)[0];
    array.push(one);
  };
  return array;
};

export default {  // data, methods는 현재 화면과 연관있는 내용을 정의한다.
  data() {  // 컴포넌트이기 떄문에 data를 return 해 준다.
    return {
      answer: getNumbers(),// 배열
      tries: [],  // 기록
      value : '', // 입력값
      result : '', // 판단
    }
  },
  methods: {
    onClickButton(e) {
      if(this.value === this.answer.join('')){  // 정답을 맞췄으면, 문자열과 배열 비교 시에 join
        this.tries.push({
          try: this.value,
          result: '홈런'
        });
        this.result = '홈런';
        alert("게임을 다시 시작합니다.");

        // 초기화
        this.value = '';
        this.tries = [];
        this.$refs.answer.focus();
      }else{  // 정답이 아닌 경우, 스트라이크와 볼 갯수를 날려주어야 함.
        let strike = 0;  // 화면에 보여지는 것은 data()로 관리, 내부 서비스(계산)는 let, const로 처리
        let ball = 0;
        const answerArray = this.value.split('').map(v => parseInt(v)); // 문자열을 숫자 배열로 바꿈
        for(let i=0; i<4; i+=1){
          if(answerArray[i] === this.answer[i]){// 숫자 자릿수 모두 정답
            strike++;
          }else if(this.answer.includes(answerArray[i])){// 숫자만 정답
            ball++;
          }
        }
        this.tries.push({
          try: this.value,
          result: `${strike} 스트라이크, ${ball} 볼입니다.`,
        });
        this.value='';
        this.$refs.answer.focus();
      }
    },
  },
};
</script>
