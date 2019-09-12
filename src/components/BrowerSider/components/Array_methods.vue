<template>
  <div>
    <h3>数组的方法</h3>
    <ol>
      <li>
        <h4>toString()</h4>
        <p style="text-indent: 50px;">
          返回数组中每一个值的字符串形式拼接成的一个以逗号分割的字符串。该方法的返回值与不使用任何参数调用join()方法返回值相同。
        </p>
      </li>
      <li>
        <h4>toLocalString()</h4>
        <p style="text-indent: 50px;">
          返回值通常与toString()相同的值，但不总是如此。如果数组中某一项值为null或者undefined，返回结果以空字符串表示。
        </p>
      </li>
      <li>
        <h4>valueOf()</h4>
        <p style="text-indent: 50px;">
          返回数组对象本身
        </p>
      </li>
      <li>
        <h4>join()</h4>
        <p>
          Array.join()方法是String.split()方法的逆操作，后者是将字符串分割成若干块创建数组。
        </p>
        <p>join()可以使用不同分隔符来构建这个字符串，join()方法只接受一个参数，用作分隔符的字符串，然后返回包含所有数组项的字符串。</p>
        <p>如果不给join()传入参数，返回以逗号隔开的字符串。</p>
        <p>如果join()的参数是undefined，标准浏览器以逗号为分隔符返回字符串，IE7以undefined为分隔符返回字符串。</p>
        <p>
          该方法也可以用于类数组对象上。若对象没有length属性，就不是类数组对象，就不能使用该方法。
        </p>
        <p>join()可以创建重复某些字符n次的函数</p>
        <img src="./Js_test_asset/Join.png" alt="">
      </li>
      <li>
        <h4>push()/pop()</h4>
        <p>将数组当做栈来使用</p>
        <p>push()：接收任意数量的参数，将它们诸葛添加到数组末尾，并返回修改后的数组长度，该方法会改变原有的数组。</p>
        <p>如果要合并两个数组可以使用apply()方法，</p>
        <img src="./Js_test_asset/apply.png" alt="">
        <p>如果使用call()方法，会把b数组看成一个参数</p>
        <img src="./Js_test_asset/call.png" alt="">
        <p>push()方法也可以像对象中添加元素，添加后的对象变成类数组对象，即新加入元素的键对应数组的索引，并且对象有一个length属性</p>
        <img src="./Js_test_asset/objectpush.png" alt="">
        <p>
          pop()方法从数组末尾移除最后一项，减少数组的length，并返回移除的项。该方法会改变原有的数组。
        </p>对空数组使用pop()，不会报错，但是返回undefined。
        <p></p>
      </li>
      <li>
        <h4>unshift()/shift()</h4>
        <p>unshift()在数组前端添加任意项并返回新数组长度，该数组会改变原有数组。</p>
        <p>当使用多个参数调用unshift()时，参数是一次性插入而非一个一个插入，这意味着最终数组中元素的插入顺序与参数列表中的顺序一致。</p>
        <p>在IE7中调用unshift()，总是返回undefined。</p>
        <p>shift()方法是移除数组的第一项并返回移除的项，同时数组的长度减1，该方法会改变原有数组。</p>
        <p>对空数组调用shift()，不会报错，返回undefined。</p>
      </li>
      <li>
        <h4>reverse()</h4>
        <p>reverse()：用于反转数组的顺序，返回经过排序后的数组，原数组的顺序也发生改变。</p>
      </li>
      <li>
        <h4>sort()</h4>
        <p>sort()按字符串升序排列数组项，返回经过排序后的数组，原数组的顺序也发生改变。</p>
        <p>如果数组中包含undefined元素，它们会被排列到数组的尾部。</p>
        <p>sort()方法可以接收一个比较函数作为参数，以便指定那个值在那个值前面。比较函数接收
          两个参数，如果第一个参数应该位于第二个参数前面则返回一个负数，如果两个参数值相等返回0，
          如果第一个参数应该位于第二个参数后面则返回一个正数。
        </p>
        <img src="./Js_test_asset/sort.png" alt="">
      </li>
    </ol>
    <el-backtop/>
  </div>
</template>
<script>
export default {
  name: 'ArrayMethods'
}
</script>
