<template>
  <div class="team">
    <h2>{{ name }}</h2>
    <div class="twitter-icon">
      <font-awesome-icon :icon="['fab', 'twitter']" />
      <p>{{ twitter }}</p>
    </div>

    <p>
      <b>
        <span v-if="founded !== 0">Founded in:</span>
      </b>
      {{ founded !== 0 ? founded : " " }}
    </p>
    <div class="colors">
      <Color
        v-for="color in colors"
        :key="color.name"
        :color="color.hex_code"
      />
    </div>

    <ul class="team-players">
      <b>Players:</b>
      <span class="icon">
        <img
          class="dropdown-icon"
          src="../assets/icons/dropdown-icon.svg"
          alt="dropdown-icon"
          width="20px"
          height="7px"
        />
      </span>
      <li v-for="player in players" :key="player.id">
        {{ player.common_name }}
      </li>
    </ul>
  </div>
</template>

<script>
import Color from "@/components/Color";
export default {
  name: "Team",
  components: { Color },
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
    shortName: {
      type: String,
      default: "",
      required: true
    },
    logo: {
      type: String,
      default: "",
      required: false
    },
    founded: {
      type: Number,
      default: 0,
      required: false
    },
    twitter: {
      type: String,
      default: "",
      required: false
    },
    national_team: {
      type: Boolean,
      default: false,
      required: false
    },
    squad: {
      type: Array,
      required: false
    },
    players: {
      type: Array,
      required: false
    },
    colors: {
      type: Array,
      required: false
    }
  }
};
</script>

<style lang="scss" scoped>
.team {
  padding: 5px;
  margin: 1rem 0;
  text-emphasis: 5rem;
  width: 500px;
  font-family: "Open Sans", sans-serif;
}
.team h2,
.team p,
.team ul {
  padding: 5px;
}
.team-players {
  list-style-type: none;
}
.team-players:hover {
  cursor: pointer;
}

.team-players .dropdown-icon {
  cursor: pointer;
  -ms-transform: rotate(360deg);
  transform: rotate(360deg);
}

.colors {
  display: flex;
  flex-wrap: wrap;
}

.team svg {
  color: #1da1f2;
}

.twitter-icon {
  display: flex;
  align-items: center;
}
</style>
