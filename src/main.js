import Vue from 'vue'
import Filters from './plugins/filters'
import Buefy from 'buefy'
import App from './App.vue'
import ResponsiveEmbed from '@/components/responsive-embed'

import './styles/main.scss'

Vue.use(Buefy, {
  // defaultContainerElement: '#app'
  // , defaultIconPack: 'fas'
})

Vue.use(Filters)
Vue.component('responsive-embed', ResponsiveEmbed)

Vue.config.productionTip = false

new Vue({
  el: '#app'
  , components: {
    App
  }
})
