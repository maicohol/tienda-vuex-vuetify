<template>
    <v-card>
        <v-toolbar
        color="deep-purple"
        >
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
            <v-tabs>
                <v-tabs-slider color="white"></v-tabs-slider>
                <v-tab>
                    <nuxt-link to="/" class="white--text text-decoration-none mx-3 h-full">Home</nuxt-link>
                </v-tab>
                <v-tab>
                    <nuxt-link to="/carro" class="white--text text-decoration-none mx-3">Mi carro</nuxt-link>
                </v-tab>
                <v-tab>
                    <nuxt-link to="/perfil" class="white--text text-decoration-none mx-3">Perfil</nuxt-link>
                </v-tab>
            </v-tabs>
            <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
            </v-btn>
            <v-btn icon>
                <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
        </v-toolbar>
    </v-card>
</template>
