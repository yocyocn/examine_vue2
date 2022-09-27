<template>
    <div>
        <input v-model="label">
    </div>
</template>

<script>
export default {
    computed: {
        label: {
            get() {
                return this.$store.getters.label
            },
            set(value) {
                this.$store.dispatch("setLabelAsync", value);
            }
        }
    }
}

</script>

<style>

</style>