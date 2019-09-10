<template>
  <div>
    <h4>动态增减表单项</h4>
    <div>
      <el-form ref="form" :model="form" label-width="100px" class="form-bg">
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="form.email"/>
        </el-form-item>
        <el-form-item
          v-for="(domain, index) in form.domains"
          :label="'域名' + index"
          :key="domain.key">
          <el-input v-model="domain.value"><el-button slot="append" @click="removeItem(domain)">删除</el-button></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="addItem">新增表单项</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DynamicAddForm',
  data () {
    return {
      form: {
        email: undefined,
        domains: [
          {
            value: ''
          }
        ]
      }
    }
  },
  methods: {
    addItem () {
      this.form.domains.push({
        value: '',
        key: Date.now()
      })
    },
    removeItem (item) {
      var index = this.form.domains.indexOf(item)
      if (index !== -1) {
        this.form.domains.splice(index, 1)
      }
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
