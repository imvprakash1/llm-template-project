<template>
  <Navbar />
  <div class="container">
    <div>
      <h3>{{ template }}</h3>
    </div>
    <form v-on:submit.prevent="onSubmit">
      <div class="form-group">
        <label for="language">Language</label>
        <input
          type="text"
          class="form-control"
          id="language"
          aria-describedby="emailHelp"
          placeholder="Language, i.e. Python, Java, JavaScript etc."
          v-model="language"
        />
      </div>
      <div class="form-group">
        <label for="code">Code</label>
        <input
          type="text"
          class="form-control"
          id="code"
          placeholder="Please paste your code here"
          v-model="code"
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

let language = ref('')
let code = ref('')
let tone = ref('')
let response = ref(null)
export default defineComponent({
  components: {
    Navbar
  },
  async setup() {
    const data = await axios.get(`${import.meta.env.VITE_BACKENDAPI}/prompt/optimization`)
    return {
      template: data.data,
      language,
      code,
      tone,
      response
    }
  },
  methods: {
    async onSubmit(e) {
      e.preventDefault()
      try {
        document.getElementById('response').innerText = 'Loading...'
        const data = await axios.post(`${import.meta.env.VITE_BACKENDAPI}/prompt/optimization`, {
          language: language.value,
          code: code.value,
          tone: tone.value,
          inputVariables: ['language', 'code']
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
