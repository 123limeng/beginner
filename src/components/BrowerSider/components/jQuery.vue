<template>
  <div>
    <h3>jQuery</h3>
    <el-divider/>
    <el-backtop/>
    <h4>jQuery的强大优势</h4>
    <ol>
      <li>强大的选择器</li>
      <li>出色的DOM操作封装</li>
      <li>可靠的事件处理机制</li>
      <li>完善的Ajax</li>
      <li>不污染顶级变量</li>
      <li>出色的浏览器兼容性</li>
      <li>链式操作方式</li>
      <li>隐式迭代</li>
      <li>行为层与结构层分离</li>
      <li>丰富的插件支持</li>
      <li>完善的文档</li>
      <li>开源</li>
    </ol>
    <el-tabs type="border-card">
      <el-tab-pane label="不污染顶级变量">
        <p style="text-indent: 50px;">
          jQuery只建立一个名为jQuery的对象，其所有的函数方法都在这个对象之下。
          其别名$可以随时交出控制权，绝对不会污染其他变量。该特性使得jQuery可以
          和javascript的其他库共存。
        </p>
      </el-tab-pane>
      <el-tab-pane label="隐式迭代">
        <p style="text-indent: 50px;">
          123
        </p>
      </el-tab-pane>
      <el-tab-pane label="链式操作方式">
        <p style="text-indent: 50px;">
          对同一个jQuery对象的一组动作，可以直接连写而无需重复获取对象。
          <!-- $(this).addClass("current")            // 给当前元素添加 "current" 样式
          .next().show()                         // 下一个元素显示
          .parent().siblings().children("a").removeClass("current")  // 父元素的同辈元素的子元素 <a> 移除 "current" 样式
          .next().hide();       -->
        </p>
      </el-tab-pane>
      <el-tab-pane label="jQuery选择器">
        <h5>jQuery选择器</h5>
        <h6>基本选择器</h6>
        <el-image :src="url1"/>
        <el-divider/>
        <h6>层次选择器</h6>
        <el-image :src="url2"/>
        <el-divider/>
        <h6>过滤选择器</h6>
        <el-divider/>
        <h6>内容过滤选择器</h6>
        <el-divider/>
        <h6>属性过滤选择器</h6>
        <el-divider/>
        <h6>子元素过滤选择器</h6>
        <el-divider/>
        <h6>表单过滤选择器</h6>
        <el-divider/>
        <h6>表单选择器</h6>
        <el-divider/>
        <h6>jQuery选择器完善的处理机制</h6>
        <el-divider/>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {
  name: 'JQuery',
  data () {
    return {
      url1: require('./Js_test_asset/jquery基础选择器.png'),
      url2: require('./Js_test_asset/jquery层次选择器.png')
    }
  }
}
</script>
