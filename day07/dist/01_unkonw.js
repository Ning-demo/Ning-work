"use strict";
// # 第八单元 unkonw详解
// **(1) 任何类型的值都可以赋值给 unknown 类型：**
let value1;
value1 = "a";
value1 = 123;
// **(2) 如果没有类型断言或基于控制流的类型细化时 unknown 不可以赋值给其它类型，此时它只能赋值给 unknown 和 any 类型：**
let value2;
let value3 = value2; // error 不能将类型“unknown”分配给类型“string”
value1 = value2;
// **(3) 如果没有类型断言或基于控制流的类型细化，则不能在它上面进行任何操作：**
let value4;
value4 += 1; // error 对象的类型为 "unknown"
// **(8) 只能对 unknown 进行等或不等操作，不能进行其它操作：**
value1 === value2;
value1 !== value2;
value1 += value2; // error
// **(9) unknown 类型的值不能访问其属性、作为函数调用和作为类创建实例：**
let value5;
value5.age; // error
value5(); // error
new value5(); // error
// 我们在实际使用中，如果有类型无法确定的情况，要尽量避免使用 any，因为 any 会丢失类型信息，一旦一个类型被指定为 any，那么在它上面进行任何操作都是合法的，所以会有意想不到的情况发生。因此如果遇到无法确定类型的情况，要先考虑使用 unknown。
