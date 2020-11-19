<template>
    <div class = "card">
        <img class="cover" v-if="book.volumeInfo.imageLinks" :src="book.volumeInfo.imageLinks.thumbnail"/>
        <div class = "info">
            <div class="title">
            <p>{{book.volumeInfo.title}}</p>
        </div>
        <div class="author" v-for="author in book.volumeInfo.authors" :key="author.id" >
            {{author}}
        </div>
        <router-link tag="button" class="button" :to="{name: 'book', params: {book: book}}">Посмотреть</router-link>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        book: {
            type: Object,
            required: true
        }
    },

}
</script>
<style scoped>
    .card{
        display: flex;
        flex-direction: column;
        margin-top: 20px;
        margin-right: 20px;
        border: 1px solid black;
        max-height: 400px;
        width: 25%;
    }
    .cover{
        margin-top: 10px;
        align-self: center;
        width: 150px;
        height: 200px;
    }
    
</style>