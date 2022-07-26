/*
原型和继承
面向对象的特点：继承，多态，封装
*/
function Anmation(name) {
    this.name = name;
    this.Sayhi = function () {
        console.log('我是一个继承函数');
    };
}
Anmation.prototype.age = '13';
Anmation.prototype.Task = function () {
    console.log('我在吼叫');
};
var cat = new Anmation('Cat');
console.log(cat.name);
console.log(cat.Sayhi);
console.log(cat.age);
console.log(cat.Task);
/* 

*/

/* 
Es6的类的声明
*/

class Persion {
    /* 
    定义属性
    */
    constructor(name, age) {
        this.name = name,
            this.age = age
    }

    /* 
    定义方法
    */
    SayHi() {
        return this.name
    }
}

let p = new Persion('小红', 12)
console.log(p.age);
console.log(p.name);
console.log(p.SayHi);


