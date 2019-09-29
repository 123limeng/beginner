<template>
  <div>
    <el-tabs type="card">
      <el-tab-pane label="链表" name="first">
        <linked-list/>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import LinkedList from './components/Linked_List'
export default {
  name: 'DataStructure',
  components: {
    LinkedList
  }
}
</script>
