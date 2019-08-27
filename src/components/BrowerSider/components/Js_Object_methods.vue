<template>
  <div>
    <h3>javaScript对象属性</h3>
    <div class="content-div">
      <p>javaScript对象是无序属性的集合</p>
      <p>属性通常是可以被添加、修改、删除的。但是某些属性是只读的。</p>
      <div class="border-div">
        <h4>javaScript for...in循环</h4>
        <p>使用for...in语句遍历对象的属性</p>
        <p>for...in 循环中的代码块为每个属性执行一次</p>
      </div>
      <div class="border-div">
        <h4>添加新属性</h4>
        <p>可以通过简单的赋值为已经存在的属性添加属性。</p>
        <h4>删除属性</h4>
        <p>delete关键字从对象中删除属性</p>
        <p>delete关键字会删除属性本身和属性的值</p>
        <p>删除完成之后，属性在被添加回来之前是不能使用的</p>
      </div>
      <div class="border-div">
        <h4>原型属性</h4>
        <p>javaScript对象继承了它们原型的属性。</p>
        <p>delete关键字不会删除被集成的属性，但如果删除了某个原型属性，则将影响到所有从原型继承的对象。</p>
      </div>
      <div class="border-div">
        <h3>javaScript对象方法</h3>
      </div>
      <div class="border-div">
        <h4>this 关键字</h4>
        <p>this是指拥有该javascript代码的对象</p>
      </div>
      <div class="border-div">
        <h4>添加新的方法</h4>
        <p>向对象添加新的方法是在构造器函数内部完成的</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'JsObjectMethods'
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
