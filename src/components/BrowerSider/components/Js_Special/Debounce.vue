<template>
  <div>
    <h3>防抖</h3>
    <p>
      当遇到一些频繁触发事件，可能会造成浏览器的卡顿，解决这个问题得一种方法就是防抖。
    </p>
    <p style="text-indent: 50px;">
      防抖的原理：你尽管触发事件，但是我一定在事件触发n秒后才执行，如果你在事件触发n秒内又
      触发了这个事件，就以新的事件的时间为准，n秒后执行。总之，就是要等事件触发n秒内不再触
      发事件，才执行。
    </p>
    <el-image :src="url"/>
  </div>
</template>
<script>
export default {
  name: 'MyDebounce',
  data () {
    return {
      url: require('../Js_test_asset/防抖.png')
    }
  }
}
</script>
