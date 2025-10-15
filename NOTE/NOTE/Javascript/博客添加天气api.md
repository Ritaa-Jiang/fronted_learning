# 博客添加天气组件

> 想给自己的博客弄一个天气组件，实现方案参考自[[1\]](https://www.cnblogs.com/zlli/p/18739043#fn1)。

## 生成插件(已失效TT)

打开[和风天气插件网站](https://widget.qweather.com/)，注册一个账号，接着创建一个`天气简约插件`。生成代码后，我们只需复制两个`<script>`之间的代码，我的如下：

```html
<div id="he-plugin-simple"></div>
<script>
WIDGET = {
  "CONFIG": {
    "modules": "01234",
    "background": "3",
    "tmpColor": "FFFFFF",
    "tmpSize": "16",
    "cityColor": "FFFFFF",
    "citySize": "16",
    "aqiColor": "FFFFFF",
    "aqiSize": "16",
    "weatherIconSize": "24",
    "alertIconSize": "18",
    "padding": "10px 10px 10px 10px",
    "shadow": "1",
    "language": "auto",
    "borderRadius": "5",
    "fixed": "false",
    "vertical": "top",
    "horizontal": "left",
    "key": "*******************"
  }
}
</script>
<script src="https://widget.qweather.net/simple/static/js/he-simple-common.js?v=2.0"></script>
```

## 详细步骤

1. 在`Hexo\themes\butterfly\source\js\`路径下新建`weather.js`文件，将如下代码复制进去。

```javascript
WIDGET = {
  "CONFIG": {
    "modules": "01234",
    "background": "3",
    "tmpColor": "FFFFFF",
    "tmpSize": "16",
    "cityColor": "FFFFFF",
    "citySize": "16",
    "aqiColor": "FFFFFF",
    "aqiSize": "16",
    "weatherIconSize": "24",
    "alertIconSize": "18",
    "padding": "10px 10px 10px 10px",
    "shadow": "1",
    "language": "auto",
    "borderRadius": "5",
    "fixed": "false",
    "vertical": "top",
    "horizontal": "left",
    "key": "*******************"
  }
}
```

1. 在主题配置文件`_config.butterfly.yml`中找到`inject`的`bottom`处引入以下两个js文件：

```yaml
- <script defer data-pjax src="/js/weather.js"></script>  # 天气插件 
- <script defer data-pjax src="https://widget.qweather.net/simple/static/js/he-simple-common.js?v=2.0"></script>  # 天气插件官方js
YAML 复制 全屏
```

如果你有自定义的`js`代码，例如`custom.js`，也可以将上面的代码复制进你的`custom.js`中，效果一样。

```yaml
- <script defer data-pjax src="/js/custom.js"></script>
- <script src="https://widget.qweather.net/simple/static/js/he-simple-common.js?v=2.0"></script>  # 天气插件官方js
```

{% note warning flat %}

1. 记得更换`key`为自己的。
2. 如果你开启了`pjax`记得在你的 `_config.butterfly.yml`中`inject`处修改你的引入代码

1. `在\themes\butterfly\layout\includes\header`路径下找到`nav.pug`文件，添加如下代码，注意严格对齐：

```pug
#he-plugin-simple
#none_space
```

[![image-20230331210104911](https://lizilong.oss-cn-hangzhou.aliyuncs.com/typora/image-20230331210104911.png)](https://lizilong.oss-cn-hangzhou.aliyuncs.com/typora/image-20230331210104911.png)

1. 在`\themes\butterfly\source\css\_layout\head.styl`中将`#blog_name`替换为`#none_space`，//标识的是注释内容

[![image-20230331210310928](https://lizilong.oss-cn-hangzhou.aliyuncs.com/typora/image-20230331210310928.png)](https://lizilong.oss-cn-hangzhou.aliyuncs.com/typora/image-20230331210310928.png)

1. 大功告成🎉🎉🎉

[![image-20230331210453273](https://lizilong.oss-cn-hangzhou.aliyuncs.com/typora/image-20230331210453273.png)](https://lizilong.oss-cn-hangzhou.aliyuncs.com/typora/image-20230331210453273.png)

