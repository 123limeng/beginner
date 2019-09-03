<template>
  <div>
    <h3>Html Web存储</h3>
    <el-divider/>
    <h4>localStorage:</h4>
    <p>
      localStorage方法存储的数据没有时间限制，不管多长时间，数据依然可用。
    </p>
    <h4>sessionStorage：</h4>
    <p>
      sessionStorage方法是针对一个session进行数据存储，当用户关闭浏览器窗口后，数据将被删除。
    </p>
  </div>
</template>
<script>
export default {
  name: 'HtmlWebStorage'
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
