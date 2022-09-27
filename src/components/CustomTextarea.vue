<template>
    <div>
        <textarea v-model="text">
        </textarea>
        {{text}}
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
                this.$store.dispatch("setTextAction", value);
            }
        }
    }
}

</script>

<style>

</style>