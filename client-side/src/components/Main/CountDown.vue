<template>
  <div class="countdown-container">
    <div class="item-title">
      <span class="text">人生倒计时</span>
      <span class="line"></span>
    </div>
    <div class="item-content">
      <div class="item">
        <div class="title">
          今日已经过去
          <span class="text">{{ lostHours }}</span>
          小时
        </div>
        <div class="progress">
          <div class="progress-bar">
            <div
              class="progress-bar-inner progress-bar-inner-0"
              :style="`width: ${this.percentHours}`"
            ></div>
          </div>
          <div class="progress-percentage">{{ percentHours }}</div>
        </div>
      </div>
      <div class="item">
        <div class="title">
          这周已经过去
          <span class="text">{{ lostWeekday }}</span>
          天
        </div>
        <div class="progress">
          <div class="progress-bar">
            <div
              class="progress-bar-inner progress-bar-inner-1"
              :style="`width: ${this.percentWday}`"
            ></div>
          </div>
          <div class="progress-percentage">{{ percentWday }}</div>
        </div>
      </div>
      <div class="item">
        <div class="title">
          本月已经过去
          <span class="text">{{ lostMonthday }}</span>
          天
        </div>
        <div class="progress">
          <div class="progress-bar">
            <div
              class="progress-bar-inner progress-bar-inner-2"
              :style="`width: ${this.percentMday}`"
            ></div>
          </div>
          <div class="progress-percentage">{{ percentMday }}</div>
        </div>
      </div>
      <div class="item">
        <div class="title">
          今年已经过去
          <span class="text">{{ lostMonth }}</span>
          个月
        </div>
        <div class="progress">
          <div class="progress-bar">
            <div
              class="progress-bar-inner progress-bar-inner-3"
              :style="`width: ${this.percentMonth}`"
            ></div>
          </div>
          <div class="progress-percentage">{{ percentMonth }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timer: '',
      lostHours: 0, // 一天丢失多少小时
      lostWeekday: 0, // 一周丢失几天
      lostMonthday: 0, // 一月丢失多少天
      lostMonth: 0, // 显示当前是个月
    };
  },
  computed: {
    percentHours() {
      return `${Math.floor((this.lostHours / 24) * 100)}%`;
    },
    percentWday() {
      return `${Math.floor((this.lostWeekday / 7) * 100)}%`;
    },
    percentMday() {
      return `${Math.floor((this.lostMonthday / 30) * 100)}%`;
    },
    percentMonth() {
      return `${Math.floor((this.lostMonth / 12) * 100)}%`;
    },
  },
  created() {
    this.timer = setInterval(() => {
      this.lostHours = new Date().getHours(); // 几点
      const Day = new Date().getDay();
      this.lostWeekday = Day < 1 ? 7 : Day; // 星期几
      this.lostMonthday = new Date().getDate(); // 几号
      this.lostMonth = new Date().getMonth() + 1; // 第几个月
    }, 1000);
  },
  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  },
};
</script>

<style lang="less" scoped>
.countdown-container {
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
  .item {
    margin-bottom: 15px;
    .title {
      font-size: 12px;
      color: #909399;
      margin-bottom: 5px;
      display: flex;
      align-items: center;
      .text {
        color: #ff5268;
        font-weight: 500;
        font-size: 14px;
        margin: 0 5px;
      }
    }
    .progress {
      display: flex;
      align-items: center;
      .progress-bar {
        height: 10px;
        border-radius: 5px;
        overflow: hidden;
        background: #ebeef5;
        width: 0;
        min-width: 0;
        flex: 1;
        margin-right: 5px;
        .progress-bar-inner {
          width: 0;
          height: 100%;
          border-radius: 5px;
          transition: width 0.35s;
          animation: progress 750ms linear infinite;
        }
        .progress-bar-inner-0 {
          background: #bde6ff;
          background-image: linear-gradient(
            135deg,
            #50bfff 25%,
            transparent 25%,
            transparent 50%,
            #50bfff 50%,
            #50bfff 75%,
            transparent 75%,
            transparent 100%
          );
          background-size: 30px 30px;
        }
        .progress-bar-inner-1 {
          background: #ffd980;
          background-image: linear-gradient(
            135deg,
            #f7ba2a 25%,
            transparent 25%,
            transparent 50%,
            #f7ba2a 50%,
            #f7ba2a 75%,
            transparent 75%,
            transparent 100%
          );
          background-size: 30px 30px;
        }
        .progress-bar-inner-2 {
          background: #ffa9a9;
          background-image: linear-gradient(
            135deg,
            #ff4949 25%,
            transparent 25%,
            transparent 50%,
            #ff4949 50%,
            #ff4949 75%,
            transparent 75%,
            transparent 100%
          );
          background-size: 30px 30px;
        }
        .progress-bar-inner-3 {
          background: #67c23a;
          background-image: linear-gradient(
            135deg,
            #4f9e28 25%,
            transparent 25%,
            transparent 50%,
            #4f9e28 50%,
            #4f9e28 75%,
            transparent 75%,
            transparent 100%
          );
          background-size: 30px 30px;
        }
      }
      .progress-percentage {
        color: #909399;
      }
    }
  }
}
</style>>
