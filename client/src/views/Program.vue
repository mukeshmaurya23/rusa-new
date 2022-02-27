<template>
  <div class="Program">
    <!-- <div class="title">ID : {{ id }} </div> -->
    <!-- <div class="title">Program : {{ program }} </div> -->
    <!-- program -->
    <section class="hero is-halfwidth is-link">
      <div class="hero-body">
        <div class="container">
          <p class="title is-1">HTML</p>
          <p class="content has-text-weight-bold">Skeleton of a website</p>
        </div>
      </div>
    </section>
    <!-- info + Sylla -->
    <section class="section">
      <div class="columns is-multiline is-vcentered">
        <div class="column is-half">
          <div class="box">
            <div class="title">Overview</div>
            <div class="content">
              <div class="subtitle mt-3">Why Learn HTML?</div>
              HTML is the foundation of all web pages. Without HTML, you
              wouldn’t be able to organize text or add images or videos to your
              web pages. HTML is the beginning of everything you need to know to
              create engaging web pages!
            </div>
            <div class="content">
              <div class="subtitle mt-3">Take-Away Skills</div>
              You will learn all the common HTML tags used to structure HTML
              pages, the skeleton of all websites. You will also be able to
              create HTML tables to present tabular data efficiently.
            </div>
            <br />
            <div class="is-block">
              <div class="columns">
                <div class="column has-text-left">
                  <router-link class="button is-link" :to="{ name: 'home' }"
                    >Back</router-link
                  >
                </div>
                <div class="column has-text-right">
                  <router-link
                    class="button is-success"
                    :to="{
                      name: 'register',
                      params: { id: id, program: program },
                    }"
                    >Register</router-link
                  >
                  <!-- <button class="button is-success">Register</button> -->
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-half">
          <div class="box">
            <div class="title">Syllabus</div>
            <aside class="menu">
              <p class="menu-label">Introduction</p>
              <ul class="menu-list">
                <li><a>Heading</a></li>
                <li><a>List</a></li>
              </ul>
              <p class="menu-label">DOM</p>
              <ul class="menu-list">
                <li><a>ID</a></li>
                <li><a>Element</a></li>
                <li><a>Insert</a></li>
              </ul>
            </aside>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
// import { mapState } from "vuex";
export default {
  name: "program",
  props: ["id", "program"],
  computed: {
    // ...mapState(["data"])
  },
};
</script>
