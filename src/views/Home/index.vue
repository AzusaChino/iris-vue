<template>
  <div>
    <el-container>
      <app-header />
      <app-main />
      <el-footer>
        built by az, please check
        <el-link type="primary" href="https://azusachino.cn" target="_blank">here</el-link>
      </el-footer>
    </el-container>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import AppHeader from './components/AppHeader.vue'
  import AppMain from './components/AppMain.vue'

  export default defineComponent({
    name: 'Home',
    components: {
      AppHeader,
      AppMain
    }
  })
</script>

<style></style>
