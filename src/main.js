import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import Vuex from 'vuex'
import app from './store/app'

Vue.config.productionTip = false
Vue.use(Vuex);

let store = new Vuex.Store(
      app
);

new Vue({
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
