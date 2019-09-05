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
          <el-menu-item index="1">Variables变量</el-menu-item>
          <el-menu-item index="2">Mixins混合</el-menu-item>
          <el-menu-item index="3">Nesting嵌套</el-menu-item>
          <el-menu-item index="4">Operations运算</el-menu-item>
          <el-menu-item index="5">Escaping转义</el-menu-item>
          <el-menu-item index="6">Function函数</el-menu-item>
          <el-menu-item index="7">命名空间和访问符</el-menu-item>
          <el-menu-item index="8">Maps映射</el-menu-item>
          <el-menu-item index="9">Scope作用域</el-menu-item>
          <el-menu-item index="10">Comments注释</el-menu-item>
          <el-menu-item index="11">Importing导入</el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="20">
        <component :is="currentComponent"/>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import MyVariables from './components/Variables'
import Nesting from './components/Nesting'
import Operations from './components/Operations'
import Escaping from './components/Escaping'
import LessFunction from './components/LessFunction'
export default {
  name: 'Bootstrap',
  components: {
    MyVariables, Nesting, Operations, Escaping, LessFunction
  },
  data () {
    return {
      activeIndex: '1',
      currentComponent: 'MyVariables'
    }
  },
  methods: {
    handleSelect (key) {
      switch (key) {
        case '1':
          this.currentComponent = 'MyVariables'
          break
        case '3':
          this.currentComponent = 'Nesting'
          break
        case '4':
          this.currentComponent = 'Operations'
          break
        case '5':
          this.currentComponent = 'Escaping'
          break
        case '6':
          this.currentComponent = 'LessFunction'
          break
        default:
          break
      }
    }
  }
}
</script>
