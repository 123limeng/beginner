<template>
  <div>
    <h4>基础用法</h4>
    <div>
      <el-carousel class="carousel-size block" height="250px">
        <el-carousel-item v-for="item in images" :key="item">
          <!-- <h3 class="small">{{ item }}</h3> -->
          <img :src="item.item" alt="">
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TypicalCarousel',
  data () {
    return {
      images: [
        {
          item: require('./asset/array.png')
        },
        {
          item: require('./asset/array2.png')
        },
        {
          item: require('./asset/1.jpg')
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
