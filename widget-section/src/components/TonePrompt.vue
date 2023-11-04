<template>
  <Navbar />
  <div class="container">
    <div>
      <h3>{{ template }}</h3>
    </div>
    <form v-on:submit.prevent="onSubmit">
      <div class="form-group">
        <label for="tone">Tone</label>
        <input
          type="text"
          class="form-control"
          id="tone"
          aria-describedby="emailHelp"
          placeholder="Please enter tone."
          v-model="tone"
        />
      </div>
      <div class="form-group">
        <label for="context">Context</label>
        <input
          type="text"
          class="form-control"
          id="context"
          placeholder="Please enter context here"
          v-model="context"
        />
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

let tone = ref('')
let context = ref('')
let response = ref(null)
export default defineComponent({
  components: {
    Navbar
  },
  async setup() {
    const data = await axios.get(`${import.meta.env.VITE_BACKENDAPI}/prompt/tone`)
    return {
      template: data.data,
      tone,
      context,
      response
    }
  },
  methods: {
    async onSubmit(e) {
      e.preventDefault()
      try {
        document.getElementById('response').innerText = 'Loading...'
        const data = await axios.post(`${import.meta.env.VITE_BACKENDAPI}/prompt/tone`, {
          tone: tone.value,
          context: context.value,
          inputVariables: ['tone', 'context']
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
