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
          <el-menu-item index="1">基础</el-menu-item>
          <el-menu-item index="2">进阶</el-menu-item>
          <el-menu-item index="3">vue-router</el-menu-item>
          <el-menu-item index="4">Charts</el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="20">
        <transition name="my-transition" mode="out-in">
          <component :is="currentComponent"/>
        </transition>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import Basics from './components/Basics'
import MyProcess from './components/Process'
import MyVueRouter from './components/MyVue_Router'
import MyCharts from './components/Charts'
export default {
  name: 'MyVue',
  components: {
    Basics, MyProcess, MyVueRouter, MyCharts
  },
  data () {
    return {
      activeIndex: '3',
      currentComponent: 'MyVueRouter'
    }
  },
  methods: {
    handleSelect (key) {
      switch (key) {
        case '1':
          this.currentComponent = 'Basics'
          break
        case '2':
          this.currentComponent = 'MyProcess'
          break
        case '3':
          this.currentComponent = 'MyVueRouter'
          break
        case '4':
          this.currentComponent = 'MyCharts'
          break
        default:
          break
      }
    }
  }
}
</script>
<style scoped>
.my-transition-enter-active {
  transition: all .3s ease;
}
.my-transition-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.my-transition-enter, .my-transition-leave-active {
  padding-left: 1000px;
  /* margin:1000px 0 0 1000px; */
  opacity: 0;
}
</style>
