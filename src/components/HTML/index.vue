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
          <el-submenu index="1">
            <template slot="title">HTML</template>
            <el-menu-item index="1-1">HTML基础</el-menu-item>
            <el-menu-item index="1-2">Html事件属性</el-menu-item>
            <el-menu-item index="1-3">Html音频视频</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">CSS</template>
            <el-menu-item index="2-1">Css基础</el-menu-item>
          </el-submenu>
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
import HtmlBasics from './components/HtmlBasics'
import HtmlEventPro from './components/HtmlEventPro'
import HtmlAudio from './components/HtmlAudio'
import CssBasics from './components/CssBasics'
export default {
  name: 'BrowerSider',
  components: {
    HtmlBasics, HtmlEventPro, HtmlAudio, CssBasics
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
        case '1-3':
          this.currentComponent = 'HtmlAudio'
          break
        case '2-1':
          this.currentComponent = 'CssBasics'
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
