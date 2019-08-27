<template>
  <div>
    <h3>javaScript 表单</h3>
    <div class="content-div">
      <h4>javaScript 表单验证</h4>
      <p>HTML表单验证能够通过JavaScript来完成</p>
      <p>如果表单某个字段是空的，那么该函数会发出一条警告信息，并返回false，以防止表单被提交出去。</p>
      <h4>javaScript 实例</h4>
      <div class="border-div">
        <h4>自动HTML表单验证</h4>
        <p>HTML 表单验证能够被浏览器自动执行：</p>
        <p>如果表单字段（fname）是空的，required 属性防止表单被提交</p>
        <p>自动 HTML 表单验证不适用于 Internet Explorer 9 或更早的版本。</p>
      </div>
      <div class="border-div">
        <h4>数据验证</h4>
        <p>数据验证指的是确保干净、正确和有用的用户输入过程。</p>
        <p>典型的验证任务是：</p>
        <ul>
          <li>用户是否已填写所有必需的字段？</li>
          <li>用户是否已输入有效日期？</li>
          <li>用户是否在数字字段中输入了文本？</li>
        </ul>
        <p>大多数情况下，数据验证的作用是确保正确的用户输入。</p>
        <p>验证可以通过很多不同的方法来定义，并且可以使用很多不同的方法来开发。</p>
        <p><strong>服务器验证</strong>是由web服务器执行的，在输入被送往服务器之后。</p>
        <p><strong>客户端验证</strong>是由web浏览器执行的，在输入被送往服务器之前。</p>
      </div>
      <div class="border-div">
        <h4>HTML约束验证</h4>
        <p>HTML5引入一种新的HTML验证概念，名为<strong>约束验证</strong></p>
        <p>HTML约束验证基于：</p>
        <ul>
          <li>约束验证HTML输入属性</li>
          <li>约束验证CSS伪选择器</li>
          <li>约束验证DOM属性和方法</li>
        </ul>
      </div>
      <div class="border-div">
        <h4>约束验证HTML输入属性</h4>
        <el-table
          :data="list"
          border>
          <el-table-column label="属性">
            <template slot-scope="scope">
              <span>{{ scope.row.pro }}</span>
            </template>
          </el-table-column>
          <el-table-column label="描述">
            <template slot-scope="scope">
              <span>{{ scope.row.dec }}</span>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="border-div">
        <h4>约束验证CSS伪选择器</h4>
        <el-table
          :data="opList"
          border>
          <el-table-column label="选择器">
            <template slot-scope="scope">
              <span>{{ scope.row.op }}</span>
            </template>
          </el-table-column>
          <el-table-column label="描述">
            <template slot-scope="scope">
              <span>{{ scope.row.dec }}</span>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'JS_Form',
  data () {
    return {
      list: [
        {
          pro: 'disabled',
          dec: '规定input元素应该禁用'
        },
        {
          pro: 'max',
          dec: '规定input元素的最大值'
        },
        {
          pro: 'min',
          dec: '规定input元素的最小值'
        },
        {
          pro: 'pattern',
          dec: '规定input元素的值的模式'
        },
        {
          pro: 'requires',
          dec: '规定输入字段需要某个元素'
        },
        {
          pro: 'type',
          dec: '规定input元素的类型'
        }
      ],
      opList: [
        {
          op: ':disabled',
          dec: '选择设置了disabled属性的input元素'
        },
        {
          op: ':invalid',
          dec: '选择带有无效值的input元素'
        },
        {
          op: ':optional',
          dec: '选择未设置required属性的input元素'
        },
        {
          op: ':required',
          dec: '选择设置了required属性的input元素'
        },
        {
          op: ':valid',
          dec: '选择带有有效值的input元素'
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
</style>
