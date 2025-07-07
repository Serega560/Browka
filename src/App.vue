<script setup>
import Header from '@/components/Header.vue';
import Discount from '@/components/Discount.vue'
import Hero from '@/components/Hero.vue';
import About from '@/components/Services.vue';
import Reviews from '@/components/Reviews.vue';
import Work from '@/components/Work.vue'
import Map from '@/components/Map.vue'
import Footer from '@/components/Footer.vue'
import { ref, provide } from 'vue'
import Education from '@/components/Education.vue'

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
  <transition name="fade">
  <Discount :isOpen="showDiscountPopup" @close="closeDiscountPopup" />
  </transition>/
  <About />
  <Reviews />
  <Work />
  <Education />
  <Map />
  <Footer />
</template>

<style scoped>
</style>



