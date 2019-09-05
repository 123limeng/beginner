<template>
  <div>
    <h3>Escaping转义</h3>
    <el-divider/>
    <p>
      允许使用任意字符串作为属性或变量值，任何~"anything"或~'anything'形式的内容都将按原样输出。除非interporation。
    </p>
    <img src="./escaping.png" alt="转义">
  </div>
</template>
<script>
export default {
  name: 'Escaping'
}
</script>
