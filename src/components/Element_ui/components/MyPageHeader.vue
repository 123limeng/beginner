<template>
  <div>
    <el-page-header @back="goBack" content="页头" />
    <el-divider/>
  </div>
</template>

<script>
export default {
  name: 'MyPageHeader',
  methods: {
    goBack () {
      alert('back')
    }
  }
}
</script>
<style scoped>
.el-page-header {
  margin-top: 20px;
}
</style>
