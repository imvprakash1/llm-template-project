<template>
  <draggable v-model="userPrompt" group="promptTemplates" class="form">
    <form class="form-container">
      <div>{{ userPrompt[0].name }}</div>
      <div>{{ userPrompt[0].description }}</div>
      <div>{{ userPrompt[0].tag }}</div>
      <textarea name="contentPrompt" id="contentPrompt" cols="30" rows="10">{{
        userPrompt[0].content
      }}</textarea>
    </form>
  </draggable>
</template>
<script>
import { defineComponent, ref } from 'vue'
import { VueDraggableNext } from 'vue-draggable-next'
import WidgetItem from './WidgetItem.vue'

const userPrompt = ref([{ name: '', description: '', tag: '', content: '' }])
export default defineComponent({
  components: {
    draggable: VueDraggableNext,
    WidgetItem
  },
  data() {
    return { userPrompt }
  }
})
</script>
<style scoped>
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: 50%;
  width: 90%;
}
.form-container {
  height: auto;
  width: auto;
}
</style>
