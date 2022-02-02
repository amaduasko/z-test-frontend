<template src="./index.html"></template>

<script>
export default {
    name: 'Button',
    props: {
        block: {
            type: Boolean,
            default: false
        },
        title: {
            type: String,
            default: ''
        },
        disabled: {
            type: Boolean,
            default: false
        },
        more: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        classes () {
            return {
                'button--block': this.block,
                'button--disabled': this.disabled,
                'button--more': this.more
            }
        }
    }
}
</script>
