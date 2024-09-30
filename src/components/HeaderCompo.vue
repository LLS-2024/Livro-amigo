



<script setup>
  import { defineProps } from 'vue';

  const props = defineProps({
    title: {
      type: String,
      required: true,
    },
  });
</script>

<template>
  <header class="header-container">
    <img src="../assets/menu1.png" alt="Imagem 1" class="header-image" />
    <h3><RouterLink to="/paginainicial"><span style='font-size:60px;'>&#128214;</span></RouterLink> {{props.title}}</h3>
   <li><RouterLink to="/cadastro"><img src="../assets/menu.png"  alt="Imagem 2" class="header-image"></RouterLink></li>
  </header>
    <slot> <nav>
        <ul class=" d-flex bg-dark text-white flex-row justify-content-around">
            <li><RouterLink to="/cadastro">Cadastro</RouterLink></li>
            <li><RouterLink to="/relatorio">Relatorio</RouterLink></li>
            <li> <RouterLink to="/PagInfantil">Página Infantil</RouterLink></li>
           <li> <RouterLink to="/paginaaventura">Aventura</RouterLink></li>
           <li><RouterLink to="/fantasia">Fantasia</RouterLink></li>
           <li><RouterLink to="/terror">Terror</RouterLink></li>
           <li><RouterLink to="/suspense">Suspense</RouterLink></li>
          </ul>
    </nav></slot>
</template>

<style scoped>
.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #6c757d;
  padding: 20px;
  border-radius: 1px;
}

.header-title {
  font-size: 2rem;
  color: #fff;
}

.header-image {
  width: 100px;
  height: auto;
  border-radius: 50%;
}
.p-2{
    padding: 0px;
}
 .d-flex{
     align-items: center;
     padding: 30px;
     justify-content: space-around;
 }
 .nav ul {
     display: flex;
     flex-direction: row;
     
 }
 .nav li{
 margin: 15px;
 color: white;
 }
 .d-flex img{ 
     height: 100px;
     width: 100px;
 }
</style>