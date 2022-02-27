<template>
  <div class="home">
    <!-- <Navbar /> -->
    <section class="hero is-medium is-link mb-6">
      <div class="hero-body">
        <p class="title">
          Medium hero
          <!-- <button class="button" @click="fetchData">Fetch</button> -->
        </p>
        <p class="subtitle">Medium subtitle</p>
      </div>
    </section>
    <Card />
    <hr />
    <footer class="footer">
      <div class="is-block">
        Lorem ipsum dolor, sit amet consectetur, adipisicing elit. Maxime ut
        iste fuga optio, perferendis dolores. Veritatis facere eum repellendus
        aliquid sapiente maiores officia autem expedita incidunt. Aliquid
        quisquam odit hic fugiat magnam.
      </div>
    </footer>
  </div>
</template>
<script>
// @ is an alias to /src
// import Navbar from "@/components/Navbar.vue";
import Card from "@/components/Card.vue";
import { mapActions } from "vuex";
export default {
  name: "home",
  components: {
    // Navbar,
    Card,
  },
  methods: {
    ...mapActions(["fetchData"]),
  },
};
</script>
