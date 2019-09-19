<template>
  <div>
    <h3>评分</h3>
    <el-divider/>
    <h4>基础用法</h4>
    <el-row :gutter="20">
      <el-col :span="12">
        <label>默认不区分颜色</label>
        <el-rate v-model="value1"/>
      </el-col>
      <el-col :span="12">
        <label>区分颜色</label>
        <el-rate v-model="value2" :colors="colors"/>
      </el-col>
    </el-row>
    <el-divider/>
    <h4>辅助文字</h4>
    <el-rate v-model="value3" :texts="texts" show-text/>
    <el-divider/>
    <h4>其他icon</h4>
    <el-rate v-model="value4" :icon-classes="icon_classes" void-icon-class="el-icon-orange"/>
    <el-divider/>
    <h4>只读</h4>
    <el-rate v-model="value5" show-score disabled score-template="->{value}<-"/>
  </div>
</template>
<script>
export default {
  name: 'MyRate',
  data () {
    return {
      value1: null,
      value2: null,
      value3: null,
      value4: null,
      value5: 4.4,
      colors: ['#99A9BF', '#F7BA2A', '#FF9900'],
      texts: ['加油喽', '继续加油', '不错呦', '美美哒', '你是最棒的'],
      icon_classes: ['el-icon-coffee', 'el-icon-ice-tea', 'el-icon-ice-drink']
    }
  }
}
</script>
