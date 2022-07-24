/*
// Typescript 基本语法
const hello : string = "Hello World!"
console.log(hello)
*/
// tsc 命令编译: tsc XXX.ts
/*
数字类型	number
双精度 64 位浮点值。它可以用来表示整数和分数。
*/
// 首先我们要进行一个运算,计算相加
var num1 = 1;
var num2 = 2;
var sum = num1 + num2; // 3
/*
字符串类型	string
一个字符系列，使用单引号（'）或双引号（"）来表示字符串类型。反引号（`）来定义多行文本和内嵌表达式。
*/
var myName = '小红';
var myAge = 12;
// 造句
var sentence = "My name is ".concat(myName, ",My age is ").concat(myAge);
document.body.innerHTML = sentence;
/* 布尔类型	boolean
表示逻辑值：true 和 false。
*/
var flag = true;
/*
 数组类型
声明变量为数组。
 */
// 在元素类型后面加上[]
var arr = [1, 2];
// 或者使用数组泛型
var arr = [1, 2];
/*
元组
*/
// 	元组类型用来表示已知元素数量和类型的数组，各元素的类型不必相同，对应位置的类型需要相同。
var x;
x = ['Runoob', 1]; // 运行正常
x = [1, 'Runoob']; // 报错
console.log(x[0]); // 输出 Runoob
// 枚举	enum	
// 枚举类型用于定义数值集合。
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Blue;
console.log(c); // 输出 2
/*
任意类型	any
声明为 any 的变量可以赋予任意类型的值。
*/
var value;
value = 123;
value = "abc";
value = false;
/*
void ：用于函数，和any是相反的
用于标识方法返回值的类型，表示该方法没有返回值。
*/
function alertName() {
    console.log('My name is void');
}
/**
 * 如果有返回值,那么就要根据返回值进行定义,就不能定义成为void
 */
function alertNames() {
    console.log('My name is void');
    return 'My Name is string';
}
/* null
null	表示对象值缺失。
 */
/* undefined
undefined	用于初始化变量为一个未定义的值
 */
/*
navar
*/
// never 是其它类型（包括 null 和 undefined）的子类型，代表从不会出现的值。
// 返回never的函数必须存在无法达到的终点
function error(message) {
    throw new Error(message);
}
// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}
/*
unknown  类型是TypeScript在3.0版本新增的类型，它表示未知的类型
unknown相对于any是安全的  unknown类型的值不是可以随便操作的  后续回用到
*/
/*
类型断言（Type Assertion）
类型断言可以用来手动指定一个值的类型，即允许变量从一种类型更改为另一种类型。
*/
// <类型>值  或: 值 as 类型
var str = '1';
var str2 = str; //str、str2 是 string 类型
console.log(str2);
var persion = { name: "xxxx", age: 1, sex: 1 };
/*
联合类型（Union Types）、
可以通过管道(|)将变量设置多种类型，赋值时可以根据设置的类型来赋值。
只能赋值指定的类型，如果赋值其它类型就会报错。
创建联合类型的语法格式如下：
*/
Type1 | Type2 | Type3;
// 声明一个联合类型：
var val;
val = 12;
console.log("数字为 " + val);
val = "Runoob";
console.log("字符串为 " + val);
