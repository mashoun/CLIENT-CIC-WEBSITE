<template>
  <section class="container" style="overflow-x: hidden !important">
    <div class="row g-5">
      <div class="col-12">
        <aside>
          <h2 class="slab fs-2 text-color">Tuition Fees and Plans</h2>
          <p class="fs-small m-0 pop text-secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
            harum libero? Ea adipisci voluptate animi?
          </p>
        </aside>
      </div>
      <div class="col-12">
        <div class="table-responsive">
          <table class="table table-hover">
            <thead>
              <tr class="table-active">
                <th scope="col">Degree</th>
                <th scope="col">Credits</th>
                <th scope="col">Application Fees</th>
                <th scope="col">Down Payment</th>
                <th scope="col">Payment / 18 Month</th>
                <th scope="col">Total Fees</th>
              </tr>
            </thead>
            <tbody class="table-group-divider">
              <tr v-for="node in store.profile.fees" :key="node" >
                <td scope="row">{{node.degree}}</td>
                <td>{{node.credits}}</td>
                <td>{{node.applicationFees}}</td>
                <td>{{node.downPayment}}</td>
                <td>{{node.p18Month}}</td>
                <td>{{node.totalFees}}</td>
              </tr>
              
            </tbody>
          </table>
        </div>
      </div>
      <div class="col-12 d-flex justify-content-center"><a href="" class="btn btn-sm btn-outline-secondary rounded-pill px-5">Learn more</a></div>

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
};
</script>