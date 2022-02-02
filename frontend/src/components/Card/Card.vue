<template src="./index.html"></template>

<script>
import { Tag } from '../Tag'
export default {
    name: 'Card',
    components: {
        Tag
    },
    props: {
        title: {
            type: String,
            default: ''
        },
        main: {
            type: Boolean,
            default: false
        },
        tags: {
            type: [Array, String],
            default: () => []
        },
        date: {
            type: String,
            default: ''
        },
        url: {
            type: String,
            default: ''
        },
        image: {
            type: String,
            default: ''
        }
    },
    computed: {
        classes () {
            return {
                'card--main': this.main
            }
        },
        formattedTags: ({tags}) => tags && Array.isArray(tags) ? tags : [],
        formattedDate: ({ date }) => {
            let fDate = new Date(date)
            let day = ('0' + (fDate.getDate())).slice(-2)
            let month = ('0' + (fDate.getMonth() + 1)).slice(-2)
            return `${day}.${month}.${fDate.getFullYear()}`
        }
    }
}
</script>

<style lang="scss" src="./index.scss"></style>
