<template>
<div id="app-container">
  <h1>Fraction Calculator</h1>
  <div>Type in a math equation and hit Enter--I will solve it as a fraction!</div>
  <div class="example">
    Examples:
    <ul>
      <li>1/2 + 1/2</li>
      <li>1/2 * 1/2</li>
      <li>(1 + 1/2) * 1/2</li>
    </ul>
  </div>
  <FractionInput />
</div>
</template>

<script>
import FractionInput from './FractionInput.vue'
  
export default {
  data () {
    return {
    }
  },
  components: {
    FractionInput
  }
}
</script>

<style>
body {
  font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
  background: #222;
  color: #eee;
  margin: 5vw;
}
#app-container {
  display: grid;
  grid-gap: 10px;
  font-size: 4vh;
}
</style>
<style scoped>
  h1 {
    color: #61dafb;
    margin: 0;
  }
  div {
    font-size: 3vh;
  }
  .example {
    padding-top: 5vh;
    margin-left: 8vw;
    display: grid;
  }
</style>