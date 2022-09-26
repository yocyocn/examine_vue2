<template>
    <div>
        <textarea v-model="text">
        </textarea>
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