<script setup>
</script>
<template>

<header class="bg-secondary container1 ">
        <h3> <span style='font-size:70px;'>&#128209;</span>relatorio de livros</h3>
       
   
    </header>
 <nav>
          <div><p>terror</p></div> 
          <div><p>romance</p></div>
          <div><p>aventura</p></div> 
          <div><p>comedia</p></div>
          <div><p>suspense</p></div> 
          <div><p>fantasia</p></div>
        </nav>

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

.perfil{
   display: flex;
   width: 40px;
   height: 60px;
}
main{
  display: flex;
  justify-content: center;
  min-height: 80vh;
  padding: 30px;           
  margin: 30px;            
  box-sizing: border-box; }
main .relatorio{
  border: 3px solid black; 
width: 400px;
height: 500px;
}
label{
  margin: 10px;
}
.one{
    background-color: black;
    color: beige;
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

</style>