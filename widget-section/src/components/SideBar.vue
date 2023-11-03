<template>
  <div class="sidenav">
    <div class="prompts">
      <draggable v-model="widgets" group="promptTemplates"
        ><WidgetItem
          class="prompt my-3"
          v-for="widget in widgets"
          :key="widget.name"
          :widget="widget"
          @dragstart="handleDragStart"
          @dragend="handleDragEnd"
          draggable
      /></draggable>
    </div>
  </div>
</template>
<script>
import WidgetItem from './WidgetItem.vue'
import axios from 'axios'
import { defineComponent } from 'vue'
import { VueDraggableNext } from 'vue-draggable-next'

export default defineComponent({
  components: {
    draggable: VueDraggableNext,
    WidgetItem
  },
  async setup() {
    const data = await axios.get(import.meta.env.VITE_BACKENDAPI)
    return {
      widgets: data.data
    }
  },

  methods: {
    handleDragStart() {
      // handle drag start
    },
    handleDragEnd() {
      // handle drag end
    },
    handleDragOver() {
      // handle drag over dropzone
    },
    handleDrop() {
      // handle drop on dropzone
    }
  }
})
</script>
<style>
/* The sidebar menu */
.sidenav {
  height: 100%; /* Full-height: remove this if you want "auto" height */
  width: 25rem; /* Set the width of the sidebar */
  position: fixed; /* Fixed Sidebar (stay in place on scroll) */
  z-index: 1; /* Stay on top */
  top: 0; /* Stay at the top */
  left: 0;
  background-color: #111; /* Black */
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 20px;
}

/* The navigation menu links */
.sidenav .prompt {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  margin: 4px;
  border: 2px solid #f1f1f1;
  border-radius: 2%;
  padding: 2px;
}

/* When you mouse over the navigation links, change their color */
.sidenav .prompt:hover {
  color: #f1f1f1;
  cursor: pointer;
}

/* Style page content */
.main {
  margin-left: 160px; /* Same as the width of the sidebar */
  padding: 0px 10px;
}

/* On smaller screens, where height is less than 450px, change the style of the sidebar (less padding and a smaller font size) */
@media screen and (max-height: 450px) {
  .sidenav {
    padding-top: 15px;
  }
  .sidenav .prompt {
    font-size: 18px;
  }
}
</style>
