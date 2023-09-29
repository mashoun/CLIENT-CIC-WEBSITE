<template>
  <section v-if="spinner" class="w-100 h-100 position-fixed top-0 start-0 z-3 bg-glass d-flex justify-content-center align-items-center">
    <span class="spinner-grow spinner-grow-sm"></span>
  </section>
  <navbar></navbar>
  <main class="my-3 my-lg-5">
    <router-view></router-view>
  </main>
  <footer id="contact" class="mt-5 py-4">
    <footer-section></footer-section>
  </footer>
</template>
<script>

import { useStore } from "./stores/mainStore";
import navbar from './components/navbar.vue'
import footerSection from './components/footer-section.vue'
export default {
    setup() {
        const store = useStore();
        return { store };
    },
    components:{navbar,footerSection},
    data(){
      return{
        spinner:false
      }
    },
    mounted(){
      
      this.spinner = true
      fetch(this.store.getApi() + '?getProfile=1').then(res => res.json()).then(res => {
        console.log(res);
        this.spinner = false
        this.store.profile = res
        
        
      })
      .catch(err => {
        alert('Weak network')
        this.spinner = false
        location.reload()
      })
    }
}
</script>
