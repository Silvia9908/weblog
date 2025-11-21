<template>
  <div class="school">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>

  </div>
</template>

<script>
export default {
  name: 'School',
  data() {
    return {
      name: '清华大学',
      address: '北京市海淀区清华园1号'
    }
  }


}
</script>

<style>
.school {
  background-color: aqua;
}
</style>