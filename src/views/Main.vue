<template>
  <main id="main" class="main" role="main">
    <TrainingList title="" />
  </main>
</template>

<script>
import TrainingList from "@/components/TrainingList.vue";

export default {
  name: "Main",
  components: {
    TrainingList
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.main {
  position: relative;
  z-index: 1;
}

@media (min-width: 1264px) {
  .main {
    flex: 1 1 auto;
    overflow-y: auto;
  }
}
</style>
