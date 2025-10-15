# HTML——表格的快速生成以及表格的合并
## sublime表格的快速生成

### 单行单列

快捷键：table>tr>td 然后在按一下 tab键
注意：其中标签定义的是有若干行，表示每行
被分割成若干单元格。
实现：
![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/e4f2a1455771e04e8060ec4cf1ec04b1.png)

### 单行多列

快捷键：table>tr>td*N 然后按一下tab键，其中N是一个整数，代表需要生产多少列
![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/14fe3caeb863cfc5ba2e4d5f154363f1.png)

### 多行单列

快捷键：table>tr*M>td 然后按一下tab键，其中M是一个整数，代表需要生产多少行
![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/ce0f763d679423618f1cf866e1df034e.png)

### 多行多列

快捷键：table>tr*M>td*N 然后在按一下 tab 键，其中M和N都是整数，M代表需要产生多少行，N代表需要产生多少列
![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/bd7ea0f0a5f67dba1275d49e4d7ceec9.png)

### 带填充数据的表格

快捷键：table>tr*M>td{填充的内容KaTeX parse error: Expected 'EOF', got '}' at position 1: }̲*N 然后在按一下 tab 键…是一个从1开始自增的整数
![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/12fc18526837ad33c8eac8f2f07615de.png)

## 高级表格

### 表格标题

什么是表格标题呢？
![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/b07356db9b53fee7e9376ebb12315b68.png)
如何实现这样的表格标题呢？其实很简单。
使用一个caption标签就可以解决。

###### 代码：

```html
<table align="center" width="800" border="1">
    <caption><h2>2016年9月份全球操作系统市场份额</h2></caption>
    <tr>
        <td>操作系统</td>
        <td>厂商</td>
        <td>2016.09</td>
        <td>2016.08</td>
        <td>增长值</td>
    </tr>
    <tr>
        <td>windows 7</td>
        <td>Microsoft</td>
        <td>48.27%</td>
        <td>47.25%</td>
        <td>1.03%</td>
    </tr>
    <tr>
        <td>wWindows 10</td>
        <td>Microsoft</td>
        <td>22.53%</td>
        <td>22.99%</td>
        <td>-0.46%</td>
    </tr>
    <tr>
        <td>windows XP</td>
        <td>Microsoft</td>
        <td>9.11%</td>
        <td>9.36%</td>
        <td>-0.25%</td>
    </tr>
    <tr>
        <td>windows 8.1</td>
        <td>Microsoft</td>
        <td>7.83%</td>
        <td>7.92%</td>
        <td>-0.09%</td>
    </tr>
    <tr>
        <td>Mac OS ×10.11</td>
        <td>Apple</td>
        <td>4.07%</td>
        <td>4.38%</td>
        <td>-0.31%</td>
    </tr>
    <tr>
        <td>Linux</td>
        <td>Linux</td>
        <td>2.23%</td>
        <td>2.11%</td>
        <td>0.13%</td>
    </tr>
    <tr>
        <td>windows 8</td>
        <td>Microsoft</td>
        <td>1.78%</td>
        <td>1.82%</td>
        <td>-0.04%</td>
    </tr>
    <tr>
        <td>Mac OS ×10.10</td>
        <td>Apple</td>
        <td>1.53%</td>
        <td>1.73%</td>
        <td>-0.20%</td>
    </tr>
    <tr>
        <td>Windows Vista</td>
        <td>Microsoft</td>
        <td>1.09%</td>
        <td>1.05%</td>
        <td>0.04%</td>
    </tr>
</table>
12345678910111213141516171819202122232425262728293031323334353637383940414243444546474849505152535455565758596061626364656667686970717273
```

##### 实现效果：

![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/6b950b0d8eb6ef94ee7e12cb26da48dc.png)

### 不规则表格之单元格的合并

接下来我们看看生活中不常见的不规则的表格如何实现吧。
例如这样的课程表，该如何用HTML和css去实现呢。
![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/873ef369e82dea53cb7f38bc3ba6bafd.png)
**第一步：**我们先使用上面的快速生成表格的方法生成一个10行8列的表格。table>tr*10>td*8
**第二步：**实现单元格合并。
可以看到该表格第一行的第一个单元格合第二个单元格是合并的。
1.水平方向的合并（按列合并）。其中“2”是指合并几个单元格

```html
  <td colspan="2" >   </td>
1
```

需要注意的是，合并的单元格，只需要写一个td。也就是说，这里水平方向合并了两个单元格，那么这一行中的第二对标签不需要写。

