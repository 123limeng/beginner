<template>
  <div>
    <h3>ajax</h3>
    <el-divider/>
    <p>ajax的核心是XMlHttpRequest对象</p>
    <h4>创建XMLHttpRequest对象</h4>
    <p>var xmlHttp = new XMLHttpRequest()</p>
    <p>ie5和ie6低版本使用ActiveX对象：xmlHttp = new ActiveXobject("Microsoft.XMLHttp")</p>
    <p>所以创建XMLHttpRequest对象前，要先判断是否支持XMLHttpRequest对象，在进行处理。</p>
    <h4>XMLlHttpRequest对象方法：</h4>
    <p>new XMLHttpRequest()：创建一个新的XMLHttpRequest对象</p>
    <p>abort()：取消当前请求</p>
    <p>getAllResponseHeaders()：返回头部信息</p>
    <p>getResponseHeader()：返回特定的头部信息</p>
    <p>open(method, url, asyns, user, psw)：规定请求</p>
    <ul>
      <li>method：请求类型GET或POST</li>
      <li>url：文件位置</li>
      <li>asyns：true异步、false同步</li>
      <li>user：可选，用户名</li>
      <li>psw：可选，密码</li>
    </ul>
    <p>
      send()：将请求发送到服务器，用于Get请求
    </p>
    <p>send(string)：将请求发送到服务器，用于Post请求</p>
    <p>setRequestHeader()：向要发送的报头添加标签/值对</p>
    <h4>XMLHttpRequest对象属性</h4>
    <p>
      onreadystatechange：定义当readyState属性发生变化时调用的函数
    </p>
    <p>readyState：保存XMLHttpRequest的状态</p>
    <ul>
      <li>0：请求未初始化</li>
      <li>1：服务器连接已建立</li>
      <li>2：请求已收到</li>
      <li>3：正在处理请求</li>
      <li>4：请求已完成且响应已就绪</li>
    </ul>
    <p>responseText：以字符串返回响应数据</p>
    <p>responseXMl：以XML数据返回响应数据</p>
    <p>status：返回请求的状态号（状态码）</p>
    <p>statusText：返回状态文本("OK" 或"Not Found)</p>
  </div>
</template>
<script>
export default {
  name: 'JsAjax'
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
