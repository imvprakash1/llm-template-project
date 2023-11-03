<template>
  <div>
    <p>{{ widget.name }}</p>
    <p>{{ widget.description }}</p>
  </div>
</template>
<script>
export default {
  props: ['widget']
}
</script>
