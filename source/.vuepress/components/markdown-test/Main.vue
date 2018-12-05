<template>
    <h3>{{ title }}</h3>
</template>

<script>
    export default {
        name: 'Main',
        data () {
            return {
                title: 'This is a Vue component'
            }
        }
    }
</script>

<style lang="stylus" scoped>
h3
    color #f66
</style>
