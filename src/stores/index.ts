
import { createPinia } from 'pinia'
const pinia = createPinia()

export default pinia
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useOpenStore = defineStore('isOpen', () => {
  const isOpen = ref(false)
  // const open = computed(() => !isOpen.value)
  // const close = computed(() => isOpen.value)
  function controlOpen() {
    isOpen.value = !isOpen.value
  }
  return { isOpen, controlOpen }
})

