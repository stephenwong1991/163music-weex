<template>
  <image :src="locationSrc"></image>
</template>

<script>
import { getPlatform, getHost } from '../../common/js/util'

export default {
  props: {
    src: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      locationSrc: null
    }
  },
  created () {
    this.locationSrc = {
      /**
       * Android本地路径
       * 对应src -> main -> assets -> images(自己新建的文件夹)
       */
      android: `file:///android_asset/images/${this.src}`,
      /**
       * IOS本地路径
       * 对应 WeexDemo.xcworkspace(xcode打开)
       * WeexDemo ->resource -> images(xcode不会自动添加图片，需手动添加)
       */
      ios: `local:///images/${this.src}`,
      web: this.webUrl()
    // }[getPlatform()]
    }['web']
  },
  methods: {
    webUrl () {
      if (this.src.indexOf('http') >= 0) {
        return this.src
      }
      return `${getHost()}/src/assets/images/${this.src}`
    }
  }
}
</script>

<style scoped>
</style>
