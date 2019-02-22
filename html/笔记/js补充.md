## arguments对象
- arguments对象是伪数组
- 可以实现n个值的累加
## callee
- arguments.callee指的就是函数本身
- 例如递归函数可以写作
  ```
     function fb(n){
			if(n==1 || n==2){
				return 1;
			}
			return arguments.callee(n-1)+arguments.callee(n-2);
		}
  ```
##  立即执行函数的应用
;(function(){
    console.log('hellow!');
})();
- 好处无需声明变量污染全局
- 解决问题比如给li标签循环绑定事件
```
	for(var i = 0 ; i < lis.length ; i ++){
				lis[i].onclick = (function(a){
					return function(){
						console.log('立即执行函数形式: ',a);
					}
				})(i); //实参
			}
			alert(i);
		}
```
## script如果写在头部，想让body里面的元素执行完之后再执行script部分
- window.onload = function(){里面是script事件部分}
## 绑定监听
- 一个对象只能通过 onclick绑定一个事件
- addEventListener可以同时绑定多个事件
- 格式
```
	btn1.addEventListener('click',function(){
			alert('hello!');
		});
	btn1.addEventListener('click',function(){
			alert('hello2!');
		});
```
## 冒泡与捕获
- 默认onclick绑定事件是从里往外，称之为冒泡执行
- addEventListener可以实现冒泡执行还是捕获执行
- 第三个参数为：是否捕获执行 默认是false(冒泡执行)例如
```
    box1.addEventListener('click', function(){
			alert('this is box1');
		},true)
```
## 事件的注销
- removeEventListener(移除事件)
- 删除的时间类型必须一模一样；
- 如果通过监听添加的某个事件需要被取消，则该事件不能是匿名函数
## 兼容问题
- ie8没有addEventListener属性，只有attachEvent
- 兼容写法
```
if(d1.attachEvent){
				d1.attachEvent('onclick',say);
			}else{
				d1.addEventListener('click',say,false);
			}
		}
```
- 取消事件的兼容写法
```
    btn2.onclick = function(){
			if(d1.detachEvent){
				d1.detachEvent('onclick',say); 
			}else{
				d1.removeEventListener('click',say,false);
			}
			
		}
```
## 定时器
- setTimeout延时执行
- clearTimeout清除定时器
- clearInterval();停止计数器
```
	timer2 = setTimeout(function(){
			//显示
			adsEl.style.display = 'block';
			timer = setTimeout(function(){
				// 隐藏
				adsEl.style.display = 'none';
			},5000)
		},3000);
```
- 获取时间差 getTime