<template>
  <div>
    <h3>表单验证Api</h3>
    <div class="content-div">
      <h4>约束验证DOM方法</h4>
      <el-table
        :data="list"
        border
        class="table-margin-top">
        <el-table-column label="属性">
          <template slot-scope="scope">
            <span>{{ scope.row.pro}}</span>
          </template>
        </el-table-column>
        <el-table-column label="描述">
          <template slot-scope="scope">
            <span>{{ scope.row.dec}}</span>
          </template>
        </el-table-column>
      </el-table>
      <div class="border-div">
        <h4>约束验证DOM属性</h4>
        <el-table
          :data="DomList"
          border
          class="table-margin-top">
          <el-table-column label="属性">
            <template slot-scope="scope">
              <span>{{ scope.row.pro}}</span>
            </template>
          </el-table-column>
          <el-table-column label="描述">
            <template slot-scope="scope">
              <span>{{ scope.row.dec}}</span>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'JsFormApi',
  data () {
    return {
      list: [
        {
          pro: 'checkValidity()',
          dec: '返回true，如果input元素包含有效数据'
        },
        {
          pro: 'setCustomValidity()',
          dec: '设置input元素的validitionMessage属性'
        }
      ],
      DomList: [
        {
          pro: 'validity',
          dec: '包含与input元素合法性相关的布尔属性'
        },
        {
          pro: 'validitionMessage',
          dec: '包含当validity为false时浏览器显示的信息'
        },
        {
          pro: 'willValidate',
          dec: '指示是否验证input元素'
        }
      ]
    }
  }
}
</script>
<style scoped>
.content-div {
  width: 100%;
  border-top: 1px solid #cccccc;
  margin-top:30px;
}
.border-div {
  width: 100%;
  border-top: 1px solid #cccccc;
  border-bottom: 1px solid #cccccc;
}
.table-margin-top {
  margin-bottom: 20px;
}
</style>
