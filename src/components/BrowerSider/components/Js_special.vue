<template>
  <div>
    <h3>专题</h3>
    <el-tabs type="card">
      <el-tab-pane label="防抖" lazy>
        <my-debounce/>
      </el-tab-pane>
      <el-tab-pane label="节流" lazy>
        <my-throttle/>
      </el-tab-pane>
      <el-tab-pane label="深浅拷贝">
        <my-copy/>
      </el-tab-pane>
      <el-tab-pane label="JQuery的extend函数">
        <jquery-extand/>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import MyDebounce from './Js_special/Debounce'
import MyThrottle from './Js_Special/Throttle'
import MyCopy from './Js_Special/My_Copy'
import JqueryExtand from './Js_Special/Jquery_extand.vue'
export default {
  name: 'JsSpecial',
  components: {
    MyDebounce,
    MyThrottle,
    MyCopy,
    JqueryExtand
  }
}
</script>
