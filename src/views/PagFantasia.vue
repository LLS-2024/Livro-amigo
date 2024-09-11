<script setup>
import HeaderCompo from '@/components/HeaderCompo.vue';

</script>
<template>
  <HeaderCompo title="Fantasia"/>
 <div class="conteiner2">
    <div> <img src="../assets/volumes-unicos.webp">
    <img src="../assets/fantasia-ilustracao.jpg" alt=""> </div>
 </div>
 <div class="conteiner3">
    <div> 
    <img src="../assets/em.jpg" class="img1">
    <img src="../assets/ar.jpg" class="img1">
    <img src="../assets/nf.jpg" class="img1">
    <img src="../assets/fp.jpg" class="img1">

</div>
<hr>
 </div>



</template>
<style scoped>
 @charset "utf-8";
 @import url('https://fonts.googleapis.com/css2?family=Titan+One&display=swap');

 .container1{
            display: flex;  
  flex-direction: column;
  align-items: center;
        }
        .container2{
            display: grid;
            grid-template-columns: 1fr 1fr;
            background-color: rgb(87, 86, 86);
        padding: 50px;
        }
        .container3{
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
        
        }
        .container4{
            display: grid;
            grid-template-columns: 1fr 1fr ;
        
        }
  
img{
    margin: 90px;
    width: 500px;
    height: 300px;
}
.img1{
    width: 200px;
    height: 200px;
}
.img2{
    width: 400px;
    height: 400px;
}
h3{
 color: aliceblue; 
}
nav{
    background-color: rgb(0, 0, 0);
    color: aliceblue;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    font-family: 'Titan One', sans-serif;
}


</style>