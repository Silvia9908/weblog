<template>
  <div>
    <h2 @click="showName">学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
  </div>
</template>

<script>
/* eslint-disable vue/multi-word-component-names */
import { myMixin } from '../mixin.js';//引入混入对象
export default {//暴露组件
  name: 'Student',//组件名称
  mixins: [myMixin],
  data() {
    return {//必须return一个对象
      name:'张三',
      sex:'男'
    }
  },

}
</script>

