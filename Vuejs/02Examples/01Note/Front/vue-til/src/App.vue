<template lang="html">
  <div class="">
    <AppHeader></AppHeader>
    <router-view></router-view>
  </div>
</template>

<script>
import AppHeader from '@/components/common/AppHeader';

export default {
  components: {
    AppHeader,
  },
};
</script>

<style lang="css" scoped></style>
