<template>
  <div class="home-container">
    <div class="item-left">
       <HomeMain />
    </div>
    <div class="item-right">
      <ItemRight />
    </div>
  </div>
</template>

<script>
import HomeMain from '../../components/Main/HomeMain.vue';
import ItemRight from '../../components/Universality/ItemRight.vue';

export default {
  name: 'Home',
  components: {
    HomeMain,
    ItemRight,
  },
};
</script>

<style lang="less" scoped>
.home-container {
  display: flex;
  justify-content: center;
  width: 100%;
  // margin: 0 auto;
  padding: 0 15px;
  box-sizing: border-box;
}
.item-right {
  color: #000;
  margin-left: 20px;
}
</style>
