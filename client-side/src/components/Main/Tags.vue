<template>
  <div class="tags-container">
    <div class="item-title">
      <span class="text">标签云</span>
      <span class="line"></span>
    </div>
    <div class="item-content">
      <div class="tag">
      </div>
      <ul class="list" style="display: none">
        <li
          data-url="https://www.moeor.com/tag/Typecho/"
          data-label="Typecho"
        ></li>
        <li
          data-url="https://www.moeor.com/tag/%E5%AE%89%E8%A3%85%E6%95%99%E7%A8%8B/"
          data-label="安装教程"
        ></li>
        <li
          data-url="https://www.moeor.com/tag/%E6%95%B0%E6%8D%AE%E5%BA%93/"
          data-label="数据库"
        ></li>
        <li
          data-url="https://www.moeor.com/tag/VMware/"
          data-label="VMware"
        ></li>
        <li
          data-url="https://www.moeor.com/tag/%E4%BC%98%E7%A7%80/"
          data-label="优秀"
        ></li>
        <li data-url="https://www.moeor.com/tag/Joe/" data-label="Joe"></li>
        <li
          data-url="https://www.moeor.com/tag/%E5%8D%9A%E5%AE%A2/"
          data-label="博客"
        ></li>
        <li
          data-url="https://www.moeor.com/tag/%E7%BD%91%E7%BB%9C%E5%AE%89%E5%85%A8%E6%B3%95/"
          data-label="网络安全法"
        ></li>
        <li
          data-url="https://www.moeor.com/tag/%E8%AE%A1%E7%AE%97%E6%9C%BA/"
          data-label="计算机"
        ></li>
        <li
          data-url="https://www.moeor.com/tag/%E8%AF%84%E8%AE%BA%E6%8F%92%E4%BB%B6/"
          data-label="评论插件"
        ></li>
        <li
          data-url="https://www.moeor.com/tag/%E8%AE%BF%E5%AE%A2%E7%BB%9F%E8%AE%A1/"
          data-label="访客统计"
        ></li>
        <li
          data-url="https://www.moeor.com/tag/%E5%9C%A8%E7%BA%BF%E4%BA%BA%E6%95%B0/"
          data-label="在线人数"
        ></li>
        <li
          data-url="https://www.moeor.com/tag/%E5%8A%A0%E8%BD%BD%E8%80%97%E6%97%B6/"
          data-label="加载耗时"
        ></li>
        <li
          data-url="https://www.moeor.com/tag/%E5%8D%9A%E5%AE%A2%E6%90%AD%E5%BB%BA/"
          data-label="博客搭建"
        ></li>
        <li
          data-url="https://www.moeor.com/tag/%E4%BC%98%E5%8C%96%E6%95%99%E7%A8%8B/"
          data-label="优化教程"
        ></li>
        <li
          data-url="https://www.moeor.com/tag/oracle/"
          data-label="oracle"
        ></li>
        <li
          data-url="https://www.moeor.com/tag/%E5%96%9C%E6%AC%A2%E4%BD%A0/"
          data-label="喜欢你"
        ></li>
        <li
          data-url="https://www.moeor.com/tag/%E4%B8%89%E8%A1%8C%E6%83%85%E4%B9%A6/"
          data-label="三行情书"
        ></li>
        <li
          data-url="https://www.moeor.com/tag/%E5%AE%9D%E5%A1%94/"
          data-label="宝塔"
        ></li>
        <li
          data-url="https://www.moeor.com/tag/%E5%9B%BE%E5%BA%8A/"
          data-label="图床"
        ></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.tags-container {
  background: rgba(255, 255, 255, 0.85);
  position: relative;
  width: 250px;
  margin-bottom: 15px;
  border-radius: 8px;
  box-shadow: 0 0 20px -5px rgba(158, 158, 158, 0.22);
  overflow: hidden;
}
.item-title {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ebeef5;
  font-size: 16px;
  font-weight: 500;
  height: 45px;
  line-height: 45px;
  padding: 0 15px;
  color: #303030;
  .text {
    font-weight: 600;
  }
  .line {
    width: 10px;
    height: 1px;
    background: #54b5db;
    margin-left: 12px;
  }
}
.item-content {
  position: relative;
  padding: 15px;
}
</style>
