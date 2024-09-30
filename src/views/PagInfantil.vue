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
  <HeaderCompo title="infantil" />
  <main class="main d-flex flex-column flex-wrap">
    <div class="d-flex flex-column flex-wrap justify-content-around">
      <h3>Coleções</h3>
      <div class="d-flex flex-wrap flex-row">
        <div class="caixa2 d-flex flex-row flex-wrap bg-secondary">
          <RouterLink class="img1" to="/"><img src="../assets/l1.jpg" alt="" /></RouterLink>
          <RouterLink class="img1" to="/"><img src="../assets/l2.jpg" alt="" /></RouterLink>
          <RouterLink class="img1" to="/"><img src="../assets/l3.jpg" /></RouterLink>
        </div>
        <div class="caixa2 d-flex flex-row flex-wrap bg-secondary">
          <div class="d-flex flex-row flex-wrap bg-secondary">
            <img src="/src/assets/image 55.png" id="img5" />
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
        <div class="caixa d-flex flex-row flex-wrap bg-secondary">
          <div class="d-flex flex-row flex-wrap bg-secondary">
            <img src="/src/assets/l4.jpg" />
          </div>
        </div>
        <div class="caixa d-flex flex-row flex-wrap bg-secondary">
          <div class="d-flex flex-row flex-wrap bg-secondary">
            <img src="/src/assets/l5.jpg" />
          </div>
        </div>
        <div class="caixa d-flex flex-row flex-wrap bg-secondary">
          <div class="d-flex flex-row flex-wrap bg-secondary">
            <img src="/src/assets/l6.jpg" />
          </div>
        </div>
        <div class="caixa d-flex flex-row flex-wrap bg-secondary">
          <div class="d-flex flex-row flex-wrap bg-secondary">
            <img src="/src/assets/l7.jpg" />
          </div>
        </div>
      </div>
    </div>



      <div class="d-flex flex-wrap flex-row">
        <div class="caixa2 d-flex flex-row flex-wrap bg-secondary">
          <RouterLink class="img1" to="/"><img src="../assets/l8.jpg" alt="" /></RouterLink>
          <RouterLink class="img1" to="/"><img src="../assets/l9.jpg" alt="" /></RouterLink>
          <RouterLink class="img1" to="/"><img src="../assets/l10.jpg" /></RouterLink>
        </div>
        <div class="caixa2 d-flex flex-row flex-wrap bg-secondary">
          <div class="d-flex flex-row flex-wrap bg-secondary">
            <img src="/src/assets/l11.jpg" id="img5" />
          </div>
        </div>
    </div>
  </main>
</template>
 
 <style scoped>
li {
  padding: 20px;
}
.main {
  align-items: end;
}
.caixa {
  margin: 19px;
  padding: 30px;
}
.caixa2 {
  margin: 30px;
  padding: 20px 50px;
  align-items: center;
}
h3 {
  display: flex;
  justify-content: center;
  align-items: center;
}
.img {
  margin: 22px;
}
img {
  width: 205px;
  height: 170px;
  margin: 10px;
}
#img5{
  width: 275px;
  height: 300px;
  margin: 10px;
}
.img1 {
  width: 150px;
  height: 200px;
  margin: 40px;
}
.caixa3 {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 20px;
}
.caixa4 {
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 30px 70px;
}
.img2 {
  margin: 0px 10px 0px 200px;
}
.img5 img {
  width: 200px;

  height: 300px;
}
.main {
  padding: 20px;
}
.search-container {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}
.search-bar {
  width: 300px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.search-button {
  padding: 10px;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 10px;
}
.books-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
.book-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: transform 0.2s;
}
.book-card:hover {
  transform: scale(1.05);
}
.book-card img {
  width: 100px;
  height: 150px;
  object-fit: cover;
  border-radius: 5px;
}
.book-card p {
  margin-top: 10px;
  text-align: center;
}
.descricao-livro {
  margin-top: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
  width: 80%;
  text-align: center;
}
</style>