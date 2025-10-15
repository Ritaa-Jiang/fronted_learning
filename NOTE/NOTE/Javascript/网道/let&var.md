# [JS中var和let有什么区别？（详解）](https://segmentfault.com/a/1190000044673994)

#### 前言：相信很多人和我一样，使用js也有一段时间了，但是依然将不明白在js中 var声明的变量和let 声明的变量到底有什么区别。本文就给各位介绍清楚。

#### 一，弄清楚共同点

要想理清楚2者之间的区别，先搞明白它们之间的共同点

1. JS 中的变量是弱类型可以保存所有类型的数据，即变量没有类型而值有类型。let 和 var 与变量类型无关。
2. var/let/const共同点是全局作用域中定义的变量，可以在函数中使用

```javascript
var name = 'xiaoming';
function show() {
    return name;
}
console.log(show());
```

1. 函数中声明的变量，只能在函数及其子函数中使用

```javascript
function abc() {
  var name = "xiaoming";

  function def() {
    console.log(name);
  }
  def(); //子函数结果: xiaoming
  console.log(name); //函数结果: xiaoming
}
abc();
console.log(name); //全局访问: name is not defined
```

函数内部定义的变量，在外部无法正常访问

```javascript
var name = "lulu";
function hd() {
  var name= "goudan";
  console.log(name); //goudan
}
hd();
console.log(name); //lulu
```

------

### 现在来通过例子感受区别

先运行以下2部分代码：
代码1：

```javascript
console.log(a); //undefined
var a = 1;
console.log(a);  //1
```

代码2：

```javascript
console.log(a); 
let a = 1;
console.log(a);
```

可以发现，代码1运行不会报错，在没有声明 var a之前就使用变量a，输出undefined，但是代码2运行会直接报错’Cannot access 'a' before initialization‘ ; 这个就是var 和let之间的区别所造成的，为什么呢？
这里牵扯到“***变量提升\***”，解析器会先解析代码，然后把声明的变量的声明提升到最前，这就叫做变量提升
代码1其实会被解析器解析为：

```javascript
var a;
console.log(a); //undefined
a = 1;
console.log(a);  //1
```

使用 var 定义的代码，声明会被提升到前面，赋值还在原位置

巩固一下知识，下面代码你认为输出的结果是什么？

```javascript
var name = "Trump";
function Chairman() {
  if (false) {
    var name = "Biden";
  }
  console.log(name);
}
Chairman();
```

我们分析一下，首先定义全局变量name是Trump， 函数中的赋值语句var name = "Biden";没有执行，那么name的值还是全局变量的Trump！不好意思，最终的结果是undefined。
函数内部确实是可以访问到全局定义的变量，但是当你在函数内部定义变量和全局变量并不冲突！你会想var name = "Biden";压根没有执行啊？而且就算不输出Biden也会输出Trump啊，怎么会输出undefined？这就是var变量给我们带来的麻烦；代码被解析器自动提升了！以上代码会被解析器解析为：

```javascript
var name = "Trump";
function Chairman() {
var name;
  if (false) {
   name = "Biden";
  }
  console.log(name);
}
Chairman();
```

这样一来，即使没有走到赋值语句处，在函数内部依然开辟了新的内存地址来保存局部变量name，所以最终输出的是undefined。
这其实算是js语言早期发展的一个bug。在es6的时候js推出了"***暂时性死区\*** "这个概念，也就是***TDZ\***;它存在的目的就是规定变量必须声明先声明后使用；让程序更稳定。具体来说，当程序执行到包含 let 或 const 声明的代码块时，会创建一个称为暂时性死区的区域，该区域从声明开始直到块结束。在这个区域内，变量虽然已经被声明，但是在声明之前访问该变量会导致引擎抛出一个错误。
这个特性可以让我们的代码更加的健壮，说到增加js代码的健壮性，我推荐大家在编码过程中使用js的“***严格模式\***”：
严格模式可以让我们及早发现错误，使代码更安全规范，主流框架都采用严格模式，严格模式也是未来 JS 标准
变量必须使用关键词声明，未声明的变量不允许赋值

```javascript
'use strict'
age = 100;
console.log(age);
```

关键词不允许做变量使用

```javascript
"use strict";
var public = 'houdunren.com';
```

变量参数不允许重复定义

```javascript
"use strict";
function abc(name,name){
  console.log(name);
}
```

单独为函数设置严格模式

```javascript
function strict(){
  "use strict";
  return "严格模式";
}
function notStrict() {
  return "正常模式";
}
```

------

### 那么下面介绍除了let有TDZ保护这个优点外的其它与var的不同之处

1. let存在块作用域特性，变量只在块域中有效

```javascript
{
    let name= 'lulu',age= 18;
    console.log(name); //lulu
}
console.log(name); //name is not defined
```

可以看到将代码放在大括号中 ，那么这个变量只在块内生效
但是块内部可以访问到上层作用域的变量

```javascript
let age =19;
{
    let name= 'lulu';
    console.log(age); //19
}
console.log(age); //19
```

1. let 定义的全局变量不会被保存在window对象中

在JavaScript中，一个浏览器窗口就是一个window对象。会保存一些和窗口有关的信息
比如分辨率其实就是在window中保存，如果是var声明的全局变量，也被保存在window中

```javascript
console.log('显示屏宽度'+screen.width);
console.log('显示屏宽度'+window.screen.width);//值相同
var name = "lulu";
console.log('name'+name);
console.log('name'+window.name);//值相同
```

var这个特性其实也没什么卵用，反而会造成歧义

------

### 总结

let和var的区别：

1. ES6引入let 和 const ，增加''TDZ"特性，规定必须先声明后使用。
2. let存在块作用域特性，变量只在块域中有效。
3. let全局变量与window中的变量分离开。

我个人在捋清楚let 和 var的区别和联系之后。**以后决定以后放弃使用var**！，因为let完全可以取代它，而且还要做的更好。