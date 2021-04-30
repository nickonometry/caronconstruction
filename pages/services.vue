<template>
  <div>
    <SubHeader
      title="Services"
      image="https://images.unsplash.com/photo-1601284953533-6cadbbebb347?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    />
    <div class="page-container"></div>
  </div>
</template>

<style lang="scss" scoped>
@import '~assets/css/mixins.scss';

.page-container {
  @include page-container();
}

section {
  @include inner-section();
}

.two-column {
  @include two-column();
}

@media screen and (max-width: $breakpoint-lg) {
  .page-container {
    @include page-container-mobile();
  }

  .two-column {
    @include two-column-mobile();
  }
}
</style>
