export default {}
// 1.泛型的基本使用

// 泛型可以理解为宽泛的类型，通常用于类和函数。使用的时候我们再指定类型
// 泛型不仅可以让我们的代码变得更加健壮, 还能让我们的代码在变得健壮的同时保持灵活性和可重用性
// 通过用 <T>来表示，放在参数的前面

// 不使用泛型	
// new Array(数组长度)  .fill(value)  可以对数组进行填充 表中用value进行填充
// let getArray = (value:number, items:number):number[]=>{
//     return new Array(items).fill(value);
// };
// let arr = getArray(8, 3);
// // let arr = getArray("abc", 3); // 报错
// console.log(arr);

// 使用泛型
// let getArray = <T>(value:T, items:number):T[]=>{
//     return new Array(items).fill(value);
// };

// let arr = getArray<string>("刘亦菲", 3)
// // let arr = getArray<number>(10, 3)

// let res = arr.map(item => item.length);
// console.log(arr);

// 泛型约束
// 在TS中，我们需要严格的设置各种类型，我们使用泛型之后，将会变得更加灵活，但同时也将会存在一些问题
// 我们需要对泛型进行约束来解决这些问题
// 演示可能出现的问题
// function getLength<T>(arr: T): T{
//   console.log(arr.length);
//   return arr;
// }

// 通用的方法
// function getLength<T>(arr: Array<T>): Array<T> {
//   console.log(arr.length); 
//   return arr;
//  }

// 泛型接口
// interface ILength {
// 	length: number
// }

// function getLength<T extends ILength>(arr: T): number {
// 	return arr.length
// }

// console.log(getLength("孟子义"));

// console.log(getLength([1, 2, 3]));

// console.log(getLength({ length: 20 }));

// 使用类型参数进行约束
// 一个泛型被另一个泛型约束, 就叫做泛型约束中使用类型参数
// 你可以声明一个类型参数，且它被另一个类型参数所约束。 比如，现在我们想要用属性名从对象里获取这个属性。并且我们想要确保这个属性存在于对象 obj上，因此我们需要在这两个类型之间使用约束
// interface IkeyInterface {
//   [key: string]: any
// }

// let getProps = (obj:IkeyInterface, key:string): any => {
//   return obj[key]
// } 

// let x ={ a: 1, b:2 };
// let res = getProps(x, "a");
// // let res = getProps(x, "c"); // 没报错
// console.log(res);


function getProperty<T, K extends keyof T>(obj: T, key: K) {
	return obj[key];
  }
  
  let x = { a: 1, b: 2};
  getProperty(x, "a"); 
  // getProperty(x, "c");  // 报错