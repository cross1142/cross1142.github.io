function animate(el,target){
	clearInterval(el.timer);
el.timer = setInterval(function(){
	var leader = el.offsetLeft;
	var step =( target - leader)/10;
	
	if(Math.abs(step) < 1){
	 step = (step < 0?-1:1);
	//  console.log(step);
	}
	leader += step;
	el.style.left = leader + 'px';
	if(target  == leader){
		clearInterval(el.timer);
		// console.log('end...');
	}
},17);
}

function move(el,target,step){
	//先清除之前的定时
	clearInterval(el.timer);
	el.timer = setInterval(function(){
		// 1. 400-800 step>0
		// 2. 800-400 step<0
		//重新声明step
		// 1.获取当前位置
		var currentLeft = el.offsetLeft;
		//目标位置>当前位置
		step = target>currentLeft?Math.abs(step):-1*Math.abs(step);
		console.log(step);
		// 2.计算目标位置
		var targetLeft = currentLeft + step;
		// 3. 赋值
		el.style.left = targetLeft + 'px';
		// 4. 计算差值
		var cha = target - targetLeft;
		// 5. 停止条件 Math.abs求绝对值
		if(Math.abs(cha)<Math.abs(step)){
			// 6. 直接跳到结果
			el.style.left = target + 'px';
			clearInterval(el.timer);
			console.log('结束了....');
		}
	},17)
}
	/**
* 用于添加className
**/
function addClassName(el,cname){
	//如果没有class
	if(!el.getAttribute('class')){
		el.setAttribute('class', cname);
		return;
	}

	var oldClassStr = el.getAttribute('class');
	//转换为数组 可以判断单个元素
	var oldClassArr = oldClassStr.split(' ');
	//判断数组是否包含某个cname ['d1','danger'] 'weight'
	if(oldClassArr.indexOf(cname)==-1){
		oldClassStr += ' '+cname;
		el.setAttribute('class', oldClassStr);
	}
}
/**
* 删除某个classname
**/
function removeClassName(el,cname)
{
	//联class都没有
	if(!el.getAttribute('class')){
		return;
	}
	var oldClassStr = el.getAttribute('class');
	var oldClassArr = oldClassStr.split(' ');
	//找到cname下标
	var index = oldClassArr.indexOf(cname);
	//存在
	if(index!=-1){
		oldClassArr.splice(index,1);
	}
	//数组还原字符串
	var newClassStr = oldClassArr.join(' ');
	el.setAttribute('class', newClassStr);
}
/**
* 判断是否存在某个cname
**/
function hasClass(el,cname){
	if(!el.getAttribute('class')){
		return false;
	}
	var oldClassStr = el.getAttribute('class');
	var oldClassArr = oldClassStr.split(' ');
	return oldClassArr.indexOf(cname)!=-1;
}

// 在ie6,7,8中 children是包含注释节点的
function myChildren (pNode) {
	var children = pNode.children;
	var rs = [];
	for(var i = 0 ; i < children.length ; i++){
		//过滤元素节点
		if(children[i].nodeType == 1){
			rs.push(children[i]);
		}
	}
	return rs;
}