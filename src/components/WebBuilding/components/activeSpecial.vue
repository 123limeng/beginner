<template>
  <div>
    <h3>特效</h3>
    <el-divider/>
    <h4>人脸识别动态图</h4>
    <div class="face">
      <!-- <el-image :src="url"/> -->
    </div>
  </div>
</template>
<script>
export default {
  name: 'ActiveSpecial',
  data () {
    return {
      url: require('./1.png')
    }
  }
}
</script>
<style scoped>
.face {
  width: 200px;
  height: 200px;
  background:
    -webkit-linear-gradient(#03a9f4, #03a9f4),
    -webkit-linear-gradient(90deg, #ffffff33 1px, transparent 0, transparent 19px),
    -webkit-linear-gradient(#ffffff33 1px, transparent 0, transparent 19px),
    -webkit-linear-gradient(transparent, #2196f3);
  background-size: 100% 1.5%, 10% 100%, 100% 10%, 100% 100%;
  background-repeat: no-repeat, repeat, repeat, repeat;
  background-position: 0 0, 0 0, 0 0, 0 0;
  clip-path: polygon(0% 0%, 100% 0%, 100% 1.5%, 0% 1.5%);
  animation: move 2s linear infinite;
}
@keyframes move{
  to{
    background-position: 0 100%, 0 0, 0 0, 0 0;
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
  }
}
</style>
