<template>
  <div class="app-word">
    <article class="word">
      <!-- TITLE -->
      <h1 class="word__title">
        {{ word.word | firstLetterUppercase }}
      </h1>

      <div class="app-space"></div>

      <!-- MEANING -->
      <h2 class="word__subtitle">Meaning</h2>
      <p class="word__description">
        {{ word.description | firstLetterUppercase }}
      </p>

      <div class="app-space"></div>

      <!-- EXAMPLE -->
      <h2 class="word__subtitle">Example</h2>
      <div class="word__example">
        {{ word.example | formatExample }}
      </div>
    </article>
  </div>
</template>

<script lang="ts">
import { Word } from "@/types";
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({
  name: "AppWord",
  filters: {
    firstLetterUppercase(value: string): string {
      return value ? `${value[0].toUpperCase()}${value.slice(1)}` : "";
    },
    formatExample(value: string): string {
      return value ? `${value.split(".").join(". ")}` : "";
    }
  }
})
export default class AppWord extends Vue {
  @Prop({
    required: true,
    validator: (word: Word) => {
      return Object.keys(word).every(prop => {
        return ["word", "example", "description"].find(item => item === prop);
      });
    }
  })
  word!: Word;
}
</script>

<style lang="scss" scoped>
.word {
  color: #fff;

  &__title {
    font-size: 100px;
  }

  &__description {
    font-size: 30px;
  }

  &__example {
    font-size: 20px;
    line-height: 1.5;
    font-style: italic;
  }

  &__subtitle {
    color: #999;
    margin-bottom: 10px;
    font-size: 14px;
  }
}
</style>
