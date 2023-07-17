<template>
   <div class="banner">
        <div class="d-flex">
            <div class="w-50">
                <div>
                    <img src="../assets/images/men.jpg" width="100%" height="515px" alt="">
                </div>
            </div>
            <div class="w-50">
                <div class="text-banner">
                    <h1>MAN</h1>
                    <p>Work bags, backpacks, pouches and purses dedicated to the stylish man who reaches for innovative
                        designs.</p>
                </div>
            </div>
        </div>
    </div>
    <!-- <ProductMen></ProductMen> -->
    <ProductBlock :productsData="productsData" />
</template>

<script setup>
// import ProductMen from '../Product/ProductMen.vue'
import { ref } from "vue"
import ProductBlock from "../components/Product/ProductCompoment.vue"
import productsDatas from '../store/product.json';
const productsData = ref({
    newArrival: productsDatas.menBuberry,
    homeBurberry: productsDatas.menGucci,
})

</script>

<style  scoped>
.text-banner {
    color: #616161;
    text-align: center;
    justify-content: center;
    flex-flow: column;
    display: flex;
    height: 513px;
    background-color: #ece2d8;
}

</style>