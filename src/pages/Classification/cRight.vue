<template>
  <div>
      <ul v-if="cateObj.categoryList">
          <li v-for="(item,index) in cateObj.categoryList" :key="index">
              {{item.frontName}}
          </li>
      </ul>
       <ul v-if="cateObj.subCateList">
          <li v-for="(item,index) in cateObj.subCateList" :key="index">
              {{item.name}}
          </li>
      </ul>
  </div>
</template>

<script type="text/ecmascript-6">
    export default {
    data(){
        return{
            cateObj: {},
            cateList: []
        }
    },
      async mounted(){
        this.cateList = await this.$API.getCateLists()
        //获取路由参数
            //this.$roure.params.id
        //根据路由参数查询对应得对象
            this.cateObj = this.cateList.find(item => item.id === this.$route.params.id*1)
        //显示数据
      }
      ,
      watch: {
          $route(){
              this.cateObj = this.cateList.find(item => item.id === this.$route.params.id*1)
          }
      },

  }
</script>

<style scoped>

 
</style>
