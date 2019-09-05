<template>
  <div>
    <h3>栅格系统</h3>
    <p style="text-indent:100px;">--响应式、移动设备优先的流式栅格系统。</p>
    <el-divider/>
    <p>通过行和列组合实现页面布局（row-column）</p>
    <ul>
      <li>行row必须包含在.container(固定宽度)或者.container-fluid(100%宽度)中，</li>
      <li>通过行row在水平方向创建列column</li>
      <li>内容必须放置在列column中，即row的直接子元素只能是列column</li>
      <li>通过给列设置padding，可以为列与列设置间隔gutter。通过为.row元素设置负值margin抵消为.container元素设置的padding，也就间接为行row所包含的列column抵消掉了padding。</li>
      <li>如果一行包含的列大于12，多余的列将作为一个整体另起一行</li>
    </ul>
    <h4>媒体查询</h4>
    <el-divider/>
    <p>
      @media (min-width: @screen-sm-min) {...}
    </p>
    <img src="./asset/media.png" alt="媒体查询">
    <h4>栅格参数</h4>
    <el-divider/>
    <img src="./asset/parameter.png" alt="栅格参数">
    <h4>列偏移</h4>
    <el-divider/>
    <p>使用.col-md-offset-*实现列偏移，实际是通过为所选元素增加padding的方式达到目的。.col-md-offset-4就是向右偏移4个列的宽度。</p>
    <h4>列嵌套</h4>
    <el-divider/>
    <p>可以在列中再次使用.row进行嵌套</p>
    <h4>列排序</h4>
    <el-divider/>
    <p>使用.col-md-push-* 和 .col-md-pull-*可以改变列的顺序</p>
  </div>
</template>
<script>
export default {
  name: 'GridSystem'
}
</script>
