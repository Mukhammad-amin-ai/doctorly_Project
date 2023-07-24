<template>
  <spinner />
  <!-- <div class="container"> -->
  <!-- <div class="scroll"> -->
  <!-- <header_Doctorly />
      <navbar_Doctorly /> -->
  <!-- </div> -->
  <router-view>
  </router-view>
  <!-- </div> -->
</template>
<script>
import header_Doctorly from './Components/header_Doctorly/header_Doctorly.vue';
import navbar_Doctorly from './Components/navbar_Doctorly/navbar_Doctorly.vue';
import section_Body from './Components/section_Body/section_Body.vue';
import edit_section from './Components/edit_section/edit_section.vue';
import spinner from './ui/spinner.vue';
export default {
  components: {
    header_Doctorly,
    navbar_Doctorly,
    section_Body,
    edit_section,
    spinner
  },
}
</script>
<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  text-decoration: none;
}

.container {
  width: 100%;
  height: auto;
  background-color: #f8f8fb;
  display: flex;
  flex-direction: column;

}

.scroll {
  width: 100%;
  height: auto;
  /* background-color: aqua; */
  position: fixed;
  z-index: 999;
}
</style>