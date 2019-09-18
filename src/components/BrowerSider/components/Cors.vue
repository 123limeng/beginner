<template>
  <div>
    <h3>跨域资源共享</h3>
    <p>
      浏览器将CORS请求分为两种：简单请求和非简单请求
    </p>
    <p>
      简单请求的条件：
    </p>
    <el-image :src="url" fit="fill"/>
    <p>凡是不同时满足上面两种条件的都是非简单请求。</p>
    <p>
      对于简单请求，浏览器直接发出CORS请求，在头信息中直接添加一个origin字段。用来说明本次请求来自
      哪个源，服务器根据这个值，确定是否同意这次请求。
    </p>
    <p>
      如果origin指定的源不在许可范围内，服务器会返回一个正常的HTTP回应，浏览器发现这个回应的头信息
      没有包含Access-Control-Allow-Origin字段，就知道出错了，会抛出一个错误，被XMLHttpRequest的
      onerror回调函数捕获。这种错误无法通过状态码识别，因为因为HTTP回应的状态码有可能是200。
    </p>
    <p>
      如果origin指定的域名在许可范围内，服务器返回的响应，会多出几个头信息字段。
    </p>
    <el-image :src="url2" fit="fill"/>
    <p>withCredientials属性</p>
    <el-backtop/>
    <p>
      CORS请求默认不发送cookie和HTTP认证信息，如果要把cookie发送到服务器，一方面要服务器同意，指定
      Access-Control-Allow-Credientails字段：Access-Control-Allow-Credientials: true，另一方面
      开发者必须在AJAX请求中打开witnCredientials属性：var xhr = new XMLHttpRequest() xhr.withCredientials = true
    </p>
    <p>
      否则服务器同意发送cookie，浏览器也不会发送。
    </p>
  </div>
</template>
<script>
export default {
  name: 'MyCors',
  data () {
    return {
      url: require('./Js_test_asset/cors_simple.png'),
      url2: require('./Js_test_asset/origin.png')
    }
  }
}
</script>
