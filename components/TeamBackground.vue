<template>
  <div class="team-background">
    <Circle-Component
      class="team-red-circle"
      :color="'#DC3510'"
      :position="'right'"
      :radius="'250px'"
      :height="'250px'"
      :width="'125px'"
    />
    <Circle-Component
      class="team-green-circle"
      :color="'#10DC83'"
      :position="'bottom'"
      :radius="'250px'"
      :height="'125px'"
      :width="'250px'"
    />
    <div class="white-dots">
      <img src="../assets/icons/white-dots.svg" alt="grey-dots" width="100px" height="200px" />
    </div>
  </div>
</template>

<script>
import CircleComponent from "@/components/CircleComponent";
export default {
  name: "TeamBackground",
  components: {
    CircleComponent
  }
};
</script>


<style lang="scss" scoped>
.team-background {
  background: #ebe7bf;
  width: 100%;
  height: 696px;
}
.team-red-circle {
  float: right;
  padding-top: 170px;
  margin-right: 100px;
  margin-bottom: 0px;
}

.team-green-circle {
  width: 500px;
  margin-left: 1140px;
  padding-top: 370px;
  margin-bottom: 0px;
}

.white-dots {
  float: right;
  height: 150px;
  width: 230px;
  margin-top: -400px;
  margin-bottom: 0px;
}

.white-dots img {
  width: 100%;
  height: 100%;
  color: white;
}
</style>
