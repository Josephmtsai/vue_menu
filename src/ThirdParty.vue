<template>
  <HeaderComponent></HeaderComponent>
  <teleport to="#footerComponent">
    <FooterComponent></FooterComponent>
  </teleport>
  Content
</template>
<script>
import HeaderComponent from '../src/components/HeaderComponent.vue';
import FooterComponent from '../src/components/FooterComponent.vue';

export default {
  name: 'HeaderFooter',
  components: {
    HeaderComponent,
    FooterComponent,
  },
};
</script>
