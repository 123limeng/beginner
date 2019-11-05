<template>
  <div>
    <h3>步骤条</h3>
    <el-divider/>
    <el-steps :active="active" direction="vertical" space="300px" finish-status="success">
      <el-step icon="el-icon-reading" title="阅读规则并同意" />
      <el-step icon="el-icon-edit" title="填写个人信息" />
      <el-step icon="el-icon-position" title="完成申请，等待审核" />
    </el-steps>
    <el-button type="warning" @click="prev">上一步</el-button>
    <el-button type="danger" @click="next">下一步</el-button>
  </div>
</template>

<script>
export default {
  name: 'MySteps',
  data () {
    return {
      active: 0
    }
  },
  methods: {
    next () {
      if (this.active < 3) {
        this.active++
      }
    },
    prev () {
      if (this.active > 0) {
        this.active--
      }
    }
  }
}
</script>
