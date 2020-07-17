<template>
  <div class="teams-container">
    <div class="teams" v-bind:class="{ active: isActive }">
      <TeamsBackground />
      <Team-Logo
        v-for="(team, index) in teams"
        :key="`${team.id}-${index}`"
        :id="team._id"
        :name="team.name"
        :logo="team.logo"
        :style="style"
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
      teams: [],
      teamsIds: "",
      applyStyle: false,
      isActive: false,
      style: ""
    };
  },
  async created() {
    const config = {
      headers: {
        Accept: "application/json"
      }
    };

    try {
      let res;
      if (this.$route.query.search) {
        const filteredTeams = await axios.get(
          `${process.env.BACKEND_URL}/teams/team?name=${this.$route.query.search}`,
          config
        );

        this.teamsIds = filteredTeams.data.map(team => team._id).join(",");

        res = await axios.get(
          `${process.env.BACKEND_URL}/teams?ids=${this.teamsIds}`,
          config
        );
      } else {
        res = await axios.get(
          `${process.env.BACKEND_URL}/teams/top/teams`,
          config
        );
      }

      const sanitizedTeams = res.data.filter(team => team.logo !== null);
      this.teams = sanitizedTeams.slice(0, 20);

      if (sanitizedTeams.length <= 4 && sanitizedTeams.length > 0) {
        this.style = "margin-bottom:285px; margin-left: 20px";
        this.isActive = true;
      }
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

<style scoped>
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

.active {
  display: flex;
  justify-content: flex-start;
}
</style>
