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
    <div class="txt d-flex flex-row justify-content-center bg-secondary flex-wrap">
        <h3><RouterLink to="/paginainicial"><span style='font-size:60px;'>&#128214;</span></RouterLink> {{props.title}}</h3>
    </div>
    <slot> <nav>
        <ul class=" d-flex bg-dark text-white flex-row justify-content-around">
            <li class="a"><RouterLink to="/cadastro">Cadastro</RouterLink></li>
            <li class="a"><RouterLink to="/relatorio">Relatorio</RouterLink></li>
            <li class="a"> <RouterLink to="/PagInfantil">Página Infantil</RouterLink></li>
           <li class="a"> <RouterLink to="/paginaaventura">Aventura</RouterLink></li>
           <li class="a"><RouterLink to="/fantasia">Fantasia</RouterLink></li>
           <li class="a"><RouterLink to="/terror">Terror</RouterLink></li>
           <li class="a"><RouterLink to="/suspense">Suspense</RouterLink></li>
          </ul>
    </nav></slot>
     
   
 </template>
 <style scoped>
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
 .a:hover, .a:active {
    font-size: 1.2rem;
    text-decoration: underline;
    }
.a{
    transition-property: font-size;
    transition-duration: 1s;
}
 </style>