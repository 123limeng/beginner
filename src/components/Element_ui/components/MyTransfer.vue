<template>
  <div>
    <h3>穿梭框</h3>
    <el-tabs type="card">
      <el-tab-pane label="基础用法">
        <typical-transfer/>
      </el-tab-pane>
      <el-tab-pane label="可搜索的">
        <filterable-transfer/>
      </el-tab-pane>
      <el-tab-pane label="可自定义的">
        <customize-transfer/>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import TypicalTransfer from './transfer/Typical_Transfer'
import FilterableTransfer from './transfer/Filterable_Transfer'
import CustomizeTransfer from './transfer/Customize_Transfer'
export default {
  name: 'MyTransfer',
  components: {
    TypicalTransfer,
    FilterableTransfer,
    CustomizeTransfer
  }
}
</script>
