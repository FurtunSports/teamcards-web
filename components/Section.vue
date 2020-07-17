<template>
  <div>
    <Title class="second-title" :message="'Get data via'" />
    <h1>API</h1>
    <Subtitle
      class="subtitle"
      :subtitle="
        'Get access token to automate the process of data retrieval for football teams'
      "
    />
    <p id="coming-soon">
      <i>Coming soon</i>
    </p>
  </div>
</template>

<script>
import Title from "./Title";
import Subtitle from "./Subtitle";
export default {
  components: {
    Title,
    Subtitle
  }
};
</script>

<style>
.second-title {
  display: flex;
  justify-content: center;
  margin-top: 430px;
  height: 70px;
}

h1 {
  display: flex;
  justify-content: center;
  font-family: "Nunito";
  font-size: 50px;
}

.subtitle {
  display: flex;
  justify-content: center;
  margin: 50px;
  height: 50px;
}

#coming-soon {
  display: flex;
  justify-content: center;
  height: 250px;
  font-size: 20px;
}
</style>
