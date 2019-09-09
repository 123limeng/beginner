<template>
  <div>
    <h3>表单form</h3>
    <el-divider/>
    <el-tabs
      type="card"
      v-model="activeName">
      <el-tab-pane label="典型表单" name="first">
        <typical-form/>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import TypicalForm from './Form/typical_form'
export default {
  name: 'MyForm',
  components: {
    TypicalForm
  },
  data () {
    return {
      activeName: 'first'
    }
  }
}
</script>