而上午和下午这两个区域也是不规则的，垂直方向的单元格合并。而“上午”这一块区域的垂直方向的合并，则只需要在第二个中的第一个中写 ，后面四行的第一个都不需要写。就能完成垂直方向的合并。
2.垂直方向的合并（按行合并）

```html
<td rowspan="5">上午</td>
1
```

**第三步**：表头带斜线的单元格怎么实现。
实现的方法很多，下次再进行总结。我这里使用的是伪元素的方法构造出斜对角线。
然后再用两个容器放内容，容器的高度是单元格的一半，上面的容器中的文字右对齐，下面容器里的文字左对齐。就可以实现这个效果了。

##### 接下来看看具体代码吧

###### html的代码

~~~html
 <table align="center" width="800" border="1">
        <tr>
            <td colspan="2" class="top">
                <span>星期</span>
                <span>节次</span>
            </td>
            <td>星期一</td>
            <td>星期二</td>
            <td>星期三</td>
            <td>星期四</td>
            <td>星期五</td>
            <td>星期六</td>

        </tr>
        <tr>

            <td rowspan="5">上午</td>
            <td>早自习</td>
            <td>语文</td>
            <td>英语</td>
            <td>语文</td>
            <td>英语</td>
            <td>语文</td>
            <td></td>
        </tr>
        <tr>
            <td>第一节</td>
            <td>物理</td>
            <td>英语</td>
            <td>语文</td>
            <td>英语</td>
            <td>语文</td>
            <td>物理</td>
        </tr>
        <tr>
            <td>第二节</td>
            <td>数学</td>
            <td>语文</td>
            <td>数学</td>
            <td>数学</td>
            <td>英语</td>
            <td>数学</td>

        </tr>
        <tr>
            <td>第三节</td>
            <td>英语</td>
            <td>生物</td>
            <td>化学</td>
            <td>语文</td>
            <td>数学</td>
            <td>生物</td>
        </tr>
        <tr>
            <td>第四节</td>
            <td>化学</td>
            <td>数学</td>
            <td>英语</td>
            <td>物理</td>
            <td>体育</td>
            <td>化学</td>
        </tr>
        <tr>
            <td rowspan="3">下午</td>
            <td>第一节</td>
            <td>语文</td>
            <td>化学</td>
            <td>物理</td>
            <td>化学</td>
            <td>计算机</td>
            <td>语文</td>
        </tr>
        <tr>
            <td>第二节</td>
            <td>语文</td>
            <td>物理</td>
            <td>生物</td>
            <td>英语</td>
            <td>生物</td>
            <td>英语</td>
        </tr>
        <tr>
            <td>第三节</td>
            <td>德育</td>
            <td>数学</td>
            <td>体育</td>
            <td>生物</td>
            <td>自习</td>
            <td> </td>

        </tr>
        <tr>
            <td>晚上</td>
            <td>晚自习</td>
            <td>数学</td>
            <td>英语</td>
            <td>语文</td>
            <td>化学</td>
            <td>物理</td>
            <td> </td>
        </tr>
    </table>```

###### css的代码

```css
body table tr .top {
            border: solid 1px #000;
            width: 100px;
            height: 26px;
            position: relative;
            background-color: transparent;
        }

        .top:before {
            position: absolute;
            top: 0px;
            right: 0;
            left: 0;
            bottom: 0;
            border-bottom: 26px solid #000;
            border-right: 198px solid transparent;
            content: "";
        }

        .top:after {
            position: absolute;
            left: 0;
            right: 1px;
            top: 1px;
            bottom: 0;
            border-bottom: 26px solid white;
            border-right: 197px solid transparent;
            content: "";
        }
        body table tr .top span:nth-child(1){
            position: absolute;
            top: 0;
            right: 3px;
            text-align: right;
            height: 50%;
            z-index: 12;
        }
        body table tr .top span:nth-child(2){
            position: absolute;
            text-align: left;
            top: 50%;
            left: 3px;
            transform: translate(0,-50%);
            height: 50%;
            z-index: 12;
        }
123456789101112131415161718192021222324252627282930313233343536373839404142434445464748495051525354555657585960616263646566676869707172737475767778798081828384858687888990919293949596979899100101102103104105106107108109110111112113114115116117118119120121122123124125126127128129130131132133134135136137138139140141142143144145146147148149150151152
~~~

###### 实现效果

![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/4bd3f1b0acc059390ed5f155e31a9e9b.png)