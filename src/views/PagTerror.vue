<script setup>
import HeaderCompo from '@/components/HeaderCompo.vue';

</script>
<template>
  <HeaderCompo title="Terror"/>
 <div class="conteiner2">
    <div> <img src="../assets/terror.webp">
    <img src="../assets/t1.jpg" alt=""> </div>
 </div>
 <div class="conteiner3">
    <div> 
    <img src="../assets/t2.webp" class="img1">
    <img src="../assets/t3.webp" class="img1">
    <img src="../assets/t4.webp" class="img1">

</div>
<hr>
 </div>
 <div class="conteiner4">
    <div> 
    <img src="../assets/livrot.jpg" >
    <img src="../assets/t5.webp" class="img2" >


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
    width: 300px;
    height: 300px;
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