<template>
  <div class="right-container">
      <User />
      <CountDown />
      <Tage />
      <LoveLetter />
  </div>
</template>

<script>
import User from '../Main/User.vue';
import CountDown from '../Main/CountDown.vue';
import Tage from '../Main/Tags.vue';
import LoveLetter from '../Main/LoveLetter.vue';

export default {
  components: {
    User,
    CountDown,
    Tage,
    LoveLetter,
  },
};
</script>
