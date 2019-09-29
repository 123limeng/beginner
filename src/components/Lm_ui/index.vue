<template>
  <div>
    <el-tabs v-model="activeName" type="card">
        <el-tab-pane label="创建表单" name="first">
          <create-form/>
        </el-tab-pane>
        <el-tab-pane label="日期选择器" name="second">
          <date-picker/>
        </el-tab-pane>
      </el-tabs>
  </div>
</template>
<script>
import CreateForm from './components/CreateForm'
import DatePicker from './components/DatePicker'
export default {
  name: 'LmUi',
  components: {
    CreateForm, DatePicker
  },
  data () {
    return {
      activeName: 'first'
    }
  }
}
</script>
