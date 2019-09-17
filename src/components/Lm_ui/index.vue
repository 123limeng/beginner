<template>
  <div>
    <el-tabs v-model="activeName" type="card">
        <el-tab-pane label="创建表单" name="first">
          <create-form/>
        </el-tab-pane>
      </el-tabs>
  </div>
</template>
<script>
import CreateForm from './components/CreateForm'
export default {
  name: 'LmUi',
  components: {
    CreateForm
  },
  data () {
    return {
      activeName: 'first'
    }
  }
}
</script>
