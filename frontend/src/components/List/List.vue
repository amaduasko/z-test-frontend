<template src="./index.html"></template>

<script>
import Card from '../Card'
import Button from '../Button'
import Input from '../Input'
import { mapState } from 'vuex'

export default {
    name: 'list',
    components: {
        Card,
        Button,
        Input
    },
    computed: {
        ...mapState(['news', 'app'])
    },
    methods: {
        loadMore () {
            this.$store.dispatch('fetchNewsByPage', true)
        },
        filterNews (filter) {
            this.$store.dispatch('fetchFilteredNews', filter)
        }
    },
    mounted () {
        this.$store.dispatch('fetchNewsByPage')
    }
}
</script>

<style lang="scss" src="./index.scss"></style>
