<template lang="html">
  <div class="">
    <div class="main">
      <div class="page-header">Today I posted</div>
      <ul>
        <PostListItem
          v-for="postItem in postItems"
          :key="postItem._id"
          :postItem="postItem"
        ></PostListItem>
      </ul>
    </div>
  </div>
</template>

<script>
import { fetchPosts } from '@/api/index';
import PostListItem from '@/components/posts/PostListItem';

export default {
  // 생성될 때 셋팅
  components: {
    PostListItem,
  },
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
