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
      <personallnformation></personallnformation>
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
      <a-layout-content :style="contentStyle"></a-layout-content>
      <a-layout-footer :style="footerStyle"></a-layout-footer>
    </a-layout>

    <!-- <a-layout-sider :style="siderStyle"> -->
    <!-- <a-button type="primary" @click="showDrawer">Open</a-button> -->
    <a-float-button
      @click="openStore.controlOpen()"
      style="top: 50%; font-size: 24px; width: 100px; height: 100px"
    >
      <template #icon>
        <LeftCircleTwoTone
          two-tone-color="#FFC364"
          :style="{ fontSize: '50px' }"
        />
      </template>
    </a-float-button>
    <DrawerPage v-model:open="openStore.isOpen"></DrawerPage>
    <!-- </a-layout-sider> -->

  </a-layout>
</template>

<script setup lang="ts">
import type { CSSProperties } from 'vue'
import { useRouter } from 'vue-router'

import { LeftCircleTwoTone } from '@ant-design/icons-vue'

import personallnformation from '@/views/mains/child-compontents/Left-side/PersonalInformation.vue'

import DrawerPage from '@/views/mains/child-compontents/Right-drawer/DrawerPage.vue'
import SiderLogo from '@/views/mains/child-compontents/Left-side/SiderLogo.vue'
import { useOpenStore } from '@/stores/index'
const openStore = useOpenStore()
const router = useRouter()
const contentStyle: CSSProperties = {
  textAlign: 'left',
  minHeight: 120,
  lineHeight: '50px',
  color: '#fff',
  backgroundColor: '#eee'
}
const siderStyle: CSSProperties = {
  position: 'relative',
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  boxShadow:
    'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset',
  background: 'rgba(255, 195, 100, 1)'
}
const rightStyle: CSSProperties = {
  position: 'relative',
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  boxShadow:
    'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset',
  background: '#eee'
}
const footerStyle: CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#F5F5F5'
}
//右侧抽屉
// const isOpen = ref(false)
// const showDrawer = () => openStore.controlOpen
const logout = () => {
  router.push('/LoginPage')
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
  background: rgba(255, 195, 100, 1);
  color: black;
}
:deep.ant-float-btn .ant-float-btn-body {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  /* transition: all 0.2s; */
}
:deep .ant-float-btn .ant-float-btn-body .ant-float-btn-content {
  overflow: hidden;
  text-align: center;
  min-height: 40px;
  width: 90px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* padding: 2px 4px; */
}
:deep.ant-float-btn
  .ant-float-btn-body
  .ant-float-btn-content
  .ant-float-btn-icon {
  text-align: center;
  margin: auto;
  width: 42px;
  font-size: 18px;
  line-height: 1;
}
</style>
