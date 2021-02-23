const user = {
    state: {
      avatar: '',
      cellphone: '',
      username: ''
    },
    mutations: {
      SET_AVATAR: (state, avatar) => {
        state.avatar = avatar
      },
      SET_CELL_PHONE(state, cellphone) {
        state.cellphone = cellphone
      },
      SET_USER_NAME(state, username) {
        state.username = username
      }
    },
    actions: {  
      // 获取用户信息
      GetUserInfo({commit}) {
        return new Promise((resolve) => {
          setTimeout(() => {
            commit('SET_AVATAR', 'http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLYMVgaumib5h42GP4pAlLTQCpzFAmUZTVUg4MmH9eFyb4shrm6Ux2Ocic1ic0ekTWEYVfxibGcMMC3UQ/132')
            commit('SET_CELL_PHONE', '15800066380')
            commit('SET_USER_NAME', 'chan')
            resolve()
          }, 30)
        })
      }
    }
  }
  
  export default user