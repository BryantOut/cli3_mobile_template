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

