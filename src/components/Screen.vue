<script>
import moment from 'moment';
import StatusBar from './StatusBar/'

export default {
   name: 'Screen',
   components: {
      StatusBar,
   },
   data() {
      return {}
   }
}
</script>

<template>
<div class="screen">
   <div class="content overflow-hidden">
      <status-bar></status-bar>
      <transition name="fade">
         <router-view class="router"></router-view>
      </transition>
   </div>
</div>
</template>

<style scoped lang="scss">
.screen {
   position: relative;
   padding: 0 18px;
   display: flex;
   flex: 1;

   .content {
       background-color: $black;
       background-image: url(../assets/images/iphone_gb.png);
       background-size: cover;
       background-position: center;
   }
   .router {
      display: flex;
      height: 100%;
   }
}
</style>
