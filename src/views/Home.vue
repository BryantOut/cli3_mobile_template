<template>
  <div class="home">
    <van-button type="primary">主要按钮</van-button>
  </div>
</template>

<script>
import { Button } from 'vant'
export default {
  name: 'Home',
  components: {
    'van-button': Button
  }
}
</script>

<style lang="scss">
  .box {
    width: 100px;
    height: 100px;
    background-color: pink;
  }
</style>
