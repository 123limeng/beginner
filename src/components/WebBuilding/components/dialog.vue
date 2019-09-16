<template>
  <div>
    <h4>不同的dialog</h4>
    <div>
      <el-button type="primary" @click="handleAdd">添加</el-button>
      <el-button type="primary" @click="handleDelete">删除</el-button>
      <el-button type="primary" @click="handleReport">举报</el-button>
      <el-button type="primary" @click="handleInform">上报</el-button>
      <el-button type="primary" @click="handleEdit">编辑</el-button>
    </div>
    <el-dialog :title="typeMap[type]" :visible.sync="dialogshow">
      <el-form label-width="100px">
        <el-form-item :label="typeMap[type] + '原因'">
          <el-input/>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: 'DifferentDialog',
  data () {
    return {
      typeMap: {
        add: '添加',
        delete: '删除',
        report: '举报',
        inform: '上报',
        edit: '编辑'
      },
      type: undefined,
      dialogshow: false
    }
  },
  methods: {
    handleAdd () {
      this.type = 'add'
      this.dialogshow = true
    },
    handleDelete () {
      this.type = 'delete'
      this.dialogshow = true
    },
    handleEdit () {
      this.type = 'edit'
      this.dialogshow = true
    },
    handleReport () {
      this.type = 'report'
      this.dialogshow = true
    },
    handleInform () {
      this.type = 'inform'
      this.dialogshow = true
    }
  }
}
</script>
