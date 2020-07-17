<template>
  <div class="teams-container">
    <div class="teams">
      <TeamsBackground />
      <Team-Logo
        v-for="(team, index) in teams"
        :key="`${team.id}-${index}`"
        :id="team._id"
        :name="team.name"
        :logo="team.logo"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Team from "@/components/Team";
import TeamsBackground from "@/components/TeamsBackground";
import TeamLogo from "@/components/TeamLogo";

export default {
  components: {
    Team,
    TeamsBackground,
    TeamLogo
  },
  data() {
    return {
      teams: []
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
        `${process.env.BACKEND_URL}/teams/league/${this.$route.params.id}`,
        config
      );

      const teams = res.data.slice(0, 20);
      this.teams = teams;
    } catch (error) {
      console.log(error);
    }
  },
  head() {
    return {
      title: "Teams"
    };
  }
};
</script>

<style lang="scss" scoped>
.teams-container {
  width: 100%;
  background-color: #ebe7bf;
  display: flex;
  align-items: center;
}
.teams {
  width: 1000px;
  margin-left: 300px;
  padding-top: 50px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
