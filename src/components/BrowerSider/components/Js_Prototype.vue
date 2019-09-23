<template>
  <div>
    <h3>JavaScript原型到原型链</h3>
    <el-divider/>
    <h4>函数的prototype属性和原型的关系</h4>
    <p>
      每一个函数都有一个prototype属性，构造函数的prototype属性指向一个对象，这个对象就是调用
      这个构造函数创建的实例的原型。
    </p>
    <el-image :src="url1"/>
    <el-divider/>
    <h4>_proto_</h4>
    <p>
      每一个JavaScript对象除了null都有一个属性_proto_，这个属性会指向该对象的原型。
      person._proto_ === Person.prototype // true
    </p>
    <el-image :src="url2"/>
    <el-divider/>
    <el-backtop/>
    <h4>constructor</h4>
    <p>
      每一个原型都有一个constructor属性指向关联的构造函数。
      Person === Person.proptotype.constructor //true
    </p>
    <el-image :src="url3"/>
    <el-divider/>
    <h4>实例与原型</h4>
    <p>当读取实例的属性时，如果找不到就会查找与对象相关联的原型的属性，如果还查不到就去找原型的原型，一直找到最顶层为止。</p>
    <el-image :src="url4"/>
  </div>
</template>
<script>
export default {
  name: 'JsPrototype',
  data () {
    return {
      url1: require('./Js_test_asset/构造函数与原型之间的关系.png'),
      url2: require('./Js_test_asset/关系图1.png'),
      url3: require('./Js_test_asset/关系图2.png'),
      url4: require('./Js_test_asset/关系图3.png')
    }
  }
}
</script>
