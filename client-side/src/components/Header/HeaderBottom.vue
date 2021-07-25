<template>
  <div class="bottom-container">
      <div class="item-left">
          <router-link to="/">科技</router-link>
          <router-link to="/">随笔</router-link>
      </div>
      <div class="item-right">
          <template v-if="data">
              <router-link @click="loginOut" :to="{ name: 'Login' }">退出登录</router-link>
          </template>
          <router-link v-else :to="{ name: 'Login' }">登录</router-link>
      </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: mapState('loginUser', ['data', 'isLoading']),
  methods: {
    loginOut() {
      this.$store.dispatch('loginUser/loginOut');
    },
  },
};
</script>

<style lang="less" scoped>
.bottom-container {
  display: flex;
  justify-content: space-between;
  position: fixed;
  text-align: center;
  line-height: 45px;
  width: 100%;
  border-top: 1px solid #ebeef5;
  height: 45px;
  background: rgba(255,255,255,0.85);
  top: 60px;
  transition: 0.5s;
  a {
      margin-left: 15px;
      font-size: 14px;
      transition: color 0.35s;
      &:hover {
          color: #ff5268;
      }
  }
}
.item-left,
.item-right {
    margin: 0 66px;
}
</style>>
