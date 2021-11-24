// State
export const state = () => ({
    _products: []
})

// Acciones 
export const actions = {
    async loadProducts({ commit }) {
        // obtener los productos
        let { data } = await this.$axios.get('https://fakestoreapi.com/products/category/electronics');
        
        console.log(data);
        
        // Realizar commit
        commit('setProducts', data);
    }
}

export const getters = {
    getProducts(state) {
        return state._products
    }
}

export const mutations = {
    setProducts(state, products) {
        state._products = products
    }
}