## Dom
- dom -document object model
- 页面中所有的标签都是dom元素
- 负责页面的增删改查 CURD
- 事件的三要素： 事件源 事件 事件驱动程序
## node节点
- 页面中所有的标签都是node节点，标签的文本内容也是node节点，标签的换行，回车也是节点，标签的属性也是节点，标签的注释也是节点
- DOM元素和节点的区别
- 获取元素
      1. document.getElementById('');根据id获取，用的不是很多
      2. document.getElementByClassName('');根据class名称获取
      3. document..getElementByTagName('');根据标签名获取
## calss选择器的问题
- 一般在ie-8中存在很多兼容问题，需要做兼容处理
- 在ie-8不支持通过class名获取节点的方法：不支持getElementsByClassName();
- 在ie-8不支持consoel这个对象
## 节点之间的关系
- 父类节点 ：获取父类节点的方法parentNode;他是一个属性，不是方法。
- 调用父节点直接 .parentNode
- 兄弟节点 :nextSibling在ie6,7,8中指下一个元素节点（标签，注释），在其他浏览器中指下一个节点（包括空文档和换行节点），在高级浏览器里下一个节点可以用nextElementSibling
- 兄弟节点的上一个节点priviousSibling和priviousElementSibling
- 兼容写法 var li5 = li4.nextElementSibling || li4.nextSibling;而且顺序不能颠倒。
- 单个子节点 ：第一个子节点firstChild:在ie6,7,8中指第一个子元素节点，在火狐谷歌和ie-9以后的版本指第一个节点（也包括空文档和换行节点），同理可以用firstElementChild在该机浏览器里面指第一个元素节点
- 兼容写法 var li1 = ulEl.firstElementChild || ulEl.firstChild;顺序不能颠倒
- 单个子节点 ：最后一个子节点 lastElementChild || lastChild;
- 所有的子节点 ：childNodes;
- 判断节点的类型 ： nodeType;例如（console.log(lis[i].nodeType);）
     1. nodeType ==1;元素节点
     2. nodeType == 3;文本节点/回车，换行
     3. nodeType == 8; 注释
- childNodes是标准属性，嫡出，它返回指定元素的子元素集合，包括HTML节点，所有属性，文本节点
- children 非标准属性，它返回指定元素的子元素集合；在ie6,7,8中包含注释节点的，可以用包装好多的匿名函数筛选出来元素节点，
```
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
 ```
- 给节点绑定事件 ：
```
pNode.onclick = function(){
    样式的操作 例如：
    pNode.style.backgroundColor = 'red';
}
```
- 创建子节点
    1. 创建子节点： 使用的方法是document.creatElement();
    2. 通过api创建一个元素，注意：元素创建后必须插入才能显示
    - 插入方式
         1. 父节点.appendChild();
         2. 父节点.insertBefore(要插入的节点，参考节点);例如：
         ```
         d1El.insertBefore(img, d1El.firstElementChild || d1El.firstChild);
         ```
- 删除节点
- 删除操作必须通过父节点执行
- 父节点.removeChild(子节点);
- 复制节点
- 用法： oldNode.cloneNode();
- 默认是浅克隆，深克隆需要增加额外的参数
## 属性的设置
- 添加属性： setAttribute 是用于添加属性的不是用于操作class内容的
- getAttribute 获取属性
- removeAttribute 删除属性
- 在body里面为空的时候，如果想让内容铺满，用html,body{

}
- 忽略边框的宽度，挤压内容属性：box-sizing：border-box;属于c3的属性
- 如果希望a标签被当作按钮触发事件，用href=javascript:;
## 内容处理
- 给p标签插入或者替换内容 用innerText=
- 给input设置value 用xxxx.value=
- 给ul动态添加xxx.innerHTML = 