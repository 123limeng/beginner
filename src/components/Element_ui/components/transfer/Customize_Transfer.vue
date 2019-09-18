<template>
  <div>
    <h3>使用render-content自定义数据项</h3>
    <el-transfer
      :titles="['左边', '右边']"
      :button-texts="['往左边', '往右边']"
      :render-content="renderFunc"
      v-model="value"
      :data="data"
      :format="{
        noChecked: '${total}',
        hasChecked: '${checked}/${total}'
      }"
      />
    <h3>使用scoped-slot自定义数据项</h3>
    <el-transfer
      :data="data"
      v-model="value"
      :titles="['left', 'right']"
      :button-texts="['toLeft', 'toRight']">
      <span slot-scope="{ option }">==>{{ option.label }}</span>
    </el-transfer>
  </div>
</template>
<script>
export default {
  name: 'CustomizeTransfer',
  data () {
    return {
      value: [],
      data: [
        {
          key: 0,
          label: '包子'
        },
        {
          key: 1,
          label: '饺子'
        }
      ],
      renderFunc (h, option) {
        return <span>>> { option.label }</span>
      }
    }
  }
}
</script>
