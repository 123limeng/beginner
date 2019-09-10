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
          <el-menu-item index="1">表单</el-menu-item>
          <el-menu-item index="2">走马灯</el-menu-item>
          <el-menu-item index="3">级联选择器</el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="20">
        <component :is="currentComponent"/>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import MyForm from './components/MyForm.vue'
import MyCarousel from './components/MyCarousel'
export default {
  name: 'MyElementUi',
  components: {
    MyForm, MyCarousel
  },
  data () {
    return {
      activeIndex: '1',
      currentComponent: 'MyForm'
    }
  },
  methods: {
    handleSelect (key) {
      switch (key) {
        case '1':
          this.currentComponent = 'MyForm'
          break
        case '2':
          this.currentComponent = 'MyCarousel'
          break
        default:
          break
      }
    }
  }
}
</script>
