<template>
  <div>
    <h2 @click="showName">学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
/* eslint-disable vue/multi-word-component-names */
import { myMixin } from '../mixin.js';//引入混入对象
export default {//暴露组件
  name: 'School',//组件名称
  mixins: [myMixin],
  data() {
    return {//必须return一个对象
      name:'清华大学',
      address:'北京市海淀区清华园1号'
    }
  },

}
</script>

