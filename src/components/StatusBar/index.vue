<script>
import Clock from '../Clock';
import NetworkStatus from './Network';
import OperatorStatus from './Operator';
import BatteryStatus from './Battery';
export default {
   name: 'StatusBar',
   components: {
      Clock,
      NetworkStatus,
      OperatorStatus,
      BatteryStatus
   },
   data() {
      return {}
   }
}
</script>

<template>
<div class="status-bar">
   <div class="item">
      <operator-status></operator-status>
      <network-status></network-status>
   </div>
   <div class="item">
      <div class="item-content clock">
         <clock format="h:mm A"></clock>
      </div>
   </div>
   <div class="item">
      <battery-status></battery-status>
   </div>
</div>
</template>

<style lang="scss">
.status-bar {
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   padding: 0 16px;
   @include flexAlign(space-between,center);
   color: #fff;
   height: 29px;

   .item {
      @extend %flexCenter;

      >.item-content {
         @extend %flexCenter;
         font-size: 15px;
      }
      > .operator-status, >.batery-status{
         padding: 0 10px;
      }
   }
}
</style>
