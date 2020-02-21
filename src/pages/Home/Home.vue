<template>
  <div id="homeContainer">
      <!-- 头部 -->
      <div class="homeTop">
        <div class="wyyx"><img src="../../images/wyyx.png" alt=""></div>
        <div class="serachTop">
          <i class="iconfont icon-fangdajing"></i>
          <span class="placeholder">搜索物品,共20259款好物品</span>
        </div>
        <div class="loginBtn">登录</div>
      </div>
      <!-- 横向滚动 -->
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
        <span class="smallBtn iconfont icon-xia"></span>
      </div>
      <!-- 轮播图 -->
      <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item,index) in address.focusList" :key="index">
                  <img :src="item.picUrl" alt="">
                </div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination">
    
            </div>
            
       </div>
      <!-- 三列标签 -->
      <div class="threes">
        <div class="threeList">
          <span class="iconfont icon-wangyi"></span>
          <span class="rightSpan">网易自营品牌</span>
        </div>
        <div class="threeList">
          <span class="iconfont icon-dunpai"></span>
          <span class="rightSpan">30天无忧退货</span>
        </div>
        <div class="threeList">
          <span class="iconfont icon-quanqian"></span>
          <span class="rightSpan">48小时快速退款</span>
        </div>
      </div>
      <!-- 两排标签 -->
      <div class="twos">
        <ul class="twoListone" v-if="address.kingKongModule">
          <li class="twoItemone"  v-for="(item,index) in address.kingKongModule.kingKongList" :key="index">
            <span>
              <img :src="item.picUrl" alt="">
            </span>
            <p>{{item.text}}</p>
          </li>
          
        </ul>
      
      </div>
      <!-- 蓝色大块 -->
      <div class="blueBox">
        <img class="img1" src="../../images/bule.png" alt="">
        <img class="img2" src="../../images/bules.png" alt="">
        <div class="inTwo">
          <div class="inTwo1">
            <img src="../../images/blue2.png" alt="">
          </div>
          <div class="inTwo2">
            <img src="../../images/bule3.png" alt="">
            <img class="sos" src="../../images/bule3.png" alt="">
          </div>
          <div class="inTwo3">
            <img src="../../images/bule3.png" alt="">
            <img class="sos" src="../../images/bule3.png" alt="">
          </div>
        </div>
      </div>
      <div class="grayBox">

        </div>
      <!-- 新人专享礼 -->
      <div class="newPerson">
        <div class="boxs">
          <span></span>
          <p>新人专享礼</p>
          <span></span>
        </div>
      </div>
      <div class="newPerson2">
        <div class="newImg1">
          <p>新人专享礼包</p>
          <img src="../../images/new.png" alt="">
        </div>
        <div class="newImg2">
          <div class="n21">
            <p>福利社</p>
            <p>今日特价</p>
          </div>
          <div class="n22">
            <img src="../../images/new2.png" alt="">
          </div>
          
        </div>
        <div class="newImg3">
          <p>新人拼团</p>
          <span>1元起包邮</span>
        </div>       
      </div>    
      <div class="grayBox">
      </div>
       <!-- 类目热销榜 -->
      <div class="Category">
        <div class="CategoryTitle">
          <p>类目热销榜</p>
        </div>
        <div class="CategoryTop">

          <div class="CategoryTLeft">
            <div class="cl">
              <p>热销榜</p>
              <span></span>
            </div>
             <div class="cimg">
              <img src="../../images/Category.png" alt="">
            </div>
          </div>
          <div class="CategoryTRight">
            <div class="cr">
              <p>好评榜</p>
              <span></span>
            </div>
             <div class="cimg">
              <img src="../../images/Category.png" alt="">
            </div>
          </div>
        </div>
        <div class="CategoryBottom">
          <ul class="ulList">
            <li class="liItem">
              <p>居家生活榜</p>
              <img src="../../images/Category2.png" alt="">
            </li>
            <li class="liItem">
              <p>居家生活榜</p>
              <img src="../../images/Category2.png" alt="">
            </li>
            <li class="liItem">
              <p>居家生活榜</p>
              <img src="../../images/Category2.png" alt="">
            </li>
            <li class="liItem mar0">
              <p>居家生活榜</p>
              <img src="../../images/Category2.png" alt="">
            </li>
            <li class="liItem">
              <p>居家生活榜</p>
              <img src="../../images/Category2.png" alt="">
            </li>
            <li class="liItem">
              <p>居家生活榜</p>
              <img src="../../images/Category2.png" alt="">
            </li>
            <li class="liItem">
              <p>居家生活榜</p>
              <img src="../../images/Category2.png" alt="">
            </li>
            <li class="liItem mar0">
              <p>居家生活榜</p>
              <img src="../../images/Category2.png" alt="">
            </li>
          </ul>
        </div>
      </div>
      <div class="grayBox">

      </div>
      <div class="xsg">
        <div class="xsgTop">
          <div class="xsgTL">
            <p>限时购</p>
            <span>00</span>
            <b>:</b>
            <span>00</span>
            <b>:</b>
            <span>00</span>
          </div>
          <div class="xsgTR">
            更多<span class="iconfont icon-icon1"></span>
          </div>
        </div>
        <div class="xsgBottom">
          <ul>
            <li>
              <img src="../../images/xsg.png" alt="">
              <div class="span0">
                <div class="span1">
                  <span>¥</span>
                  <span>419</span>
                </div>
                 <div class="span2">
                  <span>¥</span>
                  <span>599</span>
                </div>
              </div>
            </li>
            <li>
              <img src="../../images/xsg.png" alt="">
              <div class="span0">
                <div class="span1">
                  <span>¥</span>
                  <span>419</span>
                </div>
                 <div class="span2">
                  <span>¥</span>
                  <span>599</span>
                </div>
              </div>
            </li>
            <li class="mar0">
              <img src="../../images/xsg.png" alt="">
              <div class="span0">
                <div class="span1">
                  <span>¥</span>
                  <span>419</span>
                </div>
                 <div class="span2">
                  <span>¥</span>
                  <span>599</span>
                </div>
              </div>
            </li>
            <li>
              <img src="../../images/xsg.png" alt="">
              <div class="span0">
                <div class="span1">
                  <span>¥</span>
                  <span>419</span>
                </div>
                 <div class="span2">
                  <span>¥</span>
                  <span>599</span>
                </div>
              </div>
            </li>
            <li>
              <img src="../../images/xsg.png" alt="">
              <div class="span0">
                <div class="span1">
                  <span>¥</span>
                  <span>419</span>
                </div>
                 <div class="span2">
                  <span>¥</span>
                  <span>599</span>
                </div>
              </div>
            </li>
            <li class="mar0">
              <img src="../../images/xsg.png" alt="">
              <div class="span0">
                <div class="span1">
                  <span>¥</span>
                  <span>419</span>
                </div>
                 <div class="span2">
                  <span>¥</span>
                  <span>599</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="grayBox">

      </div>
      <div class="newC">
        <div class="newTop">
          <div class="newTL">
            新品首发
          </div>
          <div class="newTR">
            更多<span class="iconfont icon-icon1"></span>
          </div>
        </div>
         <div class="newBottom">
          <ul>
            <li>
              <img src="../../images/xsg.png" alt="">
              <div class="span0">
                <div class="span1">
                  <p>赏味正当时,春见枇杷柑 5斤</p>
                  <span>¥</span>
                  <span>419</span>
                </div>
                 <div class="span2">
                  特价
                </div>
              </div>
            </li>
            <li>
              <img src="../../images/xsg.png" alt="">
              <div class="span0">
                <div class="span1">
                  <p>赏味正当时,春见枇杷柑 5斤</p>
                  <span>¥</span>
                  <span>419</span>
                </div>
                 <div class="span2">
                  特价
                </div>
              </div>
            </li>
            <li  class="mar0">
              <img src="../../images/xsg.png" alt="">
              <div class="span0">
                <div class="span1">
                  <p>赏味正当时,春见枇杷柑 5斤</p>
                  <span>¥</span>
                  <span>419</span>
                </div>
                 <div class="span2">
                  特价
                </div>
              </div>
            </li>
            <li>
              <img src="../../images/xsg.png" alt="">
              <div class="span0">
                <div class="span1">
                  <p>赏味正当时,春见枇杷柑 5斤</p>
                  <span>¥</span>
                  <span>419</span>
                </div>
                 <div class="span2">
                  特价
                </div>
              </div>
            </li>
            <li>
              <img src="../../images/xsg.png" alt="">
              <div class="span0">
                <div class="span1">
                  <p>赏味正当时,春见枇杷柑 5斤</p>
                  <span>¥</span>
                  <span>419</span>
                </div>
                 <div class="span2">
                  特价
                </div>
              </div>
            </li>
            <li class="mar0">
              <img src="../../images/xsg.png" alt="">
              <div class="span0">
                <div class="span1">
                  <p>赏味正当时,春见枇杷柑 5斤</p>
                  <span>¥</span>
                  <span>419</span>
                </div>
                 <div class="span2">
                  特价
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="grayBox">

      </div>
      <div class="fourBoxs">
        <div class="fourBox">
          <div class="fourTop">
            <p>断货补单王</p>
            <span>补仓疯抢中</span>
          </div>
          <div  class="fourBottom">
            <img src="../../images/box.png" alt="">
            <img src="../../images/box.png" alt="">
          </div>
        </div>
        <div class="fourBox">
          <div class="fourTop">
            <p>断货补单王</p>
            <span>补仓疯抢中</span>
          </div>
          <div  class="fourBottom">
            <img src="../../images/box.png" alt="">
            <img src="../../images/box.png" alt="">
          </div>
        </div>
        <div class="fourBox">
          <div class="fourTop">
            <p>断货补单王</p>
            <span>补仓疯抢中</span>
          </div>
          <div  class="fourBottom">
            <img src="../../images/box.png" alt="">
            <img src="../../images/box.png" alt="">
          </div>
        </div>
        <div class="fourBox">
          <div class="fourTop">
            <p>断货补单王</p>
            <span>补仓疯抢中</span>
          </div>
          <div  class="fourBottom">
            <img src="../../images/box.png" alt="">
            <img src="../../images/box.png" alt="">
          </div>
        </div>
      </div>
      <div class="grayBox">

      </div>
      <div class="homeBottom">
        <div class="hbtn">
          <span>下载APP</span>
          <span>电脑版</span>
        </div>
        <div class="hclass">
          <p>网易公司版权所有 © 1997-2020</p>
          <p>食品经营许可证：JY13301080111719</p>
        </div>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from "vuex"
  import BScroll from 'better-scroll'
  import {getSwpers} from "../../api"
  export default {
    async mounted() {
      new BScroll(".homeCenter",{
        scrollX: true
      })

      // let result = await getSwpers()
      //this.$store.commit("get_swper")
        this.$store.dispatch("getAddressAction")
     //console.log(result);
    },
    computed: {
     // ...mapState([address]) //不能自定义key

     ...mapState({
       address: state => state.address
     })
    },
  }
  window.onload = function() {
    var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项
    
    // 如果需要分页器
    pagination: '.swiper-pagination'
 
    
  })        
 }
