<template>
  <div>
    <h3>专题</h3>
    <el-tabs type="card">
      <el-tab-pane label="防抖">
        <my-debounce/>
      </el-tab-pane>
      <el-tab-pane label="节流">
        <my-throttle/>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import MyDebounce from './Js_special/Debounce'
import MyThrottle from './Js_Special/Throttle'
export default {
  name: 'JsSpecial',
  components: {
    MyDebounce,
    MyThrottle
  }
}
</script>
