<template>
    <section class="container d-flex flex-column gap-5">
        <div class="row">
            <div class="col-12">
                <aside>
                    <h1 class="slab fs-1 text-primary">Events</h1>
                    <p class="pop text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus
                        aperiam, rem ullam, odio exercitationem commodi doloremque illo quod ducimus, placeat amet nesciunt
                        eos enim dolorum temporibus perspiciatis blanditiis! Qui, consequatur.</p>
                </aside>
            </div>
        </div>
        <div v-for="node in store.profile.events" :key="node"  class="row g-3">
            <div class="col-12 col-lg-8">
                <aside class="ratio ratio-16x9 bg-secondary rounded">
                    <iframe class="shadow-sm rounded" :src="`https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;${store.extractCanvaID(node.embed)}&#x2F;view?embed`" frameborder="0" allow="fullscreen"></iframe>
                </aside>
            </div>
            <div class="col-12 col-lg-4">
                <aside class="">
                    <h1 class="slab">{{ node.title }}</h1>
                    <p class="pop text-secondary">{{ node.description }}</p>

                </aside>
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