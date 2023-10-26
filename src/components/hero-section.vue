<template>
  <!--    hero section     -->
  <section class="container" >
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
            <a :href="store.profile.contact.getStartedUrl" class="btn btn-outline-primary rounded-pill px-5">Apply now</a>
            <!-- <a href="" class="btn btn-outline-primary">Watch a video</a> -->
          </div>
        </aside>
      </div>
      <div class="col-12 col-lg-5 order-1 order-lg-2" style="overflow-x: hidden !important;">

        <!-- <div class="swiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="node in store.profile.media" :key="node.id">
              <div class="ratio ratio-16x9">
                <img :src="node.thumbnail" :alt="node.id" class="object-fit-cover rounded skeleton">
              </div>
            </div>
          </div>
          <div class="swiper-pagination my-3" style="position:static;"></div>
        </div> -->

        <swiper-container id="hero-swiper" init="false" navigation="true">
          <swiper-slide v-for="node in store.profile.media" :key="node.id" class="p-2">
            <div class="ratio ratio-16x9">
              <img :src="node.thumbnail" :alt="node.id" class="object-fit-cover rounded skeleton">
            </div>
          </swiper-slide>
          <!-- <div class="swiper-pagination position-static my-3"></div> -->

        </swiper-container>


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
    // var swiper = new Swiper('.hero-swiper', {
    //   spaceBetween: 20,
    //   grabCursor: true,
    //   pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true,
    //   },
    //   autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    //   },
    //   effect:"cards"
    // });
    const swiperEl = document.querySelector('#hero-swiper');

    // swiper parameters
    const swiperParams = {

      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      // pagination: {
      //   el: ".swiper-pagination",
      //   clickable: true,
      // },
      loop:true,
      // effect:"cards",
      spaceBetween:"10",
      grabCursor: true,
    };

    // now we need to assign all parameters to Swiper element
    Object.assign(swiperEl, swiperParams);

    // and now initialize it
    swiperEl.initialize();
    // swiperEl.setAttribute('navigation','true')
  },
};
</script>
