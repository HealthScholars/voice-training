<template>
  <div>
    <TestComponent msg="Test" />
  </div>
</template>

<script>
import TestComponent from "@/components/TestComponent.vue";

export default {
  name: "About",
  components: {
    TestComponent
  }
};
</script>
