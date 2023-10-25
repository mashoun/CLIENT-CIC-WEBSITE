<template>
    <section class="container">
        <div class="row">
            <div class="col-12">
                <aside>
                    <h1 class="slab fs-1 text-primary">Team</h1>
                    <p class="pop text-secondary">At CIC, our administrative staff plays a pivotal role in ensuring the
                        success
                        and satisfaction of our students throughout their academic journey. We are
                        dedicated to offering comprehensive support in various aspects, such as
                        admissions, student orientation, academic guidance, and fulfilling graduation
                        requirements. The commitment of our administrative team lies in delivering
                        exceptional, student-centered service and creating enriching educational
                        opportunities. We understand that the college experience is not just about
                        attending classes but also about shaping a fulfilling and enjoyable time at CIC.</p>
                </aside>
            </div>
            <div class="col-12 col-lg-3" v-for="node in store.profile.team" :key="node">
                <div class="d-flex flex-column gap-3 p-3 bg-light rounded shadow-sm">
                    <div class="ratio ratio-16x9"><img :src="node.thumbnail" :alt="node.name"
                            class="object-fit-cover rounded"></div>
                    <div class="d-flex flex-column gap-1">
                        <h4 class="slab text-primary fs-4 text-fade-2 text-uppercase">{{ node.name }}</h4>
                        <b class="text-success pop text-fade-2">{{ node.position }}</b>
                        <p class="text-secondary pop text-fade-3">{{ node.description }}</p>
                    </div>

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