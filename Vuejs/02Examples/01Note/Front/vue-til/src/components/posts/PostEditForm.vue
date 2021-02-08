<template lang="html">
  <form class="" @submit.prevent="submitForm">
    <div class="">
      <label for="title">title: </label>
      <input type="text" id="title" v-model="title" />
    </div>
    <div class="">
      <label for="contents">contents: </label>
      <textarea rows="5" id="contents" v-model="contents" />
      <p v-if="!isContentsValid">Contents must be less than 200</p>
    </div>
    {{ logMessage }}
    <!-- v-bind:를 줄이면 :로 쓴다 -->
    <button :disabled="!title || !contents" type="submit">
      수정
    </button>
  </form>
</template>

<script>
import { fetchPost, editPost } from '@/api/posts';
export default {
  data() {
    return {
      // form value;
      title: '',
      contents: '',
      // log Message
      logMessage: '',
    };
  },
  async created() {
    // 글 정보 새로 받아오기
    const id = this.$route.params.id;
    const { data } = await fetchPost(id);

    // 데이터 셋
    this.title = data.title;
    this.contents = data.contents;
  },
  computed: {
    // 유효성 검사
    isContentsValid() {
      return this.contents.length <= 200;
    },
  },
  methods: {
    // 글 수정
    async submitForm() {
      const id = this.$route.params.id;
      try {
        const response = await editPost(id, {
          title: this.title,
          contents: this.contents,
        });
        console.log(response);
        this.$router.push('/main');
      } catch (e) {
        console.log(e.response.data.message);
        this.logMessage = e.response.data.message;
      }
    },
  },
};
</script>

<style lang="css" scoped></style>
