<template>
  <div>
    <h4>对齐方式</h4>
    <el-radio-group v-model="checkedValue" >
      <el-radio-button label="left">左对齐</el-radio-button>
      <el-radio-button label="right">右对齐</el-radio-button>
      <el-radio-button label="top">顶部对齐</el-radio-button>
    </el-radio-group>
    <el-form label-width="100px" :label-position="checkedValue" class="form-bg">
      <el-form-item label="名称">
        <el-input/>
      </el-form-item>
      <el-form-item label="活动区域">
        <el-input/>
      </el-form-item>
      <el-form-item label="活动形式">
        <el-input/>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: 'AlignForm',
  data () {
    return {
      checkedValue: 'left'
    }
  }
}
</script>
<style scoped>
.form-bg {
  background-color: rgb(197, 214, 209);
  padding:50px;
  width: 50%;
  margin: 20px auto;
}
</style>
