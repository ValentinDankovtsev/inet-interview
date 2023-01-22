<template>
    <v-select v-model="variant" :items="options" clearable :label="label" @change="selectionOption(variant)"></v-select>
</template>
  
<script>

export default {
    name: 'App',

    props: {
        options: {
            type: Array,
            default() {
                return []
            }
        },
        label: {
            type: String,
            default() {
                return ''
            }
        }
    },
    components: {

    },

    data: () => ({
        variant: '',
    }),

    methods: {
        selectionOption(variant) {
            this.$emit('select', variant)
        }
    },



};
</script>
  
