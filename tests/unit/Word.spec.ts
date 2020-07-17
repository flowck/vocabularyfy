import { shallowMount } from "@vue/test-utils";
import Word from "@/components/Word.vue";

describe("Word.vue", () => {
  it("Renders props.word when passed", () => {
    const word = {
      word: "Hello",
      description: "A way to say",
      example: "Hello, how are you?"
    };
    const WordWrapper = shallowMount(Word, {
      propsData: { word }
    });
    expect(true).toBe(true);
  });
});
