<template>
  <div class="aboutmain-container">
    <div class="detail">
      <h1 class="detail-title">动态</h1>
      <div class="detail-count">
      </div>
      <article class="detail-article">
      </article>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.aboutmain-container {
  min-width: 0;
  flex: 1;
  padding-bottom: 15px;
  width: 845px;
  .detail {
    border-radius: 8px;
    padding: 0 15px;
    background: rgba(255, 255, 255, 0.85);
    box-shadow: 0 0 20px -5px rgba(158, 158, 158, 0.22);
    margin-bottom: 15px;
    .detail-title {
      font-size: 24px;
      color: #303130;
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);
      text-align: center;
      margin-bottom: 15px;
      word-break: break-word;
    }
    .detail-count {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-bottom: 15px;
      border-bottom: 1px solid #ebeef5;
    }
    .detail-article {
      padding-top: 15px;
      font-size: 15px;
      word-break: break-word;
      color: #606260;
    }
  }
}
</style>
