<script setup>
</script>
<template>

<header class="bg-secondary container1 ">
        <h3> <span style='font-size:70px;'>&#128209;</span>descriçaõ</h3>
       
   
    </header>
 <nav>
          <div>terror</div> 
          <div>romance</div>
          <div>aventura</div> 
          <div>comedia</div>
          <div>suspense</div> 
          <div>fantasia</div>
        </nav>

<main>
    <div class="relatorio">
        <h2 class="one">Descrição</h2>
        <br>
        <div> <p> essa seria a descrição e
          epois de anos sendo escravizados pelas fadas, os humanos conseguiram se libertar e coexistem com os seres místicos. Cerca de cinco séculos após a guerra que definiu o futuro das espécies, Feyre, filha de um casal de mercadores, é forçada a se tornar uma caçadora para ajudar a família. Após matar um féerico transformada em lobo, uma criatura bestial surge exigindo uma reparação.

Arrastada para uma terra mágica e traiçoeira 
        </p> <span style='font-size:25px;'>&#127775;</span>
        <span style='font-size:25px;'>&#127775;</span>
        <span style='font-size:25px;'>&#127775;</span></div>
    
      
          <div class="two"><img src="../assets/certo.jpg" class="img1"></div>
        
     
   

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
             
  box-sizing: border-box; }
main .relatorio{
  border: 3px solid black; 
width: 800px;
height: 500px;
display: grid;
grid-template-columns: 1fr 1fr ;

}
label{
  margin: 10px;
}
.one{
    background-color: black;
    color: beige;
    margin: 1px;
    
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
.img1{
  height: 350px;
  width: 350px;
  margin: 10px;
}

p{
   margin: 30px;
}
span{
  margin: 7px;
  padding: 1px;
}

</style>