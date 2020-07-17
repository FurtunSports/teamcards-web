<template>
  <header id="menu-outer">
    <div class="app-header">
      <ul id="horizontal-list">
        <li class="list-element">
          <router-link to="/" exact>
            Home
            <span class="icon">
              <img
                class="dropdown-icon"
                src="../assets/icons/dropdown-icon.svg"
                alt="dropdown-icon"
                width="20px"
                height="7px"
              />
            </span>
          </router-link>
        </li>
        <li class="list-element">
          <router-link to="/leagues" exact>
            Leagues
            <span class="icon">
              <img
                class="dropdown-icon"
                src="../assets/icons/dropdown-icon.svg"
                alt="dropdown-icon"
                width="20px"
                height="7px"
              />
            </span>
          </router-link>
          <ul class="dropdown-content-leagues">
            <li
              v-for="(league, index) in leagues"
              :key="`${league._id}-${index}`"
            >
              <nuxt-link :to="`/teams/leagues/${league.sm_id}`">{{
                league.name
              }}</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/leagues">More...</nuxt-link>
            </li>
          </ul>
        </li>
        <li class="list-element">
          <router-link to="/teams">
            Teams
            <span class="icon">
              <img
                class="dropdown-icon"
                src="../assets/icons/dropdown-icon.svg"
                alt="dropdown icon"
                width="20px"
                height="7px"
              />
            </span>
          </router-link>
          <ul class="dropdown-content-teams">
            <li v-for="(team, index) in teams" :key="`${team._id}-${index}`">
              <nuxt-link :to="`/teams/${team._id}`">{{ team.name }}</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/teams">More...</nuxt-link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
import axios from "axios";
export default {
  name: "AppHeader",
  data() {
    return {
      teams: [],
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
        `${process.env.BACKEND_URL}/teams/top/teams`,
        config
      );

      const topTeams = [
        "Barcelona",
        "Real Madrid",
        "Juventus",
        "Liverpool",
        "Bayern München"
      ];
      const filteredTeams = res.data.filter(team =>
        topTeams.includes(team.name)
      );
      this.teams = filteredTeams;

      const result = await axios.get(
        `${process.env.BACKEND_URL}/leagues/top/leagues`,
        config
      );

      this.leagues = result.data;
    } catch (error) {
      console.log(error);
    }
  }
};
</script>

<style>
#menu-outer {
  background: #ebe7bf;
}
.app-header ul {
  font-size: 0;
  list-style-type: none;
  text-align: center;
}
li a {
  text-decoration: none;
  color: black;
}
.list-element {
  margin: 30px;
}
.app-header ul li {
  font-family: "Open Sans", sans-serif;
  font-size: 1rem;
  display: inline-block;
  position: relative;
  padding: 30px;
  text-align: center;
}
.app-header ul li ul {
  display: none;
}
.app-header ul li:hover .dropdown-icon {
  cursor: pointer;
  -ms-transform: rotate(360deg);
  transform: rotate(360deg);
}
.app-header ul li:hover ul {
  display: block;
  margin-top: 10px;
  width: 200px;
  left: 0;
  position: absolute;
  height: 200px;
}
.app-header ul li:hover ul li {
  display: block;
  height: 10%;
  background-color: #e7e7e7;
}

.app-header ul li:hover ul li:hover {
  background-color: #e0e0e0;
}
.dropdown-icon {
  -ms-transform: rotate(-90deg);
  transform: rotate(-90deg);
}

.nuxt-link-active .icon .dropdown-icon {
  -ms-transform: rotate(360deg);
  transform: rotate(360deg);
}
</style>
