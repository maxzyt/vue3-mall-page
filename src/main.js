import {createApp} from 'vue';
import App from './App.vue';
//import { Button } from 'vant';
import router from './router';
import store from './store';
//import Vant from 'vant'
//import { Toast } from 'vant';
import 'vant/lib/index.css';
import './assets/css/global.css';
import './assets/css/iconfont.css';
import 'amfe-flexible';
import {Toast} from "vant";
//import axios from 'axios'
//import VueAxios from 'vue-axios'
//createApp(App).use(VueAxios, axios)
//createApp(App).use(store).use(router).use(VueAxios, axios).mount('#app')
const app = createApp(App);
app.use(Toast);
app.use(store);
app.use(router);
app.mount('#app');
//console.log(vm)
//const app = createApp(App);
//  app.config.globalProperties.$foo = 'bar'
//app.config.globalProperties.common = common
//console.log(this.$foo)
//app.use(Toast);
