<script>
export default {
  props: ['widget']
}
</script>
<template>
  <div class="widget-item" draggable>
    {{ widget.name }}
  </div>
</template>
