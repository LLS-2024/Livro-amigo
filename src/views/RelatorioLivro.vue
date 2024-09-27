<script setup>
import HeaderCompo from '@/components/HeaderCompo.vue';

</script>

<template>
  <HeaderCompo title="Relatório dos livros"/>
  <main>
    <div class="relatorio">
      <h2 class="one">Relatório de livros</h2>
      <br>

      <div class="usuario">
        Nome do Usuário: Luiza Escarban
      </div>

      <table class="tabela-livros">
        <tr>
          <th>Nome do Livro</th>
          <th>Data de Empréstimo</th>
          <th>Data de Vencimento</th>
        </tr>
        <tr>
          <td>O Pequeno Príncipe</td>
          <td>22/09/2024</td>
          <td>06/10/2024</td>
        </tr>
        <tr>
          <td>Harry Potter e a Pedra Filosofal</td>
          <td>15/09/2024</td>
          <td>29/09/2024</td>
        </tr>
      </table>

    </div>
  </main>
</template>

<style scoped>

/* Estilos para o layout e o formulário */
.perfil {
  display: flex;
  width: 40px;
  height: 60px;
}

main {
  display: flex;
  justify-content: center;
  min-height: 80vh;
  padding: 30px;
  margin: 30px;
  box-sizing: border-box;
}

main .relatorio {
  border: 3px solid black;
  width: 400px;
  padding: 20px;
  background-color: #f9f9f9;
}

label {
  margin: 10px 0;
  display: block;
}

input[type="text"] {
  width: 100%;
  padding: 5px;
  margin: 5px 0;
}

input[type="button"] {
  margin-top: 15px;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
}

input[type="button"]:hover {
  background-color: #0056b3;
}

.one {
  background-color: black;
  color: beige;
  padding: 10px;
  text-align: center;
}

nav {
  background-color: rgb(0, 0, 0);
  color: aliceblue;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  font-family: 'Titan One', sans-serif;
}

/* Estilos para a tabela */
.tabela-livros {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

.tabela-livros th, .tabela-livros td {
  border: 1px solid black;
  padding: 10px;
  text-align: left;
}

.tabela-livros th {
  background-color: #ddd;
}
nav{
    background-color: rgb(0, 0, 0);
    color: aliceblue;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    font-family: 'Titan One', sans-serif;
}
.container1{
            display: flex;  
  flex-direction: column;
  align-items: center;
        }

.usuario {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 15px;
}
</style>
