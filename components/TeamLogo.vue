<template>
  <div class="team-logo">
    <nuxt-link :to="`/teams/${id}`" class="team-link">
      <img :src="logo" alt="logo" width="100px" height="100px" />
      <p class="team-name">{{ name }}</p>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: "TeamLogo",
  props: {
    name: {
      type: String,
      default: "",
      required: false
    },
    id: {
      type: String,
      default: "",
      required: false
    },
    logo: {
      type: String,
      default: ""
    }
  }
};
</script>

<style scoped>
.team-logo {
  width: 140px;
  height: 140px;
  margin-right: 80px;
  margin-bottom: 30px;
  padding-top: 25px;
  text-align: center;
}

.team-link {
  text-decoration: none;
  color: black;
  text-align: center;
  font-size: 18px;
  font-family: "Nunito";
  font-weight: bold;
}

.team-logo:nth-child(6),
.team-logo:nth-child(7),
.team-logo:nth-child(8),
.team-logo:nth-child(9) {
  margin-top: -150px;
  margin-bottom: 73px;
  margin-left: 30px;
  text-align: center;
}

.team-logo:nth-child(10),
.team-logo:nth-child(14),
.team-logo:nth-child(18) {
  margin-left: 25px;
}
</style>
