<template>
  <section class="search">
    <span>Search by</span>
    <select class="drop-down">
      <option
        v-for="answer in answersToShow"
        :key="answer.id"
        :value="answer"
        :selected="answer.selected"
      >
        {{ answer.text }}
      </option>
    </select>
    <input type="text" />
    <button type="button" />
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import { SearchOption } from "../types";

export default Vue.extend({
  name: "Search",
  data() {
    return {
      answers: ["Name", "Identifier", "Episode"]
    };
  },
  computed: {
    answersToShow(): Array<SearchOption> {
      return this.answers.map((answer: string, index: number) => {
        return {
          id: index,
          selected: false,
          text: answer
        };
      });
    }
  }
});
</script>

<style lang="scss" scoped>
@import "../styles/color";

.search {
  border: 2px solid $secondary;
  border-radius: 10px;
  color: $secondary;
  display: flex;
  align-items: stretch;
  padding: 0;

  span {
    padding: 18px;
  }

  select {
    border: none;
    border-left: 2px solid $secondary;
    border-right: 2px solid $secondary;
    color: $secondary;
    padding: 14px;
  }

  input {
    border: none;
    color: $secondary;
    padding: 14px;

    &:active {
      outline: none;
    }
  }

  button {
    background: none;
    border: none;
  }
}
</style>
