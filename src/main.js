import Vue from 'vue'
import App from './App.vue'
import router from './router'

import 'jquery/src/jquery.js';
import 'popper.js/dist/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';

import 'bootstrap/dist/css/bootstrap.css';
import 'uikit/dist/css/uikit.css';

import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

// loads the Icon plugin
UIkit.use(Icons);
import '@fortawesome/fontawesome-free/css/all.css';
import vuetify from './plugins/vuetify';
import {
    BootstrapVue,
    BootstrapVueIcons
} from 'bootstrap-vue'

import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.config.productionTip = false

new Vue({
    router,
    vuetify,
    render: h => h(App)
}).$mount('#app')