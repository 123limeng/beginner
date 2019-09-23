<template>
  <div>
    <h3>导出表格</h3>
    <el-button type="primary" @click="export1">导出</el-button>
    <table border="1">
      <!-- caption元素可以生成表标题，其单元格列跨度为表格的列数 -->
      <caption>学生成绩表</caption>
      <tr>
        <!-- 可以使用rowspan和colspan来合并单元格 -->
        <th rowspan="2">编号</th>
        <th rowspan="2">学号</th>
        <th rowspan="2">姓名</th>
        <th rowspan="2">性别</th>
        <th rowspan="2">年龄</th>
        <th colspan="3">成绩</th>
      </tr>
      <tr>
        <th>语文</th>
        <th>数学</th>
        <th>英语</th>
      </tr>
      <tr>
        <td>1</td>
        <td>2016001</td>
        <td>张三</td>
        <td>男</td>
        <td>13</td>
        <td>85</td>
        <td>94</td>
        <td>77</td>
      </tr>
      <tr>
        <td>2</td>
        <td>2016002</td>
        <td>李四</td>
        <td>女</td>
        <td>12</td>
        <td>96</td>
        <td>84</td>
        <td>89</td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  name: 'MyExport',
  methods: {
    export1 () {
      // innerHTML设置或者获取对象起始和结束标签内的HTML
      // outerHTML设置或者获取对象及其内容的HTML形式
      var html = "<html><head><meta charset='utf-8' /></head><body>" + document.getElementsByTagName('table')[0].outerHTML + '</body></html>'
      var blob = new Blob([html], { type: 'application/vnd.ms-excel' })
      const aTag = document.createElement('a')
      aTag.download = '学生成绩表.xls'
      aTag.href = URL.createObjectURL(blob)
      URL.revokeObjectURL(blob)
      aTag.click()
      aTag.remove()
    }
  }
}
</script>
