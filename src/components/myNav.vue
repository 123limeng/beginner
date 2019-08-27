<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      @select="handleSelect">
      <el-menu-item index="1">HTML</el-menu-item>
      <el-menu-item index="2">BrowerSider</el-menu-item>
      <el-menu-item index="3">ServerSider</el-menu-item>
      <el-menu-item index="4">Programming</el-menu-item>
      <el-menu-item index="5">XML</el-menu-item>
      <el-menu-item index="6">WebBuilding</el-menu-item>
      <el-menu-item index="7">Reference</el-menu-item>
    </el-menu>
    <component :is="currentComponent"/>
  </div>
</template>
<script>
import MyHTML from './HTML/index'
import BrowerSider from './BrowerSider/index'
import ServerSider from './ServerSider/index'
import Programming from './Programming/index'
import MyXML from './XML/index'
import WebBuilding from './WebBuilding/index'
import MyReference from './Reference/index'
export default {
  name: 'MyNav',
  components: {
    MyHTML, BrowerSider, ServerSider, Programming, MyXML, WebBuilding, MyReference
  },
  data () {
    return {
      activeIndex: '1',
      currentComponent: 'MyHTML'
    }
  },
  created () {
  },
  methods: {
    handleSelect (key) {
      switch (key) {
        case '1':
          this.currentComponent = 'MyHTML'
          break
        case '2':
          this.currentComponent = 'BrowerSider'
          break
        case '3':
          this.currentComponent = 'ServerSider'
          break
        case '4':
          this.currentComponent = 'Programming'
          break
        case '5':
          this.currentComponent = 'MyXML'
          break
        case '6':
          this.currentComponent = 'WebBuilding'
          break
        case '7':
          this.currentComponent = 'MyReference'
          break
        default:
          break
      }
    }
  }
}
</script>
