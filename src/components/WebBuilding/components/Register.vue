<template>
  <div>
    <h1>用户注册</h1>
    <el-form label-width="80px">
      <el-row>
        <el-col :span="8" :offset="4">
          <el-form-item label="用户名">
            <el-input placeholder="请输入用户名"/>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8" :offset="4">
          <el-form-item label="个性签名">
            <el-input type="textarea" placeholder="请输入个性签名"/>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8" :offset="4">
          <el-form-item label="性别">
            <el-radio-group v-model="form.sex">
              <el-radio :label="1" name="man">男</el-radio>
              <el-radio :label="2" name="woman">女</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>
<script>
export default {
  name: 'Register',
  data () {
    return {
      form: {
        sex: 1
      }
    }
  }
}
</script>
