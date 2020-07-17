<template>
  <div class="home-background">
    <div class="circles">
      <Circle-Component
        id="right-circle"
        :color="'#DC3510'"
        :position="'right'"
        :radius="'400px'"
        :height="'400px'"
        :width="'200px'"
      />
      <Circle-Component
        id="bottom-circle"
        :color="'#DCCD10'"
        :position="'bottom'"
        :radius="'400px'"
        :height="'200px'"
        :width="'400px'"
      />
    </div>
    <Circle-Component
      class="white-circle"
      :color="'#fffafa'"
      :position="'left'"
      :radius="'400px'"
      :height="'400px'"
      :width="'200px'"
    />
    <div class="grey-dots">
      <img
        src="../assets/icons/grey-dots.svg"
        alt="grey-dots"
        width="100px"
        height="200px"
      />
    </div>
  </div>
</template>
<script>
import CircleComponent from "@/components/CircleComponent";

export default {
  name: "HomeBackground",
  components: {
    CircleComponent
  }
};
</script>
<style lang="scss" scoped>
.circles {
  overflow: hidden;
  height: 550px;
  width: 400px;
  margin-top: -150px;
}
#right-circle {
  z-index: 1;
  margin-left: 170px;
}

#bottom-circle {
  margin-top: -100px;
  margin-left: -30px;
  z-index: 2;
}

.white-circle {
  float: right;
  margin-top: -620px;
  margin-right: -20px;
}

.grey-dots img {
  height: 400px;
  width: 300px;
  display: block;
  float: right;
  margin-top: -450px;
  margin-right: 20px;
}
</style>
