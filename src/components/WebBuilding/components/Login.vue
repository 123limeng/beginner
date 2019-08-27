<template>
  <div class="main">
    <el-form ref="form" :model="form" label-width="80px">
      <el-row>
        <el-col :span="8" :offset="8">
          <el-form-item label="用户名">
            <el-input v-model="form.username" placeholder="请输入用户名"/>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8" :offset="8">
          <el-form-item label="密码">
            <el-input v-model="form.password" placeholder="请输入密码"/>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="3" :offset="10">
          <el-button type="success" @click="register">注册</el-button>
        </el-col>
        <el-col :span="3">
          <el-button type="success" @click="login">登录</el-button>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>
<script>
export default {
  name: 'Login',
  data () {
    return {
      form: {
        username: undefined,
        password: undefined
      },
      userList: [
        {
          username: 'li',
          password: '123456'
        }
      ]
    }
  },
  methods: {
    login () {
      this.$message.success('登录')
    },
    register () {
      this.$message.success('注册')
    }
  }
}
</script>
<style scoped>
.main {
  margin-top: 200px;
}
</style>
