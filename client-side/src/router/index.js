import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const isRequiresLogin = to.matched.some((item) => item.meta.requiresLogin); // 那些页面需要守卫
  if (isRequiresLogin) {
    const isLogin = document.cookie.includes('token'); // 判断是否是登录状态
    if (isLogin) {
      next();
    } else {
      const isTologin = window.confirm('登录后才能浏览，是否去登录');
      isTologin ? next('./login') : next(false);
    }
  } else {
    next();
  }
});

export default router;
