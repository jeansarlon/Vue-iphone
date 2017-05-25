<script>
export default {
   name: 'Battery',
   data() {
      return {}
   }
}
</script>

<template>
   <div class="item-content batery-status">
      95%<icon name="battery"></icon>
   </div>
</template>

<style scoped lang="scss">
.batery-status{
   svg{
      margin-left: 6px;
      width: 25px;
      height: 15px;
   }
}
</style>
