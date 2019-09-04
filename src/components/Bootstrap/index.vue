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
export default {
  name: 'Bootstrap',
  components: {
    GlobalCss
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
        default:
          break
      }
    }
  }
}
</script>
