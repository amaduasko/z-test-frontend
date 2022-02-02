import axios from 'axios'

const news = {
    // <-- initial -->
    state: {
        page: {
            total: 0,
            current: 1
        },
        list: []
    },

    getters: {},

    actions: {
        async fetchNewsByPage ({ commit }, isLastPage) {
            const response = await axios
                .get(
                    `https://my-json-server.typicode.com/bigfootdary/json-news/news${isLastPage ? '-last-page' : ''}`
                )
            commit('addNews', response.data)
        },
        async fetchFilteredNews ({ commit }, isFiltered) {
            const response = await axios
                .get(
                    `https://my-json-server.typicode.com/bigfootdary/json-news/news${isFiltered ? '-filtered' : ''}`
                )

            commit('addFilteredNews', response.data)
        }
    },

    mutations: {
        addNews (state, news) {
            state.list = [...state.list, ...news.list].filter(Boolean)
            state.page = news.page
        },
        addFilteredNews (state, news) {
            state.list = news.list
            state.page = news.page
        }
    }
}

export default news
