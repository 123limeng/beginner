<template>
  <div>
    <el-row>
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
export default {
  name: 'WebBuilding',
  components: {
    Login, Register, AddCart
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
        default:
          break
      }
    }
  }
}
</script>
