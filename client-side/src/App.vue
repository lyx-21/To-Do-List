<template>
  <div id="app">
    <el-container>
      <el-container>
        <el-header>
          <Header />
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

export default {
  components: {
    Header,
  },
};
</script>

<style lang="less" scoped>
.el-header,
.el-footer {
  color: #303133;
  text-align: center;
  line-height: 60px;
}

.el-header {
  background-color: #fff;
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
