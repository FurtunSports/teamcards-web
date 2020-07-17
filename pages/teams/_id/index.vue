<template>
  <div class="team-id">
    <Team-Background />
    <Team-Logo class="logo" :logo="team.logo" />
    <Team
      class="team"
      :key="team._id"
      :id="team._id"
      :name="team.name"
      :logo="team.logo"
      :national_team="team.national_team"
      :twitter="team.twitter"
      :founded="team.founded"
      :shortName="team.short_name"
      :players="team.players"
      :squad="team.squad"
      :colors="team.colors"
    />
  </div>
</template>

<script>
import axios from "axios";
import Team from "../../../components/Team";
import TeamBackground from "@/components/TeamBackground";
import TeamLogo from "@/components/TeamLogo";
export default {
  components: {
    Team,
    TeamBackground,
    TeamLogo
  },
  data() {
    return {
      team: {}
    };
  },
  async created() {
    try {
      const config = {
        headers: {
          Accept: "application/json"
        }
      };

      const res = await axios.get(
        `${process.env.BACKEND_URL}/teams/${this.$route.params.id}`,
        config
      );

      this.team = res.data;
    } catch (error) {
      console.log(error);
    }
  }
};
</script>

<style lang="scss" scoped>
.link {
  text-transform: uppercase;
}

.link:hover {
  background-color: #32a852;
  color: white;
}
.team-id {
  background-color: #f0e8c2;
  margin-bottom: -20px;
}
.team {
  margin-top: -140px;
  margin-left: 300px;
}

.logo {
  margin-top: -740px;
  margin-left: 130px;
}
</style>
