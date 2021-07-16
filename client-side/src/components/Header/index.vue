<template>
  <div class="hearder-container">
    <el-row>
      <el-col :span="6">
        <div class="hearder-content">
          <i class="el-icon-switch-button"> TODOS </i>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="hearder-content item">
          <router-link
            :exact="item.exact"
            v-for="item in items"
            :key="item.link"
            :to="{ name: item.name }"
            active-class="selected"
            exact-active-class=""
          >
            <span>{{ item.title }}</span>
          </router-link>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="hearder-content">
          <SearchBox />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import SearchBox from './SearchBox.vue';

export default {
  components: {
    SearchBox,
  },
  data() {
    return {
      items: [
        {
          name: 'Home',
          title: '首页',
          exact: false,
        },
        {
          name: 'Blog',
          title: '文章',
          exact: true, // 激活状态是否要精确匹配
        },
        {
          name: 'State',
          title: '动态',
          exact: true,
        },
        {
          name: 'About',
          title: '关于我',
          exact: true,
        },
        {
          name: 'Project',
          title: '项目&效果',
          exact: true,
        },
        {
          name: 'Message',
          title: '留言板',
          exact: true,
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.hearder-container {
  height: 100%;
  i {
    font-size: 25px;
    font-weight: 800;
  }
}
.el-row {
  margin-bottom: 20px;
  height: 100%;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.item {
  display: flex;
  align-items: center;
  a {
    //   &.selected {
    //   color: #ff5268;
    // }
    &:hover {
      color: #ff5268;
    }
    &:hover::after {
      opacity: 1;
      transform: scaleX(1);
    }
    position: relative;
    // height: 60px;
    // line-height: 60px;
    font-size: 15px;
    padding: 0 8px;
    margin-right: 15px;
    transition: color 0.35s;
    white-space: nowrap;
    color: #303133;
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 3px;
      transition: opacity 0.5s, transform 0.5s;
      border-radius: 6px 6px 0 0;
      opacity: 0;
      transform: scaleX(0.25);
      background: #ff5268;
    }
  }
}
</style>
