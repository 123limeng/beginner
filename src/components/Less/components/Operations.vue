<template>
  <div>
    <h3>运算</h3>
    <el-divider/>
    <p>
      算术运算符可以对任何数字、颜色或变量进行计算，如果可能的话，算术运算符在进行加、减或比较之前会
      进行单位换算。计算结果以最左侧操作数的单位为准。如果单位换算无效或失去意义，则忽略单位。
    </p>
    <img src="./operations.png" alt="算数运算符计算">
    <h4>calc()特例</h4>
    <img src="./operationsCalc.png" alt="calc特例">
  </div>
</template>
<script>
export default {
  name: 'Operations'
}
</script>
