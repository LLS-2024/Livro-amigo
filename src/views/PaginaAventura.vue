<script setup>
import { ref } from 'vue'
import HeaderCompo from '@/components/HeaderCompo.vue'
const books = ref([
  { name: 'cores', img: new URL('../assets/l1.jpg', import.meta.url).href, description: 'é um livro infantil de André Neves sobre um porquinho de brinquedo chamado Lino que vive em uma loja de brinquedos. Sua melhor amiga, Lua, é uma coelhinha que acende uma luz na barriga quando gargalha. Quando Lua é comprada, Lino fica sozinho e a história aborda sua busca por novos amigos e consolo.'
  },
  {
    name: 'sonolenta',
    img: new URL('../assets/l2.jpg', import.meta.url).href,
    description: 'Descrição do Livro 2'
  },
  {
    name: 'curativo',
    img: new URL('../assets/l3.jpg', import.meta.url).href,
    description: 'Descrição do Livro 3'
  },
  {
    name: 'manu',
    img: new URL('../assets/l4.jpg', import.meta.url).href,
    description: 'Descrição do Livro 4'
  },
  {
    name: 'lino',
    img: new URL('../assets/l5.jpg', import.meta.url).href,
    description: 'Descrição do Livro 5'
  },
  {
    name: 'sementinha',
    img: new URL('../assets/l6.jpg', import.meta.url).href,
    description: 'Descrição do Livro 6'
  },
  {
    name: 'bolo chocolate',
    img: new URL('../assets/l9.jpg', import.meta.url).href,
    description: 'Descrição do Livro 7'
  },
  {
    name: 'malvina',
    img: new URL('../assets/l7.jpg', import.meta.url).href,
    description: 'Descrição do Livro 8'
  },
  {
    name: 'marcelo',
    img: new URL('../assets/l11.jpg', import.meta.url).href,
    description: 'Descrição do Livro 9'
  },
])

const selectedBook = ref(null)

const selectBook = (book) => {
  selectedBook.value = book
}

</script>
<template>
  <HeaderCompo title="Aventura"/>
   <main class="main d-flex flex-column flex-wrap ">
<lista-livros/>

<div class="caixa d-flex flex-row flex-wrap bg-secondary">
<div>

<RouterLink class="img3" to="/LivroResumo"><img src="../assets/img-aventura-2.jfif" alt=""></RouterLink>
<RouterLink class="img3" to="/LivroResumo"><img src="../assets/img-aventura-3.jfif" alt=""></RouterLink>
<RouterLink class="img3" to="/LivroResumo"><img src="../assets/img-aventura-4.jfif" alt=""></RouterLink>
<RouterLink class="img3" to="/LivroResumo"><img src="../assets/img-aventura-5.jfif" alt=""></RouterLink>
</div>
</div>
<div class="d-flex flex-column flex-wrap justify-content-around">
    
<h3>Coleções</h3>
<div class="d-flex flex-wrap flex-row">
    <div class="caixa2 d-flex flex-row flex-wrap bg-secondary">
<RouterLink class="img3" to="/LivroResumo"><img src="../assets/img-aventura-1.jfif" alt=""></RouterLink>
<RouterLink class="img3" to="/LivroResumo"><img src="../assets/img-aventura-2.jfif" alt=""></RouterLink>
<RouterLink class="img3" to="/LivroResumo"><img src="../assets/img-aventura-3.jfif" alt=""></RouterLink>
</div>



    <div class="caixa2 d-flex flex-row flex-wrap bg-secondary">
    <div class=" d-flex flex-row flex-wrap bg-secondary">
<RouterLink class="img3" to="/LivroResumo"><img src="/src/assets/aventura1 - Copia.jpg" alt=""></RouterLink>
<RouterLink class="img3" to="/LivroResumo"><img src="/src/assets/aventura-2 - Copia.jpg" alt=""></RouterLink>
<RouterLink class="img3" to="/LivroResumo/"><img src="/src/assets/aventura-3 - Copia.jpg" alt=""></RouterLink>
</div>
</div>
</div>
</div>

    <div class="caixa3 d-flex flex-row flex-wrap bg-secondary justify-content-around">
    <div class="caixa2 d-flex flex-row flex-wrap">
<RouterLink class="img3" to="/LivroResumo"><img src="../assets/img-aventura-1.jfif" alt=""></RouterLink>
<RouterLink class="img3" to="/LivroResumo"><img src="../assets/img-aventura-2.jfif" alt=""></RouterLink>
<RouterLink class="img3" to="/LivroResumo"><img src="../assets/img-aventura-3.jfif" alt=""></RouterLink>
</div>
<div class="img">
    <img src="/src/assets/imagem-avt.png" alt="">
</div>
</div>
<div class="caixa4 d-flex flex-row flex-wrap">
<div class="caixa4 d-flex flex-row flex-wrap bg-secondary">
<RouterLink class="img3" to="/LivroResumo"><img src="../assets/img-aventura-1.jfif" alt=""></RouterLink>
<RouterLink class="img3" to="/LivroResumo"><img src="../assets/img-aventura-2.jfif" alt=""></RouterLink>
<RouterLink class="img3" to="/LivroResumo"><img src="../assets/img-aventura-3.jfif" alt=""></RouterLink>
</div>
<div class="img2">
    <img src="/src/assets/imagem-avt.png" alt="">
</div>
</div>
<main class="main d-flex flex-column align-items-center">
    <div class="books-container d-flex flex-wrap justify-content-center">
      <div v-for="book in books" :key="book.name" class="book-card" @click="selectBook(book)">
        <img :src="book.img" :alt="book.name" />
        <p>{{ book.name }}</p>
      </div>
    </div>
    <div v-if="selectedBook" class="descricao-livro">
      <h5>{{ selectedBook.name }}</h5>
      <p>{{ selectedBook.description }}</p>
    </div>
  </main>
   </main>
</template>
<style scoped>
li{
    padding: 20px;
}
.main{
    align-items: center;
}
.caixa{
    margin: 10px;
    padding: 30px 100px;
}
.caixa2{
    margin: 8px 30px 15px 30px;
    padding: 20px 50px; 
    align-items: center;
}
h3{
    display: flex;
    justify-content: center;
    align-items: center;
}
.img{
    margin: 10px;
}
img{
    width:145px;
    height: 200px;
    transition: 1s;
}
.img3 img:hover{
    width:175px;
    height: 230px;
}
.caixa3{
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 20px;
}
.caixa4{
    display: flex;
    justify-content: end;
    align-items: center;
    padding: 30px 70px;
  
}
.img2{
    margin: 0px 10px 0px 200px;
}

</style>