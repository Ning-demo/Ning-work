// 1.类的基本使用
// 定义
// TypeScript 是面向对象的 JavaScript。
// 类描述了所创建的对象共同的属性和方法。
// TypeScript 支持面向对象的所有特性，比如 类、接口等。
// TypeScript 类定义方式如下:
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// class class_name {
// 	// 类作用域
// }
// 定义类的关键字为 class，后面紧跟类名，类可以包含以下几个模块（类的数据成员）：
// 字段 − 字段是类里面声明的变量。字段表示对象的有关数据。
// 构造函数 − 类实例化时调用，可以为类的对象分配内存。
// 方法 − 方法为对象要执行的操作。
// class Person {
// 	// 注意点: 需要先定义实例属性，才能够使用
// 	name: string
// 	age: number
// 	constructor(name: string, age: number) {
// 		this.name = name;
// 		this.age = age;
// 	}
// 	sayHello(): void {
// 		console.log(`我的女神是${this.name}, 她今年${this.age}岁了, 但是在我心里她永远18岁!`);
// 	}
// }
// let p = new Person("邱淑贞", 54);
// p.sayHello();
// 类的继承
// TypeScript 支持继承类，即我们可以在创建类的时候继承一个已存在的类，这个已存在的类称为父类，继承它的类称为子类。
// 类继承使用关键字 extends，子类除了不能继承父类的私有成员(方法和属性)和构造函数，其他的都可以继承。
// TypeScript 一次只能继承一个类，不支持继承多个类，但 TypeScript 支持多重继承（A 继承 B，B 继承 C）。
// 语法格式如下：class child_class_name extends parent_class_name
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.say = function () {
        console.log("\u6211\u662F".concat(this.name, ", \u4ECA\u5E74").concat(this.age, "\u5C81"));
    };
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, score) {
        var _this = _super.call(this, name, age) || this;
        _this.score = score;
        return _this;
    }
    Student.prototype.say = function () {
        // 调用父类的函数
        _super.prototype.say.call(this);
        console.log("\u6211\u662F\u91CD\u5199\u4E4B\u540E\u7684say\u65B9\u6CD5, \u6211\u662F\u5B66\u751F".concat(this.name, ", \u4ECA\u5E74").concat(this.age, "\u5C81\u4E86, \u6211\u7684\u6210\u7EE9\u4E3A").concat(this.score));
    };
    return Student;
}(Person));
var s = new Student("蒋依依", 18, "A");
s.say();
