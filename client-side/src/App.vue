<template>
  <div id="app">
    <el-container>
      <el-container>
        <el-header>
          <Header />
        </el-header>
        <el-main>Main</el-main>
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

<style lang="less">
.el-header,
.el-footer {
  background-color: #fff;
  color: #303133;
  text-align: center;
  line-height: 60px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}
</style>
