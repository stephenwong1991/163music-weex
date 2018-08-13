<template>
  <div>
    <v-header :hasMic="false" :title="'账号'"></v-header>
    <scroller :style="contentStyle" class="account-wrapper">
      <div class="person-info-wrapper">
        <div class="info">

        </div>
        <div class="relationship">
          <div class="relationship-item">
            <text class="relationship-text">动态</text>
            <text class="relationship-num">1</text>
          </div>
          <div class="relationship-item">
            <text class="relationship-text">关注</text>
            <text class="relationship-num">1</text>
          </div>
          <div class="relationship-item">
            <text class="relationship-text">粉丝</text>
            <text class="relationship-num">1</text>
          </div>
          <div class="relationship-item">
            <v-image class="relationship-icon" src="set/cm2_set_icn_edit@2x.png"></v-image>
            <text class="relationship-text">我的资料</text>
          </div>
        </div>
      </div>
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
      <text class="logout" @click="logout">退出登陆</text>
    </scroller>
  </div>
</template>

<script>
import { WxcCell, Utils } from 'weex-ui'
import Config from './config.js'
import VHeader from '../../components/common/header.vue'
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
  data: () => ({
    mine: Config.mine,
    vip: Config.vip,
    setting: Config.setting,
    about: Config.about,
    cellStyle: {
      height: '80px',
      borderBottomWidth: '0',
      backgroundColor: '#FFFFFF'
    }
  }),
  components: {
    WxcCell,
    VHeader,
    VImage
  },
  computed: {
    contentStyle () {
      return {
        height: parseInt(this.parentStyle.height) - 100 + 'px'
      }
    }
  },
  methods: {
    wxcCellClicked (e) {
      console.log(e)
    },
    logout () {
      let modal = weex.requireModule('modal')
      modal.confirm({
        message: '网易云音乐\n确定退出当前账号吗？',
        okTitle: '确定',
        cancelTitle: '取消',
        duration: 0.3
      }, value => {
        // todo: logout
      })
    }
  }
}

</script>

<style scoped>
  .account-wrapper {
    background-color: #eeeff0;
  }

  .person-info-wrapper {
    height: 245px;
    background-color: #FFFFFF;
    margin-bottom: 17px;
  }

  .info {
    height: 158px;
    border-bottom-color: #ebeced;
    border-bottom-width: 1px;
    border-bottom-style: solid;
  }

  .relationship {
    height: 87px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .relationship-item {
    height: 50px;
    flex: 1;
    justify-content: center;
    align-items: center;
    border-right-width: 1px;
    border-right-style: solid;
    border-right-color: #e9eaeb;
  }

  .relationship-text {
    color: #aaabac;
    text-align: center;
    font-size: 26px;
  }

  .relationship-num {
    color: #2e2e2f;
    text-align: center;
    font-size: 26px;
  }

  .relationship-icon {
    width: 30px;
    height: 30px;
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

  .logout {
    height: 80px;
    line-height: 80px;
    margin-bottom: 17px;
    background-color: #FFFFFF;
    color: #d84036;
    text-align: center;
  }
</style>
