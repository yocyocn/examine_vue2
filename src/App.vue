<template>
    <div>
        <custom-textarea></custom-textarea>
        <custom-input-text></custom-input-text>
        {{getHoge}}
    </div>
</template>
  
<script>
import CustomTextarea from './components/CustomTextarea.vue'
import CustomInputText from './components/CustomInputText.vue'

export default {
    name: 'App',
    components: {
        'custom-textarea': CustomTextarea,
        'custom-input-text': CustomInputText
    },
    computed: {
        getHoge () {
            return this.$store.state.text
        },
        showHoge() {
            return this.$store.getters.text
        }
    }
}

</script>
  
<style>

</style>