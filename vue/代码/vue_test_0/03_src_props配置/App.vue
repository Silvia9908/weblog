<template>
  <div>

    <!-- 使用 School 组件 -->
    <Student name="李四" sex="男" :age="18"/>//传递属性 这里age是数字类型需要加:
  </div>
  
</template>

<script>
// 引入 School 组件
import Student from './components/Student.vue';

export default {
  name: 'App',
  components: {Student},
}
</script>