</script>

<style lang="stylus">
  .clearfix:after 
    visibility hidden
    display block
    font-size 0
    content " "
    clear both
    height 0
  #homeContainer
    width 750px
    height 5570px
    position relative
    .grayBox
        width 750px
        height 20px
        background #EEEEEE
    .homeTop
      width 750px
      height 150px
      background #fff
      padding 16px 30px
      display flex
      box-sizing border-box
      position fixed
      top 0
      left 0
      z-index 8
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
          left 12%
          font-size 32px
        .placeholder 
          line-height 56px
          position absolute
          left 20%
          font-size 26px
          color #666
    .homeCenter 
      position fixed
      top 0
      left 0
      z-index 9
      margin-top 90px
      height 60px
      width 100%
      overflow hidden
      display flex
      .navList
        display flex
        height 60px
        font-size 30px
        padding 0 120px 0 30px
        background #fff
        .navItem
          height 100%
          line-height 60px
          white-space nowrap
          padding 0 16px
          text-align center
          box-sizing border-box
          position relative
        .active:after
          position absolute
          bottom  0px
          left 0
          content ""
          display block
          width 100%
          height 5px
          background red
        .active
          color #DD1A21
      .smallBtn  
        width 100px
        height 60px 
        line-height 60px
        background #fff
        position absolute
        top 0
        right 0 
        display block
        text-align center
        font-size 34px
        font-weight 700
        color gray
    .swiper-container 
      width 750px
      height 370px
      margin-top 150px
      .swiper-slide > img 
        width 750px
        height 370px
      .swiper-pagination
        margin-bottom 20px 
        span
          width 40px
          height 4px
          background #FFFFFF
    .threes
      width 750px
      height 75px
      box-sizing border-box
      padding 0 30px
      display flex
      .threeList
        display inline-block
        width 33.333%
        height 72px
        .iconfont
          height 72px
          line-height 72px
          font-size 30px
          color #BB3549
          font-weight 400
          vertical-align unshift
        .rightSpan 
          height 72px
          line-height 72px
          margin-left 8px
          font-size 24px
    .twos
      width 750px
      height 353px 
      .twoListone,.twoListtwo
        width 750px
        float left
        li
          width 110px
          height 156px
          float left
          margin 10px 20px 10px
          text-align center
          img 
            width 110px
            height 110px
          p
            margin-top 10px 
    .blueBox
      position relative
      width 750px
      height 840px
      background #1674E3
      .img1 
        width 750px
        height 240px
      .img2
        width 168px
        height 168px 
        position absolute
        top 50px
        left 75px
      .inTwo
        width 750px
        .inTwo1
          width 750px
          height 160px 
          text-align center
          margin 20px 0 10px 0
          img
            width 710px
            height 160px
        .inTwo2,.inTwo3
          width 750px
          height 194px
          text-align center
          box-sizing border-box
          img 
            width 351px
            height 186px
            margin-right 10px
          .sos
            margin-right 0
    .newPerson  
      width 750px
      height 90px
      display flex
      margin 0 auto
      box-sizing border-box
      .boxs
        width 600px
        height 90px
        display flex
        margin 0 auto
        box-sizing border-box
        margin-left 240px
        span 
          width 35px
          height 3px
          background #333
          margin-top 45px
        span:nth-child(n+1)
          text-align right 
          float right
        span:nth-child(n+2)
          text-align left
        p
          width 200px
          text-align center
          height 90px 
          font-size 32px 
          color #333333
          line-height 90px
          box-sizing border-box
    .newPerson2
      width 750px
      height 440px
      display inline-block
      padding-left 30px
      box-sizing border-box
      margin-bottom 20px
      .newImg1
        width 340px
        height 440px
        box-sizing border-box
        text-align center
        padding-top 40px
        margin-right 6px
        background #F9E9CF
        p
          width 200px
          height 48px
          font-size 32px
          margin-bottom 30px
          margin-left 30px   
      .newImg2
        width 344px
        height 218px
        background #fff
        margin-bottom 4px
        background #FBE2D3
        .n21
          width 110px
          float left
          margin 30px 0 0 30px       
          p
            font-size 34px
          p:nth-child(n+2)
            font-size 25px
            color #7F7F7F
            margin-top 10px
        .n22
          margin-top 15px
          width 200px
          height 200px
          float left
          img
            width 200px
            height 200px
      .newImg3
        width 344px
        height 218px
        background #FFECC2
        box-sizing border-box
        padding-top 25px
        padding-left 30px
        p
          font-size 31px
          margin-bottom 10px
        span
          box-sizing border-box
          padding 0 5px 0 5px
          color #fff
          border-radius 5px
          background rgba(0,0,0,.2)
      .newImg1,.newImg2,.newImg3
        float left
                    
    //Category
    .Category
      width 100%
      padding 0 30px 0 30px
      box-sizing border-box
      .CategoryTitle
          wdith 100%
          height 100px
          p
            wdith 100%
            height 100px
            line-height 100px
            font-size 32px
            color #333
      .CategoryTop
        width 100%
        height 200px 
        .CategoryTLeft
          width 340px
          height 100%
          float left
          background #F9F3E4
          .cl
            width 139px
            height 100px
            float left
            padding 70px 0 0 25px
            box-sizing border-box
            p
              font-size 28px
              margin-bottom 15px
            span
              display block
              width 48px
              height 4px
              background black
          .cimg
            width 200px
            height 100%
            float right
        .CategoryTRight
          width 340px
          height 100%      
          float left 
          margin-left 10px
          background #EBEFF6
          .cr
            width 139px
            height 100px
            float left
            padding 70px 0 0 25px
            box-sizing border-box
            p
              font-size 28px
              margin-bottom 15px
            span
              display block
              width 48px
              height 4px
              background black
          .cimg
            width 200px
            height 100%
            float right
      .CategoryBottom
        width 100%
        height 400px
        padding-top 5px
        .ulList
          .liItem
            width 165px
            height 180px
            background #F5F5F5
            float left
            margin 5px 10px 5px 0 
          .mar0
              margin-right 0
          p
            text-align center
            margin 20px 0 5px 0
          img 
            width 120px
            height 120px
            margin-left 22.5px
    //限时购物
    .xsg     
      width 100%
      height 680px
      padding 0 30px 0 30px   
      box-sizing border-box
     .xsgTop
        width 100%
        height 100px
        box-sizing border-box
        .xsgTL
          width 320px
          height 100px
          line-height 100px
          float left
          p
            display inline-block
            font-size 34px
            margin-right 25px
          span
           font-size 24px
           color #DDDDDD
           background #333
           border-radius 5px
           padding 5px
          b 
            padding 0 10px 0 10px
            font-size 35px
        .xsgTR
          width 100px
          height 100px
          line-height 100px
          float right
          font-size 32px
          text-align right
          color #333
          span
            font-size 36px
            color gray
     .xsgBottom
        ul
          li
            width 216px
            height 290px
            float left
            margin-right 21px
            padding 0 8px 0 8px
            box-sizing border-box
            img
              width 200px
              height 200px
              background #F5F5F5
            .span0
              width 200px
              height 100px
              .span1,.span2
                margin-top 14px
                margin-left 12px
                float left
                font-size 30px
              .span2
                margin-top 16px
                font-size 28px
                text-decoration line-through
                color #808080
          .mar0
            margin-right 0


    .newC
      width 750px
      height 950px
      padding 0 30px 0 30px
      box-sizing border-box
      .newTop        
        width 100%
        height 100px
        box-sizing border-box
        font-size 36px
        .newTL
          width 320px
          height 100px
          line-height 100px
          float left
        .newTR
          width 120px
          height 100px
          line-height 100px
          float right
          font-size 32px
          text-align right
          color #333
          span
            font-size 36px
            color gray
      ////////////////
      .newBottom
        ul
          li
            width 216px
            height 290px
            float left
            margin-right 21px
            margin-bottom 120px
            padding 0 8px 0 8px
            box-sizing border-box
            img
              width 216px
              height 216px
              background #F5F5F5
            .span0
              width 216px
              height 100px
              p
                font-size 26px
                margin-bottom 10px
                line-height 35px
              .span1,.span2
                margin-top 14px
                margin-left 12px
                float left
                font-size 30px
                span
                  font-size 34px
                  color red
              .span2
                border 1px solid red
                padding 3px
                border-radius 20px
                margin-top 10px
                font-size 22px
                color red
          .mar0
            margin-right 0

    ////////////////
    .fourBoxs
      width 750px
      height 580px
      padding 10px 30px 0 30px
      box-sizing border-box
      .fourBox:nth-child(even)
        margin-right 0
      .fourBox
        width 340px
        height 264px
        background #F6F6F6
        margin-top 6px
        margin-right 6px
        float left
        .fourTop
          width 343px
          height 112px
          padding 25px 0 0 25px
          box-sizing border-box      
          p
            font-size 38px
            margin-bottom 8px
          span
            font-size 28px
            color #A1A1A1
        .fourBottom
          width 343px
          height 150px
          box-sizing border-box
          padding 0 21px 0 21px
          img
            width 150px
            height 150px
    .homeBottom
      width 750px 
      height 245px
      padding 54px 20px 28px
      background #414141
      box-sizing border-box
      .hbtn
        width 710px
        height 62px
        text-align center
        margin-bottom 25px
        box-sizing border-box
        span 
          display inline-block
          width 172px
          height 62px
          line-height 62px
          font-size 24px
          background #414141
          border 1px solid #F2F2F2
          color #FFFFFF
          border-radius 5px
        span:nth-child(odd)
          margin-right 25px
        span:nth-child(even)
          margin-left 25px
      .hclass
        width 710px
        height 64px
        text-align center
        p
          font-size 24px
          color #999
          line-height 28px
</style>
