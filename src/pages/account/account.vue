<template>
  <scroller :style="parentStyle" class="account-wrapper">
    <div class="account-wrapper-list">
      <wxc-cell v-for="(item, index) in mine"
              :key="index"
              :cell-style="cellStyle"
              :title="item.title"
              :has-arrow="true"
              @wxcCellClicked="wxcCellClicked">
        <v-image class="image"
              slot="label"
              :src="item.icon"></v-image>
        <div slot="value" v-if="index !== mine.length-1" class="cell-bottom"></div>
      </wxc-cell>
    </div>
    <div class="account-wrapper-list">
      <wxc-cell v-for="(item, index) in vip"
              :key="index"
              :cell-style="cellStyle"
              :title="item.title"
              :has-arrow="true"
              @wxcCellClicked="wxcCellClicked">
        <v-image class="image"
              slot="label"
              :src="item.icon"></v-image>
        <div slot="value" v-if="index !== vip.length-1" class="cell-bottom"></div>
      </wxc-cell>
    </div>
    <div class="account-wrapper-list">
      <wxc-cell v-for="(item, index) in setting"
              :key="index"
              :cell-style="cellStyle"
              :title="item.title"
              :has-arrow="true"
              @wxcCellClicked="wxcCellClicked">
        <v-image class="image"
              slot="label"
              :src="item.icon"></v-image>
        <div slot="value" v-if="index !== setting.length-1" class="cell-bottom"></div>
      </wxc-cell>
    </div>
    <div class="account-wrapper-list">
      <wxc-cell v-for="(item, index) in about"
              :key="index"
              :cell-style="cellStyle"
              :title="item.title"
              :has-arrow="true"
              @wxcCellClicked="wxcCellClicked">
        <v-image class="image"
              slot="label"
              :src="item.icon"></v-image>
        <div slot="value" v-if="index !== about.length-1" class="cell-bottom"></div>
      </wxc-cell>
    </div>
  </scroller>
</template>

<script>
import { WxcCell, Utils } from 'weex-ui'
import Config from './config.js'
import VImage from '../../components/common/vImage.vue'

export default {
  name: 'account',
  props: {
    parentStyle: {
      type: Object,
      default: () => ({
        height: Utils.env.getPageHeight() + 'px'
      })
    }
  },
  data () {
    return {
      mine: Config.mine,
      vip: Config.vip,
      setting: Config.setting,
      about: Config.about,
      cellStyle: {
        height: '80px',
        borderBottomWidth: '0',
        backgroundColor: '#FFFFFF'
      }
    }
  },
  components: {
    WxcCell,
    VImage
  },
  methods: {
    wxcCellClicked (e) {
      console.log(e)
    }
  }
}

</script>

<style scoped>
  .account-wrapper {
    background-color: #eeeff0;
  }

  .account-wrapper-list {
    margin-bottom: 17px;
  }

  .cell-bottom {
    width: 654px;
    height: 1px;
    background-color: #e9eaeb;
    position: absolute;
    right: 0;
    bottom: 0;
  }

  .image {
    width: 48px;
    height: 48px;
    margin-right: 20px;
  }
</style>
