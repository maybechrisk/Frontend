<template lang="html">
  <div class="">
    <div class="main">
      글 수정 페이지
      <PostEditForm></PostEditForm>
    </div>
  </div>
</template>

<script>
import PostEditForm from '@/components/posts/PostEditForm.vue';
export default {
  components: {
    PostEditForm,
  },
};
</script>
