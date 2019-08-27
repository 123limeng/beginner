<template>
  <div>
    <h3>Html基础</h3>
    <div class="content-div">
      <h4>Html 标题</h4>
      <p>Html 标题是通过"h1~h6"标签定义的。</p>
    </div>
    <div class="border-div">
      <h4>Html属性</h4>
      <el-table
        :data="list"
        border>
        <el-table-column label="属性">
          <template slot-scope="scope">
            <span>{{ scope.row.pro }}</span>
          </template>
        </el-table-column>
        <el-table-column label="描述">
          <template slot-scope="scope">
            <span>{{ scope.row.dec }}</span>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HtmlBasics',
  data () {
    return {
      list: [
        {
          pro: 'accesskey',
          dec: '规定激活元素的快捷键'
        },
        {
          pro: 'class',
          dec: '元素的类名'
        },
        {
          pro: 'contenteditable',
          dec: '规定元素是否可编辑'
        },
        {
          pro: 'contextmenu',
          dec: '规定元素的上下文菜单，上下文菜单在用户点击元素时显示'
        },
        {
          pro: 'data-*',
          dec: '用于存储页面或应用程序的私有定制数据'
        },
        {
          pro: 'dir',
          dec: '规定元素中文本的方向'
        },
        {
          pro: 'draggable',
          dec: '规定元素是否可拖动'
        },
        {
          pro: 'dropzone',
          dec: '规定拖动被拖动元素时，是否进行复制、移动或链接'
        },
        {
          pro: 'hidden',
          dec: '规定元素仍未或者不再相关'
        },
        {
          pro: 'id',
          dec: '规定元素唯一的id'
        },
        {
          pro: 'lang',
          dec: '规定元素内容的语言'
        },
        {
          pro: 'spellcheck',
          dec: '规定是否对元素进行拼写或语法检查'
        },
        {
          pro: 'style',
          dec: '元素行内样式'
        },
        {
          pro: 'tabindex',
          dec: '规定元素的tab键次序'
        },
        {
          pro: 'title',
          dec: '规定有关元素的额外信息'
        },
        {
          pro: 'translate',
          dec: '规定是否应该翻译元素内容'
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
</style>
