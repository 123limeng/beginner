<template>
  <div>
    <h2>全局css</h2>
    <el-divider/>
    <el-tabs v-model="activeName" type="border-card">
      <el-tab-pane label="栅格系统" name="grid_system">
        <grid-system/>
      </el-tab-pane>
      <el-tab-pane label="排版" name="TypeSetting">
        <type-setting/>
      </el-tab-pane>
      <el-tab-pane label="表格" name="table">
        <my-table/>
      </el-tab-pane>
      <el-tab-pane label="表单" name="form">
        <my-form/>
      </el-tab-pane>
      <el-tab-pane label="按钮" name="button">
        <my-button/>
      </el-tab-pane>
      <el-tab-pane label="图片" name="img">
        <my-img/>
      </el-tab-pane>
      <el-tab-pane label="辅助类" name="Auxiliary_classes">
        <auxiliary-classes/>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import GridSystem from './grid_system'
import TypeSetting from './TypeSetting'
import MyTable from './MyTable'
import MyForm from './MyForm'
import MyButton from './MyButton'
import MyImg from './MyImg'
import AuxiliaryClasses from './Auxiliary_Classes'
export default {
  name: 'GlobalCss',
  components: {
    GridSystem, TypeSetting, MyTable, MyForm, MyButton, MyImg, AuxiliaryClasses
  },
  data () {
    return {
      activeName: 'grid_system'
    }
  }
}
</script>
