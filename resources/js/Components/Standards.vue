<template>
     <div class="space-y-5 px-6">
        <div class="relative flex items-start" v-for="(standard, index) in standards" :key="index">
            <div class="flex h-6 items-center">
                <input
                    :id="index"
                    :checked="isSelected(standard)"
                    name="comments"
                    type="checkbox"
                    class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    @change="setStandard(standard, index)"
                />
            </div>
            <div class="ml-3 text-sm leading-6">
                <label :for="index" class="font-bold text-gray-900 cursor-pointer">{{ standard.code }}</label>
                <p class="text-gray-500">{{ standard.description }}</p>
            </div>
        </div>
     </div>
</template>

<script>
import { mapState } from 'vuex'
    export default {
        props: ['standards'],
        computed: {
            ...mapState({
                selectedStandards: state => state.standards.items
            }),
        },
        methods: {
            isSelected(standard) {
                let items = this.selectedStandards?.map(s => s.code)
                return items.includes(standard.code)
            },
            setStandard(standard, index) {
                let items = this.selectedStandards.map(s => s.code)
                if(items.includes(standard.code)) {
                    this.$store.dispatch('standards/removeItemFromStandards', index)
                } else {
                    this.$store.dispatch('standards/addItemToStandards', standard)
                }
            }
        }
    }
</script>
