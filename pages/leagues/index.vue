<template>
  <div class="leagues">
    <Circle-Component
      class="league-blue-circle"
      :color="'#106FDC'"
      :position="'right'"
      :radius="'400px'"
      :height="'400px'"
      :width="'200px'"
    />
    <League
      v-for="(league, index) in leagues"
      :key="`${league._id}-${index}`"
      :name="league.name"
      :logo="league.logo"
      :id="league._id"
      :sm_id="league.sm_id"
    />
  </div>
</template>

<script>
import axios from "axios";
import League from "@/components/League";
import CircleComponent from "@/components/CircleComponent";

export default {
  components: {
    League,
    CircleComponent
  },
  data() {
    return {
      leagues: []
    };
  },
  async created() {
    const config = {
      headers: {
        Accept: "application/json"
      }
    };

    try {
      const res = await axios.get(
        `${process.env.BACKEND_URL}/leagues/top/leagues`,
        config
      );

      this.leagues = res.data;
    } catch (error) {
      console.log(error);
    }
  },
  head() {
    return {
      title: "Leagues"
    };
  }
};
</script>

<style lang="scss" scoped>
.leagues {
  width: 100%;
  background-color: #ebe7bf;
  display: flex;
  align-items: center;
  margin-right: 100px;
  flex-wrap: wrap;
}

.league-blue-circle {
  margin-left: -140px;
  margin-top: -150px;
}

.league:nth-child(2) {
  margin-left: 190px;
}

.league:nth-child(4),
.league:nth-child(6) {
  margin-left: 270px;
}

.app-header .icon {
  -ms-transform: rotate(-90deg);
  transform: rotate(-90deg);
}
</style>
