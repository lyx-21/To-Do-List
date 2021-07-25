<template>
  <div class="login-container">
    <div class="login-content">
      <div class="item-content">
        <div class="login-top">
          <div class="login-exit">
          <div class="exit">
            <img :src="Image" @click="clickExit">
          </div>
        </div>
          <div class="index-logo">Tree Hole</div>
        </div>
        <div class="login-main">
          <p>
            账号:
            <input
              type="text"
              class="fm-text"
              v-model="loginId"
              placeholder="用户名/邮箱/电话号码"
              autocomplete="new-password"
            />
          </p>
          <p>
            密码:
            <input
              type="password"
              class="fm-text"
              v-model="loginPwd"
              placeholder="请输入密码"
              autocomplete="new-password"
            />
          </p>
          <p>
            <button class="button" @click="handleClick">登录</button>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Image from '../../assets/arrow.png';

export default {
  data() {
    return {
      Image,
      loginId: '',
      loginPwd: '',
    };
  },
  methods: {
    async handleClick() {
      const user = await this.$store.dispatch('loginUser/login', {
        loginId: this.loginId,
        loginPwd: this.loginPwd,
      });
      if (user) {
        this.$router.push('/'); // 登录成功 跳转
      } else {
        alert('账户密码错误');
      }
    },
    clickExit() { // 退出登录页面
      this.$router.push('/');
    },
  },
};
</script>

<style lang="less" scoped>
.login-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.85);
  z-index: 999;
  .login-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-height: 100px;
  }
}
.item-content {
  width: 400px;
  height: 550px;
  background: #fff;
  border: none;
  border-radius: 10px 10px 6px 6px;
  .login-top {
    position: relative;
    padding-top: 30px;
    height: 170px;
    box-shadow: 0 8px 6px -6px #828282;
    border-radius: 6px 6px 0 0;
    background: #1f1b4e;
    background: -webkit-gradient(
      linear,
      right top,
      left bottom,
      from(#1f1c4e),
      to(#2f1247)
    );
    text-align: center;
    .index-logo {
      width: 220px;
      color: aqua;
      font-size: 30px;
      margin: 0 auto 10px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
.login-main {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
  p {
    padding-top: 40px;
    font-size: 18px;
    .fm-text {
      border: 1px solid #ccc;
      outline: none;
      height: 30px;
      font-size: 14px;
      padding-left: 8px;
      &:hover {
        border: 1px solid #a5a1a1;
      }
    }
  }
  .button {
    width: 50px;
    height: 50px;
    border-radius: 42%;
     background: #1f1b4e;
    background: -webkit-gradient(
      linear,
      right top,
      left bottom,
      from(#1f1c4e),
      to(#2f1247)
    );
    color: aqua;
    &:hover {
      border: 2px solid aqua;
    }
  }
}
.login-exit {
  position: relative;
  // background: #000;
  height: 40px;
  .exit {
    height: 100%;
    width: 80px;
    // background: #f40;
    line-height: 40px;
    text-align: center;
    cursor: pointer;
    position: absolute;
    right: -90px;
    &:hover {
      color: #f40;
    }
  }
}
</style>>
