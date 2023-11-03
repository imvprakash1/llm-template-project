<script>
import WidgetItem from './WidgetItem.vue'

export default {
  components: {
    WidgetItem
  },
  data() {
    return {
      widgets: [
        { id: 1, name: 'Context Template' },
        { id: 2, name: 'Tone Template' }
      ]
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
}
</script>
<template>
  <div class="widget-section">
    <WidgetItem
      v-for="widget in widgets"
      :key="widget.id"
      :widget="widget"
      @dragstart="handleDragStart"
      @dragend="handleDragEnd"
      draggable
    />

    <div class="dropzone" @dragover="handleDragOver" @drop="handleDrop">Drop Widgets Here</div>
  </div>
</template>
