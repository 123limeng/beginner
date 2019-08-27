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
          default-openeds="[1, 2]"
          @select="handleSelect">
          <el-submenu index="1">
            <template slot="title">HTML</template>
            <el-menu-item index="1-1">HTML基础</el-menu-item>
            <el-menu-item index="1-2">Html事件属性</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">CSS</template>
          </el-submenu>
        </el-menu>
      </el-col>
      <el-col :span="20">
        <component :is="currentComponent"/>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import HtmlBasics from './components/HtmlBasics'
import HtmlEventPro from './components/HtmlEventPro'
export default {
  name: 'BrowerSider',
  components: {
    HtmlBasics, HtmlEventPro
  },
  data () {
    return {
      activeIndex: '1-1',
      currentComponent: 'HtmlBasics'
    }
  },
  methods: {
    handleSelect (key) {
      switch (key) {
        case '1-1':
          this.currentComponent = 'HtmlBasics'
          break
        case '1-2':
          this.currentComponent = 'HtmlEventPro'
          break
        default:
          break
      }
    }
  }
}
</script>
