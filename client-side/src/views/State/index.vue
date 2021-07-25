<template>
  <div class="state-container">
      <div class="item-left">
        <StateMain />
      </div>
      <div class="item-right">
        <ItemRight />
      </div>
  </div>
</template>

<script>
import ItemRight from '../../components/Universality/ItemRight.vue';
import StateMain from './StateMain.vue';

export default {
  components: {
    ItemRight,
    StateMain,
  },
};
</script>

<style lang="less" scoped>
.state-container {
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 0 15px;
}
.item-right {
  margin-left: 20px;
}
</style>
