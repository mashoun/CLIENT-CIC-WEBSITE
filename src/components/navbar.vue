<template>
    <header class="w-100 p-3 shadow d-flex justify-content-between align-items-center bg-grad-primary">
        <section class="d-flex align-items-center gap-3">
            <img src="/logo.jpeg" alt="logo" width="40" class="object-fit-cover rounded-circle shadow-sm skeleton">
            <h4 class="fs-5 m-0 slab text-warning">Cultural International Center</h4>
        </section>
        <nav class="d-none d-lg-flex slab align-items-center gap-3 text-light">
            <router-link to="/">Home</router-link>
            <span role="button" data-bs-toggle="dropdown">About</span>
            <ul class="dropdown-menu">
                <li class="dropdown-item"><router-link class="no-decoration" to="/mission">Mission & Objectives</router-link></li>
                <li class="dropdown-item"><router-link class="no-decoration" to="/team">Administrative Staff</router-link></li>
                <li class="dropdown-item"><router-link class="no-decoration" to="/partners">Our Partners</router-link></li>
            </ul>
            <router-link to="/programs">Programs</router-link>
            <router-link to="/admission">Admission</router-link>
            <router-link to="/fees">Fees</router-link>
            <router-link to="/workshops">Workshops</router-link>
            <router-link to="/private-tutoring">Private Tutoring</router-link>
            <router-link to="/events">Events</router-link>
            <!-- <a href="https://drive.google.com/drive/folders/1Ve_mNpDX-a6-lazGCCh6pJLIobNR7IV6?usp=sharing">Events</a> -->
            <button class="btn btn-sm btn-warning rounded-pill px-3" data-bs-toggle="dropdown">Contact</button>
            <ul class="dropdown-menu">
                <li>
                    <a :href="store.profile.contact.address" class="d-flex align-items-center gap-2 dropdown-item">
                        <span class="material-symbols-outlined text-warning" style="font-size: 1.2rem !important;">location_on</span>
                        <span class="opacity-75">Beirut, Lebanon Verdun Rome street Monti Marina Center Block C 3rd Floor Office 2</span>
                    </a>
                </li>
                    
                <li>
                    <a :href="'mailto:'+store.profile.contact.email" class="d-flex align-items-center gap-2 dropdown-item">
                        <span class="material-symbols-outlined text-warning" style="font-size: 1.2rem !important;">send</span>
                        <span class="opacity-75">{{store.profile.contact.email}}</span>
                    </a>
                </li>
                <li>
                    <a :href="'https://wa.me/'+store.profile.contact.number" class="d-flex align-items-center gap-2 dropdown-item">
                        <span class="material-symbols-outlined text-warning" style="font-size: 1.2rem !important;">call</span>
                        <span class="opacity-75">00 {{store.profile.contact.number}}</span>
                    </a>
                </li>
        </ul>
        </nav>
        <i data-bs-toggle="dropdown" class="d-block d-lg-none bi bi-three-dots-vertical fs-3 text-light"></i>
        <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="/">Home</a></li>
            <li><a class="dropdown-item" href="/mission">Mission & Objectives</a></li>
            <li><a class="dropdown-item" href="/team">Administrative Staff</a></li>
            <li><a class="dropdown-item" href="/partners">Our Partners</a></li>
            <li><a class="dropdown-item" href="/programs">Programs</a></li>
            <li><a class="dropdown-item" href="/admission">Admission</a></li>
            <li><a class="dropdown-item" href="/fees">Fees</a></li>
            <li><a class="dropdown-item" href="/workshops">Workshop</a></li>
            <li><a class="dropdown-item" href="/private-tutoring">Private Tutoring</a></li>
            <li><a class="dropdown-item" href="/events">Events</a></li>
            <!-- <li><a class="dropdown-item" href="https://drive.google.com/drive/folders/1Ve_mNpDX-a6-lazGCCh6pJLIobNR7IV6?usp=sharing">Events</a></li> -->
        </ul>

    </header>
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