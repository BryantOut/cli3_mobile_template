<template>
  <div class="home">
    <div class="logoBox">
      <van-image
        class="logo"
        round
        lazy-load
        :src="require('@/assets/img/logo.png')"
      />
      <span v-text="projectName"></span>
      <span>{{ tempPhoneNumber | formatPhone}}</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Home',
  computed: {
    ...mapGetters([
      'projectName'
    ])
  },
  data () {
    return {
      tempPhoneNumber: '13533223834'
    }
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
