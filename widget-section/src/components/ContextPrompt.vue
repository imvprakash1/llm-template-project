<template>
  <Navbar />
  <div class="container">
    <div>
      <h3>{{ template }}</h3>
    </div>
    <form v-on:submit.prevent="onSubmit">
      <div class="form-group">
        <label for="context">Context</label>
        <input
          type="text"
          class="form-control"
          id="context"
          aria-describedby="emailHelp"
          placeholder="Context"
          v-model="context"
        />
      </div>
      <div class="form-group">
        <label for="question">Question</label>
        <input
          type="text"
          class="form-control"
          id="question"
          placeholder="Question"
          v-model="question"
        />
      </div>
      <div class="form-group">
        <label for="tone">Tone</label>
        <input type="text" class="form-control" id="tone" placeholder="Tone" v-model="tone" />
      </div>
      <button class="btn btn-primary my-2">Submit</button>
    </form>
    <div class="form-control response" id="response">Your response will appear here.</div>
  </div>
</template>
<script>
import Navbar from './Navbar.vue'
import { defineComponent, ref } from 'vue'
import axios from 'axios'

let context = ref('')
let question = ref('')
let tone = ref('')
let response = ref(null)
export default defineComponent({
  components: {
    Navbar
  },
  async setup() {
    const data = await axios.get(`${import.meta.env.VITE_BACKENDAPI}/prompt/context`)
    return {
      template: data.data,
      context,
      question,
      tone,
      response
    }
  },
  methods: {
    async onSubmit(e) {
      e.preventDefault()
      try {
        document.getElementById('response').innerText = 'Loading...'
        const data = await axios.post(`${import.meta.env.VITE_BACKENDAPI}/prompt/context`, {
          context: context.value,
          question: question.value,
          tone: tone.value,
          inputVariables: ['context', 'question']
        })
        response = data.data
        console.log(response)
        document.getElementById('response').innerText = response
      } catch (error) {
        console.log(error.message)
      }
    }
  }
})
</script>
<style></style>
