<template>
  <div id="app">
        <RouterView name="login" />
    <el-container>
      <el-container>
        <el-header style="height: 105px; padding: 0;">
          <Header :style="`top: ${Ttop}`" />
          <HeaderBottom  :style="`top: ${Btop}`"/>
        </el-header>
        <el-main>
          <RouterView />
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Header from './components/Header/index.vue';
import HeaderBottom from './components/Header/HeaderBottom.vue';

export default {
  data() {
    return {
      Btop: '60px',
      Ttop: '0',
    };
  },
  components: {
    Header,
    HeaderBottom,
  },
  methods: {
    handleWheel(e) {
      if (e.deltaY === 150) {
        this.Btop = '0';
        this.Ttop = '-60px';
      } else {
        this.Btop = '60px';
        this.Ttop = '0';
      }
    },
  },
  mounted() {
    window.addEventListener('wheel', this.handleWheel);
  },
  destroyed() {
    window.removeEventListener('wheel', this.handleWheel);
  },
};
</script>

<style lang="less" scoped>
.el-header,
.el-footer {
  color: #303133;
  text-align: center;
  line-height: 60px;
  z-index: 666;
}

.el-header {
  height: 105px;
}
.el-main {
  color: #333;
  text-align: center;
  line-height: 20px;
}
body > .el-container {
  margin-bottom: 40px;
}
</style>
