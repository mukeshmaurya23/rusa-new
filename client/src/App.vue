<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    </div>
    <router-view />
  </div>
</template>
<style>
/*@import url('https://fonts.googleapis.com/css2?family=Lora:wght@400;500;700&display=swap');
*/
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Lora:wght@400;500;700&display=swap");
.iconify {
  font-size: 3rem;
}
.title {
  /*font-family: "Lato";*/
}
.content {
  /*font-family: "Lora";*/
}
#app {
  font-family: "Lato";
  /*font-family: "Lora";*/
  /*font-family: "Avenir", Helvetica, Arial, sans-serif;*/
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.dropdown-item:hover {
  background-color: #54a0ff;
  cursor: pointer;
  color: white;
  font-weight: bold;
}

.about .program {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.about .program .content {
  width: 30%;
}
/* Card */
.Card .box .title {
  color: #f5f6fa;
}
.Card .box {
  /*border-radius: 5px;*/
  background-color: #353b48;
  color: #f5f6fa;
}
/* Program  */
.Program .subtitle {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}
.Program .content {
  /*line-height: 1.2rem;*/
}

/* Register */

.field.is-grouped {
  display: flex;
  padding: 50px;
  justify-content: flex-start;
}

.messageBox {
}
</style>
