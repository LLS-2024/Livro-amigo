<script setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';

const dados = reactive({
  NumCad: '',
  Senha: ''
});

const router = useRouter();

function salvar() {

  if(dados.NumCad === '87654321' && dados.Senha === '654321'){
    router.push('/paginagerenciamento')
  }

  else if (!dados.NumCad || dados.NumCad.length < 8) {
    return alert('Número de cadastro inválido. Deve conter pelo menos 8 caracteres.');
  }

  else if (!dados.Senha || dados.Senha.length < 6) {
    return alert('Senha inválida. Deve conter pelo menos 6 caracteres.');
  }

  else if (dados.NumCad === '12345678' || dados.Senha === '123456') {
    router.push('/paginainicial');
  }
  else{
     alert(`Cadastro inexistente. Verifique o número de cadastro e a senha.`);
  }
 
  
}
</script>

<template>
  <div class="caixa d-flex p-2 justify-content-center align-items-center flex-row flex-wrap">
    <div class="p-2">
      <img src="../assets/foto-Cadastro.avif" alt="Cadastro" />
    </div>

    <div class="Formulario p-2 justify-content-center flex-row flex-wrap align-items-center">
      <div class="titulo bg-dark text-white">
        <h1>Login</h1>
      </div>
      <div class="form bg-secondary text-white">
        <form @submit.prevent="salvar" class="d-flex flex-column justify-content-center flex-row flex-wrap">
          <div>
            <label for="NumCad">Insira seu número de cadastro:</label>
            <input type="text" id="NumCad" v-model="dados.NumCad" placeholder="Insira seu cadastro..." minlength="8" required />
          </div>
          <div>
            <label for="Senha">Insira a senha:</label>
            <input type="password" id="Senha" v-model="dados.Senha" placeholder="********" minlength="6" required />
          </div>
          <div class="d-flex mt-5 flex-row align-items-center justify-content-center">
            <button class="botão" type="submit">Entrar</button>
            <button class="botão" type="reset">Limpar</button>
          </div>
        </form>
        <div class="d-flex flex-row justify-content-between">
          <div class="cadd"><RouterLink class="cadastro" to="/cadastro">Cadastre-se</RouterLink> aqui</div>
          <div><RouterLink class="cadastro" to="/logingerente">Sou gerenciador</RouterLink></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.caixa {
  padding: 50px;
}
.Formulario {
  align-items: center;
}
.cadd {
  font-size: 0.8rem;
  margin-top: 10px;
}
.botão {
  background-color: white;
  color: black;
  padding: 5px 10px;
  margin-right: 15px;
  border-radius: 10px;
  border: 1px;
  transition: 0.7s;
}
.botão:hover {
  background-color: black;
  color: white;
}
.cadastro {
  font-size: 0.8rem;
  transition: 1s;
}
.cadastro:hover {
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
.p-2 {
  padding: 20px 0px;
}
img {
  width: auto;
  height: 500px;
}
input {
  margin: 10px;
}
h1 {
  font-size: x-large;
}
h2 {
  font-size: large;
}
.titulo {
  margin: 0px 300px 0px 200px;
  padding: 10px;
}
.cad {
  background-color: rgb(204, 204, 204);
  color: black;
  padding: 5px;
}
</style>
