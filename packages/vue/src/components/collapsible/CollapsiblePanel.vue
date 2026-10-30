<script setup lang="ts">
import * as styles from "@openlab-ui/core/collapsible/collapsible.css";
import { inject } from "vue";

const ctx = inject<{ isOpen: boolean }>("collapsible");

// Calls done on transitionend, or after a timeout when no transition runs (reduced motion).
function whenDone(node: HTMLElement, done: () => void) {
  let finished = false;
  const finish = () => {
    if (finished) return;
    finished = true;
    node.removeEventListener("transitionend", onEnd);
    done();
  };
  const onEnd = (e: TransitionEvent) => {
    if (e.target === node) finish();
  };
  node.addEventListener("transitionend", onEnd);
  setTimeout(finish, 400);
}

// Animate height by hand: the panel is mounted/unmounted with v-if, so there is no
// stable element to transition. The CSS transition on the panel class does the tween.
function onEnter(el: Element, done: () => void) {
  const node = el as HTMLElement;
  node.style.height = "0px";
  node.style.opacity = "0";
  void node.offsetHeight;
  node.style.height = `${node.scrollHeight}px`;
  node.style.opacity = "1";
  whenDone(node, done);
}

function onAfterEnter(el: Element) {
  const node = el as HTMLElement;
  node.style.height = "";
  node.style.opacity = "";
}

function onLeave(el: Element, done: () => void) {
  const node = el as HTMLElement;
  node.style.height = `${node.scrollHeight}px`;
  void node.offsetHeight;
  node.style.height = "0px";
  node.style.opacity = "0";
  whenDone(node, done);
}
</script>

<template>
  <Transition :css="false" @enter="onEnter" @after-enter="onAfterEnter" @leave="onLeave">
    <div v-if="ctx?.isOpen" :class="styles.panel">
      <slot />
    </div>
  </Transition>
</template>
