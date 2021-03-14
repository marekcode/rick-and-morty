<template>
  <section class="home">
    <tableApp :selected="false"></tableApp>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import TableApp from "../components/Table.vue";

export default Vue.extend({
  components: {
    tableApp: TableApp
  }
});
</script>

<style scoped></style>
