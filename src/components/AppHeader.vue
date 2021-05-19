<template>
  <el-header>
    <i class="el-icon-share"></i>
    <router-link to="/">
      <el-button type="primary">首页</el-button>
    </router-link>

    <div class="user-block">
      <el-avatar shape="circle" :size="100" fit="fill" :src="user.avatar" />
      <span> {{ user.username }}</span>
    </div>
  </el-header>
</template>

<script>
  import { defineComponent, computed } from 'vue'
  import { useStore } from 'vuex'
  import { key } from '../store'

  export default defineComponent({
    name: 'AppHeader',
    setup() {
      const store = useStore(key)

      const user = computed(() => store.state.user)

      return {
        user,
        login: (username, password) => store.commit('login', { username, password }),
        inCrement: () => store.commit('increment')
      }
    }
  })
</script>

<style scoped>
  .user-block {
    float: right;
  }
</style>
