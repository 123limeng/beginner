<template>
  <div>
    <el-cascader
      v-model="value"
      :options="options"
      :props="tips"
      clearable
      :show-all-levels="false"
      @change="handleChange">
    </el-cascader>
  </div>
</template>
<script>
export default {
  name: 'TypicalCascader',
  data () {
    return {
      value: [],
      options: [
        {
          value: 'shanxi',
          label: '陕西',
          children: [
            {
              value: 'xian',
              label: '西安',
              children: [
                {
                  value: 'huxian',
                  label: '户县'
                },
                {
                  value: 'changan',
                  label: '长安'
                }
              ]
            },
            {
              value: 'xianyang',
              label: '咸阳',
              children: [
                {
                  value: 'xunyi',
                  label: '旬邑'
                },
                {
                  value: 'binxian',
                  label: '彬县'
                }
              ]
            },
            {
              value: 'baoji',
              label: '宝鸡'
            }
          ]
        },
        {
          value: 'shanxi',
          label: '陕西',
          children: [
            {
              value: 'xian',
              label: '西安',
              children: [
                {
                  value: 'huxian',
                  label: '户县'
                },
                {
                  value: 'changan',
                  label: '长安'
                }
              ]
            },
            {
              value: 'xianyang',
              label: '咸阳',
              children: [
                {
                  value: 'xunyi',
                  label: '旬邑'
                },
                {
                  value: 'binxian',
                  label: '彬县'
                }
              ]
            },
            {
              value: 'baoji',
              label: '宝鸡'
            }
          ]
        },
        {
          value: 'shanxi',
          label: '陕西',
          children: [
            {
              value: 'xian',
              label: '西安',
              children: [
                {
                  value: 'huxian',
                  label: '户县'
                },
                {
                  value: 'changan',
                  label: '长安'
                }
              ]
            },
            {
              value: 'xianyang',
              label: '咸阳',
              children: [
                {
                  value: 'xunyi',
                  label: '旬邑'
                },
                {
                  value: 'binxian',
                  label: '彬县'
                }
              ]
            },
            {
              value: 'baoji',
              label: '宝鸡'
            }
          ]
        }
      ],
      tips: {
        expandTrigger: 'hover',
        multiple: true,
        level: 'level'
      }
    }
  },
  methods: {
    handleChange (value) {
      console.log(value)
    }
  }
}
</script>
