<template>
  <svg
    :aria-label="name"
    :class="[`svg-${name}`]"
    :height="`${height}px`"
    :viewBox="`0 0 ${width} ${height}`"
    :width="`${width}px`"
    role="presentation"
    :preserveAspectRatio="preserveAspectRatio"
  >
    <slot />
  </svg>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Base-svg",
  props: {
    name: {
      type: String,
      required: true
    },
    width: {
      type: Number,
      required: false
    },
    height: {
      type: Number,
      required: false
    },
    preserveAspectRatio: {
      type: String || undefined,
      required: false
    }
  }
});
</script>

<style scoped></style>
