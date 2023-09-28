<template>
    <header class="w-100 p-3 shadow d-flex justify-content-between align-items-center bg-grad-primary">
        <section class="d-flex align-items-center gap-3">
            <img src="/logo.jpeg" alt="logo" width="40" class="object-fit-cover rounded-circle shadow-sm">
            <h4 class="fs-5 m-0 slab text-warning">Cultural International Center</h4>
        </section>
        <nav class="d-none d-lg-flex slab align-items-center gap-3 text-light">
            <!-- <a class="navlink" href="/">Home</a>
            <a class="navlink" href="/programs">Programs</a>
            <a class="navlink" href="/admission">Admission</a>
            <a class="navlink" href="/fees">Fees</a>
            <a class="navlink" href="/workshops">Workshop</a>
            <a class="navlink" href="/private-tutoring">Private Tutoring</a>
            <a href="#contact"  class="btn btn-warning rounded-pill">Contact</a> -->
            <router-link to="/">Home</router-link>
            <router-link to="/programs">Programs</router-link>
            <router-link to="/admission">Admission</router-link>
            <router-link to="/fees">Fees</router-link>
            <router-link to="/workshops">Workshops</router-link>
            <router-link to="/private-tutoring">Private Tutoring</router-link>
            <router-link to="/contact" class="btn btn-sm btn-warning rounded-pill px-3">Contact</router-link>
        </nav>
        <i data-bs-toggle="dropdown" class="d-block d-lg-none bi bi-three-dots-vertical fs-3 text-secondary"></i>
        <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Home</a></li>
            <li><a class="dropdown-item" href="/programs">Programs</a></li>
            <li><a class="dropdown-item" href="/admission">Admission</a></li>
            <li><a class="dropdown-item" href="/fees">Fees</a></li>
            <li><a class="dropdown-item" href="/workshops">Workshop</a></li>
            <li><a class="dropdown-item" href="/private-tutoring">Private Tutoring</a></li>
        </ul>

    </header>
</template>