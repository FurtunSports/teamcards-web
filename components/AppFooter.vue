<template>
  <footer>
    <div class="first-column">
      <p class="main">Tool offered by</p>
      <p>Furtun</p>
    </div>
    <div class="center-div"></div>
    <div class="second-column">
      <p class="main">Other Tools</p>
      <a class="link" href="http://www.matchunter.com" target="_blank">Matchunter</a>
      <a class="link" href="http://www.komitty.com" target="_blank">Komitty</a>
    </div>
  </footer>
</template>

<script>
export default {
  name: "AppFooter"
};
</script>

<style>
footer {
  width: 100%;
  height: 100px;
  background-color: #3d4160;
  color: white;
  display: flex;
  align-items: center;
}
.first-column {
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 60px;
}

.center-div {
  width: 3000px;
}
.second-column {
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 10px;
}

.main {
  font-size: 25px;
}

.link {
  color: white;
  text-decoration: none;
}
</style>