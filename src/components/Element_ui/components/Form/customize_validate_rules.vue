<template>
  <div>
    <h4>自定义校验规则</h4>
    <div>
      <el-form label-width="100px" class="form-bg" ref="form" :rules="rules" :model="form">
        <el-form-item label="密码" prop="password">
          <el-input v-model="form.password"/>
        </el-form-item>
        <el-form-item label="确认密码" prop="repassword">
          <el-input v-model="form.repassword"/>
        </el-form-item>
        <el-form-item label="年龄" prop="age">
          <el-input type="number" v-model="form.age"/>
        </el-form-item>
        <div class="btn-right-div">
          <el-button type="primary" @click="submit">提交</el-button>
          <el-button @click="reset">重置</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CustomizeValidateRules',
  data () {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('年龄不能为空'))
      }
      setTimeout(() => {
        if (value < 18) {
          callback(new Error('必须年满18岁'))
        } else {
          callback()
        }
      }, 0)
    }
    var validatePassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (value !== '') {
          this.$refs.form.validateField('repassword')
        }
        callback()
      }
    }
    var validateRepassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else {
        if (value !== this.form.password) {
          callback(new Error('两次密码不一致'))
        } else {
          callback()
        }
      }
    }
    return {
      form: {
        password: '',
        repassword: '',
        age: undefined
      },
      rules: {
        age: [
          {
            validator: checkAge,
            trigger: 'blur'
          }
        ],
        password: [
          {
            validator: validatePassword,
            trigger: 'blur'
          }
        ],
        repassword: [
          {
            validator: validateRepassword,
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    submit () {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.$message.success('成功')
          this.$refs.form.resetFields()
        } else {
          this.$message.error('失败')
        }
      })
    },
    reset () {
      this.$refs.form.resetFields()
    }
  }
}
</script>
<style scoped>
.form-bg {
  background-color: rgb(197, 214, 209);
  padding:50px;
  width: 50%;
  margin: 20px auto;
}
.btn-right-div {
  float: right;
}
</style>
