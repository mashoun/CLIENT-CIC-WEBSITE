<template>
  <navbar></navbar>
  <main class="my-3 my-lg-5">
    <router-view></router-view>
  </main>
  <footer id="contact" class="mt-5 py-5">
    <contact></contact>
  </footer>
</template>
<script>
import navbar from './components/navbar.vue'
import contact from './components/contact.vue'
export default {
    components:{navbar,contact}
}
</script>
