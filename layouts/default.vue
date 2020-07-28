<template>
  <div class="container">
    <AppHeader class="header" />
    <nuxt />
    <AppFooter />
  </div>
</template>
<script>
import AppHeader from "../components/AppHeader";
import AppFooter from "../components/AppFooter";
export default {
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.header {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1rem;
  line-height: 1.6;
  color: black;
}

.container {
  overflow: hidden;
  background: #ffffff;
}
</style>
