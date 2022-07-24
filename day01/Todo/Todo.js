//获取页面元素
var txt = document.querySelector('.txt')
var box = document.querySelector('.fu')
var ul = document.querySelector('ul')
var btn = document.querySelector('.btn')
var num = document.querySelector('.num')
var ftr = document.querySelector('.ftr')
var kong = document.querySelector('.kong')
var btns = document.querySelectorAll('.btn1'); //通过标签获取到一组按钮

var active = document.querySelector('.active')
var cd = document.querySelector('.cd')
var ccd = document.querySelector('.ccd')
var All = document.querySelector('.All')

//输入框自动获取焦点   focus 自动获取焦点
txt.focus()
// 选中数组长度
var check_val = []
// console.log(check_val.length!=0);
// 返回选中数组长度的函数
function checkLength() {
	var fx = document.querySelectorAll('.fx')
	check_val = []
	fx.forEach(item => {
		if (item.checked == true) {
			check_val.push(item)
			// console.log(check_val.length);
		}
	});
	return check_val.length
}
// 内容为空显示隐藏
function xx() {
	if (ul.children.length) {
		ftr.style.display = "flex"
		kong.style.display = "none"
	} else {
		ftr.style.display = "none"
		kong.style.display = "block"
	}
}
// 底部选中显示隐藏
function xr() {
	var Ns = document.querySelectorAll('.fx'); //通过标签获取到一组按钮
	// console.log(e.target.checked);
	for (var i = 0; i < Ns.length; i++) {
		if (Ns[i].checked == true) {
			ccd.style.display = "inline-block"
			if (ul.children.length > check_val.length && check_val.length != 0) {
				cd.style.display = "inline-block"
				active.style.display = "inline-block"
			} else {
				cd.style.display = "none"
				active.style.display = "none"
				//干掉所有人 --->找所有人  for遍历
				for (var j = 0; j < btns.length; j++) {
					btns[j].style.backgroundColor = ''
					btns[j].style.color = 'black'
				}
				// 留下全部按钮
				All.style.backgroundColor = '#fe7345'
				All.style.color = '#ffffff'
				// 显示全部标签
				for (var n = 0; n < Ns.length; n++) {
					Ns[n].parentNode.style.display = 'flex'
				}
			}
			return
		} else {
			cd.style.display = "none"
			active.style.display = "none"
			ccd.style.display = "none"
			if (check_val.length == 0) {
				//干掉所有人 --->找所有人  for遍历
				for (var j = 0; j < btns.length; j++) {
					btns[j].style.backgroundColor = ''
					btns[j].style.color = 'black'
				}
				// 留下全部按钮
				All.style.backgroundColor = '#fe7345'
				All.style.color = '#ffffff'
				// 显示全部标签
				for (var n = 0; n < Ns.length; n++) {
					Ns[n].parentNode.style.display = 'flex'
				}
			}
		}
		// console.log(Ns[i]);
	}
}
//判断输入内容不能为空，给予用户提示
//按下enter键时，输入框内容成功添加到任务栏中
txt.onkeyup = function (e) {
	if (e.keyCode == 13) { //说明按下回车键
		if (txt.value.trim() == '') { //判断为本框内容为空给予提示
			//trim()去掉字符串头尾空格  判断为空时，把空格排除在外
			alert('内容不能为空')
		} else {
			//输入框内容不为空时
			var li = document.createElement('li'); //创建标签
			li.innerHTML = `
				<input type="checkbox" class='fx'>
				<p>${txt.value}</p>
				<a href="JavaScript:;" class='del'>X</a>
				` //写入内容
			ul.appendChild(li)
			//计数
			num.innerHTML = ul.children.length - check_val.length
			//清空文本框的值
			txt.value = ''
			// 底部渲染
			xr()
			xx()
		}
	}
}
// 按下按钮，输入框内容成功添加到任务栏中
btn.onclick = function () {
	if (txt.value.trim() == '') { //判断为本框内容为空给予提示
		//trim()去掉字符串头尾空格  判断为空时，把空格排除在外
		console.log('内容为空!!');
	} else {
		//输入框内容不为空时
		var li = document.createElement('li'); //创建标签
		li.innerHTML = `
				<input type="checkbox" class='fx'>
				<p>${txt.value}</p>
				<a href="JavaScript:;" class='del'>X</a>
				` //写入内容
		ul.appendChild(li)
		//计数
		num.innerHTML = ul.children.length - check_val.length
		//清空文本框的值
		txt.value = ''
		// console.log(Ns);
		// 底部渲染
		xr()
		xx()
	}
}
//事件委托 删除   ---实际执行的是子元素  e.target  目标：点删除
box.addEventListener('click', function (e) {
	if (e.target.className == 'del') { //子元素：删除标签   ul.removeChild(li)
		e.target.parentNode.parentNode.removeChild(e.target.parentNode);
	}
	// 选中数组长度
	checkLength()
	//计数
	num.innerHTML = ul.children.length - check_val.length
	// 底部渲染
	xr()
	xx()
})
//事件委托  选中翻转 
ul.addEventListener('click', function (e) {
	// var fx = document.querySelectorAll('.fx')
	if (e.target.className == 'fx') { //子元素：删除标签   ul.removeChild(li)
		if (e.target.checked == true) {
			e.target.style.transform = 'rotateX(180deg)'
			e.target.nextElementSibling.style.transform = 'rotateX(180deg)'
			e.target.parentNode.className = 'rotate'
			// console.log(e.target.nextElementSibling);
			checkLength()
		} else {
			e.target.parentNode.className = ''
			e.target.style.transform = 'rotateX(360deg)'
			e.target.nextElementSibling.style.transform = 'rotateX(360deg)'
			checkLength()
		}
		xr()
	}
})
//一组里找每一个  for遍历
for (var i = 0; i < btns.length; i++) {
	//添加点击事件
	btns[i].onclick = function () {
		var fx = document.querySelectorAll('.fx')
		//干掉所有人 --->找所有人  for遍历
		for (var j = 0; j < btns.length; j++) {
			btns[j].style.backgroundColor = ''
			btns[j].style.color = 'black'
		}
		//留下我自己
		this.style.backgroundColor = '#fe7345'
		this.style.color = '#ffffff'
		// console.log(this.id);
		switch (this.id) {
			// 显示全部标签
			case 'All':
				for (var n = 0; n < fx.length; n++) {
					fx[n].parentNode.style.display = 'flex'
				}
				break;
			// 显示未选中的
			case 'active':
				for (var n = 0; n < fx.length; n++) {
					if (fx[n].checked == true) {
						fx[n].parentNode.style.display = 'none'
					} else {
						fx[n].parentNode.style.display = 'flex'
					}
				}
				break;
			// 显示选中的
			case 'cd':
				for (var n = 0; n < fx.length; n++) {
					if (fx[n].checked == false) {
						fx[n].parentNode.style.display = 'none'
					} else {
						fx[n].parentNode.style.display = 'flex'
					}
				}
				break;
			// 删除选中 显示全部标签
			case 'ccd':
				ccd.style.backgroundColor = ''
				ccd.style.color = 'black'
				for (var n = 0; n < fx.length; n++) {
					if (fx[n].checked == true) {
						ul.removeChild(fx[n].parentNode)
					} else {
						fx[n].parentNode.style.display = 'flex'
					}
				}
				// 控制底部显示隐藏
				xr()
				// 选中数组长度
				checkLength()
				//计数
				num.innerHTML = ul.children.length - check_val.length
				All.style.backgroundColor = '#fe7345'
				All.style.color = '#ffffff'
				break;
			default:
				break;
		}

	}
}