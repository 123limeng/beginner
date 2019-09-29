<template>
  <div>
    <h3>日期选择器</h3>
    <div>
      <el-button type="text" @click="reduceYear"><i class="el-icon-arrow-left"></i></el-button>
      <el-button type="text" @click="reduceMonth"><i class="el-icon-d-arrow-left"></i></el-button>
      <span>{{ `${year} 年${month}月` }}</span>
      <el-button type="text" @click="addYear"><i class="el-icon-d-arrow-right"></i></el-button>
      <el-button type="text" @click="addMonth"><i class="el-icon-arrow-right"></i></el-button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DatePicker',
  data () {
    return {
      cols: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
      year: undefined,
      month: undefined
    }
  },
  created () {
    console.log(new Date().getMonth() + 1)
    this.getDateYearMonth()
  },
  methods: {
    getCell () {
      // 123
    },
    getDateYearMonth () {
      const date = new Date()
      this.year = date.getFullYear()
      this.month = date.getMonth() + 1
    },
    addMonth () {
      if (this.month === 12) {
        this.month = 1
        this.year++
      } else {
        this.month++
      }
    },
    addYear () {
      this.year++
    },
    reduceMonth () {
      if (this.month === 1) {
        this.month = 12
        this.year--
      } else {
        this.month--
      }
    },
    reduceYear () {
      this.year--
    }
  }
}
</script>
