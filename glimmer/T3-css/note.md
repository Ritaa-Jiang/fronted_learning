## 1.什么是盒子模型？ 

content+padding+border+margin 内到外

 ## 2.如何让元素水平居中？ 

(1) 块级元素

①`margin: 0 auto` ②flex布局

(2) 行内元素

`text-align: center`

## 3.如何让两个div并排显示？ 

1. 使用float 浮动
2. 并排→需要具备行内元素的性质→用 `display: inline-block`转化为行内块元素

 ## 4.了解一个CSS的布局方式。

- flex布局 

  弹性盒子 适合对齐和排列元素

 ## 5.如何定位？

- position属性

  static：标准流

  relative：相对定位 未脱流 相对原来的位置

  absolute：绝对定位 脱流 相对父级元素

  > eg.关闭按钮

  fixed：固定定位 脱流 相对视窗

  > eg.↑箭头

  sticky：粘性定位 relative→fixed 随视口变化

  > eg.侧边栏

- 子绝父相：

  > 子元素如果要设置成绝对定位，会相对于最近的非static定位的祖先元素，为了精确定位，需要给父元素设计相对定位，使父元素成为最近的非static定位的祖先元素



