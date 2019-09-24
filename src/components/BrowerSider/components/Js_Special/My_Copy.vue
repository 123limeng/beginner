<template>
  <div>
    <h3>深浅拷贝</h3>
    <el-divider/>
    <el-backtop/>
    <h4>数组的深拷贝</h4>
    <el-image :src="url1"/>
    <el-divider/>
    <h4>浅拷贝实现</h4>
    <el-image :src="url2"/>
    <el-divider/>
    <h4>深拷贝实现</h4>
    <el-image :src="url3"/>
  </div>
</template>
<script>
export default {
  name: 'MyCopy',
  data () {
    return {
      url1: require('../Js_test_asset/数组深拷贝.png'),
      url2: require('../Js_test_asset/浅拷贝实现.png'),
      url3: require('../Js_test_asset/深拷贝实现.png')
    }
  }
}
</script>
