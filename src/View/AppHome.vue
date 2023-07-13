<template>
  <div>
    <AppHeader></AppHeader>

    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="2000">
          <img src="../assets/images/banners-3.jpg" class="d-block w-100" alt="..." height="515px">
        </div>
        <div class="carousel-item" data-bs-interval="2000">
          <img src="../assets/images/banners-1.png" class="d-block w-100" alt="..." height="515px">
        </div>
        <div class="carousel-item" data-bs-interval="2000">
          <img src="../assets/images/banners-2.jpg" class="d-block w-100" alt="..." height="515px">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <ProductHome></ProductHome>

    <AppFooter></AppFooter>

  </div>
</template>

<script setup>
import ProductHome from '@/components/ProductHome.vue';
import AppHeader from '../components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue';

</script>
<style scoped>

</style>

