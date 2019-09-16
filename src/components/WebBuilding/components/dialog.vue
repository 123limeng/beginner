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
      <el-form label-width="100px" ref="form" :model="form" :rules="rules">
        <el-form-item :label="typeMap[type] + '原因'" prop="age">
          <el-input v-model="form.age"/>
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
      dialogshow: false,
      form: {
        age: ''
      },
      rules: {
        age: [
          {
            required: true,
            message: '请输入年龄',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    handleAdd () {
      this.type = 'add'
      this.dialogshow = true
      this.$nextTick(() => {
        this.$refs.form.clearValidate()
      })
    },
    handleDelete () {
      this.type = 'delete'
      this.dialogshow = true
      this.$nextTick(() => {
        this.$refs.form.clearValidate()
      })
    },
    handleEdit () {
      this.type = 'edit'
      this.dialogshow = true
      this.$nextTick(() => {
        this.$refs.form.clearValidate()
      })
    },
    handleReport () {
      this.type = 'report'
      this.dialogshow = true
      this.$nextTick(() => {
        this.$refs.form.clearValidate()
      })
    },
    handleInform () {
      this.type = 'inform'
      this.dialogshow = true
      this.$nextTick(() => {
        this.$refs.form.clearValidate()
      })
    }
  }
}
</script>
