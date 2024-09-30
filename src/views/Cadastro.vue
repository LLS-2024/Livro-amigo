
<script setup>
import { ref } from 'vue';

const nomeCompleto = ref('');
const cpf = ref('');
const telefone = ref('');
const classificacao = ref('');

const handleCadastro = () => {
  alert('Cadastro concluído!');
  handleLimpar(); 
}

const handleLimpar = () => {
  nomeCompleto.value = '';
  cpf.value = '';
  telefone.value = '';
  classificacao.value = '';
}
</script>

<template>
  <div class="caixa d-flex p-2 justify-content-center align-items-center flex-row flex-wrap">
    <div class="p-2">
      <img src="../assets/foto-Cadastro.avif" alt="" />
    </div>

    <div class="Formulario p-2 justify-content-center flex-row flex-wrap">
      <div class="titulo bg-dark text-white">
        <h1>Cadastro</h1>
      </div>
      <div class="form bg-secondary text-white">
        <form @submit.prevent="handleCadastro">
          <div>
            <label for="NomeCompleto">Insira seu nome completo:</label>
            <input v-model="nomeCompleto" type="text" id="NomeCompleto" placeholder="Insira seu nome..." required />
          </div>
          <div>
            <label for="CPF">Insira seu CPF:</label>
            <input v-model="cpf" type="text" id="CPF" placeholder="123.456.789-10" required>
          </div>
          <div>
            <label for="tel">Insira seu telefone:</label>
            <input v-model="telefone" type="text" id="tel" placeholder="(47) 99999-9999">
          </div>
          <div>
            <h2>Classificações</h2>
            <input v-model="classificacao" type="radio" name="Pai" id="pai" value="Pai">
            <label for="pai">Pai</label>
            <input v-model="classificacao" type="radio" name="Pai" id="filho" value="Filho">
            <label for="filho">Filho</label>
          </div>
          <div class="mt-5">
            <button type="submit" class="botão">Cadastrar</button>
            <button type="button" @click="handleLimpar" class="botão">Limpar</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>


<style scoped>
.caixa {
  padding: 50px;
}
.Formulario{
    align-items: center;
}
.cadd{
  font-size: 0.8rem;
  margin-top: 10px;
}
.botão{
  background-color: white;
  color: black;
  padding: 5px 10px;
  margin-right: 15px;
  border-radius: 10px;
  border: 1px ;
  transition: 0.7s;
}
.botão:hover{
  background-color: black;
  color: white;
  
}
.cadastro{
font-size: 0.8rem;
transition: 1s;

}
.cadastro:hover{
  font-size: 0.9rem;
  text-decoration: underline;
}
.form {
  margin: 0px 60px 0px 0px;
  padding: 30px 60px 30px 60px;
}
.p {
  margin: 30px;
}
.p-2{
    padding: 20px 0px;
}
img {
  width: auto;
  height: max-content;
}
input{
 margin: 10px; 
  
}
h1{
    font-size:x-large;
}
h2{
    font-size: large;
}
.titulo{
    margin: 0px 300px 0px 200px;
    padding: 10px;
}

</style>