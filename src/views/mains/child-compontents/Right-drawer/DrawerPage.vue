<template>
  <a-drawer
    v-model:open="open"
    class="custom-class"
    root-class-name="root-class-name"
    :root-style="{ color: 'blue' }"
    style="color: red"
    title="Basic Drawer"
    placement="right"
    @after-open-change="afterOpenChange"
  >
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </a-drawer>
</template>
<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps({
  darwerValue: {
    type: Boolean
  }
})
const emit = defineEmits(['update:darwerValue'])
//计算属性open，它的值依赖于从父组件传入的drawerValue prop。
// 当获取open的值时，返回当前props.drawerValue的值；
// 当设置open的新值时,则触发一个事件update:drawerValue并将新值传递给父组件，实现了双向数据绑定的效果。
const open = computed({
  get: () => props.darwerValue,
  set: (v) => emit('update:darwerValue', v)
})
const afterOpenChange = (bool: boolean) => {
  console.log('open', bool)
}
</script>
<style scoped></style>
