import { createPinia } from 'pinia'
const pinia = createPinia()

export default pinia
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { JWHContent } from '@/service/pages/mains/child-components/Middle-content/Content'
export const useOpenStore = defineStore('isOpen', () => {
  const isOpen = ref(false)
  // const open = computed(() => !isOpen.value)
  // const close = computed(() => isOpen.value)
  function controlOpen() {
    isOpen.value = !isOpen.value
  }
  return { isOpen, controlOpen }
})

//调用欢迎词和问题接口
export const aihint = defineStore('welcome_id', () => {
  const welcom = ref('')
  async function getWelcomeMessage(welcome_id: string) {
    const welcomResult = await JWHContent(welcome_id)
    if (welcomResult.code == 200) {
      welcom.value = welcomResult.data
    }
  }

  return { welcom, getWelcomeMessage }
})
