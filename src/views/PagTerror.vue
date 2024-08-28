<script setup>

</script>
<template>
    <header class="bg-secondary container1 ">
        <h3> <span style='font-size:60px;'>&#128214;</span>terror</h3>
       
   
    </header>
 <nav>
          <div><p>terror</p></div> 
          <div><p>romance</p></div>
          <div><p>aventura</p></div> 
          <div><p>comedia</p></div>
          <div><p>suspense</p></div> 
          <div><p>fantasia</p></div>
        </nav>
 <header class="conteiner2">
    <div> <img src="../assets/terror.webp">
    <img src="../assets/t1.jpg" alt=""> </div>
 </header>
 <header class="conteiner3">
    <div> 
    <img src="../assets/t2.webp" class="img1">
    <img src="../assets/t3.webp" class="img1">
    <img src="../assets/t4.webp" class="img1">

</div>
<hr>
 </header>
 <header class="conteiner4">
    <div> 
    <img src="../assets/livrot.jpg" >
    <img src="../assets/t5.webp" class="img2" >


</div>
<hr>
 </header> 


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