<template>
<div class="bigSearch">
        <form class= "header" @submit.prevent="onSubmit">
            <input class = "v-search" 
                type="text" 
                v-model="searchValue"
                placeholder="Поиск по сайту"> 
        <button class = "button" @click = "$emit('search-book', searchValue)"> 
            <img class = "img" src='@/assets/search-icon.webp'>
        </button>
        <select class="select" v-model="sortKey" @click.prevent="onSort" @click = "$emit('sort-key', sortKey)">
            <option>Дата</option>
            <option>Автор</option>
            <option>Название</option>
        </select>
        </form>
</div>
</template>

<script>
export default {
    data() {
        return {
            searchValue: '',
            sortKey: ''
        }
    },
    methods:{
        onSubmit() {
            if (this.searchValue.trim()){
                const newBook = {
                    name: this.searchValue
                }
                this.$emit('search-book', newBook)
            }
        },
        onSort() {
            if (this.sortKey.trim()){
                const newSortKey = {
                    name: this.sortKey
                }
                this.$emit('sort-key', newSortKey)
            }
        }
    }
}
</script>

<style scoped>
* {box-sizing: border-box;}
    body{margin: 0;}
    div {padding: 30px 0}
    form {
        position: relative;
        width: 300px;
        margin: 0 auto;
    }
    .bigSearch {background: #A3D0C3;}
.v-search{
    width: 100%;
    height: 42px;
    padding-left: 10px;
    border: 2px solid #7BA7AB;
    border-radius: 5px;
    outline: none;
    background: #F9F0DA;
    color: #9E9C9C;
}
.button {
    position: absolute; 
    top: 0;
    right: 0px;
    width: 42px;
    height: 42px;
    border: none;
    background: #7BA7AB;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
}
.button:before {
    font-family: FontAwesome;
    font-size: 16px;
    color: #F9F0DA;
}
.img{
    width: 20px;
    height: 20px;
}
</style>