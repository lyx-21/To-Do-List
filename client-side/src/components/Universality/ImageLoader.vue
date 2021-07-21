<template>
  <div class="image-loader-container">
    <img v-if="!everyingDone" :src="placeholder" class="placeholder" />
    <img
      :src="src"
      @load="handleLode"
      :style="{ opacity: originOpacity, transition: `${duration}ms` }"
    />
  </div>
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      required: true,
    },
    src: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      default: 500,
    },
  },
  data() {
    return {
      originLoaded: false, // 原图是否加载完成
      everyingDone: false, // 是否一切准备就绪
    };
  },
  computed: {
    originOpacity() {
      return this.originLoaded ? 1 : 0;
    },
  },
  methods: {
    handleLode() {
      // img图片加载完成 处理一些事件 img自带lode事件
      this.originLoaded = true;
      setTimeout(() => {
        this.everyingDone = true;
        this.$emit('load'); // 通知父元素 img加载完成 后处理一些事情
      }, this.duration);
    },
  },
};
</script>

<style lang="less" scoped>
.image-loader-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .placeholder {
    filter: blur(2vw);
  }
}
</style>>
