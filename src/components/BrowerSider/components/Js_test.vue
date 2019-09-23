<template>
  <div>
    <h4>js数组去重的5种方法</h4>
    <el-backtop/>
    <ol>
      <li>
        <h5>遍历数组法</h5>
        <img src="./Js_test_asset/array.png" alt="遍历数组法">
        <p>利用了indexOf()，如果查找到,返回第一个结果的索引，查询不到则返回-1。也就是新数组中有这个元素就尝试下一个，如果没有就把这个元素push进新的数组中。</p>
      </li>
      <li>
        <h5>数组下标判断法</h5>
        <img src="./Js_test_asset/array2.png" alt="数组下标判断法">
        <p>这个方法也是利用indexOf()方法，如果查到元素就返回第一个结果索引，如果元素的索引和当前位置i相等就表示元素只出现一次，将元素push进新数组中。</p>
      </li>
      <li>
        <h5>排序后相邻去除法</h5>
      </li>
      <li>
        <h5>优化的遍历数组法</h5>
      </li>
      <li>
        <h5>数组遍历法</h5>
      </li>
    </ol>
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
  name: 'JsTest',
  data () {
    return {
    }
  },
  created () {
    console.log('去重后新数组' + this.handleArray([1, 3, 1, 5, 9, 0, 5, 9]))
    console.log('去重后新数组' + this.handleArrayOne([1, 3, 1, 5, 9, 0, 5, 9]))
  },
  methods: {
    // 数组去重——遍历数组
    handleArray (arr) {
      console.log('旧数组' + arr)
      var newArray = []
      for (let i = 0; i < arr.length; i++) {
        if (newArray.indexOf(arr[i]) === -1) {
          newArray.push(arr[i])
        }
      }
      return newArray
    },
    // 下标对比
    handleArrayOne (arr) {
      console.log('旧数组' + arr)
      var newArray = []
      for (let i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) === i) {
          newArray.push(arr[i])
        }
      }
      return newArray
    },
    export1 () {
      var html = "<html><head><meta charset='utf-8' /></head><body>" + document.getElementsByTagName('table')[0].outerHTML + '</body></html>'
      // 实例化一个Blob对象，其构造函数的第一个参数是包含文件内容的数组，第二个参数是包含文件类型属性的对象
      var blob = new Blob([html], { type: 'application/vnd.ms-excel' })
      // var a = document.getElementsByTagName('a')[0]
      // // 利用URL.createObjectURL()方法为a元素生成blob URL
      // a.href = URL.createObjectURL(blob)
      // // 设置文件名
      // a.download = '学生成绩表.xls'
      // a.click()
      // a.remove()
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
