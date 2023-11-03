<template>
  <form>
    <draggable v-model="userPrompt" group="promptTemplates">
      <div class="container">
        <input type="text" placeholder="Description " />
        <input type="text" placeholder="Tone " />
        <input type="text" placeholder="Tag " />
      </div>
    </draggable>
  </form>
</template>
<script>
import { defineComponent } from 'vue'
import { VueDraggableNext } from 'vue-draggable-next'

const userPrompt = [{ name: '', description: '', tag: '', content: '' }]
export default defineComponent({
  components: {
    draggable: VueDraggableNext
  },
  data() {
    return userPrompt
  }
})
</script>
