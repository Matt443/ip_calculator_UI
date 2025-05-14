<script setup lang="ts">
interface Props {
    activeFilters: number[];
}

const props = defineProps<Props>();
const state = useStateStore();
</script>

<template>
    <div class="active-filters-containers flex py-3 flex-wrap">
        <div
            v-for="filter in activeFilters"
            class="active-filter p-2 mr-2 mb-2 flex items-center bg-stone-700 rounded-md"
        >
            <span>{{ filter }}</span>
            <UIcon
                name="i-lucide-x"
                @click="state.removeFilter(filter)"
            ></UIcon>
        </div>
    </div>
</template>
