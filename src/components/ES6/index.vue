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
          <el-menu-item index="1">ES6基础</el-menu-item>
          <el-menu-item index="2">ES6难点</el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="20" style="background-color: #eee;">
        <component :is="currentComponent"/>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import Basics from './components/Basics'
import AdvancedEs6 from './components/Advanced_Es6'
export default {
  name: 'MyEs6',
  components: {
    Basics, AdvancedEs6
  },
  data () {
    return {
      activeIndex: '1',
      currentComponent: 'Basics'
    }
  },
  methods: {
    handleSelect (key) {
      switch (key) {
        case '1':
          this.currentComponent = 'Basics'
          break
        case '2':
          this.currentComponent = 'AdvancedEs6'
          break
        default:
          break
      }
    }
  }
}
</script>
