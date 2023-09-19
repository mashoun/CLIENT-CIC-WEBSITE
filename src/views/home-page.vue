<template>
    <hero></hero><hr class="container my-5">
    <majors id="programs"></majors><hr class="container my-5">
    <fees-section id="fees"></fees-section>
    <admission-section id="admission"></admission-section>
    <workshops-section id="workshops"></workshops-section><hr class="container my-5">
    <private-tutoring id="private-tutoring"></private-tutoring>
</template>

<script>
import hero from '../components/hero-section.vue'
import majors from '../components/majors-section.vue'
import feesSection from '../components/fees-section.vue'
import admissionSection from '../components/admission-section.vue'
import workshopsSection from '../components/workshops-section.vue'
import privateTutoring from '../components/private-tutoring.vue'

export default {
    components:{hero,majors,admissionSection,workshopsSection,feesSection,privateTutoring}
}
</script>
