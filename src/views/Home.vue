<template>
  <div class="home">
    <div class="logoBox">
      <van-image
        class="logo"
        round
        :src="require('@/assets/img/logo.png')"
      />
      <span v-text="projectName"></span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { Image as VanImage } from 'vant'
export default {
  name: 'Home',
  components: {
    VanImage
  },
  computed: {
    ...mapGetters([
      'projectName'
    ])
  }
}
</script>

<style lang="scss">
  .home {
    display: flex;
    justify-content: space-around;
    height: 100%;
    .logoBox {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 60px;
      .logo {
        width: 60px;
      }
      span {
        color: #7f8c8d;
        font-size: 14px;
        margin-top: 10px;
      }
    }    
  }  
</style>
