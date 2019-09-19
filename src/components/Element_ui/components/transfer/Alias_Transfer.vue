<template>
  <div>
    <h3>数据项属性别名</h3>
    <el-transfer
      :data="data"
      v-model="value"
      :props="{
        key: 'value',
        label: 'desc'
      }"/>
  </div>
</template>
<script>
export default {
  name: 'AliasTransfer',
  data () {
    return {
      value: [],
      data: [
        {
          value: '0',
          desc: '太极'
        },
        {
          value: '1',
          desc: '美团'
        },
        {
          value: '2',
          desc: '阿里巴巴'
        }
      ]
    }
  }
}
</script>
