<template>
  <div class="box">
    <div class="head-portrait">
      <div
        v-for="(dialog, index) in dialogs"
        :key="dialog.key"
        class="dialog-container"
      >
        <component
          :is="dialog.component"
          :show-intention-buttons="
            dialog.type === 'ai' && dialog.indexInType === 0
          "
          :userMessage="dialog.type === 'user' && dialog.content"
          :aiMessage="dialog.type === 'ai' && dialog.content"
          :is-latest="dialog.isLatestInType"
        ></component>
      </div>
    </div>

    <!-- <Button type="dashed" @click="addAiDialog">AI</Button> -->
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { Button } from 'ant-design-vue'
import Ai from './Content-page/Ai.vue'
import User from './Content-page/User.vue'
import { onMounted } from 'vue'

interface Dialog {
  component: any
  type: string
  indexInType: number
  isLatestInType: boolean
  key: string
  content: string
}

const dialogs = ref<Dialog[]>([])

const addDialog = (Component: any, type: string, content: string) => {
  const lastIndexInType = dialogs.value.filter(
    (dialog) => dialog.type === type
  ).length

  const newDialog: Dialog = {
    component: Component,
    type,
    indexInType: lastIndexInType,
    isLatestInType: true,
    key: `${type}-${lastIndexInType}`,
    content
  }

  dialogs.value
    .filter((dialog) => dialog.type === type)
    .forEach((dialog) => (dialog.isLatestInType = false))

  dialogs.value.push(newDialog)
}
onMounted(() => {
  addAiDialog()
})
const welcom = '欢迎您'
const addAiDialog = () => {
  addDialog(Ai, 'ai', welcom)
}

const props = defineProps({
  userInput: String
})

watch(
  () => props.userInput,
  (newvalue, oldvalue) => {
    if (newvalue !== oldvalue && newvalue) {
      addDialog(User, 'user', newvalue)
    }
  }
)
</script>

<style scoped>
.box {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  padding: 50px;
  /*max-width: 1200px;*/
  margin: 0 auto;
  overflow: hidden;
  font-family: 'Roboto', sans-serif;
  overflow-y: auto;
}
.head-portrait {
  display: flex;
  flex-direction: column;
  gap: 12px; /* 设置子元素之间的间距 */
}
</style>
