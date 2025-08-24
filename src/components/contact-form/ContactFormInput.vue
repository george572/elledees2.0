<script setup lang='ts'>
defineProps({
    placeHolder: {
        type: String,
        required: true
    },
    isTextArea: {
        type: Boolean,
        required:false,
        default: false
    },
    name: {
      type: String,
      required: false,
      default: ''
    }
})
</script>

<template>
  <input
    v-if="!isTextArea"
    type="text"
    class="min-w-[200px] md:min-w-[406px] max-w-[406px] w-full py-4 px-6 outline-none text-ed-green font-[Geomanist-Bold] uppercase placeholder:text-ed-green placeholder:font-[Geomanist-Bold] placeholder:uppercase text-[18px] rounded-lg"
    :placeholder="placeHolder"
    :name="name"
  >
  <textarea
    v-else
    id=""
    rows="10" 
    :name="name"
    :placeholder="placeHolder"
    class="w-full py-4 px-6 resize-none outline-none text-ed-green font-[Geomanist-Bold] uppercase placeholder:text-ed-green placeholder:font-[Geomanist-Bold] placeholder:uppercase text-[18px] rounded-lg"
  />
</template>