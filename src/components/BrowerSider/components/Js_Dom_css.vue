<template>
  <div>
    <h3> 改变css</h3>
    <el-divider/>
    <h4>改变html样式</h4>
    <p>document.getElementById(id).style.property = new style</p>
    <h4>使用事件</h4>
    <p>HTML DOM允许在事件发生时执行代码</p>
    <p>当某些事件在元素上发生时，浏览器会生成事件：</p>
    <ul>
      <li>点击某个元素时</li>
      <li>页面加载时</li>
      <li>输入字段被更改时</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'JsDomCss'
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
h4 {
  border-left: 4px solid #333f44;
  border-bottom: 1px solid #333f44;
}
</style>
