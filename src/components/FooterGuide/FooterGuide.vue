<template>
  <div id="footerContainer">
      <div @click="goPath('/home')" class="guideItem">
          <span>首页</span>
      </div>
      <div @click="goPath('/classification')" class="guideItem">
          <span>分类</span>
      </div>
      <div @click="goPath('/good')" class="guideItem">
          <span>值得买</span>
      </div>
      <div @click="goPath('/commodity')" class="guideItem">
          <span>购物车</span>
      </div>
      <div @click="goPath('/personal')" class="guideItem">
          <span>个人</span>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
      methods: {
          goPath(path){
            //跳转至指定的路由路径
            this.$router.push(path)
          }
      },
  }
</script>

<style scoped lang="stylus">
    #footerContainer 
        display flex
        .guideItem
            width 20%
            height 50px
            text-align center
            
 
</style>
