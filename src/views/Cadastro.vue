<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
</script>

<template>
  <div class="caixa d-flex p-2 justify-content-center align-itens-center flex-row flex-wrap">
    <div class="p-2">
      <img src="../assets/foto-Cadastro.avif" alt="" />
    </div>

    <div class="Formulario p-2 justify-content-center flex-row flex-wrap">
      <div  class="titulo bg-dark text-white">
      <h1 >Cadastro</h1></div>
      <div class="form bg-secondary text-white">
        <form >
          <div>
            <label for="NomeCompleto">Insira seu nome completo:</label>
            <input type="text" id="NomeCompleto" placeholder="Insira seu nome..." required/>
          </div>
          <div>
            <label for="CPF">Insira seu CPF:</label>
            <input type="text" id="CPF" placeholder="123.456.789-10" required>
          </div>
          <div>
            <label for="tel">Insira seu telefone:</label>
            <input type="text" id="tel" placeholder="(47) 99999-9999">
          </div>
          <div>
            <h2>Classificações</h2>
            <input type="radio" name="Pai" id="pai">
            <label for="pai">Pai</label>
            <input type="radio" name="Pai" id="filho">
            <label for="filho">Filho</label>
          </div>
          <input type="submit" value="Cadastrar">
          <input type="submit" value="Entrar">
          <input type="submit" value="Apagar">
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
.form {
  margin: 0px 60px;
  padding: 30px 60px;
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
    margin: 30px 300px 0px 300px;
    padding: 10px;
}
</style>
