<template>
  <div class="footer">
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

      <Modal v-model:open="open" width="1000px" centered :closable="false">
        <template #footer>
          <Button key="back" @click="handleCancel" class="cansle" size="large"
            >取消</Button
          >
          <Button key="submit" @click="handleOk" class="send" size="large"
            >发送</Button
          >
        </template>
        <a-textarea
          style="font-size: 30px"
          v-model:value="voceValue"
        ></a-textarea>
      </Modal>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Button, Modal } from 'ant-design-vue'
import { h } from 'vue'
import { AudioOutlined, InsertRowBelowOutlined } from '@ant-design/icons-vue'
import { ref } from 'vue'
import SoundWave from '../../child-compontents/Middle-content/Content-page/SoundWave.vue'

/* 20240430 增加3个引用js用于录音 */
import '//js.nsu.edu.cn/record/recorder-core.js'
import '//js.nsu.edu.cn/record/wav.js'
import '//js.nsu.edu.cn/record/pcm.js'
import * as rec from '../../../../utils/rec.js'
//import * as rec from '//js.nsu.edu.cn/record/rec.js'

//f_定义一个消息回调函数
const showAudioText = (data: string) => {
  console.log('text', data)
  voceValue.value = data
}
//f_预初始化,如果返回非0说明失败
let initState = rec.initRecord(
  showAudioText,
  'wss://audio.developer.nsu.edu.cn/ws_rec/'
)
//console.log('initState', initState)

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
  //f_开始录音，可判断返回状态
  voceValue.value = ''
  rec.startRecord()
  //测试实时语音
  //open.value = true
}
const LongPress = () => {
  showModal()
  isLongPressed.value = false
  buttonText.value = '请长按输入语音'

  //f_结束录音，可判断返回状态
  rec.stopRecord()
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
  console.log(voceValue.value)

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
  console.log(voceValue.value)
}
</script>

<style scoped>
.box {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  padding: 0 300px;
  gap: 80px;
  margin-top: 15px;
  z-index: 1;
}
.components-input-demo-size .ant-input {
  width: 100%;
  min-width: 800px;
  max-width: 1000px;
  height: 100px;
  font-size: 30px;
  border-radius: 15px;
}
.button {
  width: 150px;
  height: 100px;
  font-size: 30px;
  background: #ffc364;
  border-radius: 15px;
}
.voice {
  transform: scale(3);
  color: #aecaf3;
  border: 2px solid #aecaf3;
}
.voicebutton {
  width: 1000px;
  height: 100px;
  font-size: 30px;
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
