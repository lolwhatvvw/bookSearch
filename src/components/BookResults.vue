<template>
<form>

<div class="book-results">
    <div class="DisplayBooks">
        <BookItems
        v-for="book in books" :key="book.id"
        v-bind:book="book"
        />
        </div>
</div>
</form>
</template>

<script>
import BookItems from './BookItems'
export default {
    props: ['books'],
    components:{
        BookItems
    },
    beforeDestroy() {
        sessionStorage.setItem("books", JSON.stringify(this.books))
        console.log(this.sKey)
    },
}
</script>



<style scoped>
    .DisplayBooks{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        padding: 50px;
    }
</style>