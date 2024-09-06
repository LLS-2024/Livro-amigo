<script setup>
</script>
<template>
    <header class="container">
    <div class="perfil">
        <img src="../assets/ftperfil.png">
    </div>
</header>
<header class="dois"></header>
<main>
    <div class="relatorio">
        <h2 class="one">Relatório de livros</h2>
        <br>
        <form>
            <label>Livro:</label>
            <input
          type="text"
          placeholder="Digite o nome do livro"
          required
        />
        <p></p>
        <label>Descrição:</label>
        <input
          type="text"
          placeholder="Descreva o livro"
          required
        />
        </form>
        <input type="button" onclick="alert('Cadastrado com sucesso!')" value="Clique aqui para prosseguir!">
    </div>
</main>

</template>
<style scoped>
.container {
width: 100%;
  background-color: rgb(77, 77, 77);
  height: 100px;
  padding: 40px;
  border-bottom: 20px black;
  
}
.perfil{
   display: flex;
   width: 40px;
   height: 60px;
}
main{
  display: flex;
  justify-content: center;
  min-height: 80vh;
  border: 1px solid black; 
  padding: 10px;           
  margin: 10px;            
  box-sizing: border-box;  
}
.one{
    background-color: black;
    color: beige;
}

</style>