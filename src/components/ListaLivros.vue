<template>
    <div>
      <h2>Lista de Livros</h2>
      <div class="row">
        <div class="col-4" v-for="livro in livros" :key="livro.codigo">
          <div class="card mb-4">
            <img :src="livro.imagem" class="card-img-top" alt="Imagem do Livro" />
            <div class="card-body">
              <h5 class="card-title">{{ livro.genero }}</h5>
              <p class="card-text">Faixa Etária: {{ livro.faixaEtaria }}</p>
              <p class="card-text">Edição: {{ livro.edicao }}</p>
              <p class="card-text">Código: {{ livro.codigo }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
 

</script>


  