<template>
  <div>
    <div class="back-wrapper">
      <v-image class="back" src="back/cm2_act_view_btn_back_prs@2x.png"></v-image>
      <div>
        <text>{{ title }}</text>
        <text>{{ desc }}</text>
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
  components: {
    VImage
  },
  methods: {}
}

</script>
<style scoped>
  .back-wrapper {
    width: 750px;
    height: 100px;
    background-color: #000000;
  }

  .back {
    width: 24px;
    height: 44px;
  }
</style>
