<template>
  <div>
    <h3>级联选择器</h3>
    <el-tabs type="card">
      <el-tab-pane label="基础用法">
        <typical-cascader/>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import TypicalCascader from './cascader/Typical_Cascader.vue'
export default {
  name: 'MyCascader',
  components: {
    TypicalCascader
  }
}
</script>
