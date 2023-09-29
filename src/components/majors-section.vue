<template>
    <section class="container"  style="overflow-x: hidden !important;">
        <div class="row g-5">
            <div class="col-12">
                <aside>
                    <h2 class="slab fs-2 text-color">IAU Programs</h2>
                    <p class="fs-small m-0 pop text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, harum libero? Ea adipisci voluptate animi?</p>
                </aside>
            </div>
            <div class="col-12">
                <section style="overflow-x: hidden !important;">
                    <!-- Swiper -->
                    <div class="majors-swiper">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide" v-for="node in store.profile.majors" :key="node">
                                <section class="d-flex flex-column p-3 bg-grad-primary rounded border shadow-sm pop">
                                    <div class="ratio ratio-16x9">
                                        <img :src="node.thumbnail" :alt="node.id" class="object-fit-cover rounded skeleton">
                                    </div>
                                    <div class="my-3">
                                        <h5 class="fs-5 slab text-warning">{{node.title}}</h5>
                                        <p class="m-0 fs-smaller text-light">{{node.description}}</p>
                                    </div>
                                    <a :href="node.link" class="btn btn-sm btn-outline-light">Learn more</a>
                                
                                </section>
                            </div>
                        </div>
                        <!-- Add Pagination -->
                        <div class="swiper-pagination position-static my-3"></div>
                    </div>
                </section>
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
    mounted(){
        var swiper = new Swiper('.majors-swiper', {
        slidesPerView: 1,
            spaceBetween: 20,
            grabCursor: true,
            // init: false,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                992: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1200:{
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                1400:{
                  slidesPerView: 4,
                  spaceBetween: 20,
                }
            }
        });
    }
}
</script>