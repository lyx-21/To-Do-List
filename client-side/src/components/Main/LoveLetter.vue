<template>
  <div class="loveletter-container" style="top: 60px">
    <div class="item-title">
      <svg
        t="1626528443732"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="1515"
        width="40"
        height="40"
      >
        <path
          d="M335.7 3.5c19.7-4.6 121.4 191.7 121.4 265.3 0 0 74.2-18.1 124 0 0 0 56.8-251.4
          106.1-264 35.7-9.1115.7 77.5 189.9 264 28.2 70.9 35.6 186.8 64.9 275.1 96.7
          291.4-37.7 480.1-439.3 480.1S-15.6 768.3 88.5
          528.3c40.8-94.1 47.3-196.4 78.5-285.5 43.9-126 111.1-225.7 168.7-239.3z"
          fill="#1B76FF"
          p-id="1516"
        ></path>
        <path
          d="M263.7 565s-27-100.7 31.6-160.8c39.6-40.7 128.1-32.7 159.8 3.1
          41.2 46.6 35.7 112.5 35.7
          112.5h41.7s-10.4-59.6 45.5-112.5c40-37.9 138.9-41.9 178.8 33.3 30.7 57.8 2.9 124.4
          2.9 124.4l136.6
          197s-58.5 173.1-377.7 173.1-390.4-171.2-390.4-171.2L263.7 565z"
          fill="#FFFFFF"
          p-id="1517"
        ></path>
        <path
          d="M361.8 645.7h15.7c13.5 0 24.5-11 24.5-24.5v-89.7c0-13.5-11-24.
          5-24.5-24.5h-15.7c-13.5 0-24.5
          11-24.5 24.5v89.7c0 13.6 11 24.5 24.5 24.5zM653.7 645.7h15.7c13.5
          0 24.5-11 24.5-24.5v-89.7c0-13.
          5-11-24.5-24.5-24.5h-15.7c-13.5 0-24.5 11-24.5 24.5v89.7c0.1 13.6
          11 24.5 24.5 24.5zM482.3 710.9c4.3
          0.4 42.5-1 50.7 0 8.2 1 48.8 10.2 32.3 46-15.3 33.1-44.6 36.6-52.8
          36.6-8.2 0-38.2-4.7-53.6-39.1-15.3-34.4 23.4-43.5 23.4-43.5z"
          fill="#1B76FF"
          p-id="1518"
        ></path>
      </svg>
      <span class="text">舔狗日记</span>
      <span class="line"></span>
    </div>
    <div class="item-content">
      <div class="content" :class="`${this.loveletter.type}`">
        {{ loveletter.contentup }}<mark>{{ loveletter.mark }}</mark>{{ loveletter.contentdown }}
      </div>
      <div class="change" @click="handleClick">
        <svg
          t="1626527413350"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="618"
          width="40"
          height="40"
        >
          <path
            d="M509.44 513.024m-487.424 0a487.424 487.424 0 1 0 974.848 0 487.424
            487.424 0 1 0-974.848 0Z"
            fill="#1AD7BA"
            opacity=".12"
            p-id="619"
          ></path>
          <path
            d="M505.856 384l19.456-18.944a109.056 109.056 0 1 1 153.6 153.6l-173.056
            174.592-173.568-173.568a109.568
            109.568 0 0 1 153.6-153.6z"
            fill="#666666"
            p-id="620"
          ></path>
          <path
            d="M505.856 345.6a136.704 136.704 0 0 0-193.024 193.024L488.96 716.8a24.064
            24.064 0 0 0 33.792
            0l176.128-176.128a136.704 136.704 0 0 0-193.024-195.072z"
            fill="#23BCA2"
            p-id="621"
          ></path>
          <path
            d="M498.176 442.88a13.312 13.312 0 0 1 11.776 8.192l32.256 79.36
            7.168-15.36A12.8 12.8 0 0 1 563.2
            506.88h64a13.824 13.824 0 1 1 0 27.136h-56.832l-16.384 36.352a13.824
            13.824 0 0 1-17.92 6.656 16.384
            16.384 0 0 1-7.168-7.168l-33.28-82.432-22.528 39.936a13.312 13.312 0 0
            1-11.776 6.656H385.024a13.824
            13.824 0 0 1 0-27.136h68.096l32.256-57.344a13.312 13.312 0 0 1 12.8-6.656z"
            fill="#96ECE0"
            p-id="622"
          ></path>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import loveletter from '../../api/lovelitter';

export default {
  data() {
    return {
      // 动态数据 点击事件 切换样式 切换内容
      loveletter: {
        id: 1,
        contentup: '晚上和你聊天，10点钟不到，你就说“',
        mark: '困了，去睡觉了',
        contentdown: '”。现在凌晨1点钟，看到你给他的朋友圈点赞评论，约他明天去吃火锅，一定是你微信被盗了吧。',
        type: 'type1',
      },
    };
  },
  async created() {
    this.loveletter = await loveletter.getLoveLitter(1, 1, 2);
  },
  methods: {
    async handleClick() {
      this.loveletter = await loveletter.getLoveLitter(1, 1, 2);
    },
  },
};
</script>

<style lang="less" scoped>
.loveletter-container {
  background: rgba(255, 255, 255, 0.85);
  position: sticky;
  width: 250px;
  border-radius: 8px;
  box-shadow: 0 0 20px -5px rgba(158, 158, 158, 0.22);
  overflow: hidden;
  transition: top 0.35s;
  box-sizing: border-box;
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
  .icon {
    width: 18px;
    height: 18px;
    margin-right: 8px;
    fill: #303030;
  }
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
  box-sizing: border-box;
  padding: 15;
  .content {
    border-style: solid;
    border-color: #ebeef5;
    padding: 15px;
    line-height: 1.8;
    background: #f2f6fc;
    color: #606260;
    margin: 15px 10px;
    mark {
      background-color: transparent;
      background-image: linear-gradient(#ffe21d, #ffe21d);
      background-position: 0 85%;
      background-size: 100% 25%;
      background-repeat: no-repeat;
      color: #606260;
    }
  }
  .content.type1 {
    border-bottom-left-radius: 15px 255px;
    border-bottom-right-radius: 225px 15px;
    border-top-left-radius: 255px 15px;
    border-top-right-radius: 15px 225px;
  }
  .content.type2 {
    border-bottom-left-radius: 185px 25px;
    border-bottom-right-radius: 20px 205px;
    border-top-left-radius: 125px 25px;
    border-top-right-radius: 10px 205px;
  }
  .content.type3 {
    border-bottom-left-radius: 225px 15px;
    border-bottom-right-radius: 15px 255px;
    border-top-left-radius: 15px 225px;
    border-top-right-radius: 255px 15px;
  }
  .content.type4 {
    border-bottom-left-radius: 25px 115px;
    border-bottom-right-radius: 155px 25px;
    border-top-left-radius: 15px 225px;
    border-top-right-radius: 25px 150px;
  }
  .content.type5 {
    border-bottom-left-radius: 20px 115px;
    border-bottom-right-radius: 115px 20px;
    border-top-left-radius: 250px 15px;
    border-top-right-radius: 25px 80px;
  }
  .change {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin: 2px auto;
    cursor: pointer;
    border: 2px solid #ebeef5;
  }
}
</style>>
