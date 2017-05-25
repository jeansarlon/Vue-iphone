<script>
import StatusBar from './StatusBar';
import PhoneHead from './Head';
import PhoneFoot from './Foot';
import PhoneScreen from './Screen';
export default {
   name: 'iPhone',
   components: {
      StatusBar,
      PhoneHead,
      PhoneFoot,
      PhoneScreen
   },
   data() {
      return {}
   }
}
</script>

<template>
<div class="container">
   <div class="body">
      <phone-head></phone-head>
      <phone-screen></phone-screen>
      <phone-foot></phone-foot>

   </div>
</div>
</template>

<style scoped lang="scss">
.body {
   @include flexAlign(space-between,normal);
   flex-direction: column;
   width: 400px;
   height: 826px;
   background-color: #fff;
   border-radius: 55px;
}
</style>
