<template>
  <div>
    <el-row>
      <el-col :span="4">
        <div class="content-left"></div>
      </el-col>
      <el-col :span="20">
        <div class="content-right"></div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: 'LinkedList'
}
</script>
<style scoped>
.content-left {
  width: 100%;
  height: calc(100vh - 150px);
  background-color: rgb(182, 222, 248);
}
.content-right {
  width: 100%;
  height: calc(100vh - 150px);
  background-color: rgb(173, 179, 173);
}
</style>
