<template>
    <div class="conten-about">
        <div class="team">
            <h2>
                MEMBERS OF OUR TEAM
            </h2>
        </div>
        <div class="about-2" >
            <div class="d-flex">
                <div class="w-30">
                    <div class="pd-15">
                        <img src="../assets/images/about-us-1.jpg" alt="">
                    </div>
                </div>
                <div class="w-70" v-for="member in ProductData" :key="member.id" ></div>
                    <div class="name">
                        <h2> {{ member.name }} </h2>
                        <p> {{ member.job }}  </p>
                    </div>
                    <div class="conten-1">
                        <p>
                            
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import ProductData from '../store/production.js'


</script>

<style scoped>

.d-flex {
    margin-left: 10%;
    margin-right: 10%;
}
.pd-15 img{
    width: 100%;
    height: 528px;
}

.w-30 {
    width: 30%;
}

.w-70 {
    width: 70%;
}

.team {
    margin-top: 50px;
}

.team h2 {
    text-align: center;
    font-size: 40px;
}
.conten-about {
    margin-top: 10px;
}
.name {
    padding-top: 5px;
    background-color: #292929;
    color: aliceblue;
    text-align: center;
    padding-bottom: 5px;
    font-size: 20px;
}

.conten-1 {
    text-align: justify;
    padding: 8.5%;
    background-color: rgb(247, 232, 213);
}

.about-2 {
    padding-top: 20px;
    padding-bottom: 10px;

}


</style>