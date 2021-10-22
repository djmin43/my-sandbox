
<template>
  <section>
  <div class="slider">
    <div v-for="(number, i) in mainArray" :key="i" @click="clickNumber(number, i)">
      <p :class="[i === 5 ? 'numberItem' : 'active']">
        {{ number }}
      </p>
    </div>
  </div>
  <div>
      <button @click="goingForward">
        forward
      </button>
      <button @click="goingBack">
        back!
      </button>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      mainArray: [],
      testArray: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
    }
  },
  created () {
    this.mainArray = this.testArray
  },
  methods: {
    clickNumber (number, i) {
      console.log(number, i)
    },
    goingForward () {
      const lastItem = this.testArray.pop()
      this.testArray.unshift(lastItem)
    },
    goingBack () {
      const firstItem = this.testArray.shift()
      this.testArray.push(firstItem)
    }
  }
}

</script>


<style>
.slider {
  width: 100vw;
  display: flex;
  justify-content: space-around;
  overflow: hidden;
  width: 300px;
  border: 5px solid blue;
}

.numberItem {
  color: black;
  font-size: 30px;
  width: 100px;
  height: 100px;
  border: 2px black solid;
  animation: slider 1s ease-in-out;
}

.active {
  color: red;
  font-size: 30px;
  width: 100px;
  height: 100px;
  border: 2px black solid;
  animation: slider 1s ease-in-out;
}

@keyframes slider {
  from {
    transform: translateX(100px); 
  }
  to {
    transform: translateX(0);
  }
}
</style>
