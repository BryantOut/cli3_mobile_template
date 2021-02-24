# cli3移动端模板

## vw适配方案

- 安装相关依赖

```js
npm i postcss-aspect-ratio-mini postcss-px-to-viewport postcss-write-svg postcss-cssnext postcss-viewport-units cssnano cssnano-preset-advanced --S
```

- 解决vue移动端适配问题，vue-cli3+vant-ui等第三方UI组件引入适配，组件变小问题...

```js
/** package.json **/
"postcss": {
    "plugins": {
        "autoprefixer": {},
            "postcss-px-to-viewport": {
                "viewportWidth": 375, 
                    "minPixelValue": 1
            }
    }
}
```

## vantui

[官方链接](https://vant-contrib.gitee.io/vant/#/zh-CN/home)

## vuex

[官方链接](https://vuex.vuejs.org/zh/guide/)

### FastClick

[FastClick原理](https://segmentfault.com/a/1190000023617219)

- 安装相关依赖

```js
import FastClick from 'fastclick'
```

- 初始化FastClick实例。在页面的DOM文档加载完成后

```js
if ('addEventListener' in document && 'ontouchstart' in window) {
  FastClick.prototype.focus = function (targetElement) {
    targetElement.focus()
  }
  document.addEventListener('DOMContentLoaded', function () {
    FastClick.attach(document.body)
  }, false)
}
```

## cli3配置开发环境和生产环境

[相关文档](https://www.cnblogs.com/gankehuang/p/11338647.html)