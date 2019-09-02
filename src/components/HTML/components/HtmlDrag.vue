<template>
  <div>
    <h3>html拖放(drag、drop)</h3>
    <p>拖放是html5标准，是一种常见的特性，就是把对象拖到另一个位置，任何元素都可以拖放</p>
    <h4>设置元素是可拖放的</h4>
    <p style="text-indent: 50px;">
      draggable: true; 通过该属性设置元素为可拖动的。
    </p>
    <h4>规定元素被拖动时会发生什么</h4>
    <p>ondragstart</p>
    <p>setData：设置被拖对象的数据类型和值</p>
    <h4>规定在何处防止被拖动的对象</h4>
    <p>
      默认无法将数据、元素放置到其他元素中，如果需要设置允许放置，必须阻止对元素的默认处理方式。这
      要通过调用ondragover事件的event.preventDefault()方法
    </p>
    <h4>进行放置——ondrop</h4>
    <p>当放置被拖动元素时，会发生drop事件</p>
  </div>
</template>
<script>
export default {
  name: 'HtmlDrag'
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
