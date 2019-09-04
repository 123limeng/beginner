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
      <el-menu-item index="3">Bootstrap</el-menu-item>
      <el-menu-item index="4">NodeJs</el-menu-item>
      <el-menu-item index="5">Vue</el-menu-item>
      <el-menu-item index="6">WebBuilding</el-menu-item>
      <el-menu-item index="7">ES6</el-menu-item>
      <el-menu-item index="8">Less</el-menu-item>
    </el-menu>
    <component :is="currentComponent"/>
  </div>
</template>
<script>
import MyHTML from './HTML/index'
import BrowerSider from './BrowerSider/index'
import Bootstrap from './Bootstrap/index'
import MyNodeJs from './NodeJs/index'
import MyVue from './Vue/index'
import WebBuilding from './WebBuilding/index'
import MyEs6 from './ES6/index'
import MyLess from './Less/index'
export default {
  name: 'MyNav',
  components: {
    MyHTML, BrowerSider, Bootstrap, MyNodeJs, MyVue, WebBuilding, MyEs6, MyLess
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
          this.currentComponent = 'Bootstrap'
          break
        case '4':
          this.currentComponent = 'MyNodeJs'
          break
        case '5':
          this.currentComponent = 'MyVue'
          break
        case '6':
          this.currentComponent = 'WebBuilding'
          break
        case '7':
          this.currentComponent = 'MyEs6'
          break
        case '8':
          this.currentComponent = 'MyLess'
          break
        default:
          break
      }
    }
  }
}
</script>
