<template>
  <div>
    <h3>组件通讯</h3>
    <el-divider/>
    <h4>父组件到子组件</h4>
    <p>
      方式：通过子组件的props属性传递数据，props是一个数组。
    </p>
    <p>
      注意：属性的值必须在组件中通过props显示指定，否则不会生效。
    </p>
    <p>
      传递过来的props属性的用法与data属性的用法相同。
    </p>
    <el-input v-model="parentData"/>
    <div style="width:100%; height: 100px; background-color: skyblue;">
      <child-test-component v-bind:msg="parentData" @pfn="pfn"/>
    </div>
    <el-divider/>
    <el-backtop/>
    <h4>子组件到父组件</h4>
    <p>
      方式：父组件给子组件传递一个函数，由子组件调用这个函数，
    </p>
    <p>
      步骤：
    </p>
    <p style="text-indent:50px;">
      1.在父组件中调用方法
    </p>
    <p style="text-indent:50px;">
      2.在子组件 组件引入标签 中绑定自定义事件 v-on:自定义事件名="父组件中的方法"
    </p>
    <p style="text-indent:50px;">
      3.子组件通过$emit()触发自定义事件，this.$emit(pfn, 参数列表)
    </p>
    <span>{{ `我从儿子那里得到的数据：${ value }` }}</span>
    <el-divider/>
    <h4>非父子组件</h4>
    <p>
      非父子组件可以用bus实现通信
    </p>
  </div>
</template>
<script>
import ChildTestComponent from './Child_test_component'
export default {
  name: 'ComponentCommunication',
  components: {
    ChildTestComponent
  },
  data () {
    return {
      parentData: '我是你爸爸',
      value: ''
    }
  },
  methods: {
    pfn (data) {
      this.value = data
    }
  }
}
</script>
