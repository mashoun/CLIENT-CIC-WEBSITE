<template>
    <section class="container" style="overflow-x: hidden !important;">
        <div class="row g-5">
            <div class="col-12">
                <aside>
                    <h2 class="slab fs-2 text-color">CIC Workshops</h2>
                    <p class="fs-small m-0 pop text-secondary">CIC stands out for its proficiency in organizing professional
                        workshops that empower individuals with valuable skills and
                        knowledge. Our workshops are meticulously designed to enhance
                        practical abilities, foster creativity, and promote a deeper
                        understanding of various subjects. Catering to diverse interests, our
                        expert facilitators lead engaging sessions that encourage active
                        participation, collaboration, and hands-on learning.
                        Participants in CIC&#39;s workshops gain access to cutting-edge industry
                        insights, innovative techniques, and effective strategies. These
                        workshops serve as a bridge between theoretical knowledge and
                        real-world applications, ensuring attendees leave with actionable
                        takeaways that positively impact their professional endeavors.
                        At CIC, we take pride in offering workshops that serve as catalysts
                        for personal and career growth. By attending our workshops,
                        individuals are equipped with the tools and skills necessary to excel
                        in their respective fields, making them valuable assets in today&#39;s
                        competitive workforce.</p>
                </aside>
            </div>
            <div class="col-12">
                <section style="overflow-x: hidden !important;">
                    <!-- Swiper -->
                    <div class="workshops-swiper">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide" v-for="node in store.profile.workshops" :key="node">
                                <section class="d-flex flex-column p-3 bg-grad-primary rounded shadow-sm pop">
                                    <div class="ratio ratio-16x9">
                                        <img :src="node.thumbnail" :alt="node.id" class="object-fit-cover rounded skeleton">
                                    </div>
                                    <div class="my-3">
                                        <h5 class="fs-5 text-warning slab">{{ node.title }}</h5>
                                        <p class="m-0 fs-smaller text-light text-fade-6">{{ node.description }}</p>
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
    mounted() {
        var swiper = new Swiper('.workshops-swiper', {
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
                1200: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                1400: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                }
            }
        });
    }
}
</script>