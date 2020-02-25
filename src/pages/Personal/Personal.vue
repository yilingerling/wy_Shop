<template>
  <div class="personal">
    <div class="header">
          <span class="iconfont icon-shouye span1"></span>
          <span class="span2">
            网易严选
          </span>
          <span class="iconfont icon-che span4"></span>
          <span class="iconfont icon-fangdajing span3"></span>       
    </div>
    <div class="login">
        <div class="bgimg">
          
        </div>
        <div class="loginP">
          <span class="iconfont icon-shouji"></span>手机号快捷登录
        </div>
        <div class="loginBtn">
          <span class="iconfont icon-youxiang"></span>
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
.personal
  width 750px
  height calc(100vh - 100px) 
  background #F4F4F4
  overflow hidden
  .header
      width 750px
      height 100px    
      background #FAFAFA
      position fixed
      top 0
      left 0
      box-sizing border-box
      z-index 9999
      span 
        line-height 100px
        font-size 45px
        color #333
      .span1
        margin-left 25px
      .span2
        position absolute 
        left 50%
        top 0
        transform translate(-50%)
        font-size 42px
        font-weight 700
        font-family KaiTi
      .span3,.span4
        float right
      .span4
        margin 0 25px 0 35px
  .login
      width 750px
      height calc(100vh - 162px) 
      padding-top 260px
      .bgimg,.loginP,.loginBtn
        margin 0 auto
      .bgimg
        width 270px
        height 80px
        background-size cover
        background-image url(../../images/personal.png)
      .loginP
        width 660px
        height 92px
        background #DD1A21
        text-align center
        line-height 92px
        font-size 28px
        color #fff  
        border 1px solid #DD1A21
        margin 240px auto 40px auto
        .iconfont
          font-size 34px
          margin-right 12px
      .loginBtn
        width 660px
        height 92px
        background #F2F5F4
        text-align center
        line-height 92px
        font-size 28px
        color #DD1A21 
        border 1px solid #DD1A21
        .iconfont
          font-size 34px
          margin-right 12px
</style>
