<template>
  <div>
    <h3>表单form</h3>
    <el-tabs
      type="card"
      v-model="activeName">
      <el-tab-pane label="典型表单" name="first">
        <typical-form/>
      </el-tab-pane>
      <el-tab-pane label="行内表单" name="second">
        <inline-form/>
      </el-tab-pane>
      <el-tab-pane label="对齐方式" name="three">
        <align-form/>
      </el-tab-pane>
      <el-tab-pane label="表单验证" name="four">
        <validate-form/>
      </el-tab-pane>
      <el-tab-pane label="自定义验证规则" name="five">
        <customize-validate-rules/>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import TypicalForm from './Form/typical_form'
import InlineForm from './Form/inline_form'
import AlignForm from './Form/align_form'
import ValidateForm from './Form/validate_form'
import CustomizeValidateRules from './Form/customize_validate_rules'
export default {
  name: 'MyForm',
  components: {
    TypicalForm, InlineForm, AlignForm, ValidateForm, CustomizeValidateRules
  },
  data () {
    return {
      activeName: 'first'
    }
  }
}
</script>
