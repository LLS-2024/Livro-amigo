<!-- eslint-disable vue/multi-word-component-names -->
<script setup></script>
<template>
  <div class="d-flex flex-column flex-wrap bg-secondary text-white" >
    <div class="d-flex flex-row flex-wrap justify-content-around">
      <div class="contato">
        <h1>Redes Sociais</h1>
        <div class="montagem">
            <div class="i"><i class="mdi mdi-instagram"/></div>
            <div class="link"><a href="">@livroamigo_</a></div>
        </div>
        <div class="montagem">
            <div class="i"><i class="mdi mdi-facebook"/></div>
            <div class="link"><a href="">Livro Amigo</a></div>
        </div>
        <div class="montagem">
            <div class="i"><i class="mdi mdi-email-box"/></div>
            <div class="link"><a href="">livroamigo@gmail.com</a></div>
        </div>
        <div class="montagem">
            <div class="i"><i class="mdi mdi-phone-classic"/></div>
            <div class="link"><p>(47) 9999-9999</p></div>
        </div>
      </div>
      <div class="rapidos">
        <h1>Links Rápidos</h1>
        <ul>
        <li><a href="/src/views/PaginaInicialView.vue">Início</a></li>
        <li><a href="/src/views/CategoriasView.vue">Categorias</a></li>
        <li><a href="/src/views/CarrinhoView.vue">Carrinho</a></li>
        <li><a href="/src/views/PerfilView.vue">Perfil</a></li>
        </ul>
      </div>
      <div class="desenvolvedores">
        <h1>Contato</h1>
        <ul>
        <li><a href="https://github.com/leiladasilva">Leila da Silva Souza</a></li>
        <li> <a href="https://github.com/Luizaescarban">Luiza Escarban da Silva</a></li>
        <li><a href="https://github.com/SarahLJesus">Sarah Letícia de Jesus</a></li></ul>
      </div>
    </div>
    <div class="copy"><p>Copyright © 2024. Livro Amigo. Todos os direitos reservados.</p></div>
  </div>
</template>

<style scoped>
.d-flex{
  padding: 10px 10px 0px 10px;
}
.contato, .rapidos, .desenvolvedores{
  display: flex;  
  flex-direction: column;
  align-items: center;
}
.montagem{
  display: flex;
  flex-direction: row;
}
.i{
  display: flex;
    margin: 0px 6px 0px 0px;
}
.copy{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
}
</style>
