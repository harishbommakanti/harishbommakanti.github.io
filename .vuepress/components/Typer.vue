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

console.log(VueTyper)
export default {
  // ...
  components: {
    // ES6; property shorthand + Vue should automatically dasherize the key for us
    VueTyper
    }
}
</script>