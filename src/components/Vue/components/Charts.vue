<template>
  <div>
    charts
    <ve-line :data="chartData" :setting="chartSettings"></ve-line>
    <div id="main" style="width: 600px;height:400px;"></div>
  </div>
</template>
<script>
import VeLine from 'v-charts/lib/line'
export default {
  name: 'MyCharts',
  components: {
    VeLine
  },
  data () {
    return {
      chartData: {
        columns: ['日期', '销售量', '收入'],
        rows: [
          { '日期': '1月1日', '销售量': 123, '收入': 2344 },
          { '日期': '1月2日', '销售量': 1223, '收入': 244 },
          { '日期': '1月3日', '销售量': 2123, '收入': 234 },
          { '日期': '1月4日', '销售量': 4123, '收入': 344 },
          { '日期': '1月5日', '销售量': 3123, '收入': 234 },
          { '日期': '1月6日', '销售量': 7123, '收入': 44 }
        ]
      },
      chartSettings: {}
    }
  }
}
</script>
