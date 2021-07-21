import Vue from 'vue';
import ElementUI from 'element-ui';
import App from './App.vue';
import router from './router';
import store from './store';
import 'element-ui/lib/theme-chalk/index.css';
import './styles/reset.less';
import './mock/index';

import getLoveLitter from './api/lovelitter';

Vue.config.productionTip = false;
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
getLoveLitter.getLoveLitter(2, 1, 3).then((resp) => {
  console.log(resp);
});
