<template>
  <div>
    <h3>走马灯carousel</h3>
    <el-tabs type="card" v-model="activeTab">
      <el-tab-pane label="基础用法" name="first">
        <typical-carousel/>
      </el-tab-pane>
      <el-tab-pane label="指示器" name="second">
        <my-indicator/>
      </el-tab-pane>
      <el-tab-pane label="卡片化" name="three">
        <my-card/>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import TypicalCarousel from './carousel/typical_carousel'
import MyIndicator from './carousel/MyIndicator'
import MyCard from './carousel/MyCard'
export default {
  name: 'MyCarousel',
  components: {
    TypicalCarousel, MyIndicator, MyCard
  },
  data () {
    return {
      activeTab: 'first'
    }
  }
}
</script>
