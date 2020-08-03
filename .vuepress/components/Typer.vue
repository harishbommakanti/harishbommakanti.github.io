<template>
    <vue-typer text='Hello World! I was registered locally!'></vue-typer>
</template>

<script>
var VueTyper = require('vue-typer').VueTyper

console.log(VueTyper)

export default {
    components: {
        VueTyper
    }
}
</script>