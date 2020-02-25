<template>
  <div id="commodity">
    <header>
      <span>购物车</span>
      <span>领卷</span>
    </header>
    <!-- 三列标签 -->
      <div class="threes">
        <div class="threeList">
          <span class="iconfont icon-AK-YKyuanquan"></span>
          <span class="rightSpan">网易自营品牌</span>
        </div>
        <div class="threeList">
          <span class="iconfont icon-AK-YKyuanquan"></span>
          <span class="rightSpan">30天无忧退货</span>
        </div>
        <div class="threeList">
          <span class="iconfont icon-AK-YKyuanquan"></span>
          <span class="rightSpan">48小时快速退款</span>
        </div>
      </div>
      <div class="login">
        <div class="bgimg">
          
        </div>
        <div class="loginP">
          去添加点什么吧
        </div>
        <div class="loginBtn">
          登录
        </div>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus">

#commodity
  width 750px
  height calc(100vh - 87px) 
  background #F4F4F4
  overflow hidden
  header
    width 750px
    height 87px
    background #FFFFFF
    position fixed
    top 0 
    left 0
    padding 0 25px 0 25px 
    box-sizing border-box 
    span
      font-size 36px
      line-height 87px 
    span:nth-child(2)
      font-size 30px
      float right
      color #DD1A21
      margin-right 30px
  .threes
      margin-top 87px
      width 750px
      height 75px
      box-sizing border-box
      padding 0 30px
      display flex
      background #EEEEEE
      .threeList
        display inline-block
        width 33.333%
        height 72px
        .iconfont
          height 72px
          line-height 72px
          color #666666
        .rightSpan 
          height 72px
          line-height 72px
          margin-left 8px
          font-size 24px 
    .login
      width 750px
      height calc(100vh - 162px) 
      padding-top 380px
      .bgimg,.loginP,.loginBtn
        margin 0 auto
      .bgimg
        width 248px
        height 248px
        background-image url(../../images/bg2.png)
      .loginP
        text-align center
        color #999
        font-size 28px
        margin-bottom 35px
        transform translate(0,-50%)
      .loginBtn
        width 480px
        height 92px
        background #DD1A21
        text-align center
        line-height 92px
        font-size 30px
        color #fff

</style>
