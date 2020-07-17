<template>
  <div>
    <p class="title">{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: "Title",
  props: {
    message: {
      type: String,
      default: "",
      required: true
    }
  }
};
</script>

<style>
.title {
  font-size: 35px;
  font-family: "Nunito";
  font-weight: bold;
}
</style>
