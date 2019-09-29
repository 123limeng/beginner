<template>
  <div>
    <h3>Node.js 事件循环</h3>
    <el-divider/>
    <p>Node.js是单进程单线程的应用，但是因为V8引擎接口提供的异步执行回调接口，通过
      这些接口可以处理大量的并发，所以性能非常的高。
    </p>
    <p>
      Node.js基本上所有的事件机制都可以使用设计者模式中的观察者模式
    </p>
  </div>
</template>
<script>
export default {
  name: 'NodeLoop'
}
</script>
