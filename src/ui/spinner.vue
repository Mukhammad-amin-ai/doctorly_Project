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
<style scoped>

.loading_container {
    width: 100%;
    height: 100%;
    background-color: #fff;
    position: absolute;
    z-index: 9999;
    top: 0;
    left: 0;
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