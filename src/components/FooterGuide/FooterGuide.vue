<template>
  <div id="footerContainer">
      <div :class='{guideItem: $route.path === "/home"}' @click="goPath('/home')">
        <span class="iconfont icon-shouye"></span>
          <span class="txt">首页</span>
      </div>
      <div :class='{guideItem:RegExp(/classification/).test(this.$route.path)}' @click="goPath('/classification')">
      <span class="iconfont icon-leimupinleifenleileibie1"></span>
          <span>分类</span>
      </div>
      <div :class='{guideItem: $route.path === "/good"}' @click="goPath('/good')">
      <span class="iconfont icon-zhidemai2"></span>
          <span>值得买</span>
      </div>
      <div :class='{guideItem: $route.path === "/commodity"}' @click="goPath('/commodity')" >
      <span class="iconfont icon-che"></span>
          <span>购物车</span>
      </div>
      <div :class='{guideItem: $route.path === "/personal"}' @click="goPath('/personal')">
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
        background #fff
        width 100%
        height 98px
        line-height 42px
        display flex
        border-top 1px solid gray
        position fixed
        left 0
        bottom 0
        
        div
            display flex
            flex-direction column
            width 20%       
            text-align center
            .iconfont
                padding-top 16px
                font-size 42px
            .icon-zhidemai2
                font-size 50px
            &.guideItem
                color red
</style>
