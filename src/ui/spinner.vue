<template>
    <div class="loading_container" v-if="isLoading">
        <div class="center">
            <div class="text-center">
                <v-progress-circular indeterminate color="primary"></v-progress-circular>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
    computed: {
        ...mapState(['isLoading'])
    }
}
</script>
<style>
.loading_container2 {
    display: none;
}

.loading_container {
    width: 100%;
    height: 100vh;
    background-color: #fff;
    position: fixed;
    z-index: 999999;
}

.center {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-self: center;
}

.text-center {
    display: flex;
    justify-content: center;
    align-self: center;
}
</style>