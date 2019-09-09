<template>
  <div>
    <h3>添加商品</h3>
    <el-form label-width="80px">
      <el-row>
        <el-col :span="6">
          <el-form-item label="商品名称">
            <el-input v-model="goods.name" placeholder="输入商品名称"/>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="商品单价">
            <el-input v-model="goods.price" placeholder="输入商品单价"/>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="商品数量">
            <el-input v-model="goods.number" type="number" placeholder="输入商品数量"/>
          </el-form-item>
        </el-col>
        <el-col :span="4" :offset="1">
          <el-button type="primary" @click="addGoods">添加</el-button>
        </el-col>
      </el-row>
    </el-form>
    <el-table
      :data="cartList">
      <el-table-column type="index" label="序号" width="100px"/>
      <el-table-column label="商品名称">
        <template slot-scope="scope">
          <span>{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column label="商品单价">
        <template slot-scope="scope">
          <span>{{ scope.row.price }}</span>
        </template>
      </el-table-column>
      <el-table-column label="商品数量">
        <template slot-scope="scope">
          <el-button icon="el-icon-minus" @click="minus(scope)"/>
          <span>{{ scope.row.number }}</span>
          <el-button icon="el-icon-plus" @click="plus(scope)"/>
        </template>
      </el-table-column>
      <el-table-column label="总价">
        <template slot-scope="scope">
          <span>{{ parseInt(scope.row.number * scope.row.price) }}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  name: 'AddCart',
  data () {
    return {
      goods: {
        name: undefined,
        price: undefined,
        number: undefined
      },
      cartList: [
        {
          name: '栗子',
          price: 8.9,
          number: 3
        }
      ]
    }
  },
  methods: {
    addGoods () {
      this.cartList.push(this.goods)
      this.$message.success('添加成功')
      console.log(this.cartList)
    },
    minus (data) {
      if (data.row.number === 0) {
        data.row.number = 0
      } else {
        data.row.number--
      }
    },
    plus (data) {
      data.row.number++
    }
  }
}
</script>
