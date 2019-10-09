<template>
  <div>
    <h3>css难点</h3>
    <el-divider/>
    <h4>css选择器</h4>
    <ul>
      <li>
        <h5>后代选择器</h5>
        <p>用空格隔开</p>
      </li>
      <li>
        <h5>子元素选择器</h5>
        <p>用>隔开</p>
      </li>
      <li>
        <h5>相邻兄弟选择器</h5>
        <p>用+隔开</p>
      </li>
      <li>
        <h5>普通兄弟选择器</h5>
        <p>用~隔开</p>
      </li>
    </ul>
    <el-divider/>
    <h4>如何提高首频加载速度：</h4>
    <ol>
      <li>
        js外联文件放在body底部，css外联文件放在head内。
      </li>
      <li>
        http静态资源尽量使用多个子域名。
      </li>
      <li>
        服务器端提供html和http静态资源时最好开启gzip
      </li>
      <li>
        尽量减少http requests数量
      </li>
      <li>
        js/css/html/img资源压缩
      </li>
      <li>
        使用css spistes，可以减少img请求次数
      </li>
      <li>
        大图使用lazydown懒加载
      </li>
      <li>
        避免404，减少外联js
      </li>
      <li>
        减少cookie大小可以提高获得响应的时间。
      </li>
      <li>
        减少dom elements的数量
      </li>
      <li>
        使用异步脚本，动态创建脚本
      </li>
    </ol>
    <el-divider/>
    <el-backtop/>
  </div>
</template>
<script>
export default {
  name: 'CssDifficulty'
}
</script>
<style scoped>
h4 {
  border-left: 3px solid rgb(83, 30, 30);
  border-bottom: 1px solid rgb(183, 130, 130);
}
</style>
