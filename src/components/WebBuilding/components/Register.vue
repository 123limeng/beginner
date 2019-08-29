<template>
  <div>
    <h1>用户注册</h1>
    <el-form label-width="80px">
      <el-row>
        <el-col :span="8" :offset="4">
          <el-form-item label="用户名">
            <el-input v-model="form.username" placeholder="请输入用户名"/>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8" :offset="4">
          <el-form-item label="个性签名">
            <el-input v-model="form.personDec" type="textarea" placeholder="请输入个性签名"/>
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
      <el-row>
        <el-col :span="8" :offset="4">
          <el-form-item label="兴趣爱好">
            <el-checkbox-group v-model="form.checkedBox">
              <el-checkbox label="听歌">听歌</el-checkbox>
              <el-checkbox label="跑步">跑步</el-checkbox>
              <el-checkbox label="画画">画画</el-checkbox>
              <el-checkbox label="玩游戏">玩游戏</el-checkbox>
              <el-checkbox label="登山">登山</el-checkbox>
            </el-checkbox-group>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8" :offset="4">
          <el-form-item label="特长">
            <el-input v-model="form.strength" type="textarea" placeholder="请输入"/>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6" :offset="8">
          <el-button type="success" plain @click="register">提交</el-button>
          <el-button type="primary" plain>重置</el-button>
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
        sex: 1,
        checkedBox: [],
        strength: undefined,
        username: undefined,
        personDec: undefined
      }
    }
  },
  methods: {
    register () {
      this.$message.success('成功注册')
    }
  }
}
</script>
