/* 
enum的详解
1.总结：每次手动添加索引的时候，下面的数据如果不是手动添加的索引，将会以递增的方式，把索引展示出来
2.数字类型：我们可以像访问对象一样使用'.',和'[]'两种方式访问里面的值
3.字符串枚举：含字符串值成员的枚举中不允许使用计算值,且必须是字符串类型的。
  枚举成员必须具有初始化表达式。
*/

/* 
1.数字枚举的定义
*1.1语法使用的是es6的语法，Uploading：Uploading
*1.2自动添加指定索引符号
*1.3我们可以像访问对象一样使用'.',和'[]'两种方式访问里面的值
*/
enum Status {
	LiuJiJu,
	WangShuaiLin,
	NingShuai
}
//像访问对象一样使用',' 
console.log(Status.LiuJiJu);
console.log(Status['LiuJiJu']);
console.log(Status.NingShuai);

/* 
指定索引值
总结：每次手动添加索引的时候，下面的数据如果不是手动添加的索引，将会以递增的方式，把索引展示出来
*/
enum Anmimal {
	Dog = 200,
	Pig,
	Cat
}
console.log(Anmimal.Dog);
console.log(Anmimal['Dog']);
console.log(Anmimal.Snake);

// 3.计算值和常量
enum Constant {
	a = getvalue(),
	b, // 枚举成员必须具有初始化表达式。
	c,
}
/* 
反向映射
除了创建一个以属性名做为对象成员的对象之外，数字枚举成员还具有了 反向映射，从枚举值到枚举名字。 
*/
enum Enum {
	A
}
let a = Enum.A;
let nameOfA = Enum[a]; // "A"

/* 
字符串枚举
在一个字符串枚举里，每个成员都必须用字符串字面量，或另外一个字符串枚举成员进行初始化。
*/
enum Direction {
	Up = "UP",
	Down = "DOWN",
	Left = "LEFT",
	Right = "RIGHT",
}

/* 异构枚举（Heterogeneous enums）
从技术的角度来说，枚举可以混合字符串和数字成员，但是似乎你并不会这么做： */

enum BooleanLikeHeterogeneousEnum {
	No = 0,
	Yes = "YES",
}

/**
 * 枚举成员类型
 */
/**
 * 枚举成员类型
 * 当所有枚举成员都拥有字面量枚举值时，它就带有了一种特殊的语义。
 */

enum Animal {
	Dog = 1,
	Cat = 2,
}

/**
 * 狗
 */
interface Dog {
	type: Animal.Dog
}

/**
 * 猫
 */
interface Cat {
	type: Animal.Cat
}

let cat1: Cat = {
	type: Animal.Dog // error [ts] 不能将类型“Animal.Dog”分配给类型“Animal.Cat”
};
let dog: Dog = {
	type: Animal.Dog
};

/**
* 联合类型
* [联合类型](./Advanced Types.md#union-types)，只要知道通过联合枚举，类型系统能够利用这样一个事实，它可以知道枚举里的值的集合。 
*/

enum Keys {
	/**关闭 */
	Off,
	On
}

interface Light {
	status: Keys
}

let light: Light = {
	status: Keys.Off
}
/* 运行时的枚举
枚举是在运行时真正存在的对象。 例如下面的枚举：
 */

enum E {
    X, Y, Z
}
// can actually be passed around to functions

function f(obj: { X: number }) {
    return obj.X;
}

// Works, since 'E' has a property named 'X' which is a number.
f(E);

// const枚举
// 然而在某些情况下需求很严格。 为了避免在额外生成的代码上的开销和额外的非直接的对枚举成员的访问，我们可以使用 const枚举。 常量枚举通过在枚举上使用 const修饰符来定义。

const enum Enum {
    A = 1,
    B = A * 2
}