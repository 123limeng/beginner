<template>
  <div>
    <h3>气泡</h3>
    <el-divider />
    <el-popover
      :content="otherMsg"
      placement="bottom"
      width="400"
      trigger="click">
      <el-button type="primary" plain slot="reference">click 激活</el-button>
    </el-popover>
    <el-popover
      :popper-class="popClass"
      placement="right"
      width="400"
      trigger="click"
      v-model="visible">
      <h3 style="text-align: right;">hahaha</h3>
      <el-button type="info" icon="el-icon-close" @click="visible = false">关闭</el-button>
      <el-button type="primary" plain slot="reference">click 激活</el-button>
    </el-popover>
  </div>
</template>

<script>
export default {
  name: 'MyPop',
  data () {
    return {
      msg: '123',
      otherMsg: '456',
      visible: false,
      popClass: 'popClass'
    }
  },
  methods: {}
}
</script>
<style scoped>
.popClass {
  width: 400px;
  height: 300px;
  background-color: #9e5a5a !important;
}
</style>
