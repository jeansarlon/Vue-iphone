<template>
<div class="lock-screen">
   <div class="content">
      <div class="date-time animate to-scale-down">
         <clock class="clock big"></clock>
         <clock class="clock" format="LLLL" :clear="true"></clock>
      </div>

      <div class="navigation">
         <button class="animate to-top" v-on:click="next" type="button" name="button">{{translate.buttons('unlock')}}</button>
         <div class="indicator">
            <span class="animate to-bottom"></span>
         </div>
         <icon class="camera animate to-right" name="camera"></icon>
      </div>
   </div>
</div>
</template>

<script>
import Clock from '../../components/Clock';
import {appButtons} from '../../utils/translate'

export default {
   name: 'Screen',
   components: {
      Clock,
   },
   data() {
      return {
         translate: {
            buttons: appButtons
         }
      }
   },
   methods: {
      next: function() {
         this.$router.push({ name: 'github' })
      }
   }
}
</script>

<style scoped lang="scss">
.lock-screen {
   padding-top: 77px;

   .content {
      flex-direction: column;
      @include flexAlign(space-between,normal);
   }
   .date-time {
      transition: all .3s ease;
   }

   .clock {
      text-align: center;
      width: 100%;
      &.big {
         font-size: 50px;
      }
      &:first-of-type{
         margin-bottom: 12px;
      }
   }
   .navigation {
      position: relative;
      text-align: center;

      > button {
         transition: all .3s ease;
         margin: auto;
         padding: 15px 15px;
         background-color: #f8f8f6;
         font-size: 20px;
         color: #545454;
         border-radius: 15px;
      }
      > .indicator {
         height: 50px;
         @include flexAlign(center,flex-end);


         span {
            transition: all .3s ease;
            display: block;
            height: 8px;
            width: 41px;
            border-radius: 8px;
            background-color: #747474;
            margin-bottom: 13px;
         }

      }
      .camera{
         transition: all .3s ease;
         position: absolute;
         right: 0;
         bottom: 0;
         width: 50px;
         height: 50px;
      }
   }
}
</style>
