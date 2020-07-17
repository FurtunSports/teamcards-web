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
    AppFooter
  }
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

/* a {
  color: #666;
  text-decoration: none;
}

ul {
  list-style: none;
  font-size: 20px;
}

li {
  display: flex;
  flex-direction: column;
  justify-content: center;
} */

.container {
  overflow: hidden;
  background: #ffffff;
  /* min-height: 100vh; */
}
</style>
