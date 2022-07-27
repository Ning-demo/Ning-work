<template>
  <div>
    <input type="text" placeholder="商品名称" v-model="kw" />
    <table>
      <thead>
        <tr>
          <th>
            编号 <span @click="xu">{{ this.sortAll ? "∧" : "∨" }}</span>
          </th>
          <th>名称</th>
          <th>
            价格 <span @click="jg">{{ this.jgAll ? "∧" : "∨" }}</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in todo" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.goods_name }}</td>
          <td>{{ item.price }}</td>
        </tr>
      </tbody>
    </table>
    <footer>
      <div class="tx">
        每页 <input type="number" v-model="pageSize" />条 ，共{{ num }}条
      </div>
      <div class="nav">
        <div class="pravPage" @click="prav">上一页</div>
        <div
          class="pages"
          v-for="(item, index) in pageNums"
          :key="index"
          @click="page(item)"
        >
          {{ item }}
        </div>
        <div class="nextPage" @click="next">下一页</div>
      </div>
    </footer>
  </div>
</template>

<script>
import { data } from "./assets/data.json";
export default {
  name: "VueKaoshiApp",

  data() {
    return {
      data: data, //原始数据
      todo: data, //渲染数据
      kw: "", //搜索关键字
      sortAll: true, //id排序 标识
      jgAll: true, //价格排序标识
      num: "10", //底部计数
      pageNums: "", //总页数
      cur: 1, //当前页
      pageSize: 10, //每页要展示数据条数
    };
  },
  created() {
    console.log(data);
    this.pageNums = Math.ceil(this.data.length / this.pageSize); //求总页数，Math.ceil()方法 可以对数进行上舍入
    this.page(this.cur);
  },

  methods: {
    search() {
      if (this.kw.trim().length) {
        this.todo = this.data.filter((item) =>
          item.goods_name.includes(this.kw)
        );
        this.num = this.todo.length;
      } else {
        this.num = this.data.length;
        return (this.todo = this.data);
      }
    },
    xu() {
      this.sortAll = !this.sortAll;
      if (this.sortAll == false) {
        this.todo.sort(function (a, b) {
          return b.id - a.id;
        });
      } else {
        this.todo.sort(function (a, b) {
          return a.id - b.id;
        });
      }
    },
    jg() {
      this.jgAll = !this.jgAll;
      if (this.jgAll == false) {
        this.todo.sort(function (a, b) {
          return b.price - a.price;
        });
      } else {
        this.todo.sort(function (a, b) {
          return a.price - b.price;
        });
      }
    },
    page(item) {
      this.cur = item; //当前页
      // console.log(item);
      var list = (this.cur - 1) * Number(this.pageSize); //每去一组数据的第一个索引
      this.todo = this.data.slice(list, list + Number(this.pageSize)); //从总数据中取出每页的数据
    },
    prav() {
      if (this.cur != 1) {
        this.cur--;
        this.page(this.cur);
      }
    },
    next() {
      if (this.cur < this.pageNums) {
        this.cur++;
        this.page(this.cur);
      }
    },
  },
  watch: {
    kw() {
      this.search();
      if (this.todo.length != 0) {
        this.pageSize = this.todo.length;
      }
    },
    pageSize() {
      if (this.pageSize !== "") {
        this.pageNums = Math.ceil(this.data.length / this.pageSize); //求总页数，Math.ceil()方法 可以对数进行上舍入
        this.page(1);
      }
    },
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
table {
  width: 100%;
}
thead {
  background: rgba(153, 153, 153, 0.534);
  height: 50px;
}
tbody td {
  padding: 2px;
  border-bottom: 2px solid #999;
}
th span {
  font-size: 25px;
}
footer {
  display: flex;
  justify-content: space-between;
  font-weight: 700;
}
footer .tx {
  font-size: 20px;
}
footer .tx input {
  height: 25px;
  width: 45px;
  text-align: center;
  font-size: 20px;
}
footer .nav {
  display: flex;
}
.nav div {
  padding: 5px;
  border: 1px solid #000;
  margin: 5px;
  cursor: pointer;
  border-radius: 3px;
}
</style>