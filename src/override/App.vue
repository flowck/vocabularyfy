<template>
  <div class="app-view">
    <div class="app-view__container">
      <app-word :word="getRandomWord" />
    </div>
  </div>
</template>

<script lang="ts">
import { Word } from "@/types";
import words from "../assets/words";
import AppWord from "@/components/Word.vue";
import { Vue, Component } from "vue-property-decorator";

@Component({
  name: "App",
  components: {
    "app-word": AppWord
  }
})
export default class App extends Vue {
  private words: Word[] = words;

  /**
   * getRandomWord
   * @returns {Word}
   */
  get getRandomWord(): Word {
    const rand = Math.floor(Math.random() * (this.words.length - 0)) + 0;
    return this.words[rand];
  }
}
</script>

<style lang="scss" scoped>
.app-view {
  display: flex;
  align-items: center;
  justify-content: center;

  &__container {
    width: 600px;
  }

  @media screen and (max-width: 600px) {
    &__container {
      width: 90%;
    }
  }
}
</style>
