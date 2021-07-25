<template>
  <ul class="mainlist-container">
    <li class="mainlist-item" v-for="item in data" :key="item.id">
      <div class="line"></div>
      <router-link
        :to="{
          name: 'BlogDetail',
          params: {
            id: item.id,
          },
        }"
        class="list-left"
        :title="item.title"
      >
        <ImageLoader
          :src="item.image.src"
          :placeholder="item.image.placeholder"
          :duration="2000"
          class="image"
        />
        <time :datetime="item.createDate">{{ item.createDate }}</time>
      </router-link>
      <div class="information">
        <router-link
          :to="{
            name: 'BlogDetail',
            params: {
              id: item.id,
            },
          }"
          class="title"
          :title="item.title"
        >
          <span class="badge" :style="`display: ${item.category.display}`">{{
            item.category.isStrck
          }}</span>
          {{ item.title }}
        </router-link>
        <router-link
          :to="{
            name: 'BlogDetail',
            params: {
              id: item.id,
            },
          }"
          class="abstract"
        >
          {{ item.description }}
        </router-link>
        <div class="meta">
          <ul class="items">
            <li class="li">{{ item.createDate }}</li>
            <li class="li">{{ item.scanNumber }} 阅读</li>
            <li class="li">{{ item.commentNumber }} 评论</li>
            <li>{{ item.like }} 点赞</li>
          </ul>
          <div class="last" style="display: flex">
            <router-link
              :to="{
                name: 'BlogDetail',
                params: {
                  id: item.id,
                },
              }"
              class="link"
            >
              {{ item.category.name }}
            </router-link>
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
import getBlogs from '../../api/blog';
import ImageLoader from '../Universality/ImageLoader.vue';

export default {
  components: {
    ImageLoader,
  },
  data() {
    return {
      data: [],
    };
  },
  async created() {
    this.data = await getBlogs.getBlogs(1, 8, 2);
  },
  // methods: {
  //   async function() {
  //     this.data += await getBlogs.getBlogs(2,8,3);
  //   }
  // }
};
</script>

<style lang="less" scoped>
.mainlist-item {
  display: flex;
  position: relative;
  width: 100%;
  border-bottom: 1px solid #ebeef5;
  padding: 15px 0;
  .line {
    position: absolute;
    z-index: 1;
    top: 15px;
    left: -15px;
    width: 4px;
    height: 25px;
    border-radius: 2px;
    background: #ff5268;
    transform: scaleY(0);
    transition: transform 0.35s;
  }
  &:hover {
    .line {
      transform: scaleY(1);
    }
    time {
      transform: translate3d(0, 0, 0);
    }
    .image {
      opacity: 0.8;
    }
  }
}
.list-left {
  flex-shrink: 0;
  position: relative;
  width: 210px;
  height: 140px;
  margin-right: 15px;
  overflow: hidden;
  time {
    position: absolute;
    z-index: 1;
    top: 5px;
    right: 5px;
    background: #ff5268;
    height: 20px;
    line-height: 20px;
    padding: 0 8px;
    color: #fff;
    font-size: 12px;
    border-radius: 10px;
    transition: transform 0.35s;
    transform: translate3d(120%, 0, 0);
  }
}
.information {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
  min-width: 0;
  width: 590px;
  height: 140px;
  .title {
    margin-bottom: 10px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-word;
    color: #303030;
    font-size: 18px;
    line-height: 24px;
    max-height: 48px;
    transition: color 0.35s;
    &:hover {
      color: #ff5266;
    }
    .badge {
      height: 20px;
      line-height: 20px;
      background-image: -webkit-linear-gradient(0deg, #3ca5f6 0%, #a86af9 100%);
      color: #fff;
      font-size: 12px;
      margin-right: 5px;
      border-radius: 2px;
      padding: 0 8px;
      white-space: nowrap;
      vertical-align: 2px;
    }
  }
  .abstract {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #909090;
    word-break: break-word;
    line-height: 22px;
    max-height: 44px;
    opacity: 0.85;
  }
  .meta {
    display: flex;
    align-items: center;
    margin-top: auto;
    color: #909090;
    font-size: 13px;
    width: 100%;
    .items {
      display: flex;
      align-items: center;
      .li::after {
        content: "/";
        color: var(--seat);
        padding: 0 5px;
      }
    }
    .last {
      margin-left: auto;
      display: flex;
      align-items: center;
    }
  }
}
</style>
