<template>
  <div>
    <h3>js难点</h3>
    <el-tabs type="card">
      <el-tab-pane label="垃圾回收" lazy>
        <js-recycling/>
      </el-tab-pane>
      <el-tab-pane label="数组的方法" lazy>
        <array-methods/>
      </el-tab-pane>
      <el-tab-pane label="数组去重" lazy>
        <js-test/>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import JsRecycling from './Js_Recycling.vue'
import ArrayMethods from './Array_methods'
import JsTest from './Js_test'
export default {
  name: 'JsDifficulty',
  components: {
    JsRecycling,
    ArrayMethods,
    JsTest
  }
}
</script>
