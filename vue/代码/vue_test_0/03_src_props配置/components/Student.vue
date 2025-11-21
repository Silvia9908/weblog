<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <h2>学生年龄：{{ myAge }}</h2>
    <button @click="updateAge">增加年龄</button>
  </div>
</template>

<script>
/* eslint-disable vue/multi-word-component-names */
export default {//暴露组件
  name: 'Student',//组件名称
  data() {
    return {//必须return一个对象
      msg:'学生信息',
      myAge:this.age//可以在data中使用props传递过来的属性
    }
  },
  methods: {
    updateAge() {
      this.myAge += 1;
    }
  },
  props:['name','sex','age']//简写
  //接受的同时可以定义类型
/*   props: {
    name: String, 
    sex: String,
    age: Number
  } */

  //接受时间可以定义类型，是否必传，默认值等
/*   props: {
    name: {
      type: String,//属性类型
      required: true//必须传递该属性
    },
    sex: {
      type: String,
      required: true
    },
    age: {
      type: Number,
      default: 99//默认值
    }
  } */
}
</script>

