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
          :src="item.src"
          :placeholder="item.placeholder"
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
import ImageLoader from '../Universality/ImageLoader.vue';

export default {
  components: {
    ImageLoader,
  },
  data() {
    return {
      data: [
        {
          id: 1,
          title: 'VMware虚拟机安装 Centos 8 系统教程',
          description:
            '前言本教程讲解VMware虚拟机安装Centoszuii作文需把看见你等你收到v开v哦ivi按阿萨峻奥i额外呢vi四v建立粽',
          src: 'https://cdn.jsdelivr.net/gh/s-Ruthless/moeor_img@e7a07ba19907478887f2dd75dd711a16a8ee3ec7/2021/07/01/97899761361a645cf8bc5711fc44c39a.webp',
          placeholder:
            'https://cdn.jsdelivr.net/gh/s-Ruthless/moeor_img@e7a07ba19907478887f2dd75dd711a16a8ee3ec7/2021/07/01/97899761361a645cf8bc5711fc44c39a.webp',
          category: {
            id: 1,
            name: '科技',
            display: 'black',
            isStrck: '置顶',
          },
          scanNumber: 10,
          commentNumber: 30,
          like: 21,
          createDate: '2021年07月01日',
        },
        {
          id: 2,
          title: '我还是喜你',
          description: '喜欢你这件事，我一直没变，还希望我们能够在一起',
          src: 'https://cdn.jsdelivr.net/gh/s-Ruthless/moeor_img@8745542720266bd510bb490c5cab8c1135733bc7/2021/05/13/37c1a7623d4e16acc347790f47eb9eef.webp',
          placeholder:
            'https://cdn.jsdelivr.net/gh/s-Ruthless/moeor_img@8745542720266bd510bb490c5cab8c1135733bc7/2021/05/13/37c1a7623d4e16acc347790f47eb9eef.webp',
          category: {
            id: 2,
            name: '随笔',
            display: 'none',
            isStrck: '',
          },
          scanNumber: 10,
          commentNumber: 30,
          like: 52,
          createDate: '2021年07月19日',
        },
        {
          id: 3,
          title: 'VMware虚拟机安装 Centos 8 系统教程',
          description:
            '前言本教程讲解VMware虚拟机安装Centoszuii作文需把看见你等你收到v开v哦ivi按阿萨峻奥i额外呢vi四v建立粽',
          src: 'https://cdn.jsdelivr.net/gh/s-Ruthless/moeor_img@e7a07ba19907478887f2dd75dd711a16a8ee3ec7/2021/07/01/97899761361a645cf8bc5711fc44c39a.webp',
          placeholder:
            'https://cdn.jsdelivr.net/gh/s-Ruthless/moeor_img@e7a07ba19907478887f2dd75dd711a16a8ee3ec7/2021/07/01/97899761361a645cf8bc5711fc44c39a.webp',
          category: {
            id: 3,
            name: '科技',
            display: 'none',
            isStrck: '',
          },
          scanNumber: 10,
          commentNumber: 30,
          like: 21,
          createDate: '2021年07月01日',
        },
        {
          id: 4,
          title: '我还是喜你',
          description: '喜欢你这件事，我一直没变，还希望我们能够在一起',
          src: 'https://cdn.jsdelivr.net/gh/s-Ruthless/moeor_img@8745542720266bd510bb490c5cab8c1135733bc7/2021/05/13/37c1a7623d4e16acc347790f47eb9eef.webp',
          placeholder:
            'https://cdn.jsdelivr.net/gh/s-Ruthless/moeor_img@8745542720266bd510bb490c5cab8c1135733bc7/2021/05/13/37c1a7623d4e16acc347790f47eb9eef.webp',
          category: {
            id: 4,
            name: '随笔',
            display: 'none',
            isStrck: '',
          },
          scanNumber: 10,
          commentNumber: 30,
          like: 52,
          createDate: '2021年07月19日',
        },
      ],
    };
  },
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
