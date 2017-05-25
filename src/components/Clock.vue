<template>
   <span class="clock">{{ currentDt }}</span>
</template>


<script>
import interval from 'raf-funcs/interval';
import moment from 'moment';

function getLocale() {
   if (navigator.languages && navigator.languages.length) {
      return navigator.languages[0]
   } else {
      return navigator.language;
   }
}
function isEnglish(lang) {
   if (lang.indexOf('en') > -1) {
      return true;
   }
   return false;
}
export default {
   name:'Clock',
   props: {
      format: {
         type: String,
         default: 'hh:mm'
      },
      locale: {
         type: String,
         default: getLocale
      },
      clear:{
         type: Boolean,
         default: false
      },
   },
   data() {
      return {
         currentDt: this.updateDt()
      }
   },
   methods: {
      updateDt: function() {
         let dt = moment().format(this.format)
         if (this.clear) {
            dt = this.doClear(dt)
         }
         return dt;
      },
      doClear: function(dt) {
         var n;
         dt = dt.replace(moment().format('LT'), '')
         .replace(moment().format('YYYY'), '')
         .replace('às', '');
         n = dt.lastIndexOf("de");
         if (n > -1) {
            dt = dt.slice(0, n)
         }

         if(isEnglish(getLocale())){
            n = dt.lastIndexOf(",");
            if (n > -1) {
               dt = dt.slice(0, n)
            }
         }
         return dt;
      }
   },
   beforeMount: function() {
      moment.locale(this.locale);
      this.intervalRef = interval(() => {
         this.currentDt = this.updateDt();
      }, 1000);
   },
   destroyed: function() {
      this.intervalRef.cancel();
   }
}
</script>


<style scoped lang="scss">
.clock {
    color: #fff;
}
</style>
