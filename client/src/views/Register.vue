<template>
  <div class="container has-text-centered mt-6">
    <div class="columns is-centered mt-6">
      <div class="column is-5 has-text-left">
        <div class="box">
          <form class="register" ref="form" @submit.prevent="submitForm">
            <div class="field">
              <label class="label">Name</label>
              <div class="control">
                <input
                  class="input"
                  type="text"
                  placeholder="Text input"
                  v-model="name"
                />
                <div class="help is-danger" v-if="name.length === 0">
                  please enter valid value
                </div>
              </div>
            </div>

            <div class="field">
              <label class="label">Email</label>
              <div class="control">
                <input
                  class="input"
                  type="email"
                  placeholder="Email input"
                  v-model="email"
                />
                <div class="help is-danger" v-if="email.length === 0">
                  please enter valid email
                </div>
              </div>
            </div>

            <div class="field">
              <label class="label">Course</label>
              <div class="control">
                <div class="select">
                  <select v-model="course">
                    <option value="R">R</option>
                    <option value="C++">C++</option>
                    <option value="Java">Java</option>
                    <option value="python">Python</option>
                  </select>
                </div>
                <div class="help is-danger" v-if="course.length === 0">
                  please select a course
                </div>
              </div>
            </div>

            <div class="field mt-6">
              <div class="control">
                <div class="buttons is-centered">
                  <router-link
                    class="button is-link is-light"
                    :to="{
                      name: 'program',
                      params: { id: id, program: program },
                    }"
                    >Cancel</router-link
                  >
                  <button class="button is-link" type="submit">Submit</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="is-block notification is-success" v-if="popup">
      <span class="icon-text p-3 pt-5">
        <span class="subtitle">Completed</span>
        <span class="icon">
          <span
            class="iconify"
            data-icon="icon-park-outline:check-correct"
          ></span>
        </span>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name: "register",
  data() {
    return {
      popup: false,
      name: "",
      email: "",
      course: "Course",
    };
  },
  props: ["id", "program"],
  methods: {
    async submitForm() {
      // validation
      if (
        this.name.length === 0 ||
        this.email.length === 0 ||
        this.course.length === 0
      ) {
        console.log("please enter all fields");
        return;
      }

      const res = await fetch("http://localhost:5000/api/v1/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },

        // pass in the information from our form
        body: JSON.stringify({
          name: this.name,
          email: this.email,
          course: this.course,
        }),
      });

      this.name = "";
      this.email = "";
      this.course = "";
      this.popup = true;
      console.log(res);
    },
  },
};
</script>
