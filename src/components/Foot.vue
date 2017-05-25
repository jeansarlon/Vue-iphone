<script>
export default {
   name: 'Foot',
   data() {
      return {}
   }
}
</script>

<template>
<div class="foot">
   <div class="content">
      <button class="home"/>
   </div>
</div>
</template>

<style scoped lang="scss">
.foot {
   display: flex;
   height: 103px;

   .content {
      position: relative;
      @extend %flexCenter;

   }
   .home {
      width: 60px;
      height: 60px;
      background-color: $black;
      border-radius: 50%;
   }
}
</style>
