<script setup>
import HeaderCompo from '@/components/HeaderCompo.vue';
</script>
<template>
  <HeaderCompo title="Fantasia"/>
   <main class="main d-flex flex-column flex-wrap ">
<div class="caixa d-flex flex-row flex-wrap bg-secondary">
<div>
<RouterLink class="img3" to="/LivroResumo"><img src="../assets/em.jpg" alt=""></RouterLink>
<RouterLink class="img3" to="/"><img src="../assets/ar.jpg" alt=""></RouterLink>
<RouterLink class="img3" to="/"><img src="../assets/nf.jpg" alt=""></RouterLink>
<RouterLink class="img3" to="/"><img src="../assets/fp.jpg" alt=""></RouterLink>
</div>
</div>
<p></p>
<div class="d-flex flex-column flex-wrap justify-content-around">
<div class="d-flex flex-wrap flex-row">
    <div class="caixa2 d-flex flex-row flex-wrap bg-secondary">
<RouterLink class="img3" to="/"><img src="../assets/martin.jpg" alt=""></RouterLink>
<RouterLink class="img3" to="/"><img src="../assets/duna.jpg" alt=""></RouterLink>
<RouterLink class="img3" to="/"><img src="../assets/rv.jpg" alt=""></RouterLink>
</div>
    <div class="caixa2 d-flex flex-row flex-wrap bg-secondary">
    <div class=" d-flex flex-row flex-wrap bg-secondary">
<RouterLink class="img3" to="/"><img src="/src/assets/cs.jpg" alt=""></RouterLink>
<RouterLink class="img3" to="/"><img src="/src/assets/mm.jpg" alt=""></RouterLink>
<RouterLink class="img3" to="/"><img src="/src/assets/cef.jpg" alt=""></RouterLink>
</div>
</div>
</div>
</div>
<p></p>
    <div class="caixa3 d-flex flex-row flex-wrap bg-secondary justify-content-around">
    <div class="caixa2 d-flex flex-row flex-wrap">
<RouterLink class="img3" to="/"><img src="../assets/image 41.png" alt=""></RouterLink>
<RouterLink class="img3" to="/"><img src="../assets/vel.jpg" alt=""></RouterLink>
<RouterLink class="img3" to="/"><img src="../assets/image 43.png" alt=""></RouterLink>
<RouterLink class="img3" to="/"><img src="../assets/image 44.png" alt=""></RouterLink>
<RouterLink class="img3" to="/"><img src="../assets/image 45.png" alt=""></RouterLink>
</div>
</div>

   </main>
</template>
<style scoped>
li{
    padding: 20px;
}
.main{
    align-items: center;
}
.caixa{
    margin: 10px;
    padding: 30px 100px;
}
.caixa2{
    margin: 8px 30px 15px 30px;
    padding: 20px 50px; 
    align-items: center;
}
h3{
    display: flex;
    justify-content: center;
    align-items: center;
}
.img{
    margin: 10px;
}
img{
    width:145px;
    height: 200px;
    transition: 1s;
}
.img3 img:hover{
    width:175px;
    height: 230px;
}
.caixa3{
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 20px;
}
.caixa4{
    display: flex;
    justify-content: end;
    align-items: center;
    padding: 30px 70px;
  
}
.img2{
    margin: 0px 10px 0px 200px;
}
</style>