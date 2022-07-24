/*
interface
*我们需要的定义一个这样的函数，参数是一个对象，里面包含两个字段：firstName和lastName也就是英文的名和姓，然后返回一个拼接后的完整名字
*/
function getFullName(_a) {
    var firstName = _a.firstName, lastName = _a.lastName;
    return "".concat(lastName).concat(firstName);
}
var result = getFullName({ firstName: '12', lastName: '宁' });
console.log(result);
