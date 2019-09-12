<template>
  <div>
    <h4>js数组去重的5种方法</h4>
    <el-backtop/>
    <ol>
      <li>
        <h5>遍历数组法</h5>
        <img src="./Js_test_asset/array.png" alt="遍历数组法">
        <p>利用了indexOf()，如果查找到,返回第一个结果的索引，查询不到则返回-1。也就是新数组中有这个元素就尝试下一个，如果没有就把这个元素push进新的数组中。</p>
      </li>
      <li>
        <h5>数组下标判断法</h5>
        <img src="./Js_test_asset/array2.png" alt="数组下标判断法">
        <p>这个方法也是利用indexOf()方法，如果查到元素就返回第一个结果索引，如果元素的索引和当前位置i相等就表示元素只出现一次，将元素push进新数组中。</p>
      </li>
      <li>
        <h5>排序后相邻去除法</h5>
      </li>
      <li>
        <h5>优化的遍历数组法</h5>
      </li>
      <li>
        <h5>数组遍历法</h5>
      </li>
    </ol>
  </div>
</template>
<script>
export default {
  name: 'JsTest',
  data () {
    return {
    }
  },
  created () {
    console.log('新数组' + this.handleArray([1, 3, 1, 5, 9, 0, 5, 9]))
    console.log('新数组' + this.handleArrayOne([1, 3, 1, 5, 9, 0, 5, 9]))
  },
  methods: {
    // 数组去重——遍历数组
    handleArray (arr) {
      console.log('旧数组' + arr)
      var newArray = []
      for (let i = 0; i < arr.length; i++) {
        if (newArray.indexOf(arr[i]) === -1) {
          newArray.push(arr[i])
        }
      }
      return newArray
    },
    // 下标对比
    handleArrayOne (arr) {
      console.log('旧数组' + arr)
      var newArray = []
      for (let i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) === i) {
          newArray.push(arr[i])
        }
      }
      return newArray
    }
  }
}
</script>
