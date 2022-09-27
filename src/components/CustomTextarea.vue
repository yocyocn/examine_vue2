<template>
    <div>
        <textarea v-model="text">
        </textarea>
    </div>
</template>

<script>
export default {
    computed: {
        text: {
            get() {
                return this.$store.getters.text
            },
            set(value) {
                this.$store.dispatch("setTextAsync", value);
            }
        }
    }
}

</script>

<style>

</style>