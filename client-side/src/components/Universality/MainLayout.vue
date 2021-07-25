<template>
  <div class="mainLayout-container">
    <div class="main-detail">
      <div class="main-title"></div>

      <div class="main-list">

      </div>
    </div>
  </div>
</template>

<script>

export default {
};
</script>

<style lang="less" scoped>
.mainLayout-container {
  min-width: 0;
  flex: 1;
  padding-bottom: 15px;
}
.main-index {
  border-radius: 8px;
  padding: 0 15px;
  background: rgba(255, 255, 255, 0.85);
  box-shadow: 0 0 20px -5px rgba(158, 158, 158, 0.22);
}
.main-title {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ebebeb;
  .title-title {
    position: relative;
    display: flex;
    align-items: center;
    color: #606060;
    font-weight: 500;
    height: 40px;
    line-height: 40px;
    .item {
      cursor: pointer;
      margin-right: 20px;
      user-select: none;
      transition: color 0.35s;
    }
    .active {
      color: var(--theme);
    }
  }
  .title-notice {
    display: flex;
    align-items: center;
    margin-left: auto;
    height: 40px;
    a {
      color: #909090;
      line-height: 20px;
      max-width: 300px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      transition: color 0.35s;
    }
  }
}
.main-list {
  color: #000;
}
.main-load {
  margin: 15px auto 0;
  width: 120px;
  height: 32px;
  line-height: 32px;
  text-align: center;
  border-radius: 16px;
  cursor: pointer;
  user-select: none;
  background: rgba(255, 255, 255, 0.85);
  color: #606060;
  transition: transform 0.25s;
  box-shadow: 0 0 20px -5px rgba(158, 158, 158, 0.22);
}
</style>
