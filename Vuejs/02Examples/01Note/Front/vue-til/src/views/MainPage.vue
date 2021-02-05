<template lang="html">
  <div class="">
    <div class="main">
      <div class="page-header">Today I posted</div>
      <ul>
        <li v-for="postItem in postItems" :key="postItem._id">
          {{ postItem.title }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { fetchPosts } from '@/api/index';
export default {
  // 생성될 때 셋팅
  created() {
    this.fetchData();
  },
  data() {
    return {
      postItems: [],
    };
  },
  methods: {
    // 게시물 조회
    async fetchData() {
      const { data } = await fetchPosts();
      console.log(data);
      this.postItems = data.posts;
    },
  },
};
</script>

<style lang="css" scoped></style>
