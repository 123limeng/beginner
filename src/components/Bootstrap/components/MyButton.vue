<template>
  <div>
    <h3>按钮</h3>
    <el-divider/>
    <h4>可作为按钮使用的标签或元素</h4>
    <p>可以为a、button、input添加button类，设置按钮样式</p>
    <p>针对组件的注意事项：</p>
    <p style="text-indent: 50px;">虽然按钮类可以应用到a和button元素，但是导航和导航条组件只支持button元素</p>
    <p>链接作为按钮时的注意事项：</p>
    <p style="text-indent: 50px;">如果a元素被当做按钮使用，并用于在当前页面触发某些功能，而不是用于链接谋和页面或了解当前页面的其他部分，那么务必为其设置role="button"属性</p>
    <p>便于跨浏览器实现，尽量使用button</p>
    <el-divider/>
    <el-backtop/>
    <h4>预定义样式</h4>
    <p>.btn-default：默认样式</p>
    <p>.btn-primary：首选项</p>
    <p>.btn-success：成功</p>
    <p>.btn-info：信息</p>
    <p>.btn-warning：警告</p>
    <p>.btn-danger：危险</p>
    <p>.btn-link：链接</p>
    <el-divider/>
    <h4>尺寸</h4>
    <p>大按钮：.btn-lg</p>
    <p>默认尺寸：常规尺寸</p>
    <p>小按钮：.btn-sm</p>
    <p>超小按钮：.btn-xs</p>
    <el-divider/>
    <h4>激活状态</h4>
    <el-divider/>
    <h4>禁用状态</h4>
  </div>
</template>
<script>
export default {
  name: 'MyButton'
}
</script>
