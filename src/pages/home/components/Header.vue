<template>
  <div class="header">
  <div class="header-left">
    <span class="iconfont back-icon">&#xe624;</span>
  </div>
  <div class="header-input">
    <span class="iconfont">&#xe632;</span>
    输入城市景点 游玩主题</div>
  <div class="header-right ">
    城市
    <span class="iconfont arrow-icon">&#xe64a;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>
<!--scoped 可以限制下面的格式只对当前组件有效-->
<!--line hight是行内高文字在里面会居中显示在没有设置div的height属性时，div的高度根据line-height的大小而变化-->
<!--display flex是为了规定左右后，中间的是自适应，同时header-input也得有这个属性-->
<!--margin是外边距，padding是内边距-->
<style lang="stylus" scoped>
//样式中引入样式要用@import  正常@代表src这个目录，在这里，可以用~@代替src这个目录
@import "~styles/varibles.styl"
.header
  display flex
  line-height: .86rem
  background $bgColor
  color #fff
.header-left
  width:.64rem
  float left
.back-icon
  text-align center
  font-size .4rem
.header-input
  flex 1
  background #fff
  margin-top .12rem
  padding-left .2rem
  height .64rem
  line-height .64rem
  margin-left: .2rem
  color #ccc
.header-right
  width 1.24rem
  float right
  text-align center
.arrow-icon
  margin-left -.04rem
  font-size .24rem
</style>
