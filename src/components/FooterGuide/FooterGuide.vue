<template>
  <div id="footerContainer">
      <div @click="goPath('/home')" class="guideItem">
        <span class="iconfont icon-shouye"></span>
          <span class="txt">首页</span>
      </div>
      <div @click="goPath('/classification')" class="guideItem">
      <span class="iconfont icon-leimupinleifenleileibie1"></span>
          <span>分类</span>
      </div>
      <div @click="goPath('/good')" class="guideItem">
      <span class="iconfont icon-zhidemai2"></span>
          <span>值得买</span>
      </div>
      <div @click="goPath('/commodity')" class="guideItem">
      <span class="iconfont icon-che"></span>
          <span>购物车</span>
      </div>
      <div @click="goPath('/personal')" class="guideItem">
      <span class="iconfont icon-renwu"></span>
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
        width 100%
        height 98px
        line-height 42px
        display flex
        border-top 1px solid gray
        position fixed
        left 0
        bottom 0
        .guideItem
            display flex
            flex-direction column
            width 20%       
            text-align center
            .iconfont
                padding-top 16px
                font-size 42px
 
</style>
