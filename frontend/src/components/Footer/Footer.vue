<template src="./index.html"></template>

<script>
import { mapState } from 'vuex'
import { Icon } from '../Icon'

export default {
    name: 'Footer',
    components: {
        Icon
    },
    computed: {
        ...mapState(['app'])
    }
}
</script>
