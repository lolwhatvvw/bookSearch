<template>
    <div>
        <img class="cover" v-if="book.volumeInfo.imageLinks" :src="book.volumeInfo.imageLinks.thumbnail"/>
        <p>{{book.volumeInfo.title}}</p>
        <div class="author" v-for="author in book.volumeInfo.authors" :key="author.id" >
            {{author}}
        </div>
        <p>{{book.volumeInfo.description}}</p>
        <button type="button" @click="$router.push('/')">Back</button>
    </div>
</template>

<script>
export default {
    name: 'BookPage',
    props: ['book'],
}
</script>