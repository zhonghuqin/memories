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
    <div style="display: inline-block" v-for="item in issues" :key="item.id">
      <CardComponent
        @closeDrawer="openStore.controlOpen()"
        :backgroundColor="item.state === 0 ? color1 : color2"
        :issueId="item.id.toString()"
        >{{ item.issue }}</CardComponent
      >
      <!-- <CardComponent
        @closeDrawer="openStore.controlOpen()"
        :backgroundColor="color2"
        >我的父亲</CardComponent
      > -->
    </div>

    <template #footer> 特别说明：绿色卡牌是您已编辑过的或您已完成的 </template>
  </a-drawer>
</template>
<script lang="ts" setup>
import { ref, onMounted, reactive } from 'vue'
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
interface Issue {
  id: number
  issue: string
  state: number
}
const issues = ref<Issue[]>([])

// const ids= ref([])
onMounted(async () => {
  //查询模块
  const moduleRes = await LXRselectmodule()
  console.log(moduleRes.data)
  const ids = moduleRes.data.map((element: any) => {
    // console.log(element.id)
    // ids.push(element.id)
    return element.id
  })
  console.log('ids:' + ids[0])
  const moduleId = ref('')
  moduleId.value = ids[0].toString()
  console.log(moduleId.value)
  const formdata = new FormData()
  formdata.append('id', moduleId.value)
  //查询一级标题
  const titleRes = await LXRselecttitle(formdata)
  console.log(titleRes.data)
  issues.value = titleRes.data
  // issues.values = titleRes.data.map((element: any) => {
  //   return element
  // })
})
</script>
<style scoped></style>
