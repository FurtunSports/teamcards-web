<template>
  <div class="container">
    <Title class="main-title" :message="'Get colors of your favorite team'" />
    <Home-Background />
    <Search class="search" />
    <Section />
  </div>
</template>

<script>
import Title from "../components/Title";
import Search from "../components/Search";
import Section from "../components/Section";
import HomeBackground from "@/components/HomeBackground";
export default {
  components: {
    Title,
    Search,
    Section,
    HomeBackground
  },
  head() {
    return {
      title: "Home"
    };
  }
};
</script>

<style scoped>
.container {
  background-color: #ebe7bf;
}
.main-title {
  display: flex;
  justify-content: center;
  padding-top: 50px;
  height: 30vh;
}
</style>
