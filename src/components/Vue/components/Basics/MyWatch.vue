<template>
  <div>
    <h3>计算属性和侦听器</h3>
    <p>watch是一个对象，键是需要观察的表达式，值是对应回调函数。</p>
    <p>作用是当表达式的值发生变化的时候，调用对应的回调函数，完成响应的监视操作。</p>
    <div>
      <el-input v-model="value" type="number"/>
    </div>
    <p>计算属性基于它们的依赖进行缓存的，只有在依赖发生改变是才进行计算。</p>
    <p>
      模板语法Mustache语法中不能放入太多的逻辑，否则会让模板过重，难以理解和维护。
    </p>
    <p>
      computed中的属性不能与data中的属性同名，否则会报错。
    </p>
  </div>
</template>
<script>
export default {
  name: 'MyWatch',
  data () {
    return {
      value: '',
      changevalue: ''
    }
  },
  watch: {
    value: function () {
      console.log(this.value * 2)
    }
  }
}
</script>
