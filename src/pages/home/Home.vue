<template>
    <home-header>home</home-header>
</template>

<script>
// 引入一个局部组件，使用的话需要声明
import HomeHeader from './components/Header'
// 导出一个对象
export default {
  name: 'Home',
  components: {
    HomeHeader
  }
}
</script>

<style scoped>

</style>
