// state
export const state = () => ({
    
})

export const actions = {
    /**
     * Esta funcion se ejecuta al iniciarze la App
     * @param {*} vueContext 
     * @param {*} context 
     */
    async nuxtServerInit({dispatch}, context) {
        await dispatch('products/loadProducts');
    }
}