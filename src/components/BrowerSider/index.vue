<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="4">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          @select="handleSelect">
          <el-submenu index="1">
            <template slot="title">JS教程</template>
            <el-menu-item index="1-1">JS输出</el-menu-item>
            <el-menu-item index="1-2">JS语句</el-menu-item>
            <el-menu-item index="1-3">JS语法</el-menu-item>
            <el-menu-item index="1-4">JS注释</el-menu-item>
            <el-menu-item index="1-5">JS变量</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">JS表单</template>
            <el-menu-item index="2-1">表单</el-menu-item>
            <el-menu-item index="2-2">表单Api</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">JS对象</template>
            <el-menu-item index="3-1">对象属性和方法</el-menu-item>
            <el-menu-item index="3-2">对象原型</el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">JS函数</template>
            <el-menu-item index="4-1">Js函数</el-menu-item>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">Js Html Dom</template>
            <el-menu-item index="5-1">Dom方法</el-menu-item>
            <el-menu-item index="5-2">改变css</el-menu-item>
          </el-submenu>
          <el-menu-item index="6">Ajax</el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="20">
        <transition name="my-transition" mode="out-in">
          <component :is="currentComponent"/>
        </transition>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import JsOutput from './components/JS_Output'
import JsForm from './components/Js_Form'
import JsFormApi from './components/Js_FormApi'
import JsObjectMethods from './components/Js_Object_methods'
import JsObjPrototype from './components/Js_Obj_Prototype'
import JsMethods from './components/Js_Methods'
import JsHtmlDom from './components/Js_Html_Dom'
import JsDomCss from './components/Js_Dom_css'
import JsAjax from './components/Js_Ajax'
export default {
  name: 'HTML',
  components: {
    JsOutput, JsForm, JsFormApi, JsObjectMethods, JsObjPrototype, JsMethods, JsHtmlDom, JsDomCss, JsAjax
  },
  data () {
    return {
      activeIndex: '2-1',
      currentComponent: 'JsForm'
    }
  },
  methods: {
    handleSelect (key) {
      switch (key) {
        case '2-1':
          this.currentComponent = 'JsForm'
          break
        case '2-2':
          this.currentComponent = 'JsFormApi'
          break
        case '3-1':
          this.currentComponent = 'JsObjectMethods'
          break
        case '3-2':
          this.currentComponent = 'JsObjPrototype'
          break
        case '4-1':
          this.currentComponent = 'JsMethods'
          break
        case '5-1':
          this.currentComponent = 'JsHtmlDom'
          break
        case '5-2':
          this.currentComponent = 'JsDomCss'
          break
        case '6':
          this.currentComponent = 'JsAjax'
          break
        default:
          break
      }
    }
  }
}
</script>
<style scoped>
.my-transition-enter-active {
  transition: all .3s ease;
}
.my-transition-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.my-transition-enter, .my-transition-leave-active {
  padding-left: 1000px;
  /* margin:1000px 0 0 1000px; */
  opacity: 0;
}
</style>
