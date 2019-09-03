<template>
  <div>
    <h3>Html 表单</h3>
    <el-divider/>
    <h4>新的input类型</h4>
    <p>email：<input type="email" name="6" id="6"></p>
    <p>url：<input type="url" name="5" id="5"></p>
    <p>number：<input type="number" name="4" id="4"></p>
    <p>range：<input type="range" name="3" id="3"></p>
    <p>Date picker：<input type="date" name="7" id="7"></p>
    <p>search：<input type="search" name="2" id="2"></p>
    <p>color：<input type="color" name="1" id="1"/></p>
    <h4>表单元素</h4>
    <ol>
      <li>
        <strong>datalist元素</strong>
        <p>该元素规定输入域的选型列表，列表是通过datalist中的option元素创建的，如果需要把datalist绑定到输入域，用输入域的list属性引入datalist的id</p>
        <input type="text" list="demo"/>
        <datalist id="demo">
          <option value="1" label="test"></option>
          <option value="2"></option>
          <option value="3"></option>
          <option value="4"></option>
        </datalist>
        <p>
          option属性永远要有value属性
        </p>
      </li>
      <li>
        <strong>keygen元素</strong>
        <p>
          提供一种验证用户的可靠方法，keygen元素是密钥对生成器，会生成两个键，一个私钥，一个公钥。
          私钥存储于客户端，公钥发送到服务器，公钥可用于之后验证用户的客户端证书。
        </p>
      </li>
      <li>output元素：用于不同类型的输出</li>
    </ol>
    <h4>表单属性</h4>
    <ol>
      <li>
        <strong>新的form属性</strong>
        <p>autocomplete：规定form或input域拥有自动完成的功能 autocomplete: on/off</p>
        <p>
          novalidate：规定在提交表单时不应该验证form或input域
        </p>
      </li>
      <li>
        <strong>新的input属性</strong>
        <p>autocomplete：同上</p>
        <p>autofocus：规定在页面加载时，域自动获取焦点</p>
        <p>form：规定输入域所属的一个或多个表单，form属性适用于所有input标签的类型，form属性必须引用所属表单的id，如需引用多个表单，用空格隔开</p>
        <p>height和width：用于规定image类型的input标签的图像的宽和高</p>
        <p>list：规定输入域的datalist</p>
        <p>min、max、step：用于为包含数字和日期的input类型规定限定</p>
        <p>multiple：规定输入域可选多个值</p>
        <p>pattern：用于规定验证表单域的模式</p>
      </li>
    </ol>
  </div>
</template>
<script>
export default {
  name: 'HtmlForm'
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
