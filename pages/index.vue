<template>
  <v-row>
    <v-col v-for="product in products" :key="product.id"
    class="d-flex child-flex"
    cols="4"
    >
      <v-card to="/carro"
      class="my-12 mx-auto"
      max-width="374"
      >
        <v-img
        height="300"
        aspect-ratio="16/9"
        :src="product.image"
        contain
        > 
        </v-img>
        <v-card-subtitle class="font-weight-bold black--text">{{ product.title }}</v-card-subtitle>
        <v-card height="100" class="overflow-hidden" elevation="0">
          <v-card-text>
            {{ product.description }}
          </v-card-text>
        </v-card>
        <v-divider class="mx-4"></v-divider>
        <v-card-text class="font-weight-bold black--text">
          <span>$ {{ product.price }}</span>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  computed: {
    products() {
      return this.$store.getters['products/getProducts']
    }
  }
}
</script>