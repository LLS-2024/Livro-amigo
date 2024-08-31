<!-- eslint-disable vue/multi-word-component-names -->
<script setup></script>

<template>
   <div class="link2"><RouterLink to="/">Voltar ao Inicio</RouterLink></div>
  <footer class="tudo2 d-flex flex-row flex-wrap bg-dark text-white justify-content-around">
    <div>
      <div class="d-flex flex-column justify-content-between">
        <div class="cont1 d-flex flex-row flex-wrap "><i  class="mdi mdi-account-box"/><h3>Contatos</h3></div>
        <div>
          <ul>
        <li><a href="https://github.com/leiladasilva">Leila da Silva Souza</a></li>
        <li> <a href="https://github.com/Luizaescarban">Luiza Escarban da Silva</a></li>
        <li><a href="https://github.com/SarahLJesus">Sarah Letícia de Jesus</a></li></ul>
        </div></div>
      </div>
      <div class="d-flex flex-column flex-wrap justify-content-between">
        <div><h3 class="h3"><span style='font-size:15px;'>&#128214;</span> Livro Amigo</h3></div>
        <div class="icons ">
          <div><a href=""><i class="mdi mdi-instagram"/></a></div>
          <div><a href=""><i class="mdi mdi-facebook"/></a></div>
          <div><a href=""><i class="mdi mdi-whatsapp"/></a></div>
        </div>
      </div>
    
  </footer>
</template>
<style scoped>
.link2 {
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;

}
.icons{
  display: flex;
  flex-direction: row;
  padding: 12px;
  width: 20px;
  height: 20px;
}
i{
  margin: 12px;
}
h3{
  padding-top: 20px;
}
.link2:hover, .link2:active {
    font-size: 1.4rem;
    text-decoration: underline;
    }
.link2{
    transition-property: font-size;
    transition-duration: 1s;
}
.tudo2{
  padding: 40px;
}
.cont1{
  align-items: center;
}
.mdi{
  width: 20px;
  height: 20px;
}
</style>
