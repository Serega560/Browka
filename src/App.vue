<script setup>
import Header from '@/components/Header.vue';
import Discount from '@/components/Discount.vue'
import Hero from '@/components/Hero.vue';
import About from '@/components/Services.vue';
import Reviews from '@/components/Reviews.vue';
import Work from '@/components/Work.vue'
import Video from '@/components/Video.vue'
import Map from '@/components/Map.vue'
import Footer from '@/components/Footer.vue'
import CacheManager from '@/components/CacheManager.vue'
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
  <transition name="fade">
  <Discount :isOpen="showDiscountPopup" @close="closeDiscountPopup" />
  </transition>
  <About />
  <Reviews />
  <Work />
  <Video />
  <Map />
  <Footer />
  <CacheManager />
</template>

<style scoped>
</style>



