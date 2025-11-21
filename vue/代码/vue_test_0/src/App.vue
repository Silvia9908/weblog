<template>
  <div>

    <!-- 使用 School 组件 -->
    <Student/>
    <hr/>
    <School/>
  </div>
  
</template>

<script>
// 引入 School 组件
import Student from './components/Student.vue';
import School from './components/School.vue';

export default {
  name: 'App',
  components: {Student, School},
}
</script>
