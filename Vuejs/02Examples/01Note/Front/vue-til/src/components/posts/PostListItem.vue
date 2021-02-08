<template lang="html">
  <li>
    <div class="post-title">
      <h4>{{ postItem.title }}</h4>
    </div>
    <div class="post-contents">- {{ postItem.contents }}</div>
    <div class="post-time">({{ postItem.createdAt | formatDate }})</div>
    <button class="post-modify" @click="routeEditPage">수정</button>
    <button class="post-delete" @click="deleteItem">삭제</button>
  </li>
</template>
<script>
import { deletePost } from '@/api/posts';
export default {
  props: {
    postItem: {
      type: Object,
      required: true,
    },
  },
  methods: {
    // 글 삭제
    async deleteItem() {
      if (confirm('삭제하시겠습니다?')) {
        await deletePost(this.postItem._id);
        this.$emit('refresh');
      }
    },
    // 수정 페이질 이동
    async routeEditPage() {
      this.$router.push(`/post/${this.postItem._id}`);
    },
  },
};
</script>
