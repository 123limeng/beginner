<template>
  <div>
    <h3>jQuery的extend函数</h3>
    <el-divider/>
    <p>
      合并两个或多个对象的内容到死一个对象。
    </p>
    <el-image :src="url1"/>
    <el-divider/>
    <el-backtop/>
    <h4>extend实现</h4>
    <el-image :src="url2"/>
    <el-image :src="url3"/>
    <el-image :src="url4"/>
    <el-image :src="url5"/>
  </div>
</template>
<script>
export default {
  name: 'JqueryExtend',
  data () {
    return {
      url1: require('../Js_test_asset/extend语法.png'),
      url2: require('../Js_test_asset/extend实现1.png'),
      url3: require('../Js_test_asset/extend实现2.png'),
      url4: require('../Js_test_asset/extend实现3.png'),
      url5: require('../Js_test_asset/extend实现4.png')
    }
  }
}
</script>
