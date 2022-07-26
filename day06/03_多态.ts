// ### 多态
// 1 多态的定义
// 父类定义一个方法不去实现，让继承他的子类去实现，每一个子类有不同的表现
// 1. 首先声明一个父类，父类中声明一个方法，不去实现

class Animal {
	name: string
	constructor(name: string) {
		this.name = name
	}
	// 父类定义了一个方法，不去实现
	eat() { }
}

// 2. 声明一个类继承父类，并且实现 eat 方法

class Dog extends Animal {
	constructor(name: string) {
		super(name)
	}
	eat(): void {
		console.log(`${this.name}吃骨头`);

	}
}
// 3. 再声明一个类继承父类，并且实现 eat 方法

class Cat extends Animal {
	constructor(name: string) {
		super(name)
	}
	eat(): void {
		console.log(`${this.name}吃鱼`);

	}
}

//    我们可以看到，父类 Animal 内声明了 eat 方法；但是没有去实现，而是有继承他的子类 Dog 和 Cat 去实现，每个子类有不同的表现，这就是多态的实现

