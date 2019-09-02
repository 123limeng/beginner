<template>
  <div>
    <h3>Html画布</h3>
    <el-button type="primary" @click="beginCanvas">画矩形</el-button>
    <el-button type="primary" @click="beginLine">画线条</el-button>
    <el-button type="primary" @click="beginCircle">画圆</el-button>
    <el-button type="primary" @click="beginGradient">绘制渐变背景</el-button>
    <el-divider/>
    <canvas id="myCanvas" width="400px" height="400px"></canvas>
  </div>
</template>
<script>
export default {
  name: 'HtmlCanvas',
  mounted () {
    // this.beginCanvas()
  },
  methods: {
    // 画矩形
    beginCanvas () {
      var c = document.getElementById('myCanvas')
      c.height = c.height
      var cxt = c.getContext('2d')
      cxt.fillStyle = '#FF0000'
      cxt.fillRect(0, 0, 150, 75)
      cxt.fillStyle = '#0000ff'
      cxt.fillRect(0, 75, 200, 200)
      cxt.stroke()
    },
    // 画线条
    beginLine () {
      var c = document.getElementById('myCanvas')
      c.height = c.height
      var cxt = c.getContext('2d')
      cxt.moveTo(10, 80)
      cxt.lineTo(210, 80)
      cxt.lineTo(60, 220)
      cxt.lineTo(110, 0)
      cxt.lineTo(170, 220)
      cxt.lineTo(10, 80)
      cxt.stroke()
    },
    // 画圆
    beginCircle () {
      var c = document.getElementById('myCanvas')
      c.height = c.height
      var cxt = c.getContext('2d')
      cxt.beginPath()
      cxt.fillStyle = '#ff0000'
      cxt.arc(200, 200, 150, Math.PI * 2, 0, false)
      // cxt.closePath()
      // cxt.fill()
      cxt.stroke()
    },
    // 绘制渐变背景
    beginGradient () {
      var c = document.getElementById('myCanvas')
      c.height = c.height
      var cxt = c.getContext('2d')
      var bgc = cxt.createLinearGradient(0, 0, 400, 400)
      bgc.addColorStop(0, '#ff0000')
      bgc.addColorStop(0.3, 'orange')
      bgc.addColorStop(0.5, '#00ff00')
      bgc.addColorStop(1, '#0000ff')
      cxt.fillStyle = bgc
      cxt.fillRect(0, 0, 400, 400)
    }
  }
}
</script>
<style scoped>
.content-div {
  width: 100%;
  border-top: 1px solid #cccccc;
  margin-top:30px;
}
.border-div {
  width: 100%;
  border-top: 1px solid #cccccc;
  border-bottom: 1px solid #cccccc;
}
.table-margin-top {
  margin-bottom: 20px;
}
h4 {
  border-left: 4px solid #333f44;
  border-bottom: 1px solid #333f44;
}
</style>
