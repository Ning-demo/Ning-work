/**
 * 定义所有商品的数据
 */
var Data = [
    {
        "id": 1,
        "goods_name": "vivo 手机 p30",
        "price": 1242
    },
    {
        "id": 2,
        "goods_name": "苹果手机 iphone plus",
        "price": 45000
    },
    {
        "id": 3,
        "goods_name": "宝马 X7 4驱",
        "price": 750000
    },
    {
        "id": 4,
        "goods_name": "宝马 5系 2驱",
        "price": 450000
    },
    {
        "id": 5,
        "goods_name": "锤子手机 200G",
        "price": 2000
    },
    {
        "id": 6,
        "goods_name": "华为手机 P40",
        "price": 5000
    },
    {
        "id": 7,
        "goods_name": "红米 手机",
        "price": 1200
    },
    {
        "id": 8,
        "goods_name": "海尔电冰箱 3匹",
        "price": 980
    },
    {
        "id": 9,
        "goods_name": "苹果笔记本电脑 i9",
        "price": 20000
    },
    {
        "id": 10,
        "goods_name": "精品手机 华为 200G",
        "price": 3200
    }
];
/**
 * 定义所有商品的名单
 */
var allIcommodity = Data;
/**
* 全局获取table--dom元素
*/
var tbody = document.getElementsByTagName('tbody')[0];
/**
 * 渲染同学,因为进页面需要展示,所以要自调用
 */
function renderIcommodity() {
    // 首先清空tbody
    tbody.innerHTML = '';
    // 遍历循环添加
    allIcommodity.forEach((function (item) {
        // 创建tr标签
        var tr = document.createElement('tr');
        // 添加tr标签展示的内容
        tr.innerHTML = "<td>".concat(item.id, "</td>\n\t\t<td>").concat(item.goods_name, "</td>\n\t\t<td>").concat(item.price, "</td>");
        // 将tr标签动态添加到ul中
        tbody.appendChild(tr);
    }));
}
//进页面需要展示所以自调用
renderIcommodity();
/**
 * 获取搜索数据内容
 */
function search(event) {
    // 按下回车事件搜索
    if (!event || event.keyCode === 13) {
        // 首先获取input框的输入内容
        // @ts-ignore
        var int_1 = document.querySelector('.int');
        // 通过includes 属性对Data数据进行筛选  对allIcommodity数据从新赋值
        allIcommodity = Data.filter(function (item) { return item.goods_name.includes(int_1.value); });
        // 监听数据 按下退格 更新数据
    }
    else if (event.keyCode === 8) {
        // 首先获取input框的输入内容
        // @ts-ignore
        var int = document.querySelector('.int');
        // 通过判断input框的的值等于 1的时候 让allIcommodity数据等于Data
        if (int.value.length == 1) {
            allIcommodity = Data;
        }
        // 首先获取input框的输入内容  清空搜索的时从新对分页框赋值 渲染页面
        //@ts-ignore
        var Fyinput = document.querySelector('.Fyinput');
        Fyinput.value = '10';
        pageSize = Number(Fyinput === null || Fyinput === void 0 ? void 0 : Fyinput.value);
        // console.log(Fyinput?.value);
        created();
        page(1);
    }
    renderIcommodity();
}
/**
*排序标识
 */
var bhsort = true;
var jgsort = true;
/**
 * 编号排序
 */
function bhpx() {
    // 取反
    bhsort = !bhsort;
    //@ts-ignore
    var span = document.querySelector('.bh');
    if (bhsort == false) {
        // 利用sort方法进行排序
        allIcommodity.sort(function (a, b) {
            return b.id - a.id;
        });
        span.innerHTML = '∨';
    }
    else {
        allIcommodity.sort(function (a, b) {
            return a.id - b.id;
        });
        span.innerHTML = '∧';
    }
    renderIcommodity();
}
/**
 * 价格排序
 */
function jgpx() {
    jgsort = !jgsort;
    //@ts-ignore
    var span = document.querySelector('.jg');
    if (jgsort == false) {
        // 利用sort方法进行排序
        allIcommodity.sort(function (a, b) {
            return b.price - a.price;
        });
        span.innerHTML = '∨';
    }
    else {
        allIcommodity.sort(function (a, b) {
            return a.price - b.price;
        });
        span.innerHTML = '∧';
    }
    renderIcommodity();
}
/**
 * 数据分页
 */
var num = 10; //底部计数
var pageNums = 0; //总页数
var cur = 1; //当前页
var pageSize = 10; //每页要展示数据条数
/**
 *  分页盒子
 */
// @ts-ignore
var nav = document.querySelector('.nav');
/**
 * 总页数初始化调用
 */
function created() {
    //求总页数，Math.ceil()方法 可以对数进行上舍入
    pageNums = Math.ceil(Data.length / pageSize);
    Currentpage();
    // console.log(pageNums);
}
created();
function Currentpage() {
    // 清空原来的元素
    nav.innerHTML = '';
    // for循环遍历页码
    for (var i = 1; i <= pageNums; i++) {
        // 创建div标签
        var div = document.createElement("div");
        div.innerText = "".concat(i);
        div.id = "".concat(i);
        div.className = 'pages';
        // 向nav里面添加创建的div标签
        nav.append(div);
    }
}
/**
 *  事件监听 触发渲染的页码 ---实际执行的是子元素  e.target  目标：点击切换
 */
nav.addEventListener('click', function (e) {
    if (e.target.className == 'pages') { //子元素：触发事件
        // 调用分页方法
        page(e.target.id);
        // console.log(e.target.id);
    }
});
/**
 * 封装分页函数
 * */
function page(value) {
    cur = value; //让当前页等于传过来的参数
    var list = (cur - 1) * Number(pageSize); //每去一组数据的第一个索引
    allIcommodity = Data.slice(list, list + Number(pageSize)); //从总数据中取出每页的数据
    // 初始化渲染
    renderIcommodity();
}
// 初始化调用分页
page(1);
/**
 * input分页框的值发生改变 实现分页的重新分配
 */
function changeInput() {
    // 首先获取input框的输入内容
    var Fyinput = document.querySelector('.Fyinput');
    // 每页要展示数据条数等于分页框的值
    pageSize = Number(Fyinput === null || Fyinput === void 0 ? void 0 : Fyinput.value);
    // console.log(Fyinput?.value);
    // 重新渲染界面
    created();
    // 调用分页方法
    page(1);
}
