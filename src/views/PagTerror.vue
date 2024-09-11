<template><header class="d-flex flex-column flex-wrap">
    <div class="txt d-flex flex-row justify-content-center bg-secondary flex-wrap">
        <h3> <span style='font-size:60px;'>&#128214;</span>Aventura</h3>
    </div>
    <nav>
        <ul class=" d-flex bg-dark text-white flex-row justify-content-around">
            <li><RouterLink to="/cadastro">Cadastro</RouterLink></li>
            <li><RouterLink to="/relatorio">Relatorio</RouterLink></li>
            <li> <RouterLink to="/romance">Romance</RouterLink></li>
           <li> <RouterLink to="/paginaaventura">Aventura</RouterLink></li>
           <li><RouterLink to="/paginamembros">Fantasia</RouterLink></li>
           <li><RouterLink to="/paginamembros">Terror</RouterLink></li>
           <li><RouterLink to="/paginamembros">Suspense</RouterLink></li>
          </ul>
    </nav>
   </header>
   <main class="main d-flex flex-column flex-wrap ">
 <div class="caixa d-flex flex-row flex-wrap bg-secondary">
 <div>
 <RouterLink class="img" to="/LivroResumo"><img src="../assets/t1.jpg" alt=""></RouterLink>
 <RouterLink class="img" to="/"><img src="../assets/t2.webp" alt=""></RouterLink>
 <RouterLink class="img" to="/"><img src="../assets/t3.webp" alt=""></RouterLink>
 <RouterLink class="img" to="/"><img src="../assets/t4.webp" alt=""></RouterLink>
 <RouterLink class="img" to="/"><img src="../assets/t5.webp" alt=""></RouterLink>
 </div>
 </div>
 <div class="d-flex flex-column flex-wrap justify-content-around">
 <h3>Coleções</h3>
 <div class="d-flex flex-wrap flex-row">
    <div class="caixa2 d-flex flex-row flex-wrap bg-secondary">
 <RouterLink class="img" to="/"><img src="../assets/terror.webp" alt=""></RouterLink>
 <RouterLink class="img" to="/"><img src="../assets/t5.webp" alt=""></RouterLink>
 <RouterLink class="img" to="/"><img src="../assets/t3.webp" alt=""></RouterLink>
 </div>
    <div class="caixa2 d-flex flex-row flex-wrap bg-secondary">
    <div class=" d-flex flex-row flex-wrap bg-secondary">
 <RouterLink class="img" to="/"><img src="/src/assets/t3.webp" alt=""></RouterLink>
 <RouterLink class="img" to="/"><img src="/src/assets/t5.webp" alt=""></RouterLink>
 <RouterLink class="img" to="/"><img src="/src/assets/t5.webp" alt=""></RouterLink>
 </div>
 </div>
 </div>
 </div>
 
 
    <div class="caixa3 d-flex flex-row flex-wrap bg-secondary justify-content-around">
    <div class="caixa2 d-flex flex-row flex-wrap">
 <RouterLink class="img" to="/"><img src="../assets/t2.webp" alt=""></RouterLink>
 <RouterLink class="img" to="/"><img src="../assets/t3.webp" alt=""></RouterLink>
 <RouterLink class="img" to="/"><img src="../assets/t4.webp" alt=""></RouterLink>
 </div>
 <div class="img">
    <img src="../assets/t3.webp" alt="">
 </div>
 </div>
 <div class="caixa4 d-flex flex-row flex-wrap">
 <div class="caixa4 d-flex flex-row flex-wrap bg-secondary">
 <RouterLink class="img5" to="/"><img src="../assets/t5.webp" alt=""></RouterLink>
 <RouterLink class="img5" to="/"><img src="../assets/t4.webp" alt=""></RouterLink>
 <RouterLink class="img5" to="/"><img src="../assets/t3.webp" alt=""></RouterLink>
 </div>
 <div class="img2">
    <img src="../assets/t5.webp" alt="">
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
 .img5 img{
    width: 200px;
    height: 300px;
 }
 </style>