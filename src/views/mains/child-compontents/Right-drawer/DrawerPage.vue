<template>
  <div></div>
</template>

<script setup lang="ts"></script>


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
import { computed, ref, watchEffect } from 'vue'
import CardComponent from './card-component.vue'
import { useOpenStore } from '@/stores/index'
const openStore = useOpenStore()
const open = ref(openStore.isOpen)
// 定义不同的背景颜色
const color1 = ref('rgba(222, 252, 241, 1)')
const color2 = ref('rgba(255, 255, 255, 1)') // 这里可以是任何你想要的颜色值

// 监听 openStore.isOpen 的变化，更新 open 的值
// watchEffect(() => {
//   open.value = openStore.isOpen
// })
// openStore.closeDrawer();

// const props = defineProps({
//   darwerValue: {
//     type: Boolean
//   }
// })
// const emit = defineEmits(['update:darwerValue'])
//计算属性open，它的值依赖于从父组件传入的drawerValue prop。
// 当获取open的值时，返回当前props.drawerValue的值；
// 当设置open的新值时,则触发一个事件update:drawerValue并将新值传递给父组件，实现了双向数据绑定的效果。
// const open = computed({
//   get: () => props.darwerValue,
//   set: (v) => emit('update:darwerValue', v)
// })
// 监听子组件的事件，更新抽屉状态
// const closeDrawer = (v: boolean) => {
// open.value = v
// console.log(open.value)
// 通过 emit 更新 darwerValue 属性，而不是直接修改 open.value
//   emit('update:darwerValue', v)
//   console.log('抽屉将被关闭' + v)
//   open.value = v
// }
const afterOpenChange = (bool: boolean) => {
  console.log('open', bool)
}
</script>

<style scoped></style>
