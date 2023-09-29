<template>
<section class="container" style="overflow-x: hidden !important;">
    <div class="row g-3 justify-content-between">
        <div class="col-12 col-lg-6">
            <aside class="fc-100 d-flex flex-column gap-1 pt-5">
                <div class="sans">
                    <h5 class="fs-5 text-warning slab ls-1">Cultural International Center</h5>
                    <p class="text-light opacity-50 fs-smaller mono text-fade2" >CIC stands as the pioneering private and independent institution, as well as a specialized center for educational services, offering online learning programs in Lebanon and the Arab world.</p>
                </div>
                <nav class="d-flex flex-column text-light">
                    
                    <a href="/" class="d-flex align-items-center gap-2">
                        <span class="material-symbols-outlined text-warning" style="font-size: 1.2rem !important;">link</span>
                        <span class="opacity-75">Home Page</span>
                    </a>
                    
                    <a :href="store.profile.contact.getStartedUrl" class="d-flex align-items-center gap-2">
                        <span class="material-symbols-outlined text-warning" style="font-size: 1.2rem !important;">link</span>
                        <span class="opacity-75">Apply now</span>
                    </a>
                    <a href="/programs" class="d-flex align-items-center gap-2">
                        <span class="material-symbols-outlined text-warning" style="font-size: 1.2rem !important;">link</span>
                        <span class="opacity-75">IAU Programs</span>
                    </a>
                    <a href="/admission" class="d-flex align-items-center gap-2">
                        <span class="material-symbols-outlined text-warning" style="font-size: 1.2rem !important;">link</span>
                        <span class="opacity-75">Admission</span>
                    </a>
                    <a href="/fees" class="d-flex align-items-center gap-2">
                        <span class="material-symbols-outlined text-warning" style="font-size: 1.2rem !important;">link</span>
                        <span class="opacity-75">Fees</span>
                    </a>
                    <!-- <a href="https://developers.google.com/community/devfest" class="d-flex align-items-center gap-2">
                        <span class="material-symbols-outlined text-warning" style="font-size: 1.2rem !important;">link</span>
                        <span class="opacity-75">Admission</span>
                    </a>
                    <a href="https://policies.google.com/privacy" class="d-flex align-items-center gap-2">
                        <span class="material-symbols-outlined text-warning" style="font-size: 1.2rem !important;">link</span>
                        <span class="opacity-75">Fees</span>
                    </a> -->
                </nav>
            </aside>
        </div>

        <div class="col-12 col-lg-3">
            <aside class="fc-100 d-flex flex-column gap-1 pt-5">
                <div class="sans">
                    <h5 class="fs-5 text-warning slab ls-1">Private Tutoring</h5>
                    <p class="text-secondary fs-smaller mono text-fade2 text-light opacity-50">Discover the heart of our community through our diverse range of programs.</p>
                </div>
                <nav class="d-flex flex-column  text-light">
                    <a href="https://forms.gle/eErvVwcdDziBFo3y5" class="d-flex align-items-center gap-2">
                        <span class="material-symbols-outlined text-warning" style="font-size: 1.2rem !important;">link</span>
                        <span class="opacity-75">Student's Application</span>
                    </a>
                    <a href="https://forms.gle/Eea2vKdfLSfGsjWMA" class="d-flex align-items-center gap-2">
                        <span class="material-symbols-outlined text-warning" style="font-size: 1.2rem !important;">link</span>
                        <span class="opacity-75">Teacher's Application</span>
                    </a>
                    <a href="/workshops" class="d-flex align-items-center gap-2">
                        <span class="material-symbols-outlined text-warning" style="font-size: 1.2rem !important;">link</span>
                        <span class="opacity-75">Our Workshops</span>
                    </a>
                    <a href="https://drive.google.com/drive/folders/1Ve_mNpDX-a6-lazGCCh6pJLIobNR7IV6?usp=sharing" class="d-flex align-items-center gap-2">
                        <span class="material-symbols-outlined text-warning" style="font-size: 1.2rem !important;">link</span>
                        <span class="opacity-75">Our Events</span>
                    </a>
                    <a href="/partners" class="d-flex align-items-center gap-2">
                        <span class="material-symbols-outlined text-warning" style="font-size: 1.2rem !important;">link</span>
                        <span class="opacity-75">Our Partners</span>
                    </a>
                </nav>
            </aside>
        </div>

        <div class="col-12 col-lg-3">
            <aside class="fc-100 d-flex flex-column gap-1 pt-5">
                <div class="sans">
                    <h5 class="fs-5 text-warning slab ls-1">Contact us</h5>
                    <p class="mono text-secondary fs-smaller text-fade2 text-light opacity-50">Navigate the tech landscape seamlessly with our curated list of useful links.</p>
                </div>
                <nav class="d-flex flex-column text-light gap-2">
                    <!-- <a v-for="link in store.profile.links" :key="link" :href="link.url" class="d-flex align-items-center gap-2">
                        <span class="material-symbols-outlined text-warning" style="font-size: 1.2rem !important;">link</span>
                        <span class="opacity-75">{{link.text}}</span>
                    </a> -->
                    <span class="d-flex align-items-center gap-2">
                        <span class="material-symbols-outlined text-warning" style="font-size: 1.2rem !important;">location_on</span>
                        <span class="opacity-75">Beirut, Verdun Center third floor</span>
                    </span>
                    
                    <a :href="'mailto:'+store.profile.contact.email" class="d-flex align-items-center gap-2">
                        <span class="material-symbols-outlined text-warning" style="font-size: 1.2rem !important;">send</span>
                        <span class="opacity-75">{{store.profile.contact.email}}</span>
                    </a>
                    <span class="d-flex align-items-center gap-2">
                        <span class="material-symbols-outlined text-warning" style="font-size: 1.2rem !important;">call</span>
                        <span class="opacity-75">00 {{store.profile.contact.number}}</span>
                    </span>
                    
                </nav>
            </aside>
        </div>
    </div>
    <hr class="container my-4 text-light">
    <div class="row g-3 justify-content-between pb-5">
        <div class="col-12 col-md-6 col-lg-4">
            <h5 class="fc-100 sans text-center text-md-start  text-warning slab ls-1">Connect with us</h5>
        </div>
        <div class="col-12 col-md-6 col-lg-4">
            <nav class="d-flex gap-3 justify-content-center justify-content-md-end fc-100 fs-5 text-light">

                <a :href="store.profile.contact.instagram"><i class="bi bi-instagram"></i></a>
                <a :href="'mailto:'+store.profile.contact.email"><i class="bi bi-envelope"></i></a>
                <a :href="'https://wa.me/'+store.profile.contact.number"><i class="bi bi-whatsapp"></i></a>
                <a :href="store.profile.contact.facebook"><i class="bi bi-facebook"></i></a>
                <a :href="store.profile.contact.address"><i class="bi bi-geo-alt-fill"></i></a>
                <a :href="store.profile.contact.linkedin"><i class="bi bi-linkedin"></i></a>
            </nav>

        </div>
    </div>
    <!-- <hr class="container text-light"> -->
    <p class="text-center text-light opacity-75 pop fs-x-small m-0 ls-1">Developed by 
            <a class="no-decoration" href="http://wa.mashoun.com">libancode</a></p>
</section>
</template>
<script>

import { useStore } from "../stores/mainStore";
export default {
  setup() {
        const store = useStore();
        return { store };
  },
};
</script>