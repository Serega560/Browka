<script setup>
import Header from '@/components/Header.vue';
import Hero from '@/components/Hero.vue';
import About from '@/components/About.vue';
import Reviews from '@/components/Reviews.vue';
import Footer from '@/components/Footer.vue'
import Map from '@/components/Map.vue'
import Discount from '@/components/Discount.vue'
import { ref, provide } from 'vue'

const showDiscountPopup = ref(false)

const openDiscountPopup = () => {
  showDiscountPopup.value = true
}
const closeDiscountPopup = () => {
  showDiscountPopup.value = false
}

provide('openDiscountPopup', openDiscountPopup)

</script>

<template>
  <Header />
  <Hero />
  <Discount v-if="showDiscountPopup" @close="closeDiscountPopup" />
  <About />
  <Reviews />
  <Map />
  <Footer />
</template>

<style scoped>
</style>



