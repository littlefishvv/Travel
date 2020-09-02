<template>
  <div id="app">
<!--Router-view显示的是当前路由地址所对应的内容。 一层一层的看上去，router-view对应的内容，就是helloworld小组件的内容-->
    <router-view/>
    <!--    vue中一般不用a标签，而是用router-link组件代替-->
<!--    <router-link to="/list">列表页</router-link>-->
  </div>
</template>

<script>

// 如果你希望外部能够读取模块内部的某个变量，就必须使用`export`关键字输出该变量
export default {
  name: 'App'
}
</script>

<style>

</style>
