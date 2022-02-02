<template src="./index.html"></template>

<script>
import { mapState } from 'vuex'
import { Breadcrumbs } from '../Breadcrumbs'

export default {
    name: 'Header',
    components: {
        Breadcrumbs
    },
    computed: {
        ...mapState(['app'])
    }
}
</script>
