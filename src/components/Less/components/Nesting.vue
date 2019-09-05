<template>
  <div>
    <h3>@规则嵌套和冒泡</h3>
    <el-divider/>
    <p>
      @规则可以与选择器以相同的方式进行嵌套。@规则会被放在最前面，同一规则集中的其他元素的相对顺序保持不变。这就叫做冒泡。
    </p>
    <img src="./nesting.png" alt="@规则嵌套">
  </div>
</template>
<script>
export default {
  name: 'Nesting'
}
</script>
