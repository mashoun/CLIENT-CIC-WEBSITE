<template>
    <majors id="programs"></majors>
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
