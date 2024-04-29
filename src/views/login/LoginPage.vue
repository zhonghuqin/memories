<template>
  <div class="about">
    <a-button type="primary" @click="logIn">登录</a-button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()

const logIn = () => {
  router.push('/MainPage')
}
</script>
<style scoped></style>
