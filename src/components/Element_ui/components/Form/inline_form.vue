<template>
  <div>
    <h4>行内表单</h4>
    <div>
      <el-form :inline="true" label-width="100px" class="form-bg">
        <el-form-item label="审批人">
          <el-input v-model="form.person" clearable/>
        </el-form-item>
        <el-form-item label="活动区域">
          <el-select v-model="form.checkedRegion" clearable>
            <el-option label="区域一" value="1"/>
            <el-option label="区域二" value="2"/>
          </el-select>
        </el-form-item>
        <el-button type="primary">查询</el-button>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  name: 'InlineForm',
  data () {
    return {
      form: {
        person: undefined,
        checkedRigion: undefined
      }
    }
  }
}
</script>
<style scoped>
.form-bg {
  background-color: rgb(197, 214, 209);
  padding:50px;
}
</style>
