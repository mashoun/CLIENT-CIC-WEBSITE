<template>
  <!--    hero section     -->
  <section class="container"  style="overflow-x: hidden !important;">
    <div class="row justify-content-between g-3">
      <div class="col-12 col-lg-6 order-2 order-lg-1">
        <aside class="d-flex flex-column gap-3 pop">
          <div class="d-flex gap-2 align-items-center">
            <!-- <img src="/logo.jpeg" alt="logo" width="100" class="object-fit-cover rounded-circle shadow-sm"> -->
            <h1 class="m-0 fs-2 text-color"><i>YOUR WORLD DELIVERED BY DISTANCE LEARNING</i></h1>
          </div>
          <p class="text-dark m-0">
            CIC stands as the pioneering private and independent institution, as
            well as a specialized center for educational services, offering
            online learning programs in Lebanon and the Arab world. It commenced
            its journey through an official agreement with the International
            American University in 2004, marking the inception of the Cultural
            International Center for Educational Management Services.
          </p>
          <div class="d-flex gap-3">
            <a :href="store.profile.contact.getStartedUrl" class="btn btn-outline-primary rounded-pill px-5">Get Started</a>
            <!-- <a href="" class="btn btn-outline-primary">Watch a video</a> -->
          </div>
        </aside>
      </div>
      <div class="col-12 col-lg-5 order-1 order-lg-2">
        <!-- Swiper -->
        <div class="swiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="node in store.profile.media" :key="node.id">
                <div class="ratio ratio-16x9">
                    <img :src="node.thumbnail" :alt="node.id" class="object-fit-cover rounded skeleton">
                </div>
            </div>
          </div>
          <!-- Add Pagination -->
          <div class="swiper-pagination my-3" style="position:static;"></div>
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
  mounted() {
    var swiper = new Swiper(".swiper", {
        spaceBetween: 10,
        grabCursor: true,
        pagination: {
            el: ".swiper-pagination",
            // dynamicBullets: true,
            clickable: true,
        },
        autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    });
  },
};
</script>
