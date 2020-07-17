<template>
  <div class="color" :style="style"></div>
</template>

<script>
export default {
  name: "Color",
  props: {
    color: {
      type: String,
      default: "",
      required: true
    }
  },
  computed: {
    style() {
      return "background-color:" + this.color + ";";
    }
  }
};
</script>

<style lang="scss" scoped>
.color {
  width: 50px;
  height: 80px;
  margin-right: 0px;
}
</style>