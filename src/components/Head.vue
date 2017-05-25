<script>
export default {
   name: 'Head',
   data() {
      return {}
   }
}
</script>

<template>
<div class="head">
   <div class="content">
      <span class="receiver"></span>
   </div>
</div>
</template>

<style scoped lang="scss">
.head {
   display: flex;
   height: 87px;

   .content {
      @include flexAlign(flex-start,center);
      position: relative;
      flex-direction: column;

      &::before { //sensor
         display: block;
         content: '';
         width: 8px;
         height: 8px;
         border-radius: 50%;
         background-color: #000;
         margin-bottom: 20px;
         margin-top: 22px;
      }
      &::after { // Camera
         display: block;
         content: '';
         width: 15px;
         height: 15px;
         border-radius: 50%;
         background-color: #000;
         position: absolute;
         top: 53px;
         transform: translate3d(-70px, -50%,0);
      }
   }
   .receiver {
      width: 70px;
      height: 6px;
      background-color: #000;
      border-radius: 6px;
   }
}
</style>
