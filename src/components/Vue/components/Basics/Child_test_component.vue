<template>
  <div>
    <h4>
      \(^o^)/~用来测试的子组件
    </h4>
    <span>{{`这是从我爸爸那继承来的口头禅————${msg}`}}</span>
  </div>
</template>
<script>
export default {
  name: 'ChildTestComponent',
  props: [
    'msg'
  ],
  data () {
    return {
      childData: '我是儿子'
    }
  },
  created () {
    this.fn()
  },
  methods: {
    fn () {
      this.$emit('pfn', this.childData)
    }
  }
}
</script>
