<template>
  <div class="search">
    <form class="form" @submit="filteredList">
      <input
        type="text"
        class="searchTerm"
        v-model="search"
        placeholder="Search a team..."
      />
      <button type="submit" class="searchButton">
        <i class="fa fa-search"></i>
      </button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import TeamLogo from "@/components/TeamLogo";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
export default {
  name: "Search",
  components: {
    TeamLogo
  },
  data() {
    return {
      search: "",
      teamsIds: ""
    };
  },

  methods: {
    async filteredList(e) {
      try {
        e.preventDefault();

        this.$router.push({
          path: "/teams",
          query: { search: `${this.search}` }
        });
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import url(https://fonts.googleapis.com/css?family=Open+Sans);

* {
  box-sizing: border-box !important;
}

body {
  background-color: #f0e8c2;
  font-family: "Open Sans", sans-serif;
}

.search {
  width: 800px;
  height: 75px;
  margin-top: -450px;
  margin-left: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  border: 2.5px solid #574e4d;
}

.form {
  width: 100%;
  height: 100%;
}
input.searchTerm {
  width: 65%;
  height: 40px;
  padding-top: 0;
  border: none;
  outline: none;
  font-size: 24px;
  font-family: "Nunito";
  padding-left: 50px;
  background-color: #f0e8c2;
  margin-left: 30px;
  margin-right: 150px;
}

.searchTerm:focus {
  color: black;
}

.searchButton {
  width: 70px;
  height: 60px;
  margin-top: 5px;
  text-align: center;
  border: none;
  cursor: pointer;
  font-size: 30px;
  margin-right: 0;
  color: #574e4d;
  background: #f0e8c2;
}

.searchButton:hover {
  background-color: #cfbebe;
}

.wrapper {
  display: flex;
  max-width: 444px;
  flex-wrap: wrap;
  padding-top: 12px;
}

.card {
  box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px,
    rgba(0, 0, 0, 0.117647) 0px 1px 4px;
  max-width: 124px;
  margin: 12px;
  transition: 0.15s all ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
  a {
    text-decoration: none;
    padding: 12px;
    color: #03a9f4;
    font-size: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      height: 100px;
    }
    small {
      font-size: 10px;
      padding: 4px;
    }
  }
}
</style>
