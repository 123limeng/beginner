<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="4">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          @select="handleSelect">
          <el-menu-item index="1">全局css样式</el-menu-item>
          <el-menu-item index="2">组件</el-menu-item>
          <el-menu-item index="3">JavaScript插件</el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="20">
        <component :is="currentComponent"/>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import GlobalCss from './components/GlobalCss'
import BootstrapTemplate from './components/BootStrapTemplate'
import JavaScriptUnit from './components/JavaScriptUnit'
export default {
  name: 'Bootstrap',
  components: {
    GlobalCss, BootstrapTemplate, JavaScriptUnit
  },
  data () {
    return {
      activeIndex: '1',
      currentComponent: 'GlobalCss'
    }
  },
  methods: {
    handleSelect (key) {
      switch (key) {
        case '1':
          this.currentComponent = 'GlobalCss'
          break
        case '2':
          this.currentComponent = 'BootstrapTemplate'
          break
        case '3':
          this.currentComponent = 'JavaScriptUnit'
          break
        default:
          break
      }
    }
  }
}
</script>
