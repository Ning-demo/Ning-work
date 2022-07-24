/* 

绕开多余属性的
*/

interface Rolec{
	[id:number]:string
}

let role:Rolec={
	0:'super'
}

interface Counter{
	():void;
	count:number;
}
const getCounter=():Counter=>{
	const c=()=>{
		c.count++
	}
	c.count=0
	return c
}
const counter:Counter=getCounter()  //通过getCounter函数获取到这个计数器
