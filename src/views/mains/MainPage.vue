<!--
    * @FileDescription: 登录页面。
    * @Author: 李思佳
    * @Date: 2024年4月28日
    * @LastEditors: 李思佳
    * @LastEditTime: 2024年4月28日
-->
<template>
  <a-layout class="main">
    <a-layout-sider :style="siderStyle">
      <SiderLogo />
      <a-button
        type="primary"
        danger
        shape="round"
        class="login-out"
        @click="logout"
        >退出登录</a-button
      >
    </a-layout-sider>
    <a-layout>
      <a-layout-content :style="contentStyle">
        <Content :userInput="userInput" />
      </a-layout-content>
      <a-layout-footer :style="footerStyle">
        <Footer @inputValueChanged="handleInputValueChanged" class="footer" />
      </a-layout-footer>
    </a-layout>
    <a-layout-sider :style="siderStyle">
      <a-button type="primary" @click="showDrawer">Open</a-button>
      <DrawerPage v-model:open="isOpen"></DrawerPage>
    </a-layout-sider>
  </a-layout>
</template>

<script setup lang="ts">
import type { CSSProperties } from 'vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Content from '@/views/mains/child-compontents/Middle-content/Content.vue'
import Footer from '@/views/mains/child-compontents/Middle-content/Footer.vue'
import DrawerPage from '@/views/mains/child-compontents/Right-drawer/DrawerPage.vue'
import SiderLogo from '@/views/mains/child-compontents/Left-side/SiderLogo.vue'

const router = useRouter()
const contentStyle: CSSProperties = {
  textAlign: 'left',
  minHeight: 100,
  lineHeight: '50px',
  color: '#fff',
  backgroundColor: '#f5f5f5'
}
const siderStyle: CSSProperties = {
  position: 'relative',
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  boxShadow:
    'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset',
  backgroundColor: '#F5F5F5'
}

const footerStyle: CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#ededed',
  height: '200px'
}
//右侧抽屉
const isOpen = ref(false)
const showDrawer = () => (isOpen.value = true)
const logout = () => {
  router.push('/LoginPage')
}
//从子组件拿来的输入框内容
const userInput = ref('')
const handleInputValueChanged = (value: string) => {
  userInput.value = value
  console.log(userInput.value)
}
</script>

<style scoped>
.main {
  height: 100vh;
}

.login-out {
  position: absolute;
  bottom: 2vh;
  left: 5px;
  right: 5px;
  margin: 0 auto;
}
.footer {
  overflow: hidden;
}
</style>
