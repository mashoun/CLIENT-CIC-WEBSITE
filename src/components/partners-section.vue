<template>
  <section class="container" style="overflow-x: hidden !important">
    <div class="row g-5 justify-content-between">
      <div class="col-12">
        <aside>
          <h2 class="slab fs-2 text-color">Our Partners</h2>
          <p class="fs-small m-0 pop text-secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
            harum libero? Ea adipisci voluptate animi?
          </p>
        </aside>
      </div>
      <div class="col-6 col-lg-2" v-for="node in store.profile.partners" :key="node">
        <div class="ratio ratio-1x1 border border-5 border-warning rounded-circle">
          <img :src="node.thumbnail" :alt="node.id" class="object-fit-cover rounded-circle skeleton">
        </div>
      </div>
    </div>
  </section>
</template>
<script>

import { useStore } from "../stores/mainStore";
export default {
    setup() {
        const store = useStore();
        return { store };
    },
}
</script>