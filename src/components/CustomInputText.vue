<template>
    <div>
        <input v-model="text">
        {{text}}
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            text: 'hoge'
        }
    }
}

</script>

<style>

</style>