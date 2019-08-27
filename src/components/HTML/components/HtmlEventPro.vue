<template>
  <div>
    <h3>Html 事件属性</h3>
    <div class="content-div">
      <div class="border-div">
        <h4>window 事件属性</h4>
        <el-table
          :data="windowList"
          border
          class="table-margin-top">
          <el-table-column label="属性">
            <template slot-scope="scope">
              <span>{{ scope.row.pro }}</span>
            </template>
          </el-table-column>
          <el-table-column label="值">
            <template>
              <span>script</span>
            </template>
          </el-table-column>
          <el-table-column label="描述">
            <template slot-scope="scope">
              <span>{{ scope.row.dec }}</span>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="border-div">
        <h4>Form 事件属性</h4>
        <p>有HTML表单内动作触发的事件</p>
        <el-table
          :data="formList"
          border
          class="table-margin-top">
          <el-table-column label="属性">
            <template slot-scope="scope">
              <span>{{ scope.row.pro }}</span>
            </template>
          </el-table-column>
          <el-table-column label="值">
            <template>
              <span>script</span>
            </template>
          </el-table-column>
          <el-table-column label="描述">
            <template slot-scope="scope">
              <span>{{ scope.row.dec }}</span>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="border-div">
        <h4>keyboard 事件属性</h4>
        <el-table
          :data="keyboardList"
          border
          class="table-margin-top">
          <el-table-column label="属性">
            <template slot-scope="scope">
              <span>{{ scope.row.pro }}</span>
            </template>
          </el-table-column>
          <el-table-column label="值">
            <template>
              <span>script</span>
            </template>
          </el-table-column>
          <el-table-column label="描述">
            <template slot-scope="scope">
              <span>{{ scope.row.dec }}</span>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="border-div">
        <h4>mouse 事件</h4>
        <p>由鼠标或者类似用户动作触发的事件</p>
        <el-table
          :data="mouseList"
          border
          class="table-margin-top">
          <el-table-column label="属性">
            <template slot-scope="scope">
              <span>{{ scope.row.pro }}</span>
            </template>
          </el-table-column>
          <el-table-column label="值">
            <template>
              <span>script</span>
            </template>
          </el-table-column>
          <el-table-column label="描述">
            <template slot-scope="scope">
              <span>{{ scope.row.dec }}</span>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="border-div">
        <h4>media 事件</h4>
        <p>由媒体触发的事件</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HtmlEventPro',
  data () {
    return {
      windowList: [
        {
          pro: 'onafterprint',
          dec: '文档打印之后运行的脚本'
        },
        {
          pro: 'onbeforeprint',
          dec: '文档打印之前运行的脚本'
        },
        {
          pro: 'onbeforeunload',
          dec: '文档卸载之前运行的脚本'
        },
        {
          pro: 'onerror',
          dec: '当错误发生时运行的脚本'
        },
        {
          pro: 'onload',
          dec: '页面结束加载时触发'
        },
        {
          pro: 'onresize',
          dec: '当浏览器窗口被调整大小时触发'
        },
        {
          pro: 'onunload',
          dec: '一旦页面已下载（或浏览器窗口已被关闭）'
        }
      ],
      formList: [
        {
          pro: 'onblur',
          dec: '元素失去焦点时运行的脚本'
        },
        {
          pro: 'onchange',
          dec: '当元素值被改变时运行的脚本'
        },
        {
          pro: 'onfocus',
          dec: '当元素获取焦点时运行的脚本'
        },
        {
          pro: 'onselect',
          dec: '当元素内容被选中时运行的脚本'
        },
        {
          pro: 'onsubmit',
          dec: '当提交表单时触发'
        }
      ],
      keyboardList: [
        {
          pro: 'onkeydown',
          dec: '用户按下按键时触发'
        },
        {
          pro: 'onkeypress',
          dec: '用户敲击按键时触发'
        },
        {
          pro: 'onkeyup',
          dec: '用户释放按键时触发'
        }
      ],
      mouseList: [
        {
          pro: 'onclick',
          dec: '元素上发生鼠标点击时触发'
        },
        {
          pro: 'ondblclick',
          dec: '元素上发生鼠标双击时触发'
        },
        {
          pro: 'ondrag',
          dec: '元素被拖动时运行的脚本'
        },
        {
          pro: 'ondragend',
          dec: '在拖动操作末端运行的脚本'
        },
        {
          pro: 'ondragenter',
          dec: '当元素被拖动到有效拖放区域时运行的脚本'
        },
        {
          pro: 'ondragleave',
          dec: '当元素离开有效拖放目标时运行'
        },
        {
          pro: 'ondragover',
          dec: '当元素在有效拖放目标上正在被拖动时运行'
        },
        {
          pro: 'ondragstart',
          dec: '在拖动操作开端运行的脚本'
        },
        {
          pro: 'ondrop',
          dec: '当被拖元素正在被拖放时运行的脚本'
        },
        {
          pro: 'onmousedown',
          dec: '当元素上按下鼠标按钮时触发'
        },
        {
          pro: 'onmousemove',
          dec: '当鼠标指针移动到元素上时触发'
        },
        {
          pro: 'onmouseout',
          dec: '当鼠标指针移出元素时触发'
        },
        {
          pro: 'onmouseover',
          dec: '当鼠标指针移动到元素上时触发'
        },
        {
          pro: 'onmouseup',
          dec: '当在元素上释放鼠标元素时触发'
        },
        {
          pro: 'onmousewheel',
          dec: '当鼠标滚轮正在被滚动时运行的脚本'
        },
        {
          pro: 'onscoll',
          dec: '当元素滚动条被滚动时运行的脚本'
        }
      ]
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
</style>
