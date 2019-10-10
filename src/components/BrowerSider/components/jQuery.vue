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
        <el-image :src="url3"/>
        <el-divider/>
        <h6>内容过滤选择器</h6>
        <el-image :src="url4"/>
        <el-divider/>
        <h6>属性过滤选择器</h6>
        <el-image :src="url5"/>
        <el-divider/>
        <h6>子元素过滤选择器</h6>
        <el-divider/>
        <h6>表单过滤选择器</h6>
        <el-divider/>
        <h6>表单选择器</h6>
        <el-divider/>
        <h6>jQuery选择器完善的处理机制</h6>
        <p>
          当元素不存在时，JS不会保存阻塞其他代码的运行
        </p>
        <el-divider/>
      </el-tab-pane>
      <el-tab-pane label="jQuery中的DOM操作">
        <ol>
          <li>
            <h6>插入节点</h6>
            <p>
              append()：向每一个匹配的元素内部追加元素。$(A).append(B)：把B追加到A中
            </p>
            <p>
              appendTo()：把所有匹配的元素追加到指定元素中。$(A).appendTo(B)：把A追加到B中。
            </p>
            <p>
              prepend()：在被选元素的内部前面插入指定内容。
            </p>
            <p>
              after()：在匹配的元素后面插入内容。$(A).after(B)：把B插入到A后面。
            </p>
            <p>
              insertAfter()：把所有匹配的元素插入到指定的元素后面。$(A).insertAfter(B)：把A插入到B后面
            </p>
            <p>
              before()：在每一个匹配元素前面插入内容。$(A).before(B)：把B插入到A前面
            </p>
            <p>
              insertBefore()：把所有匹配元素插入到指定元素前面。$(A).insertBefore(B)：把A插入到B前面
            </p>
          </li>
          <li>
            <h6>删除节点</h6>
            <p>
              remove()：从DOM中删除所有匹配元素
            </p>
            <p>
              detach()：与delete()一样，从DOM中去掉所有匹配元素，两者的区别是detach()
              不会把匹配的元素从jQuery对象中删除，去掉的元素的所有的绑定的事件、附加的
              数据等都会保留下来。
            </p>
            <p>
              empty()：清空元素中所有的后代节点。<strong>注意是清空元素内的所有节点，并不清除选中元素。</strong>
            </p>
          </li>
          <li>
            <h6>复制节点</h6>
            <p>
              clone()：直接使用clone()方法复制的元素并不具有任何行为，如果需要新的元素也具有相同的行为，
              需要在clone()方法中传入一个参数true
            </p>
          </li>
          <li>
            <h6>其他方法</h6>
            <p>
              replaceWith()：将所有匹配的元素替换成HTML或者DOM元素，绑定的事件将会消失。
            </p>
          </li>
        </ol>
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
      url2: require('./Js_test_asset/jquery层次选择器.png'),
      url3: require('./Js_test_asset/过滤选择器.png'),
      url4: require('./Js_test_asset/内容过滤选择器.png'),
      url5: require('./Js_test_asset/属性过滤选择器.png')
    }
  }
}
</script>
