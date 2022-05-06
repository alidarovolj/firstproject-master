<template>
  <div class="container mx-auto">
    <setHeader />
    <pizzaList />
  </div>
</template>

<script>
import setHeader from './SetHeader.vue'
import pizzaList from './PizzaList.vue'
export default {
  name: "MainPage",
  components: {
    setHeader, pizzaList
  }
}
</script>