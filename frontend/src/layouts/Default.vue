<template>
    <div class='page-wrapper'>
        <Header />
        <main class='content'>
            <div class='container container--wide'>
                <slot />
            </div>
        </main>
        <Footer />
    </div>
</template>
<script>
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
export default {
    name: 'LayoutDefault',
    components: {
        Header,
        Footer
    }
}
</script>
