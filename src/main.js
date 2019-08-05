import Vue from 'vue'
import Filters from './plugins/filters'
import Buefy from 'buefy'
import App from './App.vue'

import './styles/main.scss'

Vue.use(Buefy, {
  // defaultContainerElement: '#app'
  // , defaultIconPack: 'fas'
})

Vue.use(Filters)

Vue.config.productionTip = false

new Vue({
  el: '#app'
  , components: {
    App
  }
})
