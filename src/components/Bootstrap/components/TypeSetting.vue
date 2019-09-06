<template>
  <div>
    <h3>排版</h3>
    <h4>标题</h4>
    <el-divider/>
    <p>bootStrap提供了.h1到.h6类，为内联属性的文本赋予标题的样式。</p>
    <p>标题内可以通过small标签或者.small类设置副标题。</p>
    <h4>页面主题</h4>
    <el-divider/>
    <p>bootstrap将全局的font-size设置为14px，line-height设置为1.428，这些属性直接赋予body元素和所有段落元素。p元素还被设置了1/2行高的底部外边距。</p>
    <p>通过.lead类可以让段落突出显示。</p>
    <h4>使用less工具构建</h4>
    <el-divider/>
    <p>variables.less文件中定义了两个less变量决定了排版尺寸：@font-size-base和@line-height-base</p>
    <p style="text-indent: 50px">@font-size-base决定了全局的font-size基准。</p>
    <p style="text-indent: 50px">@line-height-base定义了line-height基准。</p>
    <p>可以使用这些变量和一些简单的公式计算出其他所有页面元素的margin、padding、line-height，自定义这些变量就可以改变bootstrap的默认样式。</p>
    <h4>内联文本元素</h4>
    <el-divider/>
    <p>marked text：用mark标签</p>
    <p>被删除文本：用del标签</p>
    <p>无用文本：用s标签</p>
    <p>插入文本：用ins标签</p>
    <p>带下划线的文本：用u标签</p>
    <p>小号文本：用small标签</p>
  </div>
</template>
<script>
export default {
  name: 'TypeSetting'
}
</script>
