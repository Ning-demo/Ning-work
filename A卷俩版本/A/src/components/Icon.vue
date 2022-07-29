<template>
  <div>
    <div>
      <div class="box">
        <div class="item" v-for="(item, index) in showPage" :key="index">
          {{ item }}
        </div>
      </div>
      <div class="nav">
        <div class="pravPage" @click="prav">上一页</div>
        <div
          class="pages"
          v-for="(item, index) in conpages"
          :key="index"
          @click="page(item)"
          :class="item == cur ? 'active' : ''"
        >
          {{ item }}
        </div>
        <div class="nextPage" @click="next">下一页</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VueKaoshiIcon",

  data: {
    conpages: "", //总页数
    cur: 1, //当前页
    pageSize: 3, //每页要展示数据条数
    showPage: [], //每页展示的内容
    porps: [
      "小鼠",
      "小猫",
      "小狗",
      "小花",
      "小草",
      "小树",
      "小明",
      "小李",
      "小王",
      "我",
    ], //总数据
  },
  created() {
    this.conpages = Math.ceil(this.porps.length / this.pageSize); //求总页数，Math.ceil()方法 可以对数进行上舍入
    this.page(this.cur);
  },
  methods: {
    page(item) {
      this.cur = item; //当前页
      var list = (this.cur - 1) * this.pageSize; //每去一组数据的第一个索引
      this.showPage = this.porps.slice(list, list + this.pageSize); //从总数据中取出每页的数据
    },
    prav() {
      if (this.cur != 1) {
        this.cur--;
        this.page(this.cur);
      }
    },
    next() {
      if (this.cur < this.conpages) {
        this.cur++;
        this.page(this.cur);
      }
    },
  },
};
</script>

<style scoped>
</style>