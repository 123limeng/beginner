<template>
  <div>
    <h3>vue-router</h3>
    <el-divider/>
    <h4>路由模式</h4>
    <ul>
      <li>hash模式</li>
      <li>history模式</li>
    </ul>
    <el-divider/>
    <el-backtop/>
    <h4>重定向和别名</h4>
    <p>重定向：</p>
    <p style="text-indent: 50px;">通过routes配置完成。</p>
    <img src="./asset/redirect.png" alt="">
    <p>别名：</p>
    <p style="text-indent: 50px;">别名就比如/a的别名是/b，这时候/b重定位到/a，就不会显示url匹配到/a，而是仍然显示/b，造成一种假象，实际匹配到的是/a</p>
    <img src="./asset/otherName.png" alt="">
    <el-divider/>
    <h4>根路径</h4>
    <p>根路径的path为'/'，由于默认使用全包含匹配，所以'/foo'也可以匹配到，如果需要精确匹配，只匹配到'/'，在router-link上设置exact属性。</p>
    <el-divider/>
    <h4>嵌套路由</h4>
    <img src="./asset/nestRouter.png" alt="">
    <el-divider/>
    <h4>命名路由</h4>
    <p>命名路由的常见用途：替换router-link中to属性，如果不使用命名路由，router-link中to属性要设置全路由，不够灵活，修改麻烦，使用命名路由是需要使用包含name属性的对象即可。</p>
    <p>如果设置了默认子路由，则不要在父级路由上设置name属性。</p>
    <el-divider/>
    <h4>命名视图</h4>
    <p>同时展示多个视图，可以在界面中拥有多个单独命名的视图，而不是只有一个出口，如果router-view没有设置名字，那么默认为default。</p>
    <p>对于同一个路由，多个视图就需要多个组件。</p>
    <img src="./asset/MultiRouter.png" alt="">
    <el-divider/>
    <h4>动态路径</h4>
    <p>需要把某种模式匹配到的所有路由，全都映射到同一组件上。</p>
    <p style="text-indent: 50px;">比如对于一个user组件，对于所有id各不相同的用户，都要使用这个组件，可以使用动态路由参数达到效果。</p>
    <img src="./asset/DynamicRouter.png" alt="">
    <p>一个路径参数使用冒号: 标记，当匹配到一个路由时，参数值会被设置到this.$route.params，可以在每个组件内使用。</p>
    <p>可以在路径中设置多段路由参数，对应的值都会设置到$route.params中，除了$route.params外，$route对象还提供了其他的信息。比如$route.query、$route.hash</p>
    <p>有时同一个路径可以匹配多个路由，此时匹配的优先级就按照路由的定义顺序：谁先定义，谁的优先级就高。</p>
    <el-divider/>
    <h4>查询字符串</h4>
    <p>实现子路由，除了使用动态参数，也可以使用查询字符串。</p>
    <img src="./asset/searchString.png" alt="">
    <el-divider/>
    <h4>滚动行为</h4>
    <p>使用前端路由，当切换到新路由时，想要页面滚动到顶部，或者是保持原先的滚动位置，就像重新加载页面一样。vue-router可以自定义路由切换时页面时如何滚动的。<strong>这个功能只有在html5 history模式下可用</strong></p>
    <p>
      当创建一个router实例，可以提供一个scrollBehavior方法，该方法在前进、后退或切换导航时触发。scrollBehavior方法返回to和from路由对象，第三个参数savedPosition当且仅当popstate导航（通过浏览器的前进后退按钮）时在触发，返回滚动条的坐标（x:number, y:number），如果
      返回一个布尔值，或者一个空对象，那么不会发生滚动。
    </p>
    <img src="./asset/scrollBehavior.png" alt="">
    <el-divider/>
    <h4>过渡动效</h4>
    <p>router-view是基本的动态组件，所以可以用transition组件为它添加一些过渡效果。</p>
    <img src="./asset/transition.png" alt="">
  </div>
</template>
<script>
export default {
  name: 'MyVueRouter'
}
</script>
