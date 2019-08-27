<template>
  <div>
    <h3>javascript 对象原型</h3>
    <div class="border-div">
      <h4>原型继承</h4>
      <p>所有JavaScript对象都从原型继承属性和方法。</p>
      <p>日期对象继承自Date.prototype。数组对象继承自Array.prototype。Person对象继承自Person.prototype。</p>
      <p>Object.prototype 位于原型继承链的顶端：</p>
      <p>日期对象、数组对象和Person对象都继承Object.prototype。</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'JsObjPrototype'
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
