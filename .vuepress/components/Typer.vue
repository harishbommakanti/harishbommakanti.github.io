<template>
    <vue-typer text='Hello World! I was registered locally!'></vue-typer>
</template>

<script>
var VueTyper = require('vue-typer').VueTyper

console.log(VueTyper)

var myComponent = {
    components: {
        VueTyper
    }
}

Vue.component('vue-typer',VueTyper)

console.log(myComponent)
</script>