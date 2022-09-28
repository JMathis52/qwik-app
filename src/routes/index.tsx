import { component$, Slot } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return <div>Hello world MAIN</div>;
});

export const head: DocumentHead = {
  title: "MAIN",
};
