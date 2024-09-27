<script setup>
import HeaderCompo from '@/components/HeaderCompo.vue';

</script>
<template>
  <HeaderCompo title="Página Infantil"/>
 <div class="conteiner2">
    
    <div> <img src="../assets/i3.jpg" class="img3">
    <img src="../assets/i4.jpg" class="img2"> </div>
 </div>
 <div class="conteiner3">
    <div> 
    <img src="../assets/i2.jpg" class="img1">
    <img src="../assets/i1.jpg" class="img1">
    <img src="../assets/i5.jpg" class="img1">
    <img src="../assets/i6.jpg" class="img1">
    <img src="../assets/i7.jpg" class="img1">
    <img src="../assets/i8.jpg" class="img1">
    <img src="../assets/i9.jpg" class="img1">

</div>
 </div>
 <div class="conteiner4">
    <div> 
    <img src="../assets/i10.jpg" >
    <img src="../assets/i11.jpg" class="img4" >


</div>

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
    width: 400px;
    height: 300px;
}
.img1{
    width: 160px;
    height: 180px;
    margin: 12px;
    border: solid 1px black;
}
.img2{
    width: 400px;
    height: 400px;
 

}
.img4{
    width: 500px;
    height: 300px;
    border: solid 3px black;

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