<template>
  <div>
    <div class="header-wrapper">
      <input class="search" type="text" placeholder="单曲/歌单/电台">
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },

  components: {},

  computed: {},

  mounted: {},

  methods: {}
}

</script>

<style scoped>
.header-wrapper {
  width: 750px;
  height: 100px;
  background-color: #dc4238;
  justify-content: center;
  align-items: center;
}
.search {
  width: 535px;
  height: 60px;
  border: none;
  color: #999999;
  background-color: #FFFFFF;
  text-align: center;
  border-radius: 30px;
}
</style>
