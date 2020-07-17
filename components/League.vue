<template>
  <div class="league">
    <nuxt-link :to="`/teams/leagues/${sm_id}`">
      <img :src="`https://matchunter.com/sports${logo}`" alt="logo" width="100px" height="100px" />
      <h2>{{ name }}</h2>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: "League",
  props: {
    id: {
      type: String,
      default: "",
      required: true
    },
    name: {
      type: String,
      default: "",
      required: true
    },
    logo: {
      type: String,
      default: ""
    },
    sm_id: {
      type: Number,
      default: 0,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.league {
  margin-left: 100px;
  margin-right: 30px;
  margin-bottom: 50px;
  padding-top: 20px;
  width: 500px;
  height: 150px;
  font-family: "Open Sans", sans-serif;
  color: #3b3b3b;
}

.league h2 {
  margin-left: 20px;
}
.league img {
  margin-left: 20px;
}

.league a {
  text-decoration: none;
  color: #3b3b3b;
  display: flex;
  text-align: center;
  align-items: center;
}
.league:hover {
  border: 2px solid #10dc83;
  border-radius: 30px;
}
</style>