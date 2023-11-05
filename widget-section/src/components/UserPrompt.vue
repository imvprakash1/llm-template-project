<template>
  <draggable v-model="userPrompt" group="promptTemplates">
    <div class="container">
      <div>
        <h4>{{ userPrompt[0].name }}</h4>
      </div>
      <div>
        <h4>{{ userPrompt[0].description }}</h4>
      </div>
      <form v-on:submit.prevent="onSubmit">
        <div class="form-group">
          <label for="content">Template</label>
          <textarea
            class="form-control"
            name="content"
            id="usercontent"
            cols="30"
            rows="10"
            v-model="userPrompt[0].content"
            >{{ userPrompt[0].content }}</textarea
          >
        </div>
        <div class="form-group">
          <label for="tone">Tone</label>
          <input type="text" class="form-control" id="tone" placeholder="Tone" v-model="tone" />
        </div>
        <button class="btn btn-primary my-2">Submit</button>
      </form>
      <div class="form-control response" id="response">Your response will appear here.</div>
    </div>
  </draggable>
</template>
<script>
import { defineComponent, ref } from 'vue'
import { VueDraggableNext } from 'vue-draggable-next'
import WidgetItem from './WidgetItem.vue'
import axios from 'axios'

let context = ref('')
let tone = ref('')
const userPrompt = ref([{ name: '', description: '', tag: '', content: '' }])
export default defineComponent({
  components: {
    draggable: VueDraggableNext,
    WidgetItem
  },
  data() {
    return { userPrompt, context, tone }
  },
  methods: {
    async onSubmit() {
      let prompt = userPrompt.value[0].content
      console.log(userPrompt.value[0].content)
      document.getElementById('response').innerText = 'Loading...'
      const data = await axios.post(`${import.meta.env.VITE_BACKENDAPI}`, {
        template: prompt + 'Please consider {tone} to answer the query',
        tone: tone.value,
        inputVariables: ['tone']
      })
      console.log(data.data)
      document.getElementById('response').innerText = data.data
    },
    disableSubmit() {}
  }
})
</script>
<style scoped></style>
