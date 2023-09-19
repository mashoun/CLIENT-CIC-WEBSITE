<template>
    <header class="w-100 p-3 shadow d-flex justify-content-between align-items-center bg-light">
        <section class="d-flex align-items-center gap-2">
            <img src="/logo.jpeg" alt="logo" width="40" class="object-fit-cover rounded-circle shadow-sm">
            <h4 class="m-0 slab text-color">Cultural International Center</h4>
        </section>
        <nav class="d-none d-lg-flex slab align-items-center gap-3">
            <a href="/">Home</a>
            <a href="#programs">Programs</a>
            <a href="#admission">Admission</a>
            <a href="#fees">Fees</a>
            <a href="#workshops">Workshop</a>
            <a href="#private-tutoring">Private Tutoring</a>
            <a href="#contact" class="btn btn-sm btn-primary px-3">Contact</a>
        </nav>
        <i data-bs-toggle="dropdown" class="d-block d-lg-none bi bi-three-dots-vertical fs-3 text-secondary"></i>
        <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Home</a></li>
            <li><a class="dropdown-item" href="#">Programs</a></li>
            <li><a class="dropdown-item" href="#">Admission</a></li>
            <li><a class="dropdown-item" href="#">Fees</a></li>
            <li><a class="dropdown-item" href="#">Workshop</a></li>
            <li><a class="dropdown-item" href="#">Private Tutoring</a></li>
        </ul>

    </header>
</template>