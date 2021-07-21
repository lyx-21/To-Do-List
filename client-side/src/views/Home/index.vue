<template>
  <div class="home-container">
    <div class="item-left">
       <HomeMain />
    </div>
    <div class="item-right">
      <User />
      <CountDown />
      <Tags />
      <LoveLetter />
    </div>
  </div>
</template>

<script>
import User from '../../components/Main/User.vue';
import CountDown from '../../components/Main/CountDown.vue';
import Tags from '../../components/Main/Tags.vue';
import LoveLetter from '../../components/Main/LoveLetter.vue';
import HomeMain from '../../components/Main/HomeMain.vue';

export default {
  name: 'Home',
  components: {
    User,
    CountDown,
    Tags,
    LoveLetter,
    HomeMain,
  },
};
</script>

<style lang="less" scoped>
.home-container {
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
  padding: 0 15px;
  box-sizing: border-box;
}
.item-right {
  // flex: 1 1 auto;
  color: #000;
  margin-left: 20px;
}
</style>
