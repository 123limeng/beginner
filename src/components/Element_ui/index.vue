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
          <el-menu-item index="4">穿梭框</el-menu-item>
          <el-menu-item index="5">评分</el-menu-item>
          <el-menu-item index="6">时间选择器</el-menu-item>
          <el-menu-item index="7">日期选择器</el-menu-item>
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
import MyCascarder from './components/MyCascader'
import MyTransfer from './components/MyTransfer'
import MyRate from './components/MyRate'
import MyTimePicker from './components/MyTimePicker'
import MyDatePicker from './components/MyDatePicker'
export default {
  name: 'MyElementUi',
  components: {
    MyForm, MyCarousel, MyCascarder, MyTransfer, MyRate, MyTimePicker, MyDatePicker
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
        case '3':
          this.currentComponent = 'MyCascarder'
          break
        case '4':
          this.currentComponent = 'MyTransfer'
          break
        case '5':
          this.currentComponent = 'MyRate'
          break
        case '6':
          this.currentComponent = 'MyTimePicker'
          break
        case '7':
          this.currentComponent = 'MyDatePicker'
          break
        default:
          break
      }
    }
  }
}
</script>
