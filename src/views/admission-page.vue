<template>
    <section class="w-100 py-5 px-3 my-5">
        <section class="container">
            <div class="row g-5 justify-content-between">
                <div class="col-12 col-lg-6">
                    <section class="d-flex flex-column gap-3  text-light">
                        
                        <img src="/logo.jpeg" alt="logo" width="100" height="100" class="object-fit-cover rounded-circle shadow-sm">
                        <h1 class="slab fs-1 text-primary">Admission</h1>
                        <p class="pop text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus aperiam, rem ullam, odio exercitationem commodi doloremque illo quod ducimus, placeat amet nesciunt eos enim dolorum temporibus perspiciatis blanditiis! Qui, consequatur.</p>
                        <div class="d-flex gap-2 slab">
                            <a href="" class="btn btn-warning rounded-pill px-3">Apply now</a>
                            <a href="" class="btn btn-outline-secondary rounded-pill  px-3">Learn more</a>
                        </div>
                    </section>
                </div>
                
                <div class="col-12 col-lg-5">
                    <div class="ratio ratio-4x3">
                        <img src="https://picsum.photos/1920/1080" alt="banner" class="object-fit-cover rounded">
                    </div>
                </div>
            </div>
        </section>

    </section>
</template>

<script>
import admissionSection from '../components/admission-section.vue'

export default {
    components:{admissionSection}
}
</script>
