<template>
  <div>
    <h3>图片</h3>
    <el-divider/>
    <h4>响应式图片</h4>
    <p>通过为图片添加.img-responsive类可以让图片实现响应式布局。本质就是为图片设置width:100%; height:auto; display:block;让图片在其父元素中更好的缩放。</p>
    <p>如果想让.img-responsive类图像水平居中，使用.cebter-block类，</p>
    <el-divider/>
    <h4>图像形状</h4>
    <p>.img-rounded: 圆角</p>
    <p>.img-circle：圆形</p>
    <p>.img-thumbnail</p>
  </div>
</template>
<script>
export default {
  name: 'MyImg'
}
</script>
