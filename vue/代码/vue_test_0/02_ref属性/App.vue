<template>
  <div>
    <h1 v-text="msg" ref="title"></h1>
    <button @click="showDOM">点我输出上方的dom元素</button>
    <!-- 使用 School 组件 -->
    <School ref="sch"/>
  </div>
  
</template>

<script>
// 引入 School 组件
import  School from './components/School.vue'
export default {
  name: 'App',
  components: {School},
  data() {
    return {
      msg: '欢迎来到学校信息页面'
    }
  },

  methods: {
    showDOM() {
      console.log(this.$refs);
    }
  }
}
</script>

<style>

</style>