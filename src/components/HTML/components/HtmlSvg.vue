<template>
  <div>
    <h3>Html SVG</h3>
    <el-divider/>
    <h4>SVG定义</h4>
    <p>SVG是可伸缩矢量图形，用于定义网络的基于矢量的图形，SVG是用XML格式定义图形，SVG图形在放大或改变尺寸的情况下其图像
      质量不会有损失，SVG是万维网联盟的标准
    </p>
    <h4>SVG的优势</h4>
    <ul>
      <li>SVG图像可以通过文本编辑器创建和修改</li>
      <li>SVG图像可以被搜索、索引、脚本化或压缩</li>
      <li>SVG图像是可伸缩的</li>
      <li>SVG图像可在任何分辨率下被高质量的打印</li>
      <li>SVG图形可在质量不下降的情况下被放大</li>
    </ul>
    <h4>canvas 与 svg</h4>
    <p>canvas是通过JavaScript绘制2D图形，canvas是逐像素绘制的，在canvas中，一旦图像被绘制完成，它将不会得到浏览器的
      关注，如果其位置发生变化，南无整个场景需要重新绘制，包括或许已经被图像覆盖的对象。
    </p>
    <p>svg是使用xml描述2D图形，svg基于xml，svg dom中每一个元素都是可用的，可以为每一个元素附加JavaScript事件处理器
      在svg中每一个绘制的图形被视为对象，如果svg对象的属性发生变化，浏览器能够自动重现图形。
    </p>
    <strong>canvas和svg的比较</strong>
    <p>canvas:</p>
    <ul>
      <li>依赖分辨率</li>
      <li>不支持事件处理器</li>
      <li>弱的文本渲染能力</li>
      <li>能够以.png或.jpg的形式保存结果图像</li>
      <li>最合适图像密集型的游戏，其中的很多对象会被频繁的重绘</li>
    </ul>
    <p>svg</p>
    <ul>
      <li>不依赖分辨率</li>
      <li>支持事件处理器</li>
      <li>最合适带有大型渲染区域的应用程序，比如谷歌地图</li>
      <li>复杂度高会减慢渲染速度（任何过度使用dom的应用都不快）</li>
      <li>不适合游戏应用</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'HtmlSvg'
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
