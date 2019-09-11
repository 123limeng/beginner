<template>
  <div>
    <h3>js难点</h3>
    <el-tabs type="card">
      <el-tab-pane label="垃圾回收">
        <js-recycling/>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import JsRecycling from './Js_Recycling.vue'
export default {
  name: 'JsDifficulty',
  components: {
    JsRecycling
  }
}
</script>
