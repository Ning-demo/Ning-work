/*
数字枚举
*/
var Status;
(function (Status) {
    Status[Status["LiuJiJu"] = 0] = "LiuJiJu";
    Status[Status["WangShuaiLin"] = 1] = "WangShuaiLin";
    Status[Status["NingShuai"] = 2] = "NingShuai";
})(Status || (Status = {}));
console.log(Status.LiuJiJu);
console.log(Status['LiuJiJu']);
console.log(Status.NingShuai);
