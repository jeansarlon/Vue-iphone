<template>
<div class="github-user" :class="{active: mounted}">
   <div class="content">
      <div class="user">
         <div class="avatar"><img class="responsive-img" :src="user.avatar_url" alt=""></div>
         <p class="name">{{user.name}}</p>
         <p class="email">@{{user.login}}</p>
         <user-info :user="user"></user-info>
         <button @click="goMoreInfo" type="button" name="button">{{translate.buttons('more')}}</button>
      </div>
   </div>
</div>
</template>

<script>
import {appButtons} from '../../utils/translate'
import UserInfo from '../../components/User/UserInfo'
import {getUser} from '../../services/github';
export default {
   name: 'GitHubUser',
   components: {
      UserInfo,
   },
   data() {
      return {
         mounted: false,
         user: {},
         translate: {
            buttons: appButtons
         }
      }
   },
   methods: {
      goMoreInfo() {
         this.$router.push({ name: 'more-info', params:{user: this.user} })
      },

      fetchUser() {
         getUser('jeansarlon')
         .then(response => response.data)
         .then(user => {
            this.$set(this, 'user', user);
         })
      },
   },
   beforeMount() {
      this.fetchUser()
      this.mounted = false;
   },
   mounted() {
      setTimeout(() => {
         this.mounted = true;
      }, 300);
   },
}
</script>

<style scoped lang="scss">
.github-user {
   padding-top: 74px;
   text-align: center;
   color: #fff;

   .user {
      > .avatar {
         width: 228px;
         height: 228px;
         background-color: #fff;
         margin: auto;
         border-radius: 50%;
         overflow: hidden;

      }
      > .name {
         margin-top: 12px;
         font-size: 40px;
      }
      > .email {
         margin-top: 6px;
         font-size: 16px;
      }
      button {
         background-color: rgba(#fff, .5);
         border-radius: 3px;
         padding: 15px 20px;
         color: $black;
         margin: auto;
      }
   }
}
</style>
