<template>
  <div>
    <h3>Node.js 回调函数</h3>
    <el-divider/>
    <p>node.js异步编程最直接的体现就是回调。</p>
    <p>异步编程依托回调实现，但不是说使用了回调后程序就异步化了。</p>
    <p>回调函数在完成任务后备调用，Node使用了大量的回调，Node所有API都支持回调函数。回调函数很大程度上提高了Node的性能，可以处理大量的并发请求。</p>
    <p>回调函数一般作为函数的最后一个参数</p>
  </div>
</template>
<script>
export default {
  name: 'NodeCallback'
}
</script>
