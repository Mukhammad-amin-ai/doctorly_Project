<template>
    <div class="container">
        <div class="scroll">
            <header_Doctorly />
            <navbar_Doctorly />
        </div>
        <section_Body/>
    </div>
</template>
<script>
import header_Doctorly from './header_Doctorly/header_Doctorly.vue';
import navbar_Doctorly from './navbar_Doctorly/navbar_Doctorly.vue';
import section_Body from './section_Body/section_Body.vue';
import edit_section from './edit_section/edit_section.vue';
export default {
    components: {
        header_Doctorly,
        navbar_Doctorly,
        section_Body,
        edit_section,
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
}

.scroll {
    width: 100%;
    height: auto;
    position: fixed;
    z-index: 999;
}
</style>