import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/scss/index.scss'
import FastClick from 'fastclick'

if ('addEventListener' in document && 'ontouchstart' in window) {
  FastClick.prototype.focus = function (targetElement) {
    targetElement.focus()
  }
  document.addEventListener('DOMContentLoaded', function () {
    FastClick.attach(document.body)
  }, false)
}

Vue.config.productionTip = false

import {Toast, Dialog, Lazyload, Image as VanImage} from 'vant'

import * as filters from './filters'

// register global utility filters.
Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key])
})

Vue.use(Toast)
Vue.use(Dialog)
Vue.use(Lazyload)
Vue.use(VanImage)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
