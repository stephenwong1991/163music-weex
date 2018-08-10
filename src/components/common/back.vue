<template>
  <div>
    <div class="back-wrapper">
      <div class="back">
        <v-image class="back-icon" src="back/cm2_act_view_btn_back_prs@2x.png"></v-image>
      </div>
      <div class="title-wrapper">
        <text :class="[titleClass]">{{ title }}</text>
        <text :class="[descClass]">{{ desc }}</text>
      </div>
      <div class="back-right-icon">
        <v-image class="back-whale" src="back/cm5_topbar_icn_effect@2x.png"></v-image>
        <v-image class="back-share" src="back/cm2_list_detail_icn_share_prs@2x.png"></v-image>
      </div>
    </div>
  </div>
</template>

<script>
import VImage from './vImage.vue'

export default {
  name: 'back',
  props: {
    title: {
      type: String,
      default: ''
    },
    desc: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    titleClass: ['title-content', 'title'],
    descClass: ['title-content', 'desc']
  }),
  components: {
    VImage
  }
}

</script>

<style scoped>
  .back-wrapper {
    width: 750px;
    height: 100px;
    background-color: #000000;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom-width: 1px;
    border-bottom-color: #573d46;
    border-bottom-style: solid;
  }

  .back {
    width: 60px;
    height: 100px;
    padding-left: 36px;
    margin-right: 120px;
    justify-content: center;
  }

  .back-icon {
    width: 24px;
    height: 44px;
  }

  .title-content {
    color: #FFFFFF;
    text-align: center;
  }

  .title {
    font-size: 30px;
  }

  .desc {
    font-size: 23px;
  }

  .back-right-icon {
    width: 180px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .back-whale {
    width: 55px;
    height: 55px;
  }

  .back-share {
    width: 90px;
    height: 90px;
  }
</style>
