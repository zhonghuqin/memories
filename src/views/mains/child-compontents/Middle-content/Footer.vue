<template>
  <div class="box" v-if="showFirstBox">
    <Button
      :icon="h(AudioOutlined)"
      shape="circle"
      class="voice"
      @click="toggleBox"
    ></Button>
    <div class="components-input-demo-size">
      <a-input
        v-model:value="inputValue"
        size="large"
        placeholder="请输入..."
      />
    </div>
    <Button type="primary" class="button" @click="onSendClick">发送</Button>
  </div>
  <div class="box" v-else>
    <Button
      :icon="h(InsertRowBelowOutlined)"
      shape="circle"
      class="voice"
      @click="toggleBox"
    ></Button>
    <Button
      type="primary"
      class="voicebutton"
      :class="{ 'long-press': isLongPressed }"
      @mousedown="startLongPress"
      @mouseup="LongPress"
      @mouseleave="endLongPress"
    >
      <span v-if="isLongPressed" class="soundwave">
        <SoundWave />{{ buttonText }}<SoundWave />
      </span>
      <span v-else>
        {{ buttonText }}
      </span>
    </Button>
    <Modal
      v-model:open="open"
      title="请确认输入的语音是否正确"
      style="top: 100px"
      width="1000px"
    >
      <template #footer>
        <Button key="back" @click="handleCancel" class="cansle" size="large"
          >取消</Button
        >
        <Button key="submit" @click="handleOk" class="send" size="large"
          >发送</Button
        >
      </template>
      <p style="font-size: 80px">{{ voceValue }}</p>
    </Modal>
  </div>
</template>

<script setup lang="ts">
import { Button, Modal } from 'ant-design-vue'
import { h } from 'vue'
import { AudioOutlined, InsertRowBelowOutlined } from '@ant-design/icons-vue'
import { ref } from 'vue'
import SoundWave from '../../child-compontents/Middle-content/Content-page/SoundWave.vue'
const showFirstBox = ref(true) // 初始显示第一个box
//换输入方式
const toggleBox = () => {
  showFirstBox.value = !showFirstBox.value
}
//语音输入状态
const buttonText = ref('请长按输入语音')
let isLongPressed = ref(false)
const startLongPress = () => {
  isLongPressed.value = true
  buttonText.value = '正在录音'
}
const LongPress = () => {
  showModal()
  isLongPressed.value = false
  buttonText.value = '请长按输入语音'
}
const endLongPress = () => {
  isLongPressed.value = false
  buttonText.value = '请长按输入语音'
}
//语音输入确认框
const open = ref<boolean>(false)
const showModal = () => {
  open.value = true
}
const handleOk = (e: MouseEvent) => {
  console.log(e)
  onSendvoice()
  open.value = false
}
const handleCancel = () => {
  open.value = false
}
//输入框内的内容将会传给父组件mainpage
//mainpage会传给他的子组件content
//由content添加user对话框,传给他的子组件user渲染在user对话框里
const inputValue = ref('')
const emit = defineEmits(['inputValueChanged'])
const onSendClick = () => {
  emit('inputValueChanged', inputValue.value)
  inputValue.value = ''
}
const voceValue = ref('语音说的话渲染在这里')
const onSendvoice = () => {
  emit('inputValueChanged', voceValue.value)
  inputValue.value = ''
}
</script>

<style scoped>
.box {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 6vh;
  padding: 0 300px;
  gap: 80px;
  margin-top: 15px;
}
.components-input-demo-size .ant-input {
  width: 100%;
  min-width: 300px;
  max-width: 800px;
  height: 7vh;
  font-size: 3vh;
  border-radius: 15px;
}
.button {
  width: 10vh;
  height: 7vh;
  font-size: 3vh;
  background: #ffc364;
  border-radius: 15px;
}
.voice {
  transform: scale(2);
  color: #aecaf3;
  border: 2px solid #aecaf3;
}
.voicebutton {
  width: 100%;
  height: 7vh;
  font-size: 3vh;
  background: #06c293;
  color: rgb(255, 255, 255);
  border-radius: 15px;
}
.voicebutton:hover {
  background: #a6a6a6;
}
.soundwave {
  display: flex;
  justify-content: center;
  align-items: center;
}
.cansle {
  background: #ffc364;
  color: #fff;
}
.send {
  background: #06c293;
  color: #fff;
}
</style>
