<template>
  <div class="aboutmain-container">
    <div class="detail">
      <h1 class="detail-title">关于</h1>
      <div class="detail-count">
        <div>
          <img
            width="35"
            height="35"
            class="avatar"
            src="https://thirdqq.qlogo.cn/g?b=qq&amp;nk=2502393029&amp;s=100"
            data-src="https://thirdqq.qlogo.cn/g?b=qq&amp;nk=2502393029&amp;s=100"
            alt="林与萱"
          />
          <div class="meta">
            <div class="author">
              <a
                class="link"
                href="https://www.moeor.com/author/1/"
                title="梦繁星"
                >梦繁星</a
              >
            </div>
            <div class="item">
              <span class="text">2021-04-17</span>
              <span class="line">/</span>
              <span class="text">5 评论</span>
              <span class="line">/</span>
              <span class="text" id="Joe_Article_Views">489 阅读</span>
              <span class="line">/</span>
              <span class="text" id="Joe_Baidu_Record"
                ><span style="color: #67c23a">推送成功！</span></span
              >
            </div>
          </div>
        </div>
        <time class="joe_detail__count-created" datetime="04/17">04/17</time>
      </div>
      <article class="detail-article">
        <h2>
          About Me
          <img
            class="owo_image ls-is-cached lazyloaded"
            src="https://www.moeor.com/usr/themes/Joe/assets/owo/aru/E884B8E7BAA2_2x.png"
            data-src="https://www.moeor.com/usr/themes/Joe/assets/owo/aru/E884B8E7BAA2_2x.png"
            alt="表情"
          />
        </h2>
        <p>来自：安徽铜陵<br />现居：安徽铜陵</p>
        <p>卑微实习狗</p>
        <p>
          喜欢听歌，但是不会唱<br />喜欢游戏，但是我很菜<br />偶尔看看玄幻小说，幻想自己能修仙...emm
          <img
            class="owo_image ls-is-cached lazyloaded"
            src="https://www.moeor.com/usr/themes/Joe/assets/owo/aru/E8B59EE4B880E4B8AA_2x.png"
            data-src="https://www.moeor.com/usr/themes/Joe/assets/owo/aru/E8B59EE4B880E4B8AA_2x.png"
            alt="表情"
          />
        </p>
        <p>
          爱好计算机，喜欢折腾一些有趣的东西<br />懂一丁点<code>Java web</code
          >开发，爱好折腾去解决一切问题
        </p>
        <p>
          在我眼里<br />没有什么问题是尝试不能解决的，如果有那就多尝试几次甚至上百次<br />即使前方的路看似绝境，也要有硬生生给自己开出一条路的勇气
        </p>
        <p>
          <strong>优点：</strong>喜欢折腾<br /><strong>缺点：</strong>瞎折腾
          <img
            class="owo_image ls-is-cached lazyloaded"
            src="https://www.moeor.com/usr/themes/Joe/assets/owo/aru/E982AAE681B6_2x.png"
            data-src="https://www.moeor.com/usr/themes/Joe/assets/owo/aru/E982AAE681B6_2x.png"
            alt="表情"
          />
        </p>
        <h2>
          About Blog
          <img
            class="owo_image ls-is-cached lazyloaded"
            src="https://www.moeor.com/usr/themes/Joe/assets/owo/aru/E683B3E4B880E683B3_2x.png"
            data-src="https://www.moeor.com/usr/themes/Joe/assets/owo/aru/E683B3E4B880E683B3_2x.png"
            alt="表情"
          />
        </h2>
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
