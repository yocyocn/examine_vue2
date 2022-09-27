<template>
    <div>
        <custom-input-text></custom-input-text>
        <custom-textarea></custom-textarea>
        <div>
            label:{{getLabel}}
        </div>
        <div>
            text:{{getText}}
        </div>

    </div>
</template>
  
<script>
import CustomTextarea from './components/CustomTextarea.vue'
import CustomInputText from './components/CustomInputText.vue'
import { mapGetters } from 'vuex'

export default {
    name: 'App',
    components: {
        'custom-textarea': CustomTextarea,
        'custom-input-text': CustomInputText
    },
    computed: {
        ...mapGetters({
            getLabel: 'label',
            getText: 'text'
        })
    }
}

</script>
  
<style>

</style>