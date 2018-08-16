<template>
  <slider class="banner-wrapper" interval="5000" auto-play="true" scrollable="true">
    <div class="banner-item" v-for="(item, index) in list" :key="index">
      <image class="banner-image" :src="item.picUrl"></image>
    </div>
    <indicator class="indicator"></indicator>
  </slider>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => ({
      })
    }
  }
}
</script>

<style scoped>
  .banner-wrapper {
    width: 726px;
    height: 282px;
    border-radius: 10px;
    overflow: hidden;
    margin-left: 15px;
    margin-right: 15px;
    margin-top: -212px;
  }

  .banner-item {
    width: 726px;
    height: 282px;
    position: relative;
  }

  .banner-image {
    width: 726px;
    height: 282px;
  }

  .indicator {
    item-color: #FFFFFF;
    item-selected-color: #ee4c3f;
    item-size: 12px;
    width: 726px;
    height: 282px;
    position: absolute;
    left: 0px;
    top: 122px;
  }
</style>
