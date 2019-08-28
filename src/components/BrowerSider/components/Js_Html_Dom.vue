<template>
  <div>
    <h3>javascript Dom方法</h3>
    <div class="content-div">
      <div>
        <h4>查找HTML元素</h4>
        <p>document.getElementById(id)：通过元素id查找元素</p>
        <p>document.getElementByTagName(name)：通过标签名查找元素</p>
        <p>document.getElementByClassName(name)：通过类名查找元素</p>
      </div>
      <div>
        <h4>改变HTML元素</h4>
        <p>element.innerHTML = new html comtent ：改变元素的innerHTML</p>
        <p>element.attribute = new value ：改变HTML元素的属性值</p>
        <p>element.setAttribute(attribute, vaue) ：改变HTML元素的属性值</p>
        <p>element.style.property = new style ：改变HTML元素的样式</p>
      </div>
      <div>
        <h4>添加或删除元素</h4>
        <p>document.createElement(element)：创建HTML元素</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'JsHtmlDom'
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
