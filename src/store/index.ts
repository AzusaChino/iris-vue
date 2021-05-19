import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'

export type UserInfo = {
  username: string
  avatar: string
}

export type Demo = {
  count: number
}

export type AppState = {
  user: UserInfo
  demo: Demo
}

export const key: InjectionKey<Store<AppState>> = Symbol()

export const store = createStore<AppState>({
  state() {
    return {
      user: {
        username: '',
        avatar: ''
      },
      demo: {
        count: 0
      }
    }
  },
  mutations: {
    increment(state) {
      state.demo.count++
    }
  }
})
