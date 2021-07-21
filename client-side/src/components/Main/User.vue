<template>
  <div class="user-container">
    <img
      width="100%"
      height="120"
      class="image lazyloaded"
      src="https://cdn.jsdelivr.net/gh/s-Ruthless/moeor_img@dded70875006563cf5097a77db2341b033248446/2021/04/18/e05526ec0ff0b781ae3da3b799542652.webp"
      data-src="https://cdn.jsdelivr.net/gh/s-Ruthless/moeor_img@dded70875006563cf5097a77db2341b033248446/2021/04/18/e05526ec0ff0b781ae3da3b799542652.webp"
      alt="博主栏壁纸"
    />
    <div class="user-content">
      <img
        width="75"
        height="75"
        class="avatar lazyloaded"
        src="https://cdn.jsdelivr.net/gh/s-Ruthless/moeor/avatar.webp"
        data-src="https://cdn.jsdelivr.net/gh/s-Ruthless/moeor/avatar.webp"
        alt="博主头像"
      />
      <a
        class="link"
        @click="$router.push({ name: 'About' })"
        target="_blank"
        rel="noopener noreferrer nofollow"
        >{{ uname }}</a
      >
      <p class="motto">{{ motto }}</p>
    </div>
    <div class="count">
      <div class="item" title="累计文章数">
        <span class="num">{{ articlecount }}</span>
        <span>文章数</span>
      </div>
      <div class="item" title="累计评论数">
        <span class="num">{{ commentcount }}</span>
        <span>评论量</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    bgimg: {
      type: String,
    //   required: true,
    },
    bgalt: {
      type: String,
    //   required: true,
    },
    userimg: {
      type: String,
    //   required: true,
    },
    useralt: {
      type: String,
    //   required: true,
    },
    uname: {
      type: String,
      default: '林与萱',
    },
    motto: {
      type: String,
      default: '你见过凌晨4点的洛杉矶吗？',
    },
    articlecount: {
      type: Number,
      default: 14,
    },
    commentcount: {
      type: Number,
      default: 52,
    },
  },
};
</script>

<style lang="less" scoped>
.user-container {
  background: rgba(255, 255, 255, 0.85);
  padding: 45px 15px 15px;
  position: relative;
  width: 250px;
  margin-bottom: 15px;
  border-radius: 8px;
  box-shadow: 0 0 20px -5px rgba(158, 158, 158, 0.22);
  overflow: hidden;
  box-sizing: border-box;
  .image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 120px;
    object-fit: cover;
    z-index: 1;
  }
  &::after {
    content: "";
    position: absolute;
    top: 90px;
    left: 0;
    width: 100%;
    height: 30px;
    z-index: 2;
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0),
      rgba(0, 0, 0)
    );
  }
}
.user-content {
  position: relative;
  z-index: 4;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 15px;
  .avatar {
    width: 75px;
    height: 75px;
    border-radius: 50%;
    overflow: hidden;
    margin-bottom: 10px;
    object-fit: cover;
    transition: transform 0.75s;
    background: rgba(255, 255, 255, 0.85);
    padding: 5px;
    &:hover {
      transform: rotate(360deg);
    }
  }
  .link {
    width: 48px;
    height: 20px;
    color: #ff5268;
    margin-bottom: 10px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
  }
  .motto {
    color: #303133;
    text-align: center;
    word-break: break-word;
    text-shadow: 0 0px 1px rgba(0, 0, 0, 0.25);
  }
}
.count {
  width: 100%;
  padding-bottom: 15px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eef0f5;
  .item {
    min-width: 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #606266;
    font-size: 14px;
    .num {
      max-width: 70px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-weight: 500;
      font-size: 22px;
      color: #606266;
      margin-bottom: 3px;
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);
    }
  }
}
</style>>
