<template lang="html">
  <div class="">
    <div class="main">
      <div class="page-header">Today I posted</div>
      <div class="loading" v-if="isLoading">
        Loading....
      </div>
      <div class="page-list" v-else>
        <ul>
          <PostListItem
            v-for="postItem in postItems"
            :key="postItem._id"
            :postItem="postItem"
          ></PostListItem>
        </ul>
      </div>
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
      isLoading: false, // 데이터 로딩 처리
    };
  },
  methods: {
    // 게시물 조회
    async fetchData() {
      this.isLoading = true; // 로딩중
      const { data } = await fetchPosts(); // 데이터 받아옴
      this.isLoading = false; // 로딩 끝
      this.postItems = data.posts; // 데이터 셋팅
    },
  },
};
</script>

<style lang="css" scoped></style>
