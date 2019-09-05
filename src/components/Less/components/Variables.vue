<template>
  <div>
    <p>一个值在样式表中出现很多次，这时候用一个变量控制这些值，便于代码的维护</p>
    <img src="./variables.png" alt="变量">
    <p>变量可以用于控制选择器名、属性名、URLs、和@import语句</p>
    <p>变量可以先使用后声明</p>
    <p>多次声明同一个变量时，采用最后声明的值。这一点和css属性类似</p>
    <p>属性也可以作为变量</p>
    <img src="./propertyVariables.png" alt="属性作为变量">
    <p>用&运算符表示父选择器，这种多用于嵌套</p>
    <img src="./parentselector.png" alt="使用&表示父选择器">
  </div>
</template>
<script>
export default {
  name: 'MyVariables',
  data () {
    return {
    }
  }
}
</script>
