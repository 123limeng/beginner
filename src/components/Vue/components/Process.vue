<template>
  <div>
    <h3>异步更新队列</h3>
    <p>tick   nextTick</p>
    <h3>过渡效果</h3>
    <p>vue在插入、更新或移出Dom时，提供多种不同方式的应用过渡效果。</p>
    <p>包括以下工具：</p>
    <ul>
      <li>在css过渡和动画中自动应用class</li>
      <li>可以配合使用第三方css动画库，如Animate.css</li>
      <li>在过渡钩子函数中使用JavaScript直接操作Dom</li>
      <li>可以配合使用第三方JavaScript动画库，如Velocity.js</li>
    </ul>
    <h4>单元素/组件过渡</h4>
    <p>vue提供了transition的封装组件，在下列情境中可以给任何元素和组件添加entering/leaving过渡</p>
    <ul>
      <li>条件渲染（使用v-if）</li>
      <li>条件展示（使用v-show）</li>
      <li>动态组件</li>
      <li>组件根节点</li>
    </ul>
    <h4>过渡的-css-类名</h4>
    <p>有4个类名在entering/leaving的过渡中切换</p>
    <ol>
      <li>v-enter：定义进入过渡的开始状态，在元素被插入时生效，在下一帧移出</li>
      <li>v-enter-active：定义进入过渡的结束状态，在元素被插入时生效，在transiton/animation完成之后移出</li>
      <li>v-leave：定义离开过渡的开始状态，在离开过渡被触发时生效，在下一帧移除。</li>
      <li>v-leave-active：定义离开过渡的结束状态，在离开过渡被触发时生效，在transiton/animation完成之后移除</li>
    </ol>
    <p>v-是类名前缀，比如name='my-transition'，就是my-transition-enter/my-transition-leave</p>
  </div>
</template>
<script>
export default {
  name: 'MyProcess',
  data () {
    return {
      message: '',
      show: true
    }
  },
  methods: {
    updataMessage () {
      this.message = '123'
      console.log(this.message)
      this.$nextTick(function () {
        console.log(this.message)
      })
    }
  }
}
</script>
<style scoped>
h3 {
  border-left: 3px solid #545454;
  border-bottom: 1px solid #545454;
}
</style>
