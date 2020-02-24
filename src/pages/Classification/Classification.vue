<template>
  <div class="Container">
      <div class="titleTop">
        <div class="tt">
          <span class="iconfont icon-fangdajing"></span>
          <span>搜索商品,共22042款好物品</span>
        </div>
      </div>
      <div class="content">     
        <div class="cLeft">
          <cLeft/>
        </div>
        <div class="cRight">
          <router-view></router-view>
        </div>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import cLeft from './cLeft'
  export default {
    components:{
      cLeft
    }
  }
</script>

<style lang="stylus">
  .Container
    .titleTop
      box-sizing border-box
      padding 10px 30px
      width 750px
      height 90px
      border-bottom 1px solid #D9D9D9
      position fixed
      background #FFFFFF
      .tt
        border-radius 5px
        box-sizing border-box
        width 690px
        height 60px
        line-height 60px
        background #EDEDED
        text-align center
        span 
          font-size 28px
          color #AAAAAA
        span:nth-child(odd)
          margin-right 15px
          font-size 30px
          color #A4A5A4
    .content
      display flex
      height calc(100vh - 90px)
      .cLeft
        width 165px
        height 100%
        border-right 1px solid #D9D9D9
      .cRight
        width 585px
        height 100%
</style>
