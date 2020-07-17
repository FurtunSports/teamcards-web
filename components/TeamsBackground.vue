<template>
  <div class="teams-background">
    <CircleComponent
      class="teams-left-circle"
      :color="'#DC3510'"
      :position="'right'"
      :radius="'300px'"
      :height="'300px'"
      :width="'150px'"
    />
    <CircleComponent
      class="teams-right-circle"
      id="bottom-circle"
      :color="'#DCCD10'"
      :position="'bottom'"
      :radius="'400px'"
      :height="'200px'"
      :width="'400px'"
    />
  </div>
</template>

<script>
import CircleComponent from "@/components/CircleComponent";
export default {
  name: "TeamsBackground",
  components: {
    CircleComponent
  }
};
</script>

<style lang="scss" scoped>
.teams-left-circle {
  margin-top: -170px;
  margin-left: -250px;
  width: 200px;
}

.teams-right-circle {
  float: right;
  margin-right: -1500px;
}
</style>
