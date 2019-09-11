<template>
  <div>
    <h3>css难点</h3>
    <el-divider/>
    <h4>css选择器</h4>
    <ul>
      <li>
        <h5>后代选择器</h5>
        <p>用空格隔开</p>
      </li>
      <li>
        <h5>子元素选择器</h5>
        <p>用>隔开</p>
      </li>
      <li>
        <h5>相邻兄弟选择器</h5>
        <p>用+隔开</p>
      </li>
      <li>
        <h5>普通兄弟选择器</h5>
        <p>用~隔开</p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'CssDifficulty'
}
</script>
<style scoped>
h4 {
  border-left: 3px solid rgb(83, 30, 30);
  border-bottom: 1px solid rgb(183, 130, 130);
}
</style>
