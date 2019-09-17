<template>
  <div>
    <h3>我的新表单</h3>
    <div id="add">
      <p>123</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CreateFrom',
  created () {
    // this.addInput()
    // var para = document.createElement('p')
    // var node = document.createTextNode('这是一个新的段落。')
    // para.appendChild(node)
    // var element = document.getElementById('add')
    // element.appendChild(para)
  },
  methods: {
    addInput () {
      var div = document.getElementById('add')
      var input = document.createElement('p')
      var node = document.createTextNode('1234')
      input.appendChild(node)
      div.appendChild(input)
    }
  }
}
</script>
