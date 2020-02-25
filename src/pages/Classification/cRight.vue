<template>
  <div class="container">
      <div class="cTop">
          <img src="../../images/top.png" alt="">
      </div>
      <div v-if="cateObj">
      <ul class="ulOne" v-if="cateObj.categoryList">
          <li  v-for="(item,index) in cateObj.categoryList" :key="index">
              <img :src="item.wapBannerUrl" alt="">
              <span>{{item.name}}</span>
          </li>
      </ul>
      </div>
      <div  v-if="cateObj">
      <ul class="ulTwo"  v-if="cateObj.subCateList">
          <p>居家生活</p>
          <li v-for="(item,index) in cateObj.subCateList" :key="index">
              <img :src="item.wapBannerUrl" alt="">
              <span>{{item.name}}</span>
          </li>
      </ul>
      </div>
      <!-- <ul v-if="cateObj.categoryList">
          <li v-for="(item,index) in cateObj.categoryList" :key="index">
              {{item.frontName}}
          </li>
      </ul>
       <ul v-if="cateObj.subCateList">
          <li v-for="(item,index) in cateObj.subCateList" :key="index">
              {{item.name}}
          </li>
      </ul> -->
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

<style lang="stylus">
    .container
        width 100%
        height 100%
        padding 28px 28px
        box-sizing border-box
        .cTop 
            width 528px
            height 192px 
            margin 90px 0 20px 0
            img 
                width 539px
                height 196px
        .ulOne
            width 528px
            background red
            li:nth-child(3n+3)
                margin-right 0px 
            li
                width 144px
                height 216px
                margin-right 48px   
                float left                     
                img 
                    width 144px
                    height 144px
                span
                    margin-top 4px
                    line-height 32px
                    display block
                    width 144px
                    text-align center
        .ulTwo
            width 528px
            box-sizing border-box
            p
                width 528px
                height 70px
                line-height 70px
                font-size 28px
                font-weight bold
                border-bottom 1px solid #D9D9D9
                margin-bottom 20px
            li:nth-child(3n+1)
                margin-right 0px 
            li
                width 144px
                height 216px
                margin-right 48px   
                float left                     
                img 
                    width 144px
                    height 144px
                span
                    margin-top 4px
                    line-height 32px
                    display block
                    width 144px
                    text-align center        

</style>
