<template>
  <div class="hello">
    <label>{{ name }}</label><br/>
    <input type="text" v-model="name" debounce="50000"/><br/>
    <button @click="changeClass">点击切换class</button>
    <div class="div" :class="{ 'div1': bgc }"></div>
    <div v-if="show" transition="expand" style="width:100px height:200px; background: red">hello</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      name: '',
      bgc: false,
      show: true
    }
  },
  methods: {
    changeClass () {
      this.bgc = !this.bgc
      this.show = !this.show
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
.expand-transiton {
  height: 300px;
  width:200px;
  background-color: #eee;
  transition: all 100s ease;
}
.expand-enter, .expand-leave {
  height: 0;
  width: 0;
  background-color: rgb(204, 96, 96);
}
.div {
  width: 100px;
  height: 100px;
  background-color: green;
}
.div1 {
  width: 200px;
  height: 200px;
  background-color: #ff0000;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
