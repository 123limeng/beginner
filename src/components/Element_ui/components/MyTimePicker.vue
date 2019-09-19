<template>
  <div>
    <h3>时间选择器</h3>
    <el-divider/>
    <h4>固定时间</h4>
    <el-time-select
      v-model="value1"
      :picker-options="{
        start: '08:30',
        step: '00:10',
        end: '18:30'
      }"/>
    <el-divider/>
    <h4>任意时间</h4>
    <el-row>
      <el-col :span="12">
        <label>滚动选择</label>
        <el-time-picker
          v-model="value2"
          :picker-options="{
            selectabelRange: '00:00:00 - 23:59:59'
          }"/>
      </el-col>
      <el-col :span="12">
        <label>箭头选择</label>
        <el-time-picker
          v-model="value2"
          :picker-options="{
            selectabelRange: '00:00:00 - 23:59:59'
          }"
          arrow-control/>
      </el-col>
    </el-row>
    <el-divider/>
    <h4>固定时间范围</h4>
    <el-time-select
      v-model="startTime"
      :picker-options="{
        start: '08:30',
        step: '00:15',
        end: '18:30'
      }"/>
    <el-time-select
      v-model="endTime"
      :picker-options="{
        start: '08:30',
        step: '00:15',
        end: '18:30',
        minTime: startTime
      }"/>
    <el-divider/>
    <h4>任意时间范围</h4>
    <el-row>
      <el-col :span="12">
        <label>默认滚动选择</label>
        <el-time-picker
          is-range
          v-model="time"
          range-separator="-"
          start-placeholde="开始时间"
          end-placeholde="结束时间"/>
      </el-col>
      <el-col :span="12">
        <label>箭头选择</label>
        <el-time-picker
          is-range
          arrow-control
          v-model="time"
          range-separator="-"
          start-placeholde="开始时间"
          end-placeholde="结束时间"/>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: 'MyTimePicker',
  data () {
    return {
      value1: '',
      value2: '',
      startTime: '',
      endTime: '',
      time: ''
    }
  }
}
</script>
