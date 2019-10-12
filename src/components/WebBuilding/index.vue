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
          <el-menu-item index="1">登录</el-menu-item>
          <el-menu-item index="2">注册</el-menu-item>
          <el-menu-item index="3">购物车</el-menu-item>
          <el-menu-item index="4">不同的dialog</el-menu-item>
          <el-menu-item index="5">特效</el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="20">
        <component :is="currentComponent"/>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import Login from './components/Login'
import Register from './components/Register'
import AddCart from './components/addCart'
import DifferentDialog from './components/dialog'
import ActiveSpecial from './components/activeSpecial'
export default {
  name: 'WebBuilding',
  components: {
    Login, Register, AddCart, DifferentDialog, ActiveSpecial
  },
  data () {
    return {
      activeIndex: '1',
      currentComponent: 'Login'
    }
  },
  methods: {
    handleSelect (key) {
      switch (key) {
        case '1':
          this.currentComponent = 'Login'
          break
        case '2':
          this.currentComponent = 'Register'
          break
        case '3':
          this.currentComponent = 'AddCart'
          break
        case '4':
          this.currentComponent = 'DifferentDialog'
          break
        case '5':
          this.currentComponent = 'ActiveSpecial'
          break
        default:
          break
      }
    }
  }
}
</script>
