<template>
<div class="icons">
  <swiper>
    <swiper-slide v-for="(page,index) of pages" :key="index" >
      <div class="icon" v-for="item of page" :key="item.id">
        <div class="icon-img">
          <img class="icon-imgcontent" :src='item.imgUrl'/></div>
        <p class="icon-desc">{{item.desc}}</p>
      </div>
    </swiper-slide>

  </swiper>
</div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      iconList: [ {
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        desc: '景点门票水水水水水水。。。'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
        desc: '滑雪季'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png',
        desc: '泡温泉'
      }, {
        id: '0004',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/de/f26be47a6bf02a02.png',
        desc: '动植物园'
      }, {
        id: '0005',
        imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20191/0334cf5430b9b5505fd79e2b8d7e8670.png',
        desc: '景点门票'
      }, {
        id: '0006',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        desc: '景点门票'
      }, {
        id: '0007',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        desc: '景点门票'
      }, {
        id: '0008',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        desc: '一日游'
      }, {
        id: '0009',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        desc: '一日游'
      } ]
    }
  },
  computed: {
    pages () {
      const pages = []
      // 对于iconList中的每一个数据新增一个page属性。
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>
<!--padding-bottom50%意思是当前标签的高度是宽度的50%，这里省略了width 100%，overflow=hidden是指溢出的会被抹去
当margin或者padding取值是百分比的时候，无论是left，right或者top，bottom，都是以父元素的width为参考物
注意，是父元素，比如icon的父元素是icons，它的width虽然是25%，但依然以父元素的100%为参考
一定要理解padding-bottom设置高度这个做法。
还有就是height 0 的妙用
-->
<!--marigin 0 auto 代表 margin 0 auto 0 auto 上下外边距为0 左右为居中
text-align center 文字居中-->
<style lang="stylus" scoped>
@import "~styles/varibles.styl"
@import "~styles/mixins.styl"
.icons >>> .swiper-container
  height 0
  padding-bottom 50%
.icon
  position relative
  overflow hidden
  float left
  height 0
  width 25%
  padding-bottom 25%
.icon-img
  position absolute
  top 0
  left 0
  right 0
  bottom .44rem
  box-sizing border-box
  padding .1rem
.icon-imgcontent
  height 100%
  display block
  margin 0 auto
.icon-desc
  position absolute
  left 0
  right 0
  bottom 0
  height .44rem
  line-height .44rem
  text-align center
  ellipsis()
</style>
