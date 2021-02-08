<template lang="html">
  <div class="">
    <div class="main">
      글 추가 페이지
      <PostAddForm></PostAddForm>
    </div>
  </div>
</template>

<script>
import PostAddForm from '@/components/posts/PostAddForm.vue';
export default {
  components: {
    PostAddForm,
  },
};
</script>
