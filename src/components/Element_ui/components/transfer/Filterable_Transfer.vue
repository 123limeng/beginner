<template>
  <div>
    <!-- <h3>基础用法</h3> -->
    <el-transfer filterable v-model="value" :data="data"/>
  </div>
</template>
<script>
export default {
  name: 'FilterTransfer',
  data () {
    const generateData = _ => {
      const data = []
      const city = ['上海', '北京', '广州', '深圳', '南京', '西安', '成都', '西藏']
      city.forEach((item, index) => {
        data.push({
          label: item,
          key: index
        })
      })
      return data
    }
    return {
      data: generateData(),
      // data: [
      //   {
      //     key: 0,
      //     label: '上海'
      //   },
      //   {
      //     key: 1,
      //     label: '西安'
      //   }
      // ],
      value: [1]
    }
  }
}
</script>
