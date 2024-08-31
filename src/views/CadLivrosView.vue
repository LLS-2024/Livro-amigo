<template>
  <div class="d-flex flex-row flex-wrap justify-content-center">
    <div class="p-2"><img src="/src/assets/foto-Cadastro.avif" alt="" /></div>
    <div>
      <div class="Formulario p-2 justify-content-center flex-row flex-wrap">
        <div class="titulo bg-dark text-white">
          <h1>Cadastro</h1>
        </div>
        <div class="form bg-secondary text-white">
          <form>
            <div>
              <h2>Faixa etaria</h2>
              <div class="campo">
                <div>
                  <div>
                    <input type="radio" name="Adulto" id="adulto" />
                    <label for="adulto">Adulto</label>
                  </div>
                  <div>
                    <input type="radio" name="Infantil" id="infantil" />
                    <label for="infantil">Infantil</label>
                  </div>
                </div>
                <div>
                  <div>
                    <input type="radio" name="Adolescente" id="adolescente" />
                    <label for="adolescente">Adolescente</label>
                  </div>
                  <div>
                    <input type="radio" name="Infantojuvenil" id="infantojuvenil" />
                    <label for="infantojuvenil">Infanto Juvenil</label>
                  </div>
                </div>

              </div>
            </div>
            <div>
                <div><label for="Edicao">Edição:</label></div>
              
              <input type="text" id="Edicao" required />
            </div>
            <div>
                <div><label for="Genero">Gênero:</label></div>
              
              <input type="text" id="Genero"  required />
            </div>
            <div>
                <div><label for="Codigo">Código:</label></div>
              
              <input type="text" id="Codigo" />
            </div>

            <input type="submit" value="Limpar" />
            <input type="submit" value="Entrar" />
            <input type="submit" value="Cadastrar" />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.campo {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.caixa {
  padding: 50px;
}
.Formulario {
  align-items: center;
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
  height: max-content;
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
  margin: 100px 300px 0px 200px;
  padding: 10px;
}
</style>
