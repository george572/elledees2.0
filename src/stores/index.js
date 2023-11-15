import { defineStore } from "pinia"
import { ref } from "vue"

export const useStore = defineStore('Store', () => {
  const currentLanguage = ref('en')
  const changeLanguage = (language) => {
    currentLanguage.value = language;
  }
  return { currentLanguage, changeLanguage }
})