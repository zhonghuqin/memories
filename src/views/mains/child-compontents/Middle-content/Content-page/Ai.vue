<template>
  <div>
    <Time />
    <div class="left">
      <a-avatar :size="100" class="ai"></a-avatar>
      <div class="chatBox chatBox-left">
        <div class="chatboxcontent">
          <div>
            <div
              class="custom-tooltip-content"
              :style="{ height: '100%', overflow: 'hidden' }"
            >
              <span class="content">
                {{ aiMessage }}
              </span>
            </div>
            <div class="custom-tooltip-button">
              <VoiceButton :content="aiMessage" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="intention" v-if="showIntentionButtons">
      <Button class="button" style="background: #ffc364">人物</Button>
      <Button class="button" style="background: #82b4fb">经历</Button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted, watch, defineComponent, onUpdated } from 'vue'
import { Avatar as AAvatar, Popconfirm as APopconfirm } from 'ant-design-vue'
import { CaretRightOutlined } from '@ant-design/icons-vue'
import { Button } from 'ant-design-vue'
import Time from '../Content-page/Time.vue'
import VoiceButton from '../Content-page/VoiceButton.vue'
const props = defineProps<{
  aiMessage: string
  showIntentionButtons: boolean
}>()
</script>
<style scoped>
.intention {
  width: 100%;
  margin: 10px 120px auto;
  font-size: 16px;
  color: #56684f;
  padding: 5px;
}
.button {
  width: 7vh;
  height: 4vh;
  font-size: 2vh;
  color: rgb(255, 255, 255);
  border-radius: 30px;
}
.left .ai {
  background-image: url('../../../../../assets/image/headportrait2.png');
  background-size: cover;
  background-position: center;
  width: 1800px;
  height: 50px;
  border: 1px solid #f5f5f5;
  border-radius: 50%;
  box-shadow: 0 0 10px 3px rgba(255, 255, 255, 0.5);
}

.chatBox-left::before {
  content: '';
  width: 0;
  height: 0;
  position: relative;
  border: 12px solid;
  border-color: #3b64bc00 #ffffff #3b64bc00 #bc3b4a00;
  top: 10%;
}

.chatBox {
  display: flex;
}

.chatboxcontent {
  background: #ffffff;
  display: inline-block; /* 设置为内联块元素 */
  vertical-align: top; /* 垂直对齐方式，根据实际情况调整 */
  /* width: 260px; */
  padding: 10px;
  border: 1px solid white;
  border-radius: 8px;
  box-shadow: 0 0 10px 3px rgba(204, 204, 204, 0.6);
}

.custom-tooltip-content {
  display: flex;
  font-size: 30px;
  max-width: 1800px;
  background: #ffffff;
  display: inline-block; /* 设置为内联块元素 */
  vertical-align: top; /* 垂直对齐方式，根据实际情况调整 */
  /* margin-top: 10px; */
  border-bottom: 1px solid #a8a8a8;
}
.content {
  /* text-overflow: ellipsis;  在文本溢出时显示省略号 */
  padding: 20px;
  text-align: justify;
  color: #000;
}
.custom-tooltip-button {
  display: flex;
  align-items: center;
  margin: 0 auto;
  margin-top: 12px;
  margin-bottom: 12px;
  justify-content: space-around;
}
.left {
  margin: 0 auto;
  /*padding: 10px;*/
  width: 100%;
  height: 100%;
  display: flex;
}
</style>
