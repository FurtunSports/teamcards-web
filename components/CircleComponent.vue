<template>
  <div class="circle-component">
    <div class="circle" :style="style"></div>
  </div>
</template>

<script>
export default {
  name: "CircleComponent",
  props: {
    color: {
      type: String,
      default: "",
      required: true
    },
    position: {
      type: String,
      default: "",
      required: true
    },
    radius: {
      type: String,
      default: "",
      required: true
    },
    height: {
      type: String,
      default: "",
      required: true
    },
    width: {
      type: String,
      default: "",
      required: true
    }
  },
  computed: {
    style() {
      let firstRadiusProperty;
      let secondRadiusProperty;
      if (this.position === "right") {
        firstRadiusProperty = "border-bottom-right-radius:";
        secondRadiusProperty = "border-top-right-radius:";
      } else if (this.position === "bottom") {
        firstRadiusProperty = "border-bottom-left-radius:";
        secondRadiusProperty = "border-bottom-right-radius:";
      } else if (this.position === "left") {
        firstRadiusProperty = "border-bottom-left-radius:";
        secondRadiusProperty = "border-top-left-radius:";
      }

      return (
        "background-color: " +
        this.color +
        ";" +
        firstRadiusProperty +
        this.radius +
        ";" +
        secondRadiusProperty +
        this.radius +
        ";" +
        "height:" +
        this.height +
        ";" +
        "width:" +
        this.width
      );
    }
  }
};
</script>
<style>
.circle {
  margin: 0 1em 1em 0;
}
</style>
