<!--
    * @FileDescription: 页面的右侧栏。
    * @Author: 李雪茹
    * @Date: 2024年4月28日
    * @LastEditors: 李雪茹
    * @LastEditTime: 2024年4月30日
-->
<template>
  <a-drawer
    width="100%"
    v-model:open="open"
    class="custom-class"
    root-class-name="root-class-name"
    :root-style="{ color: 'blue' }"
    style="color: black"
    title="关系图"
    placement="right"
    @after-open-change="afterOpenChange"
  >
    <div style="display: flex; flex-direction: row">
      <CardComponent
        @closeDrawer="openStore.controlOpen()"
        :backgroundColor="color1"
        >我的母亲</CardComponent
      >
      <CardComponent
        @closeDrawer="openStore.controlOpen()"
        :backgroundColor="color2"
        >我的父亲</CardComponent
      >
    </div>

    <template #footer> 特别说明：绿色卡牌是您已编辑过的或您已完成的 </template>
  </a-drawer>
</template>
<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import CardComponent from './card-component.vue'
import { useOpenStore } from '@/stores/index'
import {
  LXRselectmodule,
  LXRselecttitle,
  LXRselectissue
} from '@/service/pages/mains/child-components/Right-drawer/DrawerPage'
const openStore = useOpenStore()
const open = ref(openStore.isOpen)
// 定义不同的背景颜色
const color1 = ref('rgba(222, 252, 241, 1)')
const color2 = ref('rgba(255, 255, 255, 1)') // 这里可以是任何你想要的颜色值

const afterOpenChange = (bool: boolean) => {
  console.log('open', bool)
}
onMounted(() => {})
</script>
<style scoped></style>
