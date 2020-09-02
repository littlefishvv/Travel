<template>
  <div>
  <swiper :options="swiperOption">
    <!-- slides -->
    <swiper-slide v-for="item of swiperList" :key="item.id">
      <img class="swiper-img" :src="item.imgUrl"/>
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'HomeSwiper',
  data() {
    return {
      swiperOption:{
        pagination:'.swiper-pagination'
      },
      swiperList:[
        {
          id:'0001',
          imgUrl:'https://imgs.qunarzz.com/sight/source/1505/ff/8141ea51e13473.jpg_r_640x214_91ccfee8.jpg'
        },
        {
          id: '0002',
          imgUrl: 'https://imgs.qunarzz.com/sight/source/1505/ff/8141ea51e13473.jpg_r_640x214_91ccfee8.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
  background #fff !important
.swiper-img
  width 100%
.wrapper
  overflow hidden
  width 100%
  height 0
  padding-bottom 31.25%
</style>
