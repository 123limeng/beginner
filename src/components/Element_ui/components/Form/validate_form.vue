<template>
  <div>
    <!-- <h4>表单验证</h4> -->
    <div class="form-bg">
      <el-form label-width="100px" ref="form" :model="form" :rules="rules">
        <el-row>
          <el-col :span="8" :offset="8">
            <el-form-item label="活动名称" prop="name">
              <el-input v-model="form.name"/>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8" :offset="8">
            <el-form-item label="活动区域" prop="checkedValue">
              <el-select v-model="form.checkedValue" class="select-width">
                <el-option label="区域一" value="first"/>
                <el-option label="区域二" value="second"/>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8" :offset="8">
            <el-form-item label="活动时间" required>
              <el-col :span="11">
                <el-form-item prop="date">
                  <el-date-picker v-model="form.date" type="date" placeholder="选择日期" style="width: 100%;"></el-date-picker>
                </el-form-item>
              </el-col>
              <el-col class="line" :span="2">-</el-col>
              <el-col :span="11">
                <el-form-item prop="time">
                  <el-time-picker v-model="form.time" placeholder="选择时间" style="width: 100%;"></el-time-picker>
                </el-form-item>
              </el-col>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :offset="8">
            <el-form-item label="即时配送" prop="active">
              <el-switch v-model="form.active" active-color="#0009ff" inactive-color="#ff4949"/>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8" :offset="8">
            <el-form-item label="活动性质" prop="checkedList">
              <el-checkbox-group v-model="form.checkedList">
                <el-checkbox label="美食/餐厅线上活动"></el-checkbox>
                <el-checkbox label="地推活动"></el-checkbox>
                <el-checkbox label="线下主题活动"></el-checkbox>
                <el-checkbox label="单纯品牌曝光"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8" :offset="8">
            <el-form-item label="特殊资源" prop="resource">
              <el-radio-group v-model="form.resource">
                <el-radio :label="1">线上品牌商赞助</el-radio>
                <el-radio :label="2">线下场地免费</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8" :offset="8">
            <el-form-item label="活动形式" prop="activeForm">
              <el-input type="textarea" v-model="form.activeForm"/>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8" :offset="12">
            <el-button type="primary" @click="handleCreate">立即创建</el-button>
            <el-button>取消</el-button>
          </el-col>
        </el-row>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ValidateForm',
  data () {
    return {
      form: {
        checkedValue: undefined,
        active: true,
        checkedList: [],
        resource: 1,
        name: undefined,
        date: undefined,
        time: undefined,
        activeForm: undefined
      },
      rules: {
        name: [
          {
            required: true, message: '请输入活动名称', trigger: 'blur'
          }
        ],
        checkedValue: [
          {
            required: true, message: '请选择活动区域', trigger: 'blur'
          }
        ],
        date: [
          {
            type: 'date', required: true, message: '请选择日期', trigger: 'blur'
          }
        ],
        time: [
          {
            type: 'date', required: true, message: '请选择时间', trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    handleCreate () {
      this.$refs.form.validate((valid) => {
        if (valid) {
          alert('submit')
          this.$refs.form.resetFields()
        } else {
          console.log('error submit')
          return false
        }
      })
    }
  }
}
</script>
<style scoped>
.select-width {
  width: 100%;
}
.form-bg {
  background-color: rgb(197, 214, 209);
  padding:50px;
}
.line {
  text-align: center;
}
</style>
