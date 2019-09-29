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
        <el-menu-item index="1">Node.js 回调函数</el-menu-item>
        <el-menu-item index="2">Node.js 事件循环</el-menu-item>
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
import NodeCallback from './components/Node_Callback'
import NodeLoop from './components/Node_Loop'
export default {
  name: 'MyNodeJs',
  data () {
    return {
      currentComponent: 'NodeCallback'
    }
  },
  components: {
    NodeCallback,
    NodeLoop
  },
  methods: {
    handleSelect (key) {
      switch (key) {
        case '1':
          this.currentComponent = 'NodeCallback'
          break
        case '2':
          this.currentComponent = 'NodeLoop'
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
