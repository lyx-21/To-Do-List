<template>
  <div class="loveletter-container">
    <div class="item-title">
      <span class="text">舔狗日记</span>
      <span class="line"></span>
    </div>
    <div class="item-content">
      <div class="content" :class="`${this.loveletter.type}`">
        {{ loveletter.contentup }}<mark>{{ loveletter.mark }}</mark
        >{{ loveletter.contentdown }}
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
        contentdown:
          '”。现在凌晨1点钟，看到你给他的朋友圈点赞评论，约他明天去吃火锅，一定是你微信被盗了吧。',
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
  top: 120px;
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
