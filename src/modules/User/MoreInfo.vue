<template>
<div class="more-info" :class="{active: mounted}">
   <div class="content">
      <header class="header">
         <button @click="back" class="back animate to-left">{{translate.buttons('back')}}</button>
         <p class="name">{{user.name}}</p>
         <ul>
            <li>{{translate.info('location')}}: <span>{{user.location}}</span></li>
            <li>{{translate.info('html_url')}}: <a :href="user.html_url">{{user.html_url}}</a></li>
         </ul>
         <p class="title">{{translate.info('following')}}</p>
      </header>
      <ul class="following-list">
         <li class="item" v-for=" i in following" :title="i.login">
            <a :href="i.html_url"><img class="responsive-img" :src="i.avatar_url" :alt="i.login"></a>
         </li>
      </ul>
   </div>
</div>
</template>

<script>
import {getFollowing} from '../../services/github';
import {userMoreInfo, appButtons} from '../../utils/translate'

export default {
   name: 'MoreInfo',
   components: {},
   data() {
      return {
         mounted: false,
         user : this.$route.params.user,
         following: {},
         translate: {
            info: userMoreInfo,
            buttons: appButtons
         },
      }
   },
   methods: {
      back() {
         window.history.back();
      },
      fetchFollowing() {
         getFollowing('jeansarlon')
         .then(response => response.data)
         .then(following => {
            this.$set(this, 'following', following);
         })
      },
   },
   beforeMount() {
      this.mounted = false;
   },
   mounted() {
      setTimeout(() => {
         this.mounted = true;
         this.fetchFollowing()
      }, 300);
   },
}
</script>

<style scoped lang="scss">
.more-info {
   background-color: $black;
   .content {
      padding-top: 29px;
      flex-direction: column;
      @include flexAlign(flex-start, flex-start);


      .following-list,.header {
         flex: 1;
         position: relative;
         width: 100%;
      }

      > .header {
         padding-top: 30px;
         @include flexAlign(space-between, center);
         flex-direction: column;

         > .title,
         > .name {
            color: #fff
         }

         > .name {
            font-size: 35px;
         }
         > .title {
            font-size: 25px;
            padding: 20px 0;
         }
         > .back {
            padding: 10px;
            position: absolute;
            left: 0;
            top: 0;
            color: #fff;
            transition: all .3s ease;
         }
         > ul{
            width: 100%;
            li{
               border-bottom: 1px solid #5b5b5b;
               padding: 15px;
               color: #fff;
               @include flexAlign(space-between, center);
            }
         }
      }
      .following-list {
         background-color: $black;;
         @include flexAlign(flex-start, flex-start);
         justify-content: flex-start;
         flex-wrap: wrap;
         overflow-y: scroll;
         border-top: 5px solid #fff;
         box-sizing:content-box;
         padding-right: 17px;

         > .item {
            flex: 0 0 33.33333%;
         }
      }
   }
}
</style>
