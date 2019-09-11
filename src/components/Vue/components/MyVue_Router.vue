<template>
  <div>
    <h3>vue-router</h3>
    <el-divider/>
    <h4>路由模式</h4>
    <ul>
      <li>hash模式</li>
      <li>history模式</li>
    </ul>
    <el-divider/>
    <el-backtop/>
    <h4>重定向和别名</h4>
    <p>重定向：</p>
    <p style="text-indent: 50px;">通过routes配置完成。</p>
    <img src="./asset/redirect.png" alt="">
    <p>别名：</p>
    <p style="text-indent: 50px;">别名就比如/a的别名是/b，这时候/b重定位到/a，就不会显示url匹配到/a，而是仍然显示/b，造成一种假象，实际匹配到的是/a</p>
    <img src="./asset/otherName.png" alt="">
    <el-divider/>
    <h4>根路径</h4>
    <p>根路径的path为'/'，由于默认使用全包含匹配，所以'/foo'也可以匹配到，如果需要精确匹配，只匹配到'/'，在router-link上设置exact属性。</p>
    <el-divider/>
    <h4>嵌套路由</h4>
    <img src="./asset/nestRouter.png" alt="">
  </div>
</template>
<script>
export default {
  name: 'MyVueRouter'
}
</script>
