<template>
  <div id="homeContainer">
      <div class="homeTop">
        <div class="wyyx"><img src="../../images/wyyx.png" alt=""></div>
        <div class="serachTop">
          <i class="iconfont icon-fangdajing"></i>
          <span class="placeholder">搜索物品,共20259款好物品</span>
        </div>
        <div class="loginBtn">登录</div>
      </div>
      <div class="homeCenter">
        <ul class="navList">
          <li class="navItem active">推荐</li>
          <li class="navItem">居家生活</li>
          <li class="navItem">服饰鞋包</li>
          <li class="navItem">美食酒水</li>
          <li class="navItem">个人清洁</li>
          <li class="navItem">母子亲子</li>
          <li class="navItem">运动旅行</li>
          <li class="navItem">数码家电</li>
          <li class="navItem">全球特色</li>
          <li class="navItem">数码家电</li>
          <li class="navItem">全球特色</li>
        </ul>
      </div>
      <div class="homeBottom"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  export default {
    mounted() {
      new BScroll(".homeCenter",{
        scrollX: true
      })
    },
  }
</script>

<style lang="stylus">
  #homeContainer
    .homeTop
      width 750px
      height 88px
      background #fff
      padding 16px 30px
      display flex
      box-sizing border-box
      .wyyx
        width 138px
        height 56px
        margin 0 20px 0 0
        img 
          width 138px
          height 40px
          margin-top 7px
      .loginBtn
        width 74px
        height 40px
        line-height 40px
        margin-left 15px
        text-align center
        margin-top 8px
        border 1px solid red
        border-radius 8px
        box-sizing border-box
        color red
      .serachTop
        width 442px
        height 56px
        background #ededed
        border-radius 10px
        position relative
        i 
          line-height 58px
          position absolute
          left 18%
          font-size 32px
        .placeholder 
          line-height 56px
          position absolute
          left 25%
          font-size 26px
          color #666
    .homeCenter 
      width 750px   
      height 100px
      .navList
        width 1500px
        height 100px
        display flex
        flex-wrap nowrap
        white-space nowrap
        padding 0 30px
        .navItem
          display inline-block
          width 144px
          height 60px
          line-height 60px
          padding 0 16px
          text-align center
          font-size 28px
          font-weight 400
        .active
          border-bottom 4px solid red
          
          
          
          
          
</style>
