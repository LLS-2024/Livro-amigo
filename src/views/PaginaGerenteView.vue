<template>
    <div class="tudo">
      <div class="nav d-flex flex-column flex-wrap bg-secondary text-white ">
        <h1>Livro Amigo</h1>
        <hr>
        <div class="link d-flex  flex-wrap flex-column">
          <ul class="link3 d-flex flex-row flex-wrap justify-content-around">
            <li class="a" ><RouterLink to="/CadLivros">Cadastro livros</RouterLink></li>
            <li class="a"><RouterLink to="/relatorio">Relatorio</RouterLink></li>
            <li class="a"> <RouterLink to="/PagInfantil">Página Infantil</RouterLink></li>
           <li class="a"> <RouterLink to="/paginaaventura">Aventura</RouterLink></li>
           <li class="a"><RouterLink to="/fantasia">Fantasia</RouterLink></li>
           <li class="a"><RouterLink to="/terror">Terror</RouterLink></li>
           <li class="a"><RouterLink to="/suspense">Suspense</RouterLink></li>
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
.link3 li{
  margin: 14px;
}
.link{
  text-align: center;
  margin: 20px;
  font-size: larger;
}
hr{
  border: solid 2px black;
}
.a:hover, .a:active {
    font-size: 1.4rem;
    text-decoration: underline;
    }
.a{
    transition-property: font-size;
    transition-duration: 1s;
}
</style>
