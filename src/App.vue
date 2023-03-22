<template>
  <div class="container">
    <NavBar />
    <br>
    <br>
    <br>

    <!-- <transition name="moveInUp"> -->
      <router-view/>
    <!-- </transition> -->
    
    <br>

    <OurFooter/>

  </div>
</template>


<script>
import NavBar from '@/components/NavBar.vue';
import OurFooter from '@/components/OurFooter.vue';

export default {
  name: 'app',
  components: {
    NavBar,
    OurFooter
  },
}
</script>


<style>

</style>
