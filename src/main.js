import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import './assets/main.css'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from  '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import router from './router'
library.add(fas,fab,far)

//import Vue from 'vue'
//import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
//import 'bootstrap/dist/css/bootstrap.css'
//import 'bootstrap-vue/dist/bootstrap-vue.css'

//Vue.use(BootstrapVue)
//Vue.use(IconsPlugin)


createApp(App)
.use(router)
.component('lib',library)
.component('fas',fas)
.component('fab',fab)
.component('far',far)
.component('fa',FontAwesomeIcon)
.mount('#app')
