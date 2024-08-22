<template>
    <header class="d-flex flex-wrap bg-secondary flex-row justify-content-around ">
     <div><img src="" alt=""></div>
     <nav class="nav"><ul>
         <li> <RouterLink to="/">Romance</RouterLink></li>
         <li> <RouterLink to="/projetoequipe">Aventura</RouterLink></li>
         <li><RouterLink to="/paginamembros">Romance</RouterLink></li>
         <li><RouterLink to="/paginamembros">Fantasia</RouterLink></li>
         <li><RouterLink to="/paginamembros">Terror</RouterLink></li>
         <li><RouterLink to="/paginamembros">Suspense</RouterLink></li>
     </ul>
 </nav>
    </header>
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
 </style>