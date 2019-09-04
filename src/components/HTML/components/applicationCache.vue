<template>
  <div>
    <h3>应用程序缓存</h3>
    <el-divider/>
    <h4>应用程序缓存的优势</h4>
    <ul>
      <li>离线浏览</li>
      <li>速度——已经缓存的资源加载速度比较快</li>
      <li>减少服务器负载——浏览器只从服务器下载更新或更改过的资源</li>
    </ul>
    <h4>cache manifest</h4>
    <p>如需启用应用程序缓存，需要在文档的html标签中包含manifest属性，每个指定了manifest的页面用户对其进行访问时都会缓存下来。</p>
    <p>manifest文件的建议文件扩展名是’.appcache‘，manifest文件需要配置正确的MIME-type，即’text/cache-manifest‘，必须在web服务器上进行配置</p>
    <h4>manifest文件</h4>
    <p>manifest文件是简单的文本文件，它告知浏览器被缓存的内容以及不被缓存的内容</p>
    <p>manifest文件可分为3部分：</p>
    <ul>
      <li>CACHE MANIFEST——在此标题下，列出的文件将在首次下载后缓存</li>
      <li>NETWORK——在此标题下，列出的文件需要与服务器连接，且不会被缓存</li>
      <li>FALLBACK——在此标题下，列出的文件规定当页面无法访问时的回退页面</li>
    </ul>
    <h4>更新缓存</h4>
    <p>一旦应用被缓存，它就会保持缓存直到：</p>
    <ul>
      <li>用户清空浏览器缓存</li>
      <li>manifest文件被修改</li>
      <li>由应用程序来更新缓存</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'applicationCache'
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
