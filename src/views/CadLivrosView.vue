<template>
  <div>
    <h2>Cadastro de Livro</h2>
    <form @submit.prevent="cadastrarLivro">
      <div class="mb-3">
        <label for="faixaEtaria" class="form-label">Faixa Etária</label>
        <input type="text" v-model="livro.faixaEtaria" class="form-control" id="faixaEtaria" required>
      </div>
      <div class="mb-3">
        <label for="genero" class="form-label">Gênero Literário</label>
        <input type="text" v-model="livro.genero" class="form-control" id="genero" required>
      </div>
      <div class="mb-3">
        <label for="edicao" class="form-label">Edição</label>
        <input type="text" v-model="livro.edicao" class="form-control" id="edicao" required>
      </div>
      <div class="mb-3">
        <label for="codigo" class="form-label">Código do Livro</label>
        <input type="text" v-model="livro.codigo" class="form-control" id="codigo" required>
      </div>
      <div class="mb-3">
        <label for="imagem" class="form-label">URL da Imagem</label>
        <input type="text" v-model="livro.imagem" class="form-control" id="imagem" required>
      </div>
      <button type="submit" class="btn btn-primary">Cadastrar Livro</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      livro: {
        faixaEtaria: '',
        genero: '',
        edicao: '',
        codigo: '',
        imagem: ''
      }
    };
  },
  methods: {
    cadastrarLivro() {
      this.$emit('livro-cadastrado', { ...this.livro });
      this.livro = { faixaEtaria: '', genero: '', edicao: '', codigo: '', imagem: '' };
      alert('Livro cadastrado com sucesso!');
    }
  }
};
</script>
