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
      <el-tab-pane label="JavaScript面向对象编程" lazy>
        <js-oo/>
      </el-tab-pane>
      <el-tab-pane label="对象之间继承的5种方法" lazy>
        <js-inheritance/>
      </el-tab-pane>
      <el-tab-pane label="跨域资源共享" lazy>
        <my-cors/>
      </el-tab-pane>
      <el-tab-pane label="导出文件">
        <my-export/>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import JsRecycling from './Js_Recycling.vue'
import ArrayMethods from './Array_methods'
import JsTest from './Js_test'
import JsOo from './Js_Oo'
import JsInheritance from './Js_Inheritance'
import MyCors from './Cors'
import MyExport from './My_Export'
export default {
  name: 'JsDifficulty',
  components: {
    JsRecycling,
    ArrayMethods,
    JsTest,
    JsOo,
    JsInheritance,
    MyCors,
    MyExport
  }
}
</script>
