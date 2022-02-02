<template src="./index.html"></template>

<script>
export default {
    name: 'Tag',
    props: {
        outlined: {
            type: Boolean,
            default: false
        },
        contrast: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        classes () {
            return {
                'tag--outlined': this.outlined,
                'tag--contrast': this.contrast
            }
        }
    }
}
</script>

<style lang="scss" src="./index.scss"></style>
