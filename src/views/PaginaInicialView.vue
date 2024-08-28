<template>
    <div class="tudo">
      <div class="nav d-flex flex-column flex-wrap bg-secondary text-white ">
        <h1>Livro Amigo</h1>
        <hr>
        <div class="link d-flex flex-wrap flex-column">
          <ul class="d-flex flex-row justify-content-around">
            <li><RouterLink to="/cadastro">Cadastro</RouterLink></li>
            <li><RouterLink to="/relatorio">Relatorio</RouterLink></li>
            <li> <RouterLink to="/romance">Romance</RouterLink></li>
           <li> <RouterLink to="/paginaaventura">Aventura</RouterLink></li>
           <li><RouterLink to="/paginamembros">Fantasia</RouterLink></li>
           <li><RouterLink to="/paginamembros">Terror</RouterLink></li>
           <li><RouterLink to="/paginamembros">Suspense</RouterLink></li>
          </ul>
        </div>
      </div>
    </div>
  </template>

<style>
.tudo {
  height: 500px;
  background: url("../assets/fotobg.jpg") no-repeat center;
  background-size: cover; 
}
.nav{
  text-align: center;
  margin: 0px 200px;
  padding: 100px;
}
.link{
  text-align: center;
  margin: 20px;
  font-size: larger;
}
hr{
  border: solid 2px black;
}
</style>
