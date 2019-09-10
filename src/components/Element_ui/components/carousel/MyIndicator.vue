<template>
  <div>
    <h4>指示器</h4>
    <div>
      <el-carousel class="block carousel-size" indicator-position="outside" height="250px">
        <el-carousel-item v-for="item in images" :key="item.id">
          <img :src="item.item" alt="">
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MyIndicator',
  data () {
    return {
      images: [
        {
          id: 0,
          item: require('./asset/1.jpg')
        },
        {
          id: 1,
          item: require('./asset/2.jpg')
        },
        {
          id: 2,
          item: require('./asset/3.jpg')
        }
      ]
    }
  }
}
</script>
<style scoped>
.block {
  margin: 0 auto;
}
img {
  width: 100%;
  height: 100%;
}
.carousel-size {
  width: 50%;
  /* border: 1px solid black; */
  text-align: center;
}
.el-carousel__item h3 {
  color: #42556e;
  font-size: 14px;
  opacity: 0.75;
  line-height: 250px;
  margin: 0;
}
.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}
</style>
