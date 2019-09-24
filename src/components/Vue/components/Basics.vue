<template>
  <div>
    <h3>基础</h3>
    <el-tabs type="card">
      <el-tab-pane label="计算属性和侦听器">
        <my-watch/>
      </el-tab-pane>
      <el-tab-pane label="组件通讯">
        <component-communication/>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import MyWatch from './Basics/MyWatch'
import ComponentCommunication from './Basics/Component_communication'
export default {
  name: 'Basics',
  components: {
    MyWatch,
    ComponentCommunication
  }
}
</script>
