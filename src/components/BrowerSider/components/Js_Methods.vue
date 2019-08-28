<template>
  <div>
    <h3>javascript 函数</h3>
    <div class="content-div">
      <div class="border-div">
        <h4>函数定义</h4>
        <p>JavaScript函数通过function关键字定义。</p>
        <p>匿名函数：没有函数名</p>
        <p>函数提升hoisting：JavaScript函数能够在被声明之前调用；使用表达式定义的函数不会提升</p>
      </div>
      <div class="border-div">
        <h4>箭头函数</h4>
        <p>箭头函数允许使用简单的语法编写函数表达式，不需要使用function关键字、return关键字、花括号等。</p>
        <p>箭头函数没有它们自己的this，不适合定义对象方法</p>
        <p>箭头函数未被提升，在使用之前必须定义</p>
        <p>使用const比var安全，因为函数表达式始终是常量值</p>
        <p>如果函数是单个语句，则只能省略return关键字和大括号。因此，保留它们可能是一个好的习惯。</p>
      </div>
      <div class="border-div">
        <h4>函数参数</h4>
        <p>javascript函数不会对参数值进行任何检查。</p>
        <p><strong>函数参数（parameter）：</strong>指函数定义中列出的名称</p>
        <p><strong>函数参数（argument）：</strong>指传递到函数或由函数接收的真实值</p>
        <h4>参数规则：</h4>
        <ul>
          <li>javascript函数不会为参数(parameter)规定数据类型</li>
          <li>javascript函数不会对所传递的参数(argument)实行类型检查</li>
          <li>javascript函数不会检查所接收参数(argument)的数量</li>
        </ul>
        <p>javascript函数有一个argument内置对象，包含函数调用参数的数组</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'JsMethods'
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
</style>
