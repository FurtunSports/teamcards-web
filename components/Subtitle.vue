<template>
  <div>
    <p class="subtitle">{{ subtitle }}</p>
  </div>
</template>

<script>
export default {
  name: "Subtitle",
  props: {
    subtitle: {
      type: String,
      default: "",
      required: true
    }
  }
};
</script>

<style>
.subtitle {
  font-size: 25px;
  font-family: "Nunito";
}
</style>
