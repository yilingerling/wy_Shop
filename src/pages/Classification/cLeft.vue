<template>
  <div>
      <ul class="navList">
          <li v-for="(navItem, index) in navList" :key="index">
            <router-link :to="`/classification/cRight/${navItem.id}`">
                {{navItem.name}}
            </router-link>
          </li>
      </ul>
  </div>
</template> 

<script type="text/ecmascript-6">
  export default {
      data(){
            return {
                navList: [],
                active : "active"
            }
        },
    async mounted() {
        
       let result = await this.$API.getCateNavDatas()

       this.navList = result.categoryL1List

       this.$router.push(`/Classification/cRight/${this.navList[0].id}`)

      
    },
  }


</script>

<style lang="stylus">

    div
        .navList             
            li
                width 165px
                height 50px
                line-height 50px
                font-size 28px
                text-align center
                margin-top 40px
    
    
</style>
