<template>
<div class="user-info">
   <div class="item followers">
      {{user.followers}}
      <p>{{info('followers')}}</p>
   </div>
   <div class="item following">
      {{user.following}}
      <p>{{info('following')}}</p>
   </div>
   <div class="item repos">
      {{user.public_repos}}
      <p>{{info('public_repos')}}</p>
   </div>
</div>
</template>

<script>
import {userInfo} from '../../utils/translate'
export default {
   name: 'UserInfo',
   components: {},
   props: {
      user: {}
   },
   data() {
      return {}
   },
   methods: {
      info : userInfo,
   },
   beforeMount() {},
   mounted() {
   },
}
</script>

<style scoped lang="scss">
.user-info {
   padding: 30px 0;
   display: flex;
   align-items: center;
   justify-content: space-between;

   .item{
      border-right: 1px solid rgba(255,255,255,.4);
      flex: 1;

      p{
         padding: 5px 0;

      }
   }
}
</style>
