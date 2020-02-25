<template>
  <div class="containers">
      <div class="header">
          <span class="iconfont icon-shouye span1"></span>
          <span class="span2">值得买</span>
          <span class="iconfont icon-che span4"></span>
          <span class="iconfont icon-fangdajing span3"></span>        
      </div>
      <div class="content">
        <div class="cHeader">
          <img src="../../images/zdm.png" alt="">
          <p>严选好物   用心生活</p>
        </div>
        <div class="cContent">

          <!-- //////////////////////////////////////////// -->
          <div class="swiper-container">
              <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <ul class="cList">
                      <li class="cItem">
                        <img src="../../images/y.png" alt="">
                        <p>9.9超值</p>
                        <p>定价直降</p>
                      </li>
                      <li class="cItem">
                        <img src="../../images/y.png" alt="">
                        <p>9.9超值</p>
                        <p>定价直降</p>
                      </li>
                    </ul>
                  </div> 
                  <div class="swiper-slide">
                    <ul class="cList">
                      <li class="cItem">
                        <img src="../../images/y.png" alt="">
                        <p>9.9超值</p>
                        <p>定价直降</p>
                      </li>
                      <li class="cItem">
                        <img src="../../images/y.png" alt="">
                        <p>9.9超值</p>
                        <p>定价直降</p>
                      </li>
                    </ul>
                  </div> 
                  <div class="swiper-slide">
                    <ul class="cList">
                      <li class="cItem">
                        <img src="../../images/y.png" alt="">
                        <p>9.9超值</p>
                        <p>定价直降</p>
                      </li>
                      <li class="cItem">
                        <img src="../../images/y.png" alt="">
                        <p>9.9超值</p>
                        <p>定价直降</p>
                      </li>
                    </ul>
                  </div>
                  <div class="swiper-slide">
                    <ul class="cList">
                      <li class="cItem">
                        <img src="../../images/y.png" alt="">
                        <p>9.9超值</p>
                        <p>定价直降</p>
                      </li>
                      <li class="cItem">
                        <img src="../../images/y.png" alt="">
                        <p>9.9超值</p>
                        <p>定价直降</p>
                      </li>
                    </ul>
                  </div>  
                  <div class="swiper-slide">
                    <ul class="cList">
                      <li class="cItem">
                        <img src="../../images/y.png" alt="">
                        <p>9.9超值</p>
                        <p>定价直降</p>
                      </li>
                      <li class="cItem">
                        <img src="../../images/y.png" alt="">
                        <p>9.9超值</p>
                        <p>定价直降</p>
                      </li>
                    </ul>
                  </div> 
                  <div class="swiper-slide">
                    <ul class="cList">
                      <li class="cItem">
                        <img src="../../images/y.png" alt="">
                        <p>9.9超值</p>
                        <p>定价直降</p>
                      </li>
                      <li class="cItem">
                        <img src="../../images/y.png" alt="">
                        <p>9.9超值</p>
                        <p>定价直降</p>
                      </li>
                    </ul>
                  </div> 
                  <div class="swiper-slide">
                    <ul class="cList">
                      <li class="cItem">
                        <img src="../../images/y.png" alt="">
                        <p>9.9超值</p>
                        <p>定价直降</p>
                      </li>
                      <li class="cItem">
                        <img src="../../images/y.png" alt="">
                        <p>9.9超值</p>
                        <p>定价直降</p>
                      </li>
                    </ul>
                  </div>
                  <div class="swiper-slide">
                    <ul class="cList">
                      <li class="cItem">
                        <img src="../../images/y.png" alt="">
                        <p>9.9超值</p>
                        <p>定价直降</p>
                      </li>
                      <li class="cItem">
                        <img src="../../images/y.png" alt="">
                        <p>9.9超值</p>
                        <p>定价直降</p>
                      </li>
                    </ul>
                  </div>                 
              </div>
              <!-- 如果需要分页器 -->
              <div class="swiper-pagination"></div>
          </div>
        </div>
        <div class="cBottom">
          <cBottom/>
        </div>
      </div>

  </div>
</template>


<script type="text/ecmascript-6">
  import cBottom from "./cBottom"
  import Swiper from 'swiper'
  export default {
    components:{
      cBottom
    },
    mounted(){
     new Swiper ('.swiper-container', {
        direction: 'horizontal', // 垂直切换选项
        slidesPerView : 3,
        centeredSlides : false,
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },
        
      })  
    }
  }


</script>

<style lang="stylus">
  .containers
    width 750px
    height 8750px
    background #EEEEEE
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
        font-size 36px
      .span3,.span4
        float right
      .span4
        margin 0 25px 0 35px

    .content
      margin-top 100px
      width 750px
      height 725px
      background-image  url(../../images/bg.png)
      .cHeader
        display flex
        padding 65px 0 0 15px
        img 
          width 130px
          height 70px
        p
          line-height 82px
          height 32px
          font-size 30px
          color #FFFFFF
      .cContent
        width 710px
        height 540px
        background #FFFFFF
        box-sizing border-box
        margin-top 10px
        margin-left 20px
        border-radius 10px
        display flex
        .swiper-container
          width 710px
          height 540px
          // .swiper-slide-active
          //   width 180px !important
          //   height 235px
        .cList
          width 180px
          height 235px
          padding-top 40px
          box-sizing border-box 
          .cItem
            width 100%
            height 100%
            text-align center
            display inline-block
            margin-bottom 30px
            margin-left 25px
            box-sizing border-box
            p
              line-height 38px
            p:nth-child(even)
              font-size 30px
              font-weight 700px
            p:nth-child(odd)
              font-size 24px
              color #9D9D9D
      .cBottom
        width 750px 
        margin-top 25px     

</style>
