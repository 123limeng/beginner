<template>
  <div>
    <h2>css基础</h2>
    <el-divider/>
    <h4 class="textHover" @click="handleText">css文本格式</h4>
    <ol v-show="textShow">
      <li>
        <!-- <p><strong>文本颜色</strong></p> -->
        <el-collapse v-model="activeName">
          <el-collapse-item title="文本颜色" name="text_color">
            <p>定义文本颜色有3种方式：</p>
            <ul>
              <li>十六进制：比如#0000ff</li>
              <li>RGB：比如rgb(255,0,0)</li>
              <li>颜色名称：比如red</li>
            </ul>
          </el-collapse-item>
        </el-collapse>
      </li>
      <li>
        <!-- 文本对齐方式 -->
        <el-collapse v-model="activeName">
          <el-collapse-item title="文本对齐方式" name="text_align">
            <p>设置文本的水平对齐方式</p>
            <p>文本可以居中、对齐到左、对齐到右</p>
            <p>text-align: center;  text-align: right;  text-align: justify;</p>
          </el-collapse-item>
        </el-collapse>
      </li>
      <li>
        <!-- 文本修饰 -->
        <el-collapse v-model="activeName">
          <el-collapse-item title="文本修饰" name="text_decoration">
            <p>text_decoration属性用来设置文本的修饰，文本的下划线一类的问题</p>
          </el-collapse-item>
        </el-collapse>
      </li>
      <li>
        <!-- 文本转换 -->
        <el-collapse v-model="activeName">
          <el-collapse-item title="文本转换" name="text_transform">
            <p>用来指定一个文本中的大写或者小写字母</p>
            <p>可以用于将文本所有字句变成大写或小写字母，或者每个单词的首字母大写</p>
            <p>text-transform: uppercase; text-transform: lowercase; text-transform: capitalize;</p>
          </el-collapse-item>
        </el-collapse>
      </li>
      <li>
        <!-- 文本缩进 -->
        <el-collapse v-model="activeName">
          <el-collapse-item title="文本缩进" name="text_indent">
            <p>用来指定文本第一行的缩进</p>
            <p>text-indent: 50px;</p>
          </el-collapse-item>
        </el-collapse>
      </li>
      <li>
        <p><strong>其他属性</strong></p>
        <p>direction：设置文本方向</p>
        <p>letter-spacing：设置字符间距</p>
        <p>line-height：设置行高</p>
        <p>text-shadow：设置文本阴影</p>
        <p>vertical-align：设置元素的垂直对齐</p>
        <p>white-spacing：设置元素中空白的处理方式</p>
        <p>word-spacing：设置字间距</p>
      </li>
    </ol>
    <h4 class="textHover" @click="handleFont">css字体</h4>
    <ol v-show="fontShow">
      <li>
        <!-- 字体系列 -->
        <el-collapse v-model="activeName">
          <el-collapse-item title="字体系列" name="font_family">
            <p>font-family：设置文本的字体系列</p>
            <p>font-family属性多设置几种字体备用，如果浏览器不支持第一种，将尝试下一种字体。</p>
            <p>如果字体系列的名称超过一个字，必须用引号。</p>
            <p>font-family: "Times new Roman", Times, serif; </p>
          </el-collapse-item>
        </el-collapse>
      </li>
      <li>
        <!-- 字体样式 -->
        <el-collapse v-model="activeName">
          <el-collapse-item title="字体样式" name="font_style">
            <p>font-style：设置字体样式。</p>
            <p>字体样式取值共3种：</p>
            <ul>
              <li>正常</li>
              <li>斜体</li>
              <li>倾斜的文字——文字向一边倾斜</li>
            </ul>
          </el-collapse-item>
        </el-collapse>
      </li>
      <li>
        <!-- 字体大小 -->
        <el-collapse v-model="activeName">
          <el-collapse-item title="字体大小" name="font_size">
            <p>font-size：设置字体大小</p>
            <p>字体大小的值可以是绝对或者相对的大小</p>
            <ul>
              <li>
                <p>绝对大小：设置一个指定大小的文本，不允许用户在浏览器中改变文本大小，确定了输出的物理尺寸时绝对大小很有用。</p>
              </li>
              <li>相对大小：相对于周围的元素来设置大小，允许用户在浏览器中改变大小</li>
            </ul>
            <p>用em设置字体大小：1em等于16px</p>
          </el-collapse-item>
        </el-collapse>
      </li>
      <li>
        <p><strong>其他属性</strong></p>
        <p>font-weight：指令字体的粗细</p>
      </li>
    </ol>
    <h4 class="textHover" @click="handleLink">css链接</h4>
    <ol v-show="linkShow">
      <li>
        <p>链接样式</p>
        <p>四种链接状态：</p>
        <ul>
          <li>a:link  正常未访问过的链接</li>
          <li>a:visited   用户已经访问过的链接</li>
          <li>a:hover   用户鼠标放在链接上时</li>
          <li>a:active    链接被点击的那一刻</li>
        </ul>
        <p>设置上述链接状态样式时，要按照上面的顺序</p>
      </li>
      <li>
        <p>文本修饰</p>
        <p>text-decoration：主要用于删除链接下划线，更改样式</p>
      </li>
      <li>背景颜色：background-color</li>
    </ol>
    <h4 class="textHover" @click="handleList">css列表</h4>
    <div v-show="listShow">
      <p>css列表属性的作用：有序列表、无序列表、列表标记为图像</p>
      <p><strong>有序列表：</strong>列表项的标记是数字或字母</p>
      <p><strong>无序列表：</strong>列表项的标记用特殊图形，比如小圆点、小方框</p>
      <p>不同的列表项标记：</p>
      <p style="text-indent: 50px;"> list-style-type:ul--->circle/square ol--->upper-roman</p>
      <p>list-style-position：列表中标记项的位置，outside或者inside，默认为outside</p>
    </div>
    <h4 class="textHover" @click="handleTable">css表格</h4>
    <ol v-show="tableShow">
      <li>表格边框：td和th都有独立的边框，所以整个表格显示出来双边框</li>
      <li>折叠边框：border-collaspe：collapse;该属性设置表格的边框被折叠成一个单一的边框,使得表格呈现单边框</li>
      <li>表格宽度和高度</li>
      <li>表格文字对齐</li>
      <li>表格填充</li>
      <li>表格颜色</li>
    </ol>
    <h4 class="textHover" @click="handleBox">css盒模型</h4>
    <div v-show="boxShow">
      <p>border/margin/padding/content(width*height)</p>
    </div>
    <h4 class="textHover" @click="handleBorder">css边框、轮廓</h4>
    <ol v-show="borderShow">
      <li>
        <p>边框</p>
        <p>边框的样式：border-style: none(无边框)、dotted(点线边框)、dashed(虚线边框)、solid(实线边框)、double(双边框)、groove(3D沟槽边框)、ridge(3D脊边框)、inset(3D嵌入边框)、Outset(3D突出边框)</p>
        <p>
          边框的宽度：border-width: 有两种方式定义边框的宽度，一种是指定长度值的宽度，另一种是用关键字thick、thin、medium
          这3个关键字没有具体的宽度，可以自己设置。
        </p>
        <p>边框的颜色：可以采用3种定义颜色的方法定义边框的颜色，但是前提是必须先定义边框的样式，才能定义边框颜色。</p>
        <p>也可以单独设置每个边框的样式宽度颜色</p>
      </li>
      <li>
        <p>轮廓：outline是边框的外围，起到突出元素的作用。</p>
      </li>
    </ol>
    <h4 class="textHover" @click="handleMargin">css外边距和内边距</h4>
    <div v-show="marginShow">
      <ol>
        <li>margin</li>
        <li>padding</li>
      </ol>
      <div class="div1"></div>
    </div>
    <h4 class="textHover" @click="handleDisplay">css Display</h4>
    <div v-show="displayShow">
      <ul>
        <li>
          <strong>隐藏元素：</strong>
          <p>display: none;    visibility: hidden;</p>
          <p>它们之间的区别：visibility: hidden;虽然隐藏了元素但是元素还占据原来的空间，不改变页面得布局；而display: none;隐藏的元素不会占据空间</p>
        </li>
        <li>
          <strong>变更块级元素和行内元素：</strong>
          <p>display: inline/block;</p>
        </li>
      </ul>
    </div>
    <h4 class="textHover" @click="handlePosition">css position</h4>
    <div v-show="positionShow">
      <p>position属性的5个值：</p>
      <ul>
        <li>static：没有定位，遵循正常的文档流对象。静态定位的元素不会受到top/right/buttom/left属性的影响</li>
        <li>fixed：元素位置相对于浏览器窗口是固定位置。即使窗口滚动它也不会移动。fixed定位使得元素位置与文档路无关，不占据空间，与其他元素重叠。</li>
        <li>absolute：绝对定位元素的位置相对于最近的已定位的父元素，如果元素没有已定位的父元素，南无他的位置相对于html。
          绝对定位的元素位置与文档流无关，因此不占据空间。绝对定位的元素与其他元素重叠。
        </li>
        <li>relative：相对于元素正常位置的定位。移动相对定位元素，但它原本所占据的空间不会改变。相对定位元素经常被用
          来作为绝对定位元素的容器。
        </li>
        <li>sticky：粘性定位。基于用户的滚动位置来定位。元素定位的表现为在跨越特定阈值前为相对定位，
          之后为固定定位。这个特定阈值为top/right/bottom/left之一。
        </li>
      </ul>
      <p>重叠元素：z-index属性指定一个元素的重叠顺序。一个元素可以有整数或者负数的重叠顺序。</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CssBasics',
  data () {
    return {
      activeName: [
        'text_color',
        'text_align',
        'text_decoration',
        'text_transform',
        'text_indent',
        'font_family',
        'font_style',
        'font_size'
      ],
      textShow: false,
      fontShow: false,
      linkShow: false,
      listShow: false,
      tableShow: false,
      boxShow: false,
      borderShow: false,
      marginShow: false,
      displayShow: false,
      positionShow: true
    }
  },
  methods: {
    handleText () {
      this.textShow = !this.textShow
    },
    handleFont () {
      this.fontShow = !this.fontShow
    },
    handleLink () {
      this.linkShow = !this.linkShow
    },
    handleList () {
      this.listShow = !this.listShow
    },
    handleTable () {
      this.tableShow = !this.tableShow
    },
    handleBox () {
      this.boxShow = !this.boxShow
    },
    handleBorder () {
      this.borderShow = !this.borderShow
    },
    handleMargin () {
      this.marginShow = !this.marginShow
    },
    handleDisplay () {
      this.displayShow = !this.displayShow
    },
    handlePosition () {
      this.positionShow = !this.positionShow
    }
  }
}
</script>
<style scoped>
h4 {
  border-left: 4px solid #333f44;
  border-bottom: 1px solid #333f44;
}
.textHover:hover {
  cursor: pointer;
  font-style: italic;
  background-color: skyblue;
}
.div1 {
  width: 200px;
  height:200px;
  background-color: #00ff00;
  padding-left: 50px;
  box-sizing: content-box
}
</style>
