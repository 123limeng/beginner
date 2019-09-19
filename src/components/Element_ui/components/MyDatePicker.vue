<template>
  <div>
    <h3>日期选择器</h3>
    <el-divider/>
    <h4>选择日</h4>
    <el-row>
      <el-col :span="12">
        <label>默认</label>
        <el-date-picker
          v-model="value1"
          type="date"
          placeholder="请选择日期"/>
      </el-col>
      <el-col :span="12">
        <label>带快捷键</label>
        <el-date-picker
          v-model="value2"
          type="date"
          placeholder="请选择日期"
          :picker-options="picker_options"/>
      </el-col>
    </el-row>
    <el-divider/>
    <h4>选择其他日期单位</h4>
    <el-row :gutter="20">
      <el-col :span="12">
        <label>选择周</label>
        <el-date-picker
          v-model="value3"
          type="week"
          format="yyyy 第 WW 周"
          placeholder="请选择周"/>
      </el-col>
      <el-col :span="12">
        <label>选择年</label>
        <el-date-picker
          v-model="value4"
          type="year"
          placeholder="选择年"/>
      </el-col>
    </el-row>
    <div style="height:20px;"></div>
    <el-row :gutter="20">
      <el-col :span="12">
        <label>选择月</label>
        <el-date-picker
          v-model="value5"
          type="month"
          placeholder="选择月"/>
      </el-col>
      <el-col :span="12">
        <label>多个日期</label>
        <el-date-picker
          v-model="value6"
          type="dates"
          placeholder="选择一个或多个日期"/>
      </el-col>
    </el-row>
    <el-divider/>
    <h4>选择日期范围</h4>
    <el-row>
      <el-col :span="12">
        <label>默认</label>
        <el-date-picker
          v-model="value7"
          type="daterange"
          range-separator="至"
          start-placeholder="开始时间"
          end-placeholder="结束时间"/>
      </el-col>
      <el-col :span="12">
        <label>有快捷键</label>
        <el-date-picker
          v-model="value8"
          type="daterange"
          range-separator="至"
          start-placeholder="开始时间"
          end-placeholder="结束时间"
          :picker-options="picker_options2"/>
      </el-col>
    </el-row>
    <el-divider/>
    <h4>选择月份范围</h4>
    <el-row>
      <el-col :span="12">
        <label>默认</label>
        <el-date-picker
          v-model="value9"
          type="monthrange"
          range-separator="至"
          start-placeholder="开始时间"
          end-placeholder="结束时间"/>
      </el-col>
      <el-col :span="12">
        <label>有快捷键</label>
        <el-date-picker
          v-model="value10"
          type="monthrange"
          range-separator="至"
          start-placeholder="开始时间"
          end-placeholder="结束时间"
          :picker-options="picker_options3"/>
      </el-col>
    </el-row>
    <el-divider/>
    <h4>日期格式</h4>
    <p>
      使用format指定输入框的格式，使用value-format指定绑定值的格式。
    </p>
    <p>
      默认情况下，组件接收并返回Date对象
    </p>
    <el-divider/>
    <h4>默认显示日期</h4>
    <p>
      选择日期范围时，默认的时间部分都是当天的0点0分0秒，使用default-time可以分别指定具体的时刻:default-time="['00:00:00', '23:59:59']"
    </p>
  </div>
</template>
<script>
export default {
  name: 'MyDatePicker',
  data () {
    return {
      value1: '',
      value2: '',
      value3: '',
      value4: '',
      value5: '',
      value6: '',
      value7: '',
      value8: '',
      value9: '',
      value10: '',
      picker_options: {
        firstDayOfWeek: 2,
        disabledDate (time) {
          return time.getTime() > Date.now()
        },
        shortcuts: [{
          text: '今天',
          onClick (picker) {
            picker.$emit('pick', new Date())
          }
        }, {
          text: '昨天',
          onClick (picker) {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24)
            picker.$emit('pick', date)
          }
        }, {
          text: '一周前',
          onClick (picker) {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', date)
          }
        }]
      },
      picker_options2: {
        shortcuts: [
          {
            text: '本月',
            onClick (picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
              picker.$emit('pick', [start, end])
            }
          }, {
            text: '最近一个月',
            onClick (picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
              picker.$emit('pick', [start, end])
            }
          }, {
            text: '最近三个月',
            onClick (picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
              picker.$emit('pick', [start, end])
            }
          }
        ]
      },
      picker_options3: {
        shortcuts: [
          {
            text: '本月',
            onClick (picker) {
              const start = new Date()
              const end = new Date()
              picker.$emit('pick', [start, end])
            }
          },
          {
            text: '今年至今',
            onClick (picker) {
              const start = new Date(new Date().getFullYear(), 0)
              const end = new Date()
              picker.$emit('pick', [start, end])
            }
          },
          {
            text: '最近六个月',
            onClick (picker) {
              const start = new Date()
              const end = new Date()
              start.setMonth(start.getMonth() - 6)
              picker.$emit('pick', [start, end])
            }
          }
        ]
      }
    }
  }
}
</script>
