<template>
  <div>
    <h3>ES6</h3>
    <el-divider/>
    <h4>1.let、const</h4>
    <p>
      在开发中，默认使用const，只有当确实需要改变变量的值的时候才是用let，
    </p>
    <el-divider/>
    <h4>2.模板字符串</h4>
    <p>
      在拼接字符串的时候尽量使用模板字符串
    </p>
    <el-image :src="url1"/>
    <el-divider/>
    <h4>3.箭头函数</h4>
    <p>
      优先使用箭头函数，下面几种情况避免使用箭头函数：
      <ul>
        <li>使用箭头函数定义对象的方法</li>
        <li>定义原型方法</li>
        <li>作为事件的回调函数</li>
      </ul>
    </p>
    <el-divider/>
    <!-- 回到顶部 -->
    <el-backtop/>
    <h4>4.Set、Map</h4>
    <p>数组去重：[...new Set(Array)]</p>
    <p>条件语句的优化：</p>
    <el-image :src="url2"/>
    <el-divider/>
    <h4>5.for...of...</h4>
    <p>
      遍历范围
      <ul>
        <li>数组</li>
        <li>Set</li>
        <li>Map</li>
        <li>类数组对象</li>
        <li>Generator对象</li>
        <li>字符串</li>
      </ul>
    </p>
    <p>
      优势：结合了forEach的简洁性和中断循环的能力。
    </p>
    <p>
      遍历Map
    </p>
    <el-image :src="url3"/>
  </div>
</template>
<script>
export default {
  name: 'Basics',
  data () {
    return {
      url1: require('./asset/模板字符串.png'),
      url2: require('./asset/优化条件语句.png'),
      url3: require('./asset/遍历Map.png')
    }
  }
}
</script>
