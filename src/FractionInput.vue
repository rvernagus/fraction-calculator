<template>
  <div id="fraction-input">
    <label for="fraction-input">Type here:</label>
    <input v-model="input" ref="input" v-on:keyup.enter="solve" type="text" />
    <div id="prev-input">{{ previousInput }}</div>
    <div id="solution">{{ solution }}</div>
  </div>
</template>

<script>
  import math from 'mathjs'
  math.import({
    'import':     function () { throw new Error('Function import is disabled') },
    'createUnit': function () { throw new Error('Function createUnit is disabled') },
    'parse':      function () { throw new Error('Function parse is disabled') },
    'simplify':   function () { throw new Error('Function simplify is disabled') },
    'derivative': function () { throw new Error('Function derivative is disabled') }
  }, {override: true})

  math.config({
    number: 'Fraction'
  })
  
  export default {
    data () {
      return {
        input: '',
        previousInput: '',
        solution: ''
      }
    },
    methods: {
      solve() {
        if (this.input === '') return
        try {
          const result = math.eval(this.input)
          const resultStr = math.format(result, {fraction: 'ratio'})
          this.solution = resultStr
          this.previousInput = this.input + ' ='
          this.input = ''
        } catch(err) {
          this.solution = ''
          this.previousInput = 'Please type a math equation'
          this.input = ''
        }
      }
    },
    mounted() {
      this.$nextTick(() => this.$refs.input.focus())
    }
  }
</script>

<style scoped>
  #fraction-input {
    display: grid;
  }
  #solution {
    color: #61dafb;
    text-align: center;
    font-size: 7vw;
  }
  #prev-input {
    text-align: center;
    margin-top: 5vh;
  }
  input {
    padding: 1vh;
    font-size: 3vh;
    height: 4vh;
  }
  label {
    padding-bottom: 2vh;
  }
</style>