<template>
  <div class="page-header">
    <div class="container">
      <h1 class="page-title display-1 mb-4">{{ pageTitle }}</h1>
      <p class="subtitle mb-10">
        Thank you for participating in <em>Voice Intelligence</em> training for
        our ACLS VR application. Imagine that you are the team leader of a
        resuscitation or rapid response scenario as you request managements or
        provide responses listed below.</p>
        <p class="subtitle mb-0"> Please speak naturally, and use the team
        member's name when listed. Include joules, doses and route if you would
        normally do so, otherwise just omit. The goal is to capture the way that
        <strong>you</strong> would naturally speak in the various scenarios.
        Thanks! <strong class="d-block mt-5">- Health Scholars Team</strong>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageHeader",
  props: {
    pageTitle: String
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
.page-header {
  background: url("../assets/media/images/bg/bg-FiOR-user-blue-teal.png") no-repeat;
  background-position: left top;
  // src/assets/media/images/16x9/img-16x9-doctors-talking-green-overlay.jpg
  background-color: var(--color-teal);
  background-size: cover;
  color: #fff;
  display: flex;
  position: relative;
  z-index: 1;
  // justify-content: center;

  .container {
    --padding-vertical--page-header: clamp(3rem, 6vmax, 16rem);
    // --padding-horizonal--page-header: clamp(3rem, 6vmax, 1rem);
    display: flex;
    flex-direction: column;
    padding-top: var(--padding-vertical--page-header);
    padding-bottom: var(--padding-vertical--page-header);
    padding-right: 3rem;
    padding-left: 3rem;
    // width: auto;
    // margin: 0;
    // text-align: center;
  }

  .page-title {
    font-family: "Montserrat", sans-serif !important;
    font-weight: 600;
  }

  p {
    max-width: 72ch;
  }
}

@media (max-width: 1263px) {
  .page-header {
    &.header-desktop {
      display: none;
    }
  }
}

@media (min-width: 1264px) {
  .page-header {
    background-position: 65% top;
    flex: 1 1 auto;

    .container {
      padding-top: 3rem;
      padding-right: 2.5rem;
      padding-bottom: 3rem;
      padding-left: 2.5rem;
    }

    &.header-mobile {
      display: none;
    }
  }
}
</style>
